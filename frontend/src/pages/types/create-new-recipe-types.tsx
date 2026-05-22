export type ReciperFormValues = {
  recipeId: string | null;
  recipeName: string;
  recipeDescription: string;
  baseServings: number;
  prepTime: number;
  cookTime: number;
  originalCountry: string;
  variantCountry: string;
  ingredients: IngredientRow[];
  cookingSteps: CookingStep[];
  tags: string[];
  recipeLink: string;
};

export type IngredientRow = {
  id: string;
  amount: IngredientAmount; // user-facing original input
  ingredientName: string;
  variationIngredientName?: string;
  note?: string;
};

export type MeasurementSystem =
  | "us"
  | "metric"
  | "nordic"
  | "imperial"
  | "count";

export type IngredientAmount = {
  amountText: string; //example "1/2 cup"
  quantity?: number | null; //example 0.5
  unit?: string | null; //example "cup"
  system: MeasurementSystem | null; //example "us"
};

export type CookingStep = {
  id: string;
  stepNo: number;
  instruction: string;
  imageUrl?: string | null; //already existing image url
  imageFile?: File | null; //newly selected image file
};
