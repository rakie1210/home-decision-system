import "dotenv/config";
import express, {
  type Request,
  type Response,
  type NextFunction,
} from "express";
import jwt from "jsonwebtoken";
import { prisma } from "./prisma";
import { env } from "process";
import cors from "cors";
import multer from "multer";
import { uploadRecipeImageToS3, createRecipeSlug } from "./helper";

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

const JWT_SECRET = env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET environment variable is required");
}

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

  jwt.verify(token, JWT_SECRET!, (err: any, user: any) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

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

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET!);
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
