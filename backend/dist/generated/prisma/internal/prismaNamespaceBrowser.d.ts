import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client/runtime/client").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client/runtime/client").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client/runtime/client").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly Recipe: "Recipe";
    readonly RecipeInstruction: "RecipeInstruction";
    readonly Tag: "Tag";
    readonly RecipeTag: "RecipeTag";
    readonly Ingredient: "Ingredient";
    readonly IngredientSubstitution: "IngredientSubstitution";
    readonly RecipeIngredient: "RecipeIngredient";
    readonly FavoriteRecipe: "FavoriteRecipe";
    readonly Country: "Country";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly password: "password";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const RecipeScalarFieldEnum: {
    readonly id: "id";
    readonly parentRecipeId: "parentRecipeId";
    readonly recipeSlug: "recipeSlug";
    readonly imageKey: "imageKey";
    readonly userId: "userId";
    readonly countryId: "countryId";
    readonly title: "title";
    readonly description: "description";
    readonly baseServings: "baseServings";
    readonly cookTimeMinutes: "cookTimeMinutes";
    readonly prepTimeMinutes: "prepTimeMinutes";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type RecipeScalarFieldEnum = (typeof RecipeScalarFieldEnum)[keyof typeof RecipeScalarFieldEnum];
export declare const RecipeInstructionScalarFieldEnum: {
    readonly id: "id";
    readonly recipeId: "recipeId";
    readonly stepNo: "stepNo";
    readonly instructionDescription: "instructionDescription";
    readonly stepImageKey: "stepImageKey";
    readonly additionalNotes: "additionalNotes";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type RecipeInstructionScalarFieldEnum = (typeof RecipeInstructionScalarFieldEnum)[keyof typeof RecipeInstructionScalarFieldEnum];
export declare const TagScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly slug: "slug";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum];
export declare const RecipeTagScalarFieldEnum: {
    readonly id: "id";
    readonly recipeId: "recipeId";
    readonly tagId: "tagId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type RecipeTagScalarFieldEnum = (typeof RecipeTagScalarFieldEnum)[keyof typeof RecipeTagScalarFieldEnum];
export declare const IngredientScalarFieldEnum: {
    readonly id: "id";
    readonly ingredientId: "ingredientId";
    readonly name: "name";
    readonly caloriesPer100g: "caloriesPer100g";
    readonly proteinPer100g: "proteinPer100g";
    readonly fatPer100g: "fatPer100g";
    readonly carbohydratesPer100g: "carbohydratesPer100g";
    readonly nativeCountryId: "nativeCountryId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type IngredientScalarFieldEnum = (typeof IngredientScalarFieldEnum)[keyof typeof IngredientScalarFieldEnum];
export declare const IngredientSubstitutionScalarFieldEnum: {
    readonly id: "id";
    readonly fromIngredientId: "fromIngredientId";
    readonly toIngredientId: "toIngredientId";
    readonly countryId: "countryId";
    readonly ratio: "ratio";
    readonly usageNotes: "usageNotes";
    readonly qualityScore: "qualityScore";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type IngredientSubstitutionScalarFieldEnum = (typeof IngredientSubstitutionScalarFieldEnum)[keyof typeof IngredientSubstitutionScalarFieldEnum];
export declare const RecipeIngredientScalarFieldEnum: {
    readonly id: "id";
    readonly recipeId: "recipeId";
    readonly ingredientId: "ingredientId";
    readonly replacesRecipeIngredientId: "replacesRecipeIngredientId";
    readonly quantity: "quantity";
    readonly unit: "unit";
    readonly note: "note";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type RecipeIngredientScalarFieldEnum = (typeof RecipeIngredientScalarFieldEnum)[keyof typeof RecipeIngredientScalarFieldEnum];
export declare const FavoriteRecipeScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly recipeId: "recipeId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type FavoriteRecipeScalarFieldEnum = (typeof FavoriteRecipeScalarFieldEnum)[keyof typeof FavoriteRecipeScalarFieldEnum];
export declare const CountryScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly code: "code";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CountryScalarFieldEnum = (typeof CountryScalarFieldEnum)[keyof typeof CountryScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map