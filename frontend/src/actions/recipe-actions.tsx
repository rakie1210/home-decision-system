import { getToken } from "./login";
import type { ReciperFormValues } from "@/pages/types/create-new-recipe-types";

export async function saveNewRecipe(values: ReciperFormValues) {
  const token = getToken();

  if (!token) {
    throw new Error("You must be logged in to save a recipe.");
  }

  const formData = new FormData();
  const stepImages: File[] = [];
  const filledIngredients = values.ingredients.filter((ingredient) => {
    return Boolean(
      ingredient.amount.amountText.trim() ||
        ingredient.ingredientName.trim() ||
        ingredient.variationIngredientName?.trim() ||
        ingredient.note?.trim(),
    );
  });
  const filledCookingSteps = values.cookingSteps.filter((step) => {
    return Boolean(step.instruction.trim() || step.imageFile || step.imageUrl);
  });

  const cookingSteps = filledCookingSteps.map((step, index) => {
    const imageFileIndex =
      step.imageFile instanceof File ? stepImages.push(step.imageFile) - 1 : null;

    return {
      stepNo: index + 1,
      instruction: step.instruction,
      imageFileIndex,
    };
  });

  const payload = {
    recipeName: values.recipeName,
    recipeDescription: values.recipeDescription,
    baseServings: values.baseServings,
    prepTime: values.prepTime,
    cookTime: values.cookTime,
    recipeCountry: values.recipeCountry,
    originalCountry: values.originalCountry,
    ingredients: filledIngredients,
    cookingSteps,
    tags: values.tags,
  };

  formData.append("payload", JSON.stringify(payload));

  if (values.recipeImageFile instanceof File) {
    formData.append("recipeImage", values.recipeImageFile);
  }

  stepImages.forEach((file) => {
    formData.append("stepImages", file);
  });

  const response = await fetch("/api/saveNewRecipe", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Recipe was not saved.");
  }

  return data.recipe;
}
