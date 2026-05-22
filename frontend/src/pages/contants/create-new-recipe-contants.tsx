import type {
  CookingStep,
  IngredientRow,
} from "../types/create-new-recipe-types";

export const ingredientVariationRows = [
  {
    amount: "1/2",
    unit: "cup",
    original: "Cane vinegar",
    variation: "Apple cider vinegar",
    note: "Softer acidity with pantry ingredients common in Sweden.",
  },
  {
    amount: "1/4 cup",
    original: "Filipino soy sauce",
    variation: "Light soy sauce + 1 tsp mushroom fond",
    note: "Keeps the salty depth while making the variant easy to shop for.",
  },
  {
    amount: "3 pieces",
    original: "Bay leaves",
    variation: "Bay leaves + dill stems",
    note: "Adds a small Nordic aromatic layer without changing the soul.",
  },
  {
    amount: "1 tbsp",
    original: "Brown sugar",
    variation: "Lingonberry jam",
    note: "Balances vinegar and gives the Swedish version a signature finish.",
  },
];

export const ingredientRow: IngredientRow[] = [
  {
    id: "c479b87d-b8d9-4d33-9745-49de9041db77",
    amount: {
      amountText: "1/2 cup",
      quantity: 0.5,
      unit: "cup",
      system: "us",
    },
    ingredientName: "Cane vinegar",
    variationIngredientName: "Apple cider vinegar",
    note: "Softer acidity with pantry ingredients common in Sweden.",
  },
  {
    id: "c479b87d-b8d9-4d33-9745-49de9041db78",
    amount: {
      amountText: "1/4 cup",
      quantity: 0.25,
      unit: "cup",
      system: "us",
    },
    ingredientName: "Filipino soy sauce",
    variationIngredientName: "Light soy sauce + 1 tsp mushroom fond",
    note: "Keeps the salty depth while making the variant easy to shop for.",
  },
  {
    id: "7070b26f-de0d-4fb9-ae5f-102f518661f4",
    amount: {
      amountText: "3 pieces",
      system: "count",
    },
    ingredientName: "Bay leaves",
    variationIngredientName: "Bay leaves + dill stems",
    note: "Adds a small Nordic aromatic layer without changing the soul.",
  },
  {
    id: "038c81be-5914-46e1-bb71-e778719b283b",
    amount: {
      amountText: "1 tbsp",
      quantity: 1,
      unit: "tbsp",
      system: "us",
    },
    ingredientName: "Brown sugar",
    variationIngredientName: "Lingonberry jam",
    note: "Balances vinegar and gives the Swedish version a signature finish.",
  },
];

export const cookingSteps: CookingStep[] = [
  {
    id: "step-1",
    stepNo: 1,
    instruction: "Brown chicken pieces in a pan until lightly golden.",
    imageUrl: null,
    imageFile: null,
  },
  {
    id: "step-2",
    stepNo: 2,
    instruction: "Add soy sauce, vinegar, garlic, and bay leaves.",
    imageUrl: "/uploads/adobo-simmering.jpg",
    imageFile: null,
  },
];

export const cookingUnits = {
  volume: [
    "teaspoon",
    "tablespoon",
    "fluid ounce",
    "cup",
    "pint",
    "quart",
    "gallon",
    "milliliter",
    "liter",
    "deciliter",
    "centiliter",
  ],

  weight: ["milligram", "gram", "kilogram", "ounce", "pound"],

  temperature: ["celsius", "fahrenheit", "gas mark"],

  length: ["millimeter", "centimeter", "meter", "inch"],

  count: [
    "piece",
    "slice",
    "clove",
    "leaf",
    "sprig",
    "stalk",
    "bunch",
    "head",
    "bulb",
    "can",
    "jar",
    "packet",
    "package",
    "bag",
    "box",
    "bottle",
    "stick",
    "cube",
    "fillet",
    "whole",
  ],

  informal: [
    "pinch",
    "dash",
    "splash",
    "drizzle",
    "handful",
    "knob",
    "dollop",
    "scoop",
    "to taste",
    "as needed",
  ],

  preparation: [
    "chopped",
    "diced",
    "minced",
    "sliced",
    "grated",
    "shredded",
    "crushed",
    "peeled",
    "zested",
    "juiced",
    "melted",
    "softened",
    "room temperature",
    "divided",
    "packed",
    "heaping",
    "level",
  ],
};
