import "dotenv/config";
import crypto from "crypto";
import express, {
  type Request,
  type Response,
  type NextFunction,
} from "express";
import jwt from "jsonwebtoken";
import { prisma } from "./prisma.js";
import { UnitType } from "./generated/prisma/client.js";
import { env } from "process";
import cors from "cors";
import multer from "multer";
import { uploadRecipeImageToS3, createRecipeSlug } from "./helper.js";

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

const upload = multer({
  storage: multer.memoryStorage(),
});

type SaveNewRecipePayload = {
  recipeName: string;
  recipeDescription: string;
  baseServings: number;
  prepTime: number;
  cookTime: number;
  recipeCountry: string;
  originalCountry?: string | null;
  parentRecipeId?: string | null;
  ingredients: Array<{
    amount: {
      amountText: string;
      quantity?: number | null;
      unit?: string | null;
    };
    ingredientName: string;
    variationIngredientName?: string | null;
    note?: string | null;
  }>;
  cookingSteps: Array<{
    stepNo: number;
    instruction: string;
    imageFileIndex?: number | null;
  }>;
  tags: string[];
};

const JWT_SECRET = env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET environment variable is required");
}

const jwtSecret = JWT_SECRET;

const app = express();
app.use(cors());
app.use(express.json());
app.use((req, _res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Middleware to verify JWT
const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, jwtSecret, (err: any, user: any) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

function normalizeSlug(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function parseSaveNewRecipePayload(payload: unknown): SaveNewRecipePayload {
  if (typeof payload !== "string") {
    throw new Error("Recipe payload is required");
  }

  const parsed = JSON.parse(payload) as Partial<SaveNewRecipePayload>;

  if (!parsed.recipeName?.trim()) {
    throw new Error("Recipe name is required");
  }

  if (!parsed.recipeDescription?.trim()) {
    throw new Error("Recipe description is required");
  }

  if (!parsed.recipeCountry?.trim()) {
    throw new Error("Recipe country is required");
  }

  if (!Array.isArray(parsed.ingredients) || parsed.ingredients.length === 0) {
    throw new Error("At least one ingredient is required");
  }

  if (!Array.isArray(parsed.cookingSteps) || parsed.cookingSteps.length === 0) {
    throw new Error("At least one cooking step is required");
  }

  return {
    recipeName: parsed.recipeName,
    recipeDescription: parsed.recipeDescription,
    baseServings: Number(parsed.baseServings ?? 2),
    prepTime: Number(parsed.prepTime ?? 0),
    cookTime: Number(parsed.cookTime ?? 0),
    recipeCountry: parsed.recipeCountry,
    originalCountry: parsed.originalCountry ?? null,
    parentRecipeId: parsed.parentRecipeId ?? null,
    ingredients: parsed.ingredients,
    cookingSteps: parsed.cookingSteps,
    tags: parsed.tags ?? [],
  };
}

function getUploadedFiles(req: Request, fieldName: string) {
  const files = req.files as
    | Record<string, Express.Multer.File[]>
    | Express.Multer.File[]
    | undefined;

  if (!files || Array.isArray(files)) {
    return [];
  }

  return files[fieldName] ?? [];
}

function mapUnitToPrismaUnit(unit?: string | null): UnitType {
  const normalizedUnit = unit?.trim().toLowerCase();

  if (!normalizedUnit) {
    return UnitType.PIECE;
  }

  const unitMap: Record<string, UnitType> = {
    g: UnitType.G,
    gram: UnitType.G,
    grams: UnitType.G,
    kg: UnitType.KG,
    kilogram: UnitType.KG,
    kilograms: UnitType.KG,
    ml: UnitType.ML,
    milliliter: UnitType.ML,
    milliliters: UnitType.ML,
    l: UnitType.L,
    liter: UnitType.L,
    liters: UnitType.L,
    piece: UnitType.PIECE,
    pieces: UnitType.PIECE,
    cup: UnitType.CUP,
    cups: UnitType.CUP,
    tbsp: UnitType.TBSP,
    tablespoon: UnitType.TBSP,
    tablespoons: UnitType.TBSP,
    tsp: UnitType.TSP,
    teaspoon: UnitType.TSP,
    teaspoons: UnitType.TSP,
    dl: UnitType.DL,
    deciliter: UnitType.DL,
    deciliters: UnitType.DL,
  };

  return unitMap[normalizedUnit] ?? UnitType.PIECE;
}

function getIngredientQuantity(
  ingredient: SaveNewRecipePayload["ingredients"][number],
) {
  if (typeof ingredient.amount.quantity === "number") {
    return ingredient.amount.quantity;
  }

  const parsedAmount = Number.parseFloat(ingredient.amount.amountText);
  return Number.isFinite(parsedAmount) ? parsedAmount : 1;
}

async function findCountryByName(name: string) {
  return prisma.country.findFirst({
    where: {
      name: {
        equals: name,
        mode: "insensitive",
      },
    },
  });
}

// Register a new user
app.post("/api/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await prisma.user.create({
      data: { name, email, password },
    });
    res.json({
      message: "User created successfully",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

// Login a user
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || user.password !== password) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const payload = { id: user.id, email: user.email };

    const token = jwt.sign(payload, jwtSecret);
    res.json({ token });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

// Logout a user
app.post("/api/logout", authenticateToken, async (req, res) => {
  res.clearCookie("token");
  res.json({ message: "User logged out successfully" });
});

// Health check endpoint
app.get("/", (_req, res) => {
  res.json({ message: "Home Decision System API is running!" });
});

/**
 * Get all countries
 * returns: Array of countries (id, name, code)
 */
app.get("/api/getCountries", async (_req, res) => {
  try {
    const countries = await prisma.country.findMany({
      select: {
        id: true,
        name: true,
        code: true,
      },
      orderBy: {
        name: "asc",
      },
    });
    return res.json(countries);
  } catch (error: any) {
    return res.status(500).json({ error: "Failed to fetch countries" });
  }
});

/**
 * Save a complete recipe draft from the create recipe form.
 *
 * Expects multipart/form-data:
 * - payload: JSON string with recipe fields, ingredients, steps, and tags
 * - recipeImage: optional main image file
 * - stepImages: optional image files. Each step references its file by imageFileIndex.
 */
app.post(
  "/api/saveNewRecipe",
  authenticateToken,
  upload.fields([
    { name: "recipeImage", maxCount: 1 },
    { name: "stepImages", maxCount: 20 },
  ]),
  async (req, res) => {
    try {
      const payload = parseSaveNewRecipePayload(req.body.payload);
      const country = await findCountryByName(payload.recipeCountry);

      if (!country) {
        return res.status(400).json({
          error: `Country "${payload.recipeCountry}" does not exist.`,
        });
      }

      const recipeId = crypto.randomUUID();
      const recipeImage = getUploadedFiles(req, "recipeImage")[0];
      const stepImages = getUploadedFiles(req, "stepImages");
      const recipeImageKey = recipeImage
        ? await uploadRecipeImageToS3({ recipeId, file: recipeImage })
        : null;

      const stepImageKeys = await Promise.all(
        payload.cookingSteps.map(async (step) => {
          if (
            step.imageFileIndex === null ||
            step.imageFileIndex === undefined
          ) {
            return null;
          }

          const file = stepImages[step.imageFileIndex];
          return file ? uploadRecipeImageToS3({ recipeId, file }) : null;
        }),
      );

      const recipe = await prisma.$transaction(async (tx) => {
        const createdRecipe = await tx.recipe.create({
          data: {
            id: recipeId,
            recipeSlug: createRecipeSlug(payload.recipeName),
            userId: req.user.id,
            countryId: country.id,
            parentRecipeId: payload.parentRecipeId ?? null,
            title: payload.recipeName,
            description: payload.recipeDescription,
            baseServings: payload.baseServings,
            prepTimeMinutes: payload.prepTime,
            cookTimeMinutes: payload.cookTime,
            imageKey: recipeImageKey,
          },
        });

        await tx.recipeInstruction.createMany({
          data: payload.cookingSteps.map((step, index) => ({
            recipeId: createdRecipe.id,
            stepNo: step.stepNo || index + 1,
            instructionDescription: step.instruction,
            stepImageKey: stepImageKeys[index] ?? null,
          })),
        });

        for (const tag of payload.tags) {
          const trimmedTag = tag.trim();

          if (!trimmedTag) {
            continue;
          }

          const tagSlug = normalizeSlug(trimmedTag);
          const savedTag = await tx.tag.upsert({
            where: { slug: tagSlug },
            update: { name: trimmedTag },
            create: {
              name: trimmedTag,
              slug: tagSlug,
            },
          });

          await tx.recipeTag.create({
            data: {
              recipeId: createdRecipe.id,
              tagId: savedTag.id,
            },
          });
        }

        for (const ingredient of payload.ingredients) {
          const ingredientName = ingredient.ingredientName.trim();

          if (!ingredientName) {
            continue;
          }

          const savedIngredient = await tx.ingredient.upsert({
            where: { name: ingredientName },
            update: {},
            create: {
              ingredientId: normalizeSlug(ingredientName),
              name: ingredientName,
            },
          });

          const recipeIngredient = await tx.recipeIngredient.create({
            data: {
              recipeId: createdRecipe.id,
              ingredientId: savedIngredient.id,
              quantity: getIngredientQuantity(ingredient),
              unit: mapUnitToPrismaUnit(ingredient.amount.unit),
              note: ingredient.note ?? null,
            },
          });

          const variationIngredientName =
            ingredient.variationIngredientName?.trim();

          if (variationIngredientName) {
            const savedVariationIngredient = await tx.ingredient.upsert({
              where: { name: variationIngredientName },
              update: {},
              create: {
                ingredientId: normalizeSlug(variationIngredientName),
                name: variationIngredientName,
              },
            });

            await tx.recipeIngredient.create({
              data: {
                recipeId: createdRecipe.id,
                ingredientId: savedVariationIngredient.id,
                replacesRecipeIngredientId: recipeIngredient.id,
                quantity: getIngredientQuantity(ingredient),
                unit: mapUnitToPrismaUnit(ingredient.amount.unit),
                note: ingredient.note ?? null,
              },
            });
          }
        }

        return tx.recipe.findUniqueOrThrow({
          where: { id: createdRecipe.id },
          include: {
            country: true,
            ingredients: {
              include: {
                ingredient: true,
                replacedByIngredients: {
                  include: {
                    ingredient: true,
                  },
                },
              },
            },
            instructions: {
              orderBy: {
                stepNo: "asc",
              },
            },
            tags: {
              include: {
                tag: true,
              },
            },
          },
        });
      });

      return res.status(201).json({ recipe });
    } catch (error: any) {
      console.error("saveNewRecipe =>", error);
      return res.status(400).json({
        error: error.message ?? "Recipe was not saved successfully.",
      });
    }
  },
);

app.listen(3001, () => {
  console.log("Server running on port 3001.");
});

// save the imageKey from uploadRecipeImageToS3
// in helper.ts to Prisma DB
export async function saveImageKeyToPrisma() {
  app.post(
    "/api/recipes/:id/image",
    authenticateToken,
    upload.single("image"),
    async (req, res) => {
      try {
        // Check if the image file exists
        if (!req.file) {
          return res.status(400).json({ error: "Image file is required" });
        }

        // Check if the recipeId is valid and a string
        if (typeof req.params.id !== "string") {
          return res.status(400).json({ error: "Invalid recipe ID" });
        }

        // Check the owner of the recipe
        const recipe = await prisma.recipe.findFirst({
          where: {
            id: req.params.id,
            userId: req.user.id,
          },
        });

        if (!recipe) {
          return res.status(404).json({ error: "Recipe not found" });
        }

        const imageKey = await uploadRecipeImageToS3({
          recipeId: req.params.id,
          file: req.file,
        });

        // Update the prisma.recipe.imageKey
        const updateRecipe = await prisma.recipe.update({
          where: {
            id: req.params.id,
          },
          data: {
            imageKey,
          },
        });
        res.json(updateRecipe);
      } catch (error: any) {
        console.error("saveImageKeyToPrisma=> ", error);
        return res
          .status(500)
          .json({ error: "Image Key is not saved successfully." });
      }
    },
  );
}
