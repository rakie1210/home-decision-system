import express from "express";
import { PrismaClient } from "@prisma/client/extension";
const prisma = new PrismaClient();
const app = express();
app.use(express.json());
//create a recipe
app.post("/api/recipes", async (req, res) => {
    const { title, description, baseServings, ingredients, instructions } = req.body;
    const recipe = await prisma.recipe.create({
        data: {
            title,
            description,
            baseServings,
            instructions,
            ingredients,
        },
    });
    res.json(recipe);
});
app.get("/api/recipes", async (_req, res) => {
    const recipes = await prisma.recipe.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });
    res.json(recipes);
});
app.get("/", (_req, res) => {
    res.send("backend is running");
});
app.listen(5000, () => {
    console.log(" Server running on port 5000.");
});
//# sourceMappingURL=server.js.map