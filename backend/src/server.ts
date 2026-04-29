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

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

const JWT_SECRET = env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET environment variable is required");
}

const app = express();
app.use(cors());
app.use(express.json());

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

// Create a new recipe
app.post("/api/recipes", authenticateToken, async (req, res) => {
  try {
    const { title, description, baseServings, ingredients, instructions } =
      req.body;
    const recipe = await prisma.recipe.create({
      data: {
        title,
        description,
        baseServings,
        instructions,
        ingredients,
        userId: req.user.id,
      },
    });
    res.json(recipe);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

// Health check endpoint
app.get("/", (_req, res) => {
  res.json({ message: "Home Decision System API is running!" });
});

app.listen(3001, () => {
  console.log("Server running on port 3001.");
});
