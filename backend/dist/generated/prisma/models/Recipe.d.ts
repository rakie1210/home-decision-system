import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Recipe
 *
 */
export type RecipeModel = runtime.Types.Result.DefaultSelection<Prisma.$RecipePayload>;
export type AggregateRecipe = {
    _count: RecipeCountAggregateOutputType | null;
    _avg: RecipeAvgAggregateOutputType | null;
    _sum: RecipeSumAggregateOutputType | null;
    _min: RecipeMinAggregateOutputType | null;
    _max: RecipeMaxAggregateOutputType | null;
};
export type RecipeAvgAggregateOutputType = {
    baseServings: number | null;
    cookTimeMinutes: number | null;
    prepTimeMinutes: number | null;
};
export type RecipeSumAggregateOutputType = {
    baseServings: number | null;
    cookTimeMinutes: number | null;
    prepTimeMinutes: number | null;
};
export type RecipeMinAggregateOutputType = {
    id: string | null;
    parentRecipeId: string | null;
    recipeSlug: string | null;
    imageKey: string | null;
    userId: string | null;
    countryId: string | null;
    title: string | null;
    description: string | null;
    baseServings: number | null;
    cookTimeMinutes: number | null;
    prepTimeMinutes: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RecipeMaxAggregateOutputType = {
    id: string | null;
    parentRecipeId: string | null;
    recipeSlug: string | null;
    imageKey: string | null;
    userId: string | null;
    countryId: string | null;
    title: string | null;
    description: string | null;
    baseServings: number | null;
    cookTimeMinutes: number | null;
    prepTimeMinutes: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RecipeCountAggregateOutputType = {
    id: number;
    parentRecipeId: number;
    recipeSlug: number;
    imageKey: number;
    userId: number;
    countryId: number;
    title: number;
    description: number;
    baseServings: number;
    cookTimeMinutes: number;
    prepTimeMinutes: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type RecipeAvgAggregateInputType = {
    baseServings?: true;
    cookTimeMinutes?: true;
    prepTimeMinutes?: true;
};
export type RecipeSumAggregateInputType = {
    baseServings?: true;
    cookTimeMinutes?: true;
    prepTimeMinutes?: true;
};
export type RecipeMinAggregateInputType = {
    id?: true;
    parentRecipeId?: true;
    recipeSlug?: true;
    imageKey?: true;
    userId?: true;
    countryId?: true;
    title?: true;
    description?: true;
    baseServings?: true;
    cookTimeMinutes?: true;
    prepTimeMinutes?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RecipeMaxAggregateInputType = {
    id?: true;
    parentRecipeId?: true;
    recipeSlug?: true;
    imageKey?: true;
    userId?: true;
    countryId?: true;
    title?: true;
    description?: true;
    baseServings?: true;
    cookTimeMinutes?: true;
    prepTimeMinutes?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RecipeCountAggregateInputType = {
    id?: true;
    parentRecipeId?: true;
    recipeSlug?: true;
    imageKey?: true;
    userId?: true;
    countryId?: true;
    title?: true;
    description?: true;
    baseServings?: true;
    cookTimeMinutes?: true;
    prepTimeMinutes?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type RecipeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Recipe to aggregate.
     */
    where?: Prisma.RecipeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Recipes to fetch.
     */
    orderBy?: Prisma.RecipeOrderByWithRelationInput | Prisma.RecipeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.RecipeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Recipes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Recipes
    **/
    _count?: true | RecipeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: RecipeAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: RecipeSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: RecipeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: RecipeMaxAggregateInputType;
};
export type GetRecipeAggregateType<T extends RecipeAggregateArgs> = {
    [P in keyof T & keyof AggregateRecipe]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRecipe[P]> : Prisma.GetScalarType<T[P], AggregateRecipe[P]>;
};
export type RecipeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RecipeWhereInput;
    orderBy?: Prisma.RecipeOrderByWithAggregationInput | Prisma.RecipeOrderByWithAggregationInput[];
    by: Prisma.RecipeScalarFieldEnum[] | Prisma.RecipeScalarFieldEnum;
    having?: Prisma.RecipeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RecipeCountAggregateInputType | true;
    _avg?: RecipeAvgAggregateInputType;
    _sum?: RecipeSumAggregateInputType;
    _min?: RecipeMinAggregateInputType;
    _max?: RecipeMaxAggregateInputType;
};
export type RecipeGroupByOutputType = {
    id: string;
    parentRecipeId: string | null;
    recipeSlug: string;
    imageKey: string | null;
    userId: string;
    countryId: string;
    title: string;
    description: string;
    baseServings: number;
    cookTimeMinutes: number | null;
    prepTimeMinutes: number | null;
    createdAt: Date;
    updatedAt: Date;
    _count: RecipeCountAggregateOutputType | null;
    _avg: RecipeAvgAggregateOutputType | null;
    _sum: RecipeSumAggregateOutputType | null;
    _min: RecipeMinAggregateOutputType | null;
    _max: RecipeMaxAggregateOutputType | null;
};
export type GetRecipeGroupByPayload<T extends RecipeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RecipeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RecipeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RecipeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RecipeGroupByOutputType[P]>;
}>>;
export type RecipeWhereInput = {
    AND?: Prisma.RecipeWhereInput | Prisma.RecipeWhereInput[];
    OR?: Prisma.RecipeWhereInput[];
    NOT?: Prisma.RecipeWhereInput | Prisma.RecipeWhereInput[];
    id?: Prisma.StringFilter<"Recipe"> | string;
    parentRecipeId?: Prisma.StringNullableFilter<"Recipe"> | string | null;
    recipeSlug?: Prisma.StringFilter<"Recipe"> | string;
    imageKey?: Prisma.StringNullableFilter<"Recipe"> | string | null;
    userId?: Prisma.StringFilter<"Recipe"> | string;
    countryId?: Prisma.StringFilter<"Recipe"> | string;
    title?: Prisma.StringFilter<"Recipe"> | string;
    description?: Prisma.StringFilter<"Recipe"> | string;
    baseServings?: Prisma.IntFilter<"Recipe"> | number;
    cookTimeMinutes?: Prisma.IntNullableFilter<"Recipe"> | number | null;
    prepTimeMinutes?: Prisma.IntNullableFilter<"Recipe"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"Recipe"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Recipe"> | Date | string;
    parentRecipe?: Prisma.XOR<Prisma.RecipeNullableScalarRelationFilter, Prisma.RecipeWhereInput> | null;
    variants?: Prisma.RecipeListRelationFilter;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    country?: Prisma.XOR<Prisma.CountryScalarRelationFilter, Prisma.CountryWhereInput>;
    ingredients?: Prisma.RecipeIngredientListRelationFilter;
    instructions?: Prisma.RecipeInstructionListRelationFilter;
    favoritedBy?: Prisma.FavoriteRecipeListRelationFilter;
    tags?: Prisma.RecipeTagListRelationFilter;
};
export type RecipeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    parentRecipeId?: Prisma.SortOrderInput | Prisma.SortOrder;
    recipeSlug?: Prisma.SortOrder;
    imageKey?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    countryId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    baseServings?: Prisma.SortOrder;
    cookTimeMinutes?: Prisma.SortOrderInput | Prisma.SortOrder;
    prepTimeMinutes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    parentRecipe?: Prisma.RecipeOrderByWithRelationInput;
    variants?: Prisma.RecipeOrderByRelationAggregateInput;
    user?: Prisma.UserOrderByWithRelationInput;
    country?: Prisma.CountryOrderByWithRelationInput;
    ingredients?: Prisma.RecipeIngredientOrderByRelationAggregateInput;
    instructions?: Prisma.RecipeInstructionOrderByRelationAggregateInput;
    favoritedBy?: Prisma.FavoriteRecipeOrderByRelationAggregateInput;
    tags?: Prisma.RecipeTagOrderByRelationAggregateInput;
};
export type RecipeWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    recipeSlug?: string;
    AND?: Prisma.RecipeWhereInput | Prisma.RecipeWhereInput[];
    OR?: Prisma.RecipeWhereInput[];
    NOT?: Prisma.RecipeWhereInput | Prisma.RecipeWhereInput[];
    parentRecipeId?: Prisma.StringNullableFilter<"Recipe"> | string | null;
    imageKey?: Prisma.StringNullableFilter<"Recipe"> | string | null;
    userId?: Prisma.StringFilter<"Recipe"> | string;
    countryId?: Prisma.StringFilter<"Recipe"> | string;
    title?: Prisma.StringFilter<"Recipe"> | string;
    description?: Prisma.StringFilter<"Recipe"> | string;
    baseServings?: Prisma.IntFilter<"Recipe"> | number;
    cookTimeMinutes?: Prisma.IntNullableFilter<"Recipe"> | number | null;
    prepTimeMinutes?: Prisma.IntNullableFilter<"Recipe"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"Recipe"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Recipe"> | Date | string;
    parentRecipe?: Prisma.XOR<Prisma.RecipeNullableScalarRelationFilter, Prisma.RecipeWhereInput> | null;
    variants?: Prisma.RecipeListRelationFilter;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    country?: Prisma.XOR<Prisma.CountryScalarRelationFilter, Prisma.CountryWhereInput>;
    ingredients?: Prisma.RecipeIngredientListRelationFilter;
    instructions?: Prisma.RecipeInstructionListRelationFilter;
    favoritedBy?: Prisma.FavoriteRecipeListRelationFilter;
    tags?: Prisma.RecipeTagListRelationFilter;
}, "id" | "recipeSlug">;
export type RecipeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    parentRecipeId?: Prisma.SortOrderInput | Prisma.SortOrder;
    recipeSlug?: Prisma.SortOrder;
    imageKey?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    countryId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    baseServings?: Prisma.SortOrder;
    cookTimeMinutes?: Prisma.SortOrderInput | Prisma.SortOrder;
    prepTimeMinutes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.RecipeCountOrderByAggregateInput;
    _avg?: Prisma.RecipeAvgOrderByAggregateInput;
    _max?: Prisma.RecipeMaxOrderByAggregateInput;
    _min?: Prisma.RecipeMinOrderByAggregateInput;
    _sum?: Prisma.RecipeSumOrderByAggregateInput;
};
export type RecipeScalarWhereWithAggregatesInput = {
    AND?: Prisma.RecipeScalarWhereWithAggregatesInput | Prisma.RecipeScalarWhereWithAggregatesInput[];
    OR?: Prisma.RecipeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RecipeScalarWhereWithAggregatesInput | Prisma.RecipeScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Recipe"> | string;
    parentRecipeId?: Prisma.StringNullableWithAggregatesFilter<"Recipe"> | string | null;
    recipeSlug?: Prisma.StringWithAggregatesFilter<"Recipe"> | string;
    imageKey?: Prisma.StringNullableWithAggregatesFilter<"Recipe"> | string | null;
    userId?: Prisma.StringWithAggregatesFilter<"Recipe"> | string;
    countryId?: Prisma.StringWithAggregatesFilter<"Recipe"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Recipe"> | string;
    description?: Prisma.StringWithAggregatesFilter<"Recipe"> | string;
    baseServings?: Prisma.IntWithAggregatesFilter<"Recipe"> | number;
    cookTimeMinutes?: Prisma.IntNullableWithAggregatesFilter<"Recipe"> | number | null;
    prepTimeMinutes?: Prisma.IntNullableWithAggregatesFilter<"Recipe"> | number | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Recipe"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Recipe"> | Date | string;
};
export type RecipeCreateInput = {
    id?: string;
    recipeSlug: string;
    imageKey?: string | null;
    title: string;
    description: string;
    baseServings?: number;
    cookTimeMinutes?: number | null;
    prepTimeMinutes?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    parentRecipe?: Prisma.RecipeCreateNestedOneWithoutVariantsInput;
    variants?: Prisma.RecipeCreateNestedManyWithoutParentRecipeInput;
    user: Prisma.UserCreateNestedOneWithoutRecipesInput;
    country: Prisma.CountryCreateNestedOneWithoutRecipesInput;
    ingredients?: Prisma.RecipeIngredientCreateNestedManyWithoutRecipeInput;
    instructions?: Prisma.RecipeInstructionCreateNestedManyWithoutRecipeInput;
    favoritedBy?: Prisma.FavoriteRecipeCreateNestedManyWithoutRecipeInput;
    tags?: Prisma.RecipeTagCreateNestedManyWithoutRecipeInput;
};
export type RecipeUncheckedCreateInput = {
    id?: string;
    parentRecipeId?: string | null;
    recipeSlug: string;
    imageKey?: string | null;
    userId: string;
    countryId: string;
    title: string;
    description: string;
    baseServings?: number;
    cookTimeMinutes?: number | null;
    prepTimeMinutes?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    variants?: Prisma.RecipeUncheckedCreateNestedManyWithoutParentRecipeInput;
    ingredients?: Prisma.RecipeIngredientUncheckedCreateNestedManyWithoutRecipeInput;
    instructions?: Prisma.RecipeInstructionUncheckedCreateNestedManyWithoutRecipeInput;
    favoritedBy?: Prisma.FavoriteRecipeUncheckedCreateNestedManyWithoutRecipeInput;
    tags?: Prisma.RecipeTagUncheckedCreateNestedManyWithoutRecipeInput;
};
export type RecipeUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recipeSlug?: Prisma.StringFieldUpdateOperationsInput | string;
    imageKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    baseServings?: Prisma.IntFieldUpdateOperationsInput | number;
    cookTimeMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    prepTimeMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    parentRecipe?: Prisma.RecipeUpdateOneWithoutVariantsNestedInput;
    variants?: Prisma.RecipeUpdateManyWithoutParentRecipeNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutRecipesNestedInput;
    country?: Prisma.CountryUpdateOneRequiredWithoutRecipesNestedInput;
    ingredients?: Prisma.RecipeIngredientUpdateManyWithoutRecipeNestedInput;
    instructions?: Prisma.RecipeInstructionUpdateManyWithoutRecipeNestedInput;
    favoritedBy?: Prisma.FavoriteRecipeUpdateManyWithoutRecipeNestedInput;
    tags?: Prisma.RecipeTagUpdateManyWithoutRecipeNestedInput;
};
export type RecipeUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    parentRecipeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recipeSlug?: Prisma.StringFieldUpdateOperationsInput | string;
    imageKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    countryId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    baseServings?: Prisma.IntFieldUpdateOperationsInput | number;
    cookTimeMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    prepTimeMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    variants?: Prisma.RecipeUncheckedUpdateManyWithoutParentRecipeNestedInput;
    ingredients?: Prisma.RecipeIngredientUncheckedUpdateManyWithoutRecipeNestedInput;
    instructions?: Prisma.RecipeInstructionUncheckedUpdateManyWithoutRecipeNestedInput;
    favoritedBy?: Prisma.FavoriteRecipeUncheckedUpdateManyWithoutRecipeNestedInput;
    tags?: Prisma.RecipeTagUncheckedUpdateManyWithoutRecipeNestedInput;
};
export type RecipeCreateManyInput = {
    id?: string;
    parentRecipeId?: string | null;
    recipeSlug: string;
    imageKey?: string | null;
    userId: string;
    countryId: string;
    title: string;
    description: string;
    baseServings?: number;
    cookTimeMinutes?: number | null;
    prepTimeMinutes?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RecipeUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recipeSlug?: Prisma.StringFieldUpdateOperationsInput | string;
    imageKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    baseServings?: Prisma.IntFieldUpdateOperationsInput | number;
    cookTimeMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    prepTimeMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RecipeUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    parentRecipeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recipeSlug?: Prisma.StringFieldUpdateOperationsInput | string;
    imageKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    countryId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    baseServings?: Prisma.IntFieldUpdateOperationsInput | number;
    cookTimeMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    prepTimeMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RecipeListRelationFilter = {
    every?: Prisma.RecipeWhereInput;
    some?: Prisma.RecipeWhereInput;
    none?: Prisma.RecipeWhereInput;
};
export type RecipeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RecipeNullableScalarRelationFilter = {
    is?: Prisma.RecipeWhereInput | null;
    isNot?: Prisma.RecipeWhereInput | null;
};
export type RecipeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    parentRecipeId?: Prisma.SortOrder;
    recipeSlug?: Prisma.SortOrder;
    imageKey?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    countryId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    baseServings?: Prisma.SortOrder;
    cookTimeMinutes?: Prisma.SortOrder;
    prepTimeMinutes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RecipeAvgOrderByAggregateInput = {
    baseServings?: Prisma.SortOrder;
    cookTimeMinutes?: Prisma.SortOrder;
    prepTimeMinutes?: Prisma.SortOrder;
};
export type RecipeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    parentRecipeId?: Prisma.SortOrder;
    recipeSlug?: Prisma.SortOrder;
    imageKey?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    countryId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    baseServings?: Prisma.SortOrder;
    cookTimeMinutes?: Prisma.SortOrder;
    prepTimeMinutes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RecipeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    parentRecipeId?: Prisma.SortOrder;
    recipeSlug?: Prisma.SortOrder;
    imageKey?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    countryId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    baseServings?: Prisma.SortOrder;
    cookTimeMinutes?: Prisma.SortOrder;
    prepTimeMinutes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RecipeSumOrderByAggregateInput = {
    baseServings?: Prisma.SortOrder;
    cookTimeMinutes?: Prisma.SortOrder;
    prepTimeMinutes?: Prisma.SortOrder;
};
export type RecipeScalarRelationFilter = {
    is?: Prisma.RecipeWhereInput;
    isNot?: Prisma.RecipeWhereInput;
};
export type RecipeCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.RecipeCreateWithoutUserInput, Prisma.RecipeUncheckedCreateWithoutUserInput> | Prisma.RecipeCreateWithoutUserInput[] | Prisma.RecipeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RecipeCreateOrConnectWithoutUserInput | Prisma.RecipeCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.RecipeCreateManyUserInputEnvelope;
    connect?: Prisma.RecipeWhereUniqueInput | Prisma.RecipeWhereUniqueInput[];
};
export type RecipeUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.RecipeCreateWithoutUserInput, Prisma.RecipeUncheckedCreateWithoutUserInput> | Prisma.RecipeCreateWithoutUserInput[] | Prisma.RecipeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RecipeCreateOrConnectWithoutUserInput | Prisma.RecipeCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.RecipeCreateManyUserInputEnvelope;
    connect?: Prisma.RecipeWhereUniqueInput | Prisma.RecipeWhereUniqueInput[];
};
export type RecipeUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.RecipeCreateWithoutUserInput, Prisma.RecipeUncheckedCreateWithoutUserInput> | Prisma.RecipeCreateWithoutUserInput[] | Prisma.RecipeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RecipeCreateOrConnectWithoutUserInput | Prisma.RecipeCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.RecipeUpsertWithWhereUniqueWithoutUserInput | Prisma.RecipeUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.RecipeCreateManyUserInputEnvelope;
    set?: Prisma.RecipeWhereUniqueInput | Prisma.RecipeWhereUniqueInput[];
    disconnect?: Prisma.RecipeWhereUniqueInput | Prisma.RecipeWhereUniqueInput[];
    delete?: Prisma.RecipeWhereUniqueInput | Prisma.RecipeWhereUniqueInput[];
    connect?: Prisma.RecipeWhereUniqueInput | Prisma.RecipeWhereUniqueInput[];
    update?: Prisma.RecipeUpdateWithWhereUniqueWithoutUserInput | Prisma.RecipeUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.RecipeUpdateManyWithWhereWithoutUserInput | Prisma.RecipeUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.RecipeScalarWhereInput | Prisma.RecipeScalarWhereInput[];
};
export type RecipeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.RecipeCreateWithoutUserInput, Prisma.RecipeUncheckedCreateWithoutUserInput> | Prisma.RecipeCreateWithoutUserInput[] | Prisma.RecipeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RecipeCreateOrConnectWithoutUserInput | Prisma.RecipeCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.RecipeUpsertWithWhereUniqueWithoutUserInput | Prisma.RecipeUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.RecipeCreateManyUserInputEnvelope;
    set?: Prisma.RecipeWhereUniqueInput | Prisma.RecipeWhereUniqueInput[];
    disconnect?: Prisma.RecipeWhereUniqueInput | Prisma.RecipeWhereUniqueInput[];
    delete?: Prisma.RecipeWhereUniqueInput | Prisma.RecipeWhereUniqueInput[];
    connect?: Prisma.RecipeWhereUniqueInput | Prisma.RecipeWhereUniqueInput[];
    update?: Prisma.RecipeUpdateWithWhereUniqueWithoutUserInput | Prisma.RecipeUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.RecipeUpdateManyWithWhereWithoutUserInput | Prisma.RecipeUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.RecipeScalarWhereInput | Prisma.RecipeScalarWhereInput[];
};
export type RecipeCreateNestedOneWithoutVariantsInput = {
    create?: Prisma.XOR<Prisma.RecipeCreateWithoutVariantsInput, Prisma.RecipeUncheckedCreateWithoutVariantsInput>;
    connectOrCreate?: Prisma.RecipeCreateOrConnectWithoutVariantsInput;
    connect?: Prisma.RecipeWhereUniqueInput;
};
export type RecipeCreateNestedManyWithoutParentRecipeInput = {
    create?: Prisma.XOR<Prisma.RecipeCreateWithoutParentRecipeInput, Prisma.RecipeUncheckedCreateWithoutParentRecipeInput> | Prisma.RecipeCreateWithoutParentRecipeInput[] | Prisma.RecipeUncheckedCreateWithoutParentRecipeInput[];
    connectOrCreate?: Prisma.RecipeCreateOrConnectWithoutParentRecipeInput | Prisma.RecipeCreateOrConnectWithoutParentRecipeInput[];
    createMany?: Prisma.RecipeCreateManyParentRecipeInputEnvelope;
    connect?: Prisma.RecipeWhereUniqueInput | Prisma.RecipeWhereUniqueInput[];
};
export type RecipeUncheckedCreateNestedManyWithoutParentRecipeInput = {
    create?: Prisma.XOR<Prisma.RecipeCreateWithoutParentRecipeInput, Prisma.RecipeUncheckedCreateWithoutParentRecipeInput> | Prisma.RecipeCreateWithoutParentRecipeInput[] | Prisma.RecipeUncheckedCreateWithoutParentRecipeInput[];
    connectOrCreate?: Prisma.RecipeCreateOrConnectWithoutParentRecipeInput | Prisma.RecipeCreateOrConnectWithoutParentRecipeInput[];
    createMany?: Prisma.RecipeCreateManyParentRecipeInputEnvelope;
    connect?: Prisma.RecipeWhereUniqueInput | Prisma.RecipeWhereUniqueInput[];
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type RecipeUpdateOneWithoutVariantsNestedInput = {
    create?: Prisma.XOR<Prisma.RecipeCreateWithoutVariantsInput, Prisma.RecipeUncheckedCreateWithoutVariantsInput>;
    connectOrCreate?: Prisma.RecipeCreateOrConnectWithoutVariantsInput;
    upsert?: Prisma.RecipeUpsertWithoutVariantsInput;
    disconnect?: Prisma.RecipeWhereInput | boolean;
    delete?: Prisma.RecipeWhereInput | boolean;
    connect?: Prisma.RecipeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RecipeUpdateToOneWithWhereWithoutVariantsInput, Prisma.RecipeUpdateWithoutVariantsInput>, Prisma.RecipeUncheckedUpdateWithoutVariantsInput>;
};
export type RecipeUpdateManyWithoutParentRecipeNestedInput = {
    create?: Prisma.XOR<Prisma.RecipeCreateWithoutParentRecipeInput, Prisma.RecipeUncheckedCreateWithoutParentRecipeInput> | Prisma.RecipeCreateWithoutParentRecipeInput[] | Prisma.RecipeUncheckedCreateWithoutParentRecipeInput[];
    connectOrCreate?: Prisma.RecipeCreateOrConnectWithoutParentRecipeInput | Prisma.RecipeCreateOrConnectWithoutParentRecipeInput[];
    upsert?: Prisma.RecipeUpsertWithWhereUniqueWithoutParentRecipeInput | Prisma.RecipeUpsertWithWhereUniqueWithoutParentRecipeInput[];
    createMany?: Prisma.RecipeCreateManyParentRecipeInputEnvelope;
    set?: Prisma.RecipeWhereUniqueInput | Prisma.RecipeWhereUniqueInput[];
    disconnect?: Prisma.RecipeWhereUniqueInput | Prisma.RecipeWhereUniqueInput[];
    delete?: Prisma.RecipeWhereUniqueInput | Prisma.RecipeWhereUniqueInput[];
    connect?: Prisma.RecipeWhereUniqueInput | Prisma.RecipeWhereUniqueInput[];
    update?: Prisma.RecipeUpdateWithWhereUniqueWithoutParentRecipeInput | Prisma.RecipeUpdateWithWhereUniqueWithoutParentRecipeInput[];
    updateMany?: Prisma.RecipeUpdateManyWithWhereWithoutParentRecipeInput | Prisma.RecipeUpdateManyWithWhereWithoutParentRecipeInput[];
    deleteMany?: Prisma.RecipeScalarWhereInput | Prisma.RecipeScalarWhereInput[];
};
export type RecipeUncheckedUpdateManyWithoutParentRecipeNestedInput = {
    create?: Prisma.XOR<Prisma.RecipeCreateWithoutParentRecipeInput, Prisma.RecipeUncheckedCreateWithoutParentRecipeInput> | Prisma.RecipeCreateWithoutParentRecipeInput[] | Prisma.RecipeUncheckedCreateWithoutParentRecipeInput[];
    connectOrCreate?: Prisma.RecipeCreateOrConnectWithoutParentRecipeInput | Prisma.RecipeCreateOrConnectWithoutParentRecipeInput[];
    upsert?: Prisma.RecipeUpsertWithWhereUniqueWithoutParentRecipeInput | Prisma.RecipeUpsertWithWhereUniqueWithoutParentRecipeInput[];
    createMany?: Prisma.RecipeCreateManyParentRecipeInputEnvelope;
    set?: Prisma.RecipeWhereUniqueInput | Prisma.RecipeWhereUniqueInput[];
    disconnect?: Prisma.RecipeWhereUniqueInput | Prisma.RecipeWhereUniqueInput[];
    delete?: Prisma.RecipeWhereUniqueInput | Prisma.RecipeWhereUniqueInput[];
    connect?: Prisma.RecipeWhereUniqueInput | Prisma.RecipeWhereUniqueInput[];
    update?: Prisma.RecipeUpdateWithWhereUniqueWithoutParentRecipeInput | Prisma.RecipeUpdateWithWhereUniqueWithoutParentRecipeInput[];
    updateMany?: Prisma.RecipeUpdateManyWithWhereWithoutParentRecipeInput | Prisma.RecipeUpdateManyWithWhereWithoutParentRecipeInput[];
    deleteMany?: Prisma.RecipeScalarWhereInput | Prisma.RecipeScalarWhereInput[];
};
export type RecipeCreateNestedOneWithoutInstructionsInput = {
    create?: Prisma.XOR<Prisma.RecipeCreateWithoutInstructionsInput, Prisma.RecipeUncheckedCreateWithoutInstructionsInput>;
    connectOrCreate?: Prisma.RecipeCreateOrConnectWithoutInstructionsInput;
    connect?: Prisma.RecipeWhereUniqueInput;
};
export type RecipeUpdateOneRequiredWithoutInstructionsNestedInput = {
    create?: Prisma.XOR<Prisma.RecipeCreateWithoutInstructionsInput, Prisma.RecipeUncheckedCreateWithoutInstructionsInput>;
    connectOrCreate?: Prisma.RecipeCreateOrConnectWithoutInstructionsInput;
    upsert?: Prisma.RecipeUpsertWithoutInstructionsInput;
    connect?: Prisma.RecipeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RecipeUpdateToOneWithWhereWithoutInstructionsInput, Prisma.RecipeUpdateWithoutInstructionsInput>, Prisma.RecipeUncheckedUpdateWithoutInstructionsInput>;
};
export type RecipeCreateNestedOneWithoutTagsInput = {
    create?: Prisma.XOR<Prisma.RecipeCreateWithoutTagsInput, Prisma.RecipeUncheckedCreateWithoutTagsInput>;
    connectOrCreate?: Prisma.RecipeCreateOrConnectWithoutTagsInput;
    connect?: Prisma.RecipeWhereUniqueInput;
};
export type RecipeUpdateOneRequiredWithoutTagsNestedInput = {
    create?: Prisma.XOR<Prisma.RecipeCreateWithoutTagsInput, Prisma.RecipeUncheckedCreateWithoutTagsInput>;
    connectOrCreate?: Prisma.RecipeCreateOrConnectWithoutTagsInput;
    upsert?: Prisma.RecipeUpsertWithoutTagsInput;
    connect?: Prisma.RecipeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RecipeUpdateToOneWithWhereWithoutTagsInput, Prisma.RecipeUpdateWithoutTagsInput>, Prisma.RecipeUncheckedUpdateWithoutTagsInput>;
};
export type RecipeCreateNestedOneWithoutIngredientsInput = {
    create?: Prisma.XOR<Prisma.RecipeCreateWithoutIngredientsInput, Prisma.RecipeUncheckedCreateWithoutIngredientsInput>;
    connectOrCreate?: Prisma.RecipeCreateOrConnectWithoutIngredientsInput;
    connect?: Prisma.RecipeWhereUniqueInput;
};
export type RecipeUpdateOneRequiredWithoutIngredientsNestedInput = {
    create?: Prisma.XOR<Prisma.RecipeCreateWithoutIngredientsInput, Prisma.RecipeUncheckedCreateWithoutIngredientsInput>;
    connectOrCreate?: Prisma.RecipeCreateOrConnectWithoutIngredientsInput;
    upsert?: Prisma.RecipeUpsertWithoutIngredientsInput;
    connect?: Prisma.RecipeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RecipeUpdateToOneWithWhereWithoutIngredientsInput, Prisma.RecipeUpdateWithoutIngredientsInput>, Prisma.RecipeUncheckedUpdateWithoutIngredientsInput>;
};
export type RecipeCreateNestedOneWithoutFavoritedByInput = {
    create?: Prisma.XOR<Prisma.RecipeCreateWithoutFavoritedByInput, Prisma.RecipeUncheckedCreateWithoutFavoritedByInput>;
    connectOrCreate?: Prisma.RecipeCreateOrConnectWithoutFavoritedByInput;
    connect?: Prisma.RecipeWhereUniqueInput;
};
export type RecipeUpdateOneRequiredWithoutFavoritedByNestedInput = {
    create?: Prisma.XOR<Prisma.RecipeCreateWithoutFavoritedByInput, Prisma.RecipeUncheckedCreateWithoutFavoritedByInput>;
    connectOrCreate?: Prisma.RecipeCreateOrConnectWithoutFavoritedByInput;
    upsert?: Prisma.RecipeUpsertWithoutFavoritedByInput;
    connect?: Prisma.RecipeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RecipeUpdateToOneWithWhereWithoutFavoritedByInput, Prisma.RecipeUpdateWithoutFavoritedByInput>, Prisma.RecipeUncheckedUpdateWithoutFavoritedByInput>;
};
export type RecipeCreateNestedManyWithoutCountryInput = {
    create?: Prisma.XOR<Prisma.RecipeCreateWithoutCountryInput, Prisma.RecipeUncheckedCreateWithoutCountryInput> | Prisma.RecipeCreateWithoutCountryInput[] | Prisma.RecipeUncheckedCreateWithoutCountryInput[];
    connectOrCreate?: Prisma.RecipeCreateOrConnectWithoutCountryInput | Prisma.RecipeCreateOrConnectWithoutCountryInput[];
    createMany?: Prisma.RecipeCreateManyCountryInputEnvelope;
    connect?: Prisma.RecipeWhereUniqueInput | Prisma.RecipeWhereUniqueInput[];
};
export type RecipeUncheckedCreateNestedManyWithoutCountryInput = {
    create?: Prisma.XOR<Prisma.RecipeCreateWithoutCountryInput, Prisma.RecipeUncheckedCreateWithoutCountryInput> | Prisma.RecipeCreateWithoutCountryInput[] | Prisma.RecipeUncheckedCreateWithoutCountryInput[];
    connectOrCreate?: Prisma.RecipeCreateOrConnectWithoutCountryInput | Prisma.RecipeCreateOrConnectWithoutCountryInput[];
    createMany?: Prisma.RecipeCreateManyCountryInputEnvelope;
    connect?: Prisma.RecipeWhereUniqueInput | Prisma.RecipeWhereUniqueInput[];
};
export type RecipeUpdateManyWithoutCountryNestedInput = {
    create?: Prisma.XOR<Prisma.RecipeCreateWithoutCountryInput, Prisma.RecipeUncheckedCreateWithoutCountryInput> | Prisma.RecipeCreateWithoutCountryInput[] | Prisma.RecipeUncheckedCreateWithoutCountryInput[];
    connectOrCreate?: Prisma.RecipeCreateOrConnectWithoutCountryInput | Prisma.RecipeCreateOrConnectWithoutCountryInput[];
    upsert?: Prisma.RecipeUpsertWithWhereUniqueWithoutCountryInput | Prisma.RecipeUpsertWithWhereUniqueWithoutCountryInput[];
    createMany?: Prisma.RecipeCreateManyCountryInputEnvelope;
    set?: Prisma.RecipeWhereUniqueInput | Prisma.RecipeWhereUniqueInput[];
    disconnect?: Prisma.RecipeWhereUniqueInput | Prisma.RecipeWhereUniqueInput[];
    delete?: Prisma.RecipeWhereUniqueInput | Prisma.RecipeWhereUniqueInput[];
    connect?: Prisma.RecipeWhereUniqueInput | Prisma.RecipeWhereUniqueInput[];
    update?: Prisma.RecipeUpdateWithWhereUniqueWithoutCountryInput | Prisma.RecipeUpdateWithWhereUniqueWithoutCountryInput[];
    updateMany?: Prisma.RecipeUpdateManyWithWhereWithoutCountryInput | Prisma.RecipeUpdateManyWithWhereWithoutCountryInput[];
    deleteMany?: Prisma.RecipeScalarWhereInput | Prisma.RecipeScalarWhereInput[];
};
export type RecipeUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: Prisma.XOR<Prisma.RecipeCreateWithoutCountryInput, Prisma.RecipeUncheckedCreateWithoutCountryInput> | Prisma.RecipeCreateWithoutCountryInput[] | Prisma.RecipeUncheckedCreateWithoutCountryInput[];
    connectOrCreate?: Prisma.RecipeCreateOrConnectWithoutCountryInput | Prisma.RecipeCreateOrConnectWithoutCountryInput[];
    upsert?: Prisma.RecipeUpsertWithWhereUniqueWithoutCountryInput | Prisma.RecipeUpsertWithWhereUniqueWithoutCountryInput[];
    createMany?: Prisma.RecipeCreateManyCountryInputEnvelope;
    set?: Prisma.RecipeWhereUniqueInput | Prisma.RecipeWhereUniqueInput[];
    disconnect?: Prisma.RecipeWhereUniqueInput | Prisma.RecipeWhereUniqueInput[];
    delete?: Prisma.RecipeWhereUniqueInput | Prisma.RecipeWhereUniqueInput[];
    connect?: Prisma.RecipeWhereUniqueInput | Prisma.RecipeWhereUniqueInput[];
    update?: Prisma.RecipeUpdateWithWhereUniqueWithoutCountryInput | Prisma.RecipeUpdateWithWhereUniqueWithoutCountryInput[];
    updateMany?: Prisma.RecipeUpdateManyWithWhereWithoutCountryInput | Prisma.RecipeUpdateManyWithWhereWithoutCountryInput[];
    deleteMany?: Prisma.RecipeScalarWhereInput | Prisma.RecipeScalarWhereInput[];
};
export type RecipeCreateWithoutUserInput = {
    id?: string;
    recipeSlug: string;
    imageKey?: string | null;
    title: string;
    description: string;
    baseServings?: number;
    cookTimeMinutes?: number | null;
    prepTimeMinutes?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    parentRecipe?: Prisma.RecipeCreateNestedOneWithoutVariantsInput;
    variants?: Prisma.RecipeCreateNestedManyWithoutParentRecipeInput;
    country: Prisma.CountryCreateNestedOneWithoutRecipesInput;
    ingredients?: Prisma.RecipeIngredientCreateNestedManyWithoutRecipeInput;
    instructions?: Prisma.RecipeInstructionCreateNestedManyWithoutRecipeInput;
    favoritedBy?: Prisma.FavoriteRecipeCreateNestedManyWithoutRecipeInput;
    tags?: Prisma.RecipeTagCreateNestedManyWithoutRecipeInput;
};
export type RecipeUncheckedCreateWithoutUserInput = {
    id?: string;
    parentRecipeId?: string | null;
    recipeSlug: string;
    imageKey?: string | null;
    countryId: string;
    title: string;
    description: string;
    baseServings?: number;
    cookTimeMinutes?: number | null;
    prepTimeMinutes?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    variants?: Prisma.RecipeUncheckedCreateNestedManyWithoutParentRecipeInput;
    ingredients?: Prisma.RecipeIngredientUncheckedCreateNestedManyWithoutRecipeInput;
    instructions?: Prisma.RecipeInstructionUncheckedCreateNestedManyWithoutRecipeInput;
    favoritedBy?: Prisma.FavoriteRecipeUncheckedCreateNestedManyWithoutRecipeInput;
    tags?: Prisma.RecipeTagUncheckedCreateNestedManyWithoutRecipeInput;
};
export type RecipeCreateOrConnectWithoutUserInput = {
    where: Prisma.RecipeWhereUniqueInput;
    create: Prisma.XOR<Prisma.RecipeCreateWithoutUserInput, Prisma.RecipeUncheckedCreateWithoutUserInput>;
};
export type RecipeCreateManyUserInputEnvelope = {
    data: Prisma.RecipeCreateManyUserInput | Prisma.RecipeCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type RecipeUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.RecipeWhereUniqueInput;
    update: Prisma.XOR<Prisma.RecipeUpdateWithoutUserInput, Prisma.RecipeUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.RecipeCreateWithoutUserInput, Prisma.RecipeUncheckedCreateWithoutUserInput>;
};
export type RecipeUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.RecipeWhereUniqueInput;
    data: Prisma.XOR<Prisma.RecipeUpdateWithoutUserInput, Prisma.RecipeUncheckedUpdateWithoutUserInput>;
};
export type RecipeUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.RecipeScalarWhereInput;
    data: Prisma.XOR<Prisma.RecipeUpdateManyMutationInput, Prisma.RecipeUncheckedUpdateManyWithoutUserInput>;
};
export type RecipeScalarWhereInput = {
    AND?: Prisma.RecipeScalarWhereInput | Prisma.RecipeScalarWhereInput[];
    OR?: Prisma.RecipeScalarWhereInput[];
    NOT?: Prisma.RecipeScalarWhereInput | Prisma.RecipeScalarWhereInput[];
    id?: Prisma.StringFilter<"Recipe"> | string;
    parentRecipeId?: Prisma.StringNullableFilter<"Recipe"> | string | null;
    recipeSlug?: Prisma.StringFilter<"Recipe"> | string;
    imageKey?: Prisma.StringNullableFilter<"Recipe"> | string | null;
    userId?: Prisma.StringFilter<"Recipe"> | string;
    countryId?: Prisma.StringFilter<"Recipe"> | string;
    title?: Prisma.StringFilter<"Recipe"> | string;
    description?: Prisma.StringFilter<"Recipe"> | string;
    baseServings?: Prisma.IntFilter<"Recipe"> | number;
    cookTimeMinutes?: Prisma.IntNullableFilter<"Recipe"> | number | null;
    prepTimeMinutes?: Prisma.IntNullableFilter<"Recipe"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"Recipe"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Recipe"> | Date | string;
};
export type RecipeCreateWithoutVariantsInput = {
    id?: string;
    recipeSlug: string;
    imageKey?: string | null;
    title: string;
    description: string;
    baseServings?: number;
    cookTimeMinutes?: number | null;
    prepTimeMinutes?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    parentRecipe?: Prisma.RecipeCreateNestedOneWithoutVariantsInput;
    user: Prisma.UserCreateNestedOneWithoutRecipesInput;
    country: Prisma.CountryCreateNestedOneWithoutRecipesInput;
    ingredients?: Prisma.RecipeIngredientCreateNestedManyWithoutRecipeInput;
    instructions?: Prisma.RecipeInstructionCreateNestedManyWithoutRecipeInput;
    favoritedBy?: Prisma.FavoriteRecipeCreateNestedManyWithoutRecipeInput;
    tags?: Prisma.RecipeTagCreateNestedManyWithoutRecipeInput;
};
export type RecipeUncheckedCreateWithoutVariantsInput = {
    id?: string;
    parentRecipeId?: string | null;
    recipeSlug: string;
    imageKey?: string | null;
    userId: string;
    countryId: string;
    title: string;
    description: string;
    baseServings?: number;
    cookTimeMinutes?: number | null;
    prepTimeMinutes?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ingredients?: Prisma.RecipeIngredientUncheckedCreateNestedManyWithoutRecipeInput;
    instructions?: Prisma.RecipeInstructionUncheckedCreateNestedManyWithoutRecipeInput;
    favoritedBy?: Prisma.FavoriteRecipeUncheckedCreateNestedManyWithoutRecipeInput;
    tags?: Prisma.RecipeTagUncheckedCreateNestedManyWithoutRecipeInput;
};
export type RecipeCreateOrConnectWithoutVariantsInput = {
    where: Prisma.RecipeWhereUniqueInput;
    create: Prisma.XOR<Prisma.RecipeCreateWithoutVariantsInput, Prisma.RecipeUncheckedCreateWithoutVariantsInput>;
};
export type RecipeCreateWithoutParentRecipeInput = {
    id?: string;
    recipeSlug: string;
    imageKey?: string | null;
    title: string;
    description: string;
    baseServings?: number;
    cookTimeMinutes?: number | null;
    prepTimeMinutes?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    variants?: Prisma.RecipeCreateNestedManyWithoutParentRecipeInput;
    user: Prisma.UserCreateNestedOneWithoutRecipesInput;
    country: Prisma.CountryCreateNestedOneWithoutRecipesInput;
    ingredients?: Prisma.RecipeIngredientCreateNestedManyWithoutRecipeInput;
    instructions?: Prisma.RecipeInstructionCreateNestedManyWithoutRecipeInput;
    favoritedBy?: Prisma.FavoriteRecipeCreateNestedManyWithoutRecipeInput;
    tags?: Prisma.RecipeTagCreateNestedManyWithoutRecipeInput;
};
export type RecipeUncheckedCreateWithoutParentRecipeInput = {
    id?: string;
    recipeSlug: string;
    imageKey?: string | null;
    userId: string;
    countryId: string;
    title: string;
    description: string;
    baseServings?: number;
    cookTimeMinutes?: number | null;
    prepTimeMinutes?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    variants?: Prisma.RecipeUncheckedCreateNestedManyWithoutParentRecipeInput;
    ingredients?: Prisma.RecipeIngredientUncheckedCreateNestedManyWithoutRecipeInput;
    instructions?: Prisma.RecipeInstructionUncheckedCreateNestedManyWithoutRecipeInput;
    favoritedBy?: Prisma.FavoriteRecipeUncheckedCreateNestedManyWithoutRecipeInput;
    tags?: Prisma.RecipeTagUncheckedCreateNestedManyWithoutRecipeInput;
};
export type RecipeCreateOrConnectWithoutParentRecipeInput = {
    where: Prisma.RecipeWhereUniqueInput;
    create: Prisma.XOR<Prisma.RecipeCreateWithoutParentRecipeInput, Prisma.RecipeUncheckedCreateWithoutParentRecipeInput>;
};
export type RecipeCreateManyParentRecipeInputEnvelope = {
    data: Prisma.RecipeCreateManyParentRecipeInput | Prisma.RecipeCreateManyParentRecipeInput[];
    skipDuplicates?: boolean;
};
export type RecipeUpsertWithoutVariantsInput = {
    update: Prisma.XOR<Prisma.RecipeUpdateWithoutVariantsInput, Prisma.RecipeUncheckedUpdateWithoutVariantsInput>;
    create: Prisma.XOR<Prisma.RecipeCreateWithoutVariantsInput, Prisma.RecipeUncheckedCreateWithoutVariantsInput>;
    where?: Prisma.RecipeWhereInput;
};
export type RecipeUpdateToOneWithWhereWithoutVariantsInput = {
    where?: Prisma.RecipeWhereInput;
    data: Prisma.XOR<Prisma.RecipeUpdateWithoutVariantsInput, Prisma.RecipeUncheckedUpdateWithoutVariantsInput>;
};
export type RecipeUpdateWithoutVariantsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recipeSlug?: Prisma.StringFieldUpdateOperationsInput | string;
    imageKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    baseServings?: Prisma.IntFieldUpdateOperationsInput | number;
    cookTimeMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    prepTimeMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    parentRecipe?: Prisma.RecipeUpdateOneWithoutVariantsNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutRecipesNestedInput;
    country?: Prisma.CountryUpdateOneRequiredWithoutRecipesNestedInput;
    ingredients?: Prisma.RecipeIngredientUpdateManyWithoutRecipeNestedInput;
    instructions?: Prisma.RecipeInstructionUpdateManyWithoutRecipeNestedInput;
    favoritedBy?: Prisma.FavoriteRecipeUpdateManyWithoutRecipeNestedInput;
    tags?: Prisma.RecipeTagUpdateManyWithoutRecipeNestedInput;
};
export type RecipeUncheckedUpdateWithoutVariantsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    parentRecipeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recipeSlug?: Prisma.StringFieldUpdateOperationsInput | string;
    imageKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    countryId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    baseServings?: Prisma.IntFieldUpdateOperationsInput | number;
    cookTimeMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    prepTimeMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ingredients?: Prisma.RecipeIngredientUncheckedUpdateManyWithoutRecipeNestedInput;
    instructions?: Prisma.RecipeInstructionUncheckedUpdateManyWithoutRecipeNestedInput;
    favoritedBy?: Prisma.FavoriteRecipeUncheckedUpdateManyWithoutRecipeNestedInput;
    tags?: Prisma.RecipeTagUncheckedUpdateManyWithoutRecipeNestedInput;
};
export type RecipeUpsertWithWhereUniqueWithoutParentRecipeInput = {
    where: Prisma.RecipeWhereUniqueInput;
    update: Prisma.XOR<Prisma.RecipeUpdateWithoutParentRecipeInput, Prisma.RecipeUncheckedUpdateWithoutParentRecipeInput>;
    create: Prisma.XOR<Prisma.RecipeCreateWithoutParentRecipeInput, Prisma.RecipeUncheckedCreateWithoutParentRecipeInput>;
};
export type RecipeUpdateWithWhereUniqueWithoutParentRecipeInput = {
    where: Prisma.RecipeWhereUniqueInput;
    data: Prisma.XOR<Prisma.RecipeUpdateWithoutParentRecipeInput, Prisma.RecipeUncheckedUpdateWithoutParentRecipeInput>;
};
export type RecipeUpdateManyWithWhereWithoutParentRecipeInput = {
    where: Prisma.RecipeScalarWhereInput;
    data: Prisma.XOR<Prisma.RecipeUpdateManyMutationInput, Prisma.RecipeUncheckedUpdateManyWithoutParentRecipeInput>;
};
export type RecipeCreateWithoutInstructionsInput = {
    id?: string;
    recipeSlug: string;
    imageKey?: string | null;
    title: string;
    description: string;
    baseServings?: number;
    cookTimeMinutes?: number | null;
    prepTimeMinutes?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    parentRecipe?: Prisma.RecipeCreateNestedOneWithoutVariantsInput;
    variants?: Prisma.RecipeCreateNestedManyWithoutParentRecipeInput;
    user: Prisma.UserCreateNestedOneWithoutRecipesInput;
    country: Prisma.CountryCreateNestedOneWithoutRecipesInput;
    ingredients?: Prisma.RecipeIngredientCreateNestedManyWithoutRecipeInput;
    favoritedBy?: Prisma.FavoriteRecipeCreateNestedManyWithoutRecipeInput;
    tags?: Prisma.RecipeTagCreateNestedManyWithoutRecipeInput;
};
export type RecipeUncheckedCreateWithoutInstructionsInput = {
    id?: string;
    parentRecipeId?: string | null;
    recipeSlug: string;
    imageKey?: string | null;
    userId: string;
    countryId: string;
    title: string;
    description: string;
    baseServings?: number;
    cookTimeMinutes?: number | null;
    prepTimeMinutes?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    variants?: Prisma.RecipeUncheckedCreateNestedManyWithoutParentRecipeInput;
    ingredients?: Prisma.RecipeIngredientUncheckedCreateNestedManyWithoutRecipeInput;
    favoritedBy?: Prisma.FavoriteRecipeUncheckedCreateNestedManyWithoutRecipeInput;
    tags?: Prisma.RecipeTagUncheckedCreateNestedManyWithoutRecipeInput;
};
export type RecipeCreateOrConnectWithoutInstructionsInput = {
    where: Prisma.RecipeWhereUniqueInput;
    create: Prisma.XOR<Prisma.RecipeCreateWithoutInstructionsInput, Prisma.RecipeUncheckedCreateWithoutInstructionsInput>;
};
export type RecipeUpsertWithoutInstructionsInput = {
    update: Prisma.XOR<Prisma.RecipeUpdateWithoutInstructionsInput, Prisma.RecipeUncheckedUpdateWithoutInstructionsInput>;
    create: Prisma.XOR<Prisma.RecipeCreateWithoutInstructionsInput, Prisma.RecipeUncheckedCreateWithoutInstructionsInput>;
    where?: Prisma.RecipeWhereInput;
};
export type RecipeUpdateToOneWithWhereWithoutInstructionsInput = {
    where?: Prisma.RecipeWhereInput;
    data: Prisma.XOR<Prisma.RecipeUpdateWithoutInstructionsInput, Prisma.RecipeUncheckedUpdateWithoutInstructionsInput>;
};
export type RecipeUpdateWithoutInstructionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recipeSlug?: Prisma.StringFieldUpdateOperationsInput | string;
    imageKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    baseServings?: Prisma.IntFieldUpdateOperationsInput | number;
    cookTimeMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    prepTimeMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    parentRecipe?: Prisma.RecipeUpdateOneWithoutVariantsNestedInput;
    variants?: Prisma.RecipeUpdateManyWithoutParentRecipeNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutRecipesNestedInput;
    country?: Prisma.CountryUpdateOneRequiredWithoutRecipesNestedInput;
    ingredients?: Prisma.RecipeIngredientUpdateManyWithoutRecipeNestedInput;
    favoritedBy?: Prisma.FavoriteRecipeUpdateManyWithoutRecipeNestedInput;
    tags?: Prisma.RecipeTagUpdateManyWithoutRecipeNestedInput;
};
export type RecipeUncheckedUpdateWithoutInstructionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    parentRecipeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recipeSlug?: Prisma.StringFieldUpdateOperationsInput | string;
    imageKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    countryId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    baseServings?: Prisma.IntFieldUpdateOperationsInput | number;
    cookTimeMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    prepTimeMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    variants?: Prisma.RecipeUncheckedUpdateManyWithoutParentRecipeNestedInput;
    ingredients?: Prisma.RecipeIngredientUncheckedUpdateManyWithoutRecipeNestedInput;
    favoritedBy?: Prisma.FavoriteRecipeUncheckedUpdateManyWithoutRecipeNestedInput;
    tags?: Prisma.RecipeTagUncheckedUpdateManyWithoutRecipeNestedInput;
};
export type RecipeCreateWithoutTagsInput = {
    id?: string;
    recipeSlug: string;
    imageKey?: string | null;
    title: string;
    description: string;
    baseServings?: number;
    cookTimeMinutes?: number | null;
    prepTimeMinutes?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    parentRecipe?: Prisma.RecipeCreateNestedOneWithoutVariantsInput;
    variants?: Prisma.RecipeCreateNestedManyWithoutParentRecipeInput;
    user: Prisma.UserCreateNestedOneWithoutRecipesInput;
    country: Prisma.CountryCreateNestedOneWithoutRecipesInput;
    ingredients?: Prisma.RecipeIngredientCreateNestedManyWithoutRecipeInput;
    instructions?: Prisma.RecipeInstructionCreateNestedManyWithoutRecipeInput;
    favoritedBy?: Prisma.FavoriteRecipeCreateNestedManyWithoutRecipeInput;
};
export type RecipeUncheckedCreateWithoutTagsInput = {
    id?: string;
    parentRecipeId?: string | null;
    recipeSlug: string;
    imageKey?: string | null;
    userId: string;
    countryId: string;
    title: string;
    description: string;
    baseServings?: number;
    cookTimeMinutes?: number | null;
    prepTimeMinutes?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    variants?: Prisma.RecipeUncheckedCreateNestedManyWithoutParentRecipeInput;
    ingredients?: Prisma.RecipeIngredientUncheckedCreateNestedManyWithoutRecipeInput;
    instructions?: Prisma.RecipeInstructionUncheckedCreateNestedManyWithoutRecipeInput;
    favoritedBy?: Prisma.FavoriteRecipeUncheckedCreateNestedManyWithoutRecipeInput;
};
export type RecipeCreateOrConnectWithoutTagsInput = {
    where: Prisma.RecipeWhereUniqueInput;
    create: Prisma.XOR<Prisma.RecipeCreateWithoutTagsInput, Prisma.RecipeUncheckedCreateWithoutTagsInput>;
};
export type RecipeUpsertWithoutTagsInput = {
    update: Prisma.XOR<Prisma.RecipeUpdateWithoutTagsInput, Prisma.RecipeUncheckedUpdateWithoutTagsInput>;
    create: Prisma.XOR<Prisma.RecipeCreateWithoutTagsInput, Prisma.RecipeUncheckedCreateWithoutTagsInput>;
    where?: Prisma.RecipeWhereInput;
};
export type RecipeUpdateToOneWithWhereWithoutTagsInput = {
    where?: Prisma.RecipeWhereInput;
    data: Prisma.XOR<Prisma.RecipeUpdateWithoutTagsInput, Prisma.RecipeUncheckedUpdateWithoutTagsInput>;
};
export type RecipeUpdateWithoutTagsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recipeSlug?: Prisma.StringFieldUpdateOperationsInput | string;
    imageKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    baseServings?: Prisma.IntFieldUpdateOperationsInput | number;
    cookTimeMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    prepTimeMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    parentRecipe?: Prisma.RecipeUpdateOneWithoutVariantsNestedInput;
    variants?: Prisma.RecipeUpdateManyWithoutParentRecipeNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutRecipesNestedInput;
    country?: Prisma.CountryUpdateOneRequiredWithoutRecipesNestedInput;
    ingredients?: Prisma.RecipeIngredientUpdateManyWithoutRecipeNestedInput;
    instructions?: Prisma.RecipeInstructionUpdateManyWithoutRecipeNestedInput;
    favoritedBy?: Prisma.FavoriteRecipeUpdateManyWithoutRecipeNestedInput;
};
export type RecipeUncheckedUpdateWithoutTagsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    parentRecipeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recipeSlug?: Prisma.StringFieldUpdateOperationsInput | string;
    imageKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    countryId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    baseServings?: Prisma.IntFieldUpdateOperationsInput | number;
    cookTimeMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    prepTimeMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    variants?: Prisma.RecipeUncheckedUpdateManyWithoutParentRecipeNestedInput;
    ingredients?: Prisma.RecipeIngredientUncheckedUpdateManyWithoutRecipeNestedInput;
    instructions?: Prisma.RecipeInstructionUncheckedUpdateManyWithoutRecipeNestedInput;
    favoritedBy?: Prisma.FavoriteRecipeUncheckedUpdateManyWithoutRecipeNestedInput;
};
export type RecipeCreateWithoutIngredientsInput = {
    id?: string;
    recipeSlug: string;
    imageKey?: string | null;
    title: string;
    description: string;
    baseServings?: number;
    cookTimeMinutes?: number | null;
    prepTimeMinutes?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    parentRecipe?: Prisma.RecipeCreateNestedOneWithoutVariantsInput;
    variants?: Prisma.RecipeCreateNestedManyWithoutParentRecipeInput;
    user: Prisma.UserCreateNestedOneWithoutRecipesInput;
    country: Prisma.CountryCreateNestedOneWithoutRecipesInput;
    instructions?: Prisma.RecipeInstructionCreateNestedManyWithoutRecipeInput;
    favoritedBy?: Prisma.FavoriteRecipeCreateNestedManyWithoutRecipeInput;
    tags?: Prisma.RecipeTagCreateNestedManyWithoutRecipeInput;
};
export type RecipeUncheckedCreateWithoutIngredientsInput = {
    id?: string;
    parentRecipeId?: string | null;
    recipeSlug: string;
    imageKey?: string | null;
    userId: string;
    countryId: string;
    title: string;
    description: string;
    baseServings?: number;
    cookTimeMinutes?: number | null;
    prepTimeMinutes?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    variants?: Prisma.RecipeUncheckedCreateNestedManyWithoutParentRecipeInput;
    instructions?: Prisma.RecipeInstructionUncheckedCreateNestedManyWithoutRecipeInput;
    favoritedBy?: Prisma.FavoriteRecipeUncheckedCreateNestedManyWithoutRecipeInput;
    tags?: Prisma.RecipeTagUncheckedCreateNestedManyWithoutRecipeInput;
};
export type RecipeCreateOrConnectWithoutIngredientsInput = {
    where: Prisma.RecipeWhereUniqueInput;
    create: Prisma.XOR<Prisma.RecipeCreateWithoutIngredientsInput, Prisma.RecipeUncheckedCreateWithoutIngredientsInput>;
};
export type RecipeUpsertWithoutIngredientsInput = {
    update: Prisma.XOR<Prisma.RecipeUpdateWithoutIngredientsInput, Prisma.RecipeUncheckedUpdateWithoutIngredientsInput>;
    create: Prisma.XOR<Prisma.RecipeCreateWithoutIngredientsInput, Prisma.RecipeUncheckedCreateWithoutIngredientsInput>;
    where?: Prisma.RecipeWhereInput;
};
export type RecipeUpdateToOneWithWhereWithoutIngredientsInput = {
    where?: Prisma.RecipeWhereInput;
    data: Prisma.XOR<Prisma.RecipeUpdateWithoutIngredientsInput, Prisma.RecipeUncheckedUpdateWithoutIngredientsInput>;
};
export type RecipeUpdateWithoutIngredientsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recipeSlug?: Prisma.StringFieldUpdateOperationsInput | string;
    imageKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    baseServings?: Prisma.IntFieldUpdateOperationsInput | number;
    cookTimeMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    prepTimeMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    parentRecipe?: Prisma.RecipeUpdateOneWithoutVariantsNestedInput;
    variants?: Prisma.RecipeUpdateManyWithoutParentRecipeNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutRecipesNestedInput;
    country?: Prisma.CountryUpdateOneRequiredWithoutRecipesNestedInput;
    instructions?: Prisma.RecipeInstructionUpdateManyWithoutRecipeNestedInput;
    favoritedBy?: Prisma.FavoriteRecipeUpdateManyWithoutRecipeNestedInput;
    tags?: Prisma.RecipeTagUpdateManyWithoutRecipeNestedInput;
};
export type RecipeUncheckedUpdateWithoutIngredientsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    parentRecipeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recipeSlug?: Prisma.StringFieldUpdateOperationsInput | string;
    imageKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    countryId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    baseServings?: Prisma.IntFieldUpdateOperationsInput | number;
    cookTimeMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    prepTimeMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    variants?: Prisma.RecipeUncheckedUpdateManyWithoutParentRecipeNestedInput;
    instructions?: Prisma.RecipeInstructionUncheckedUpdateManyWithoutRecipeNestedInput;
    favoritedBy?: Prisma.FavoriteRecipeUncheckedUpdateManyWithoutRecipeNestedInput;
    tags?: Prisma.RecipeTagUncheckedUpdateManyWithoutRecipeNestedInput;
};
export type RecipeCreateWithoutFavoritedByInput = {
    id?: string;
    recipeSlug: string;
    imageKey?: string | null;
    title: string;
    description: string;
    baseServings?: number;
    cookTimeMinutes?: number | null;
    prepTimeMinutes?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    parentRecipe?: Prisma.RecipeCreateNestedOneWithoutVariantsInput;
    variants?: Prisma.RecipeCreateNestedManyWithoutParentRecipeInput;
    user: Prisma.UserCreateNestedOneWithoutRecipesInput;
    country: Prisma.CountryCreateNestedOneWithoutRecipesInput;
    ingredients?: Prisma.RecipeIngredientCreateNestedManyWithoutRecipeInput;
    instructions?: Prisma.RecipeInstructionCreateNestedManyWithoutRecipeInput;
    tags?: Prisma.RecipeTagCreateNestedManyWithoutRecipeInput;
};
export type RecipeUncheckedCreateWithoutFavoritedByInput = {
    id?: string;
    parentRecipeId?: string | null;
    recipeSlug: string;
    imageKey?: string | null;
    userId: string;
    countryId: string;
    title: string;
    description: string;
    baseServings?: number;
    cookTimeMinutes?: number | null;
    prepTimeMinutes?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    variants?: Prisma.RecipeUncheckedCreateNestedManyWithoutParentRecipeInput;
    ingredients?: Prisma.RecipeIngredientUncheckedCreateNestedManyWithoutRecipeInput;
    instructions?: Prisma.RecipeInstructionUncheckedCreateNestedManyWithoutRecipeInput;
    tags?: Prisma.RecipeTagUncheckedCreateNestedManyWithoutRecipeInput;
};
export type RecipeCreateOrConnectWithoutFavoritedByInput = {
    where: Prisma.RecipeWhereUniqueInput;
    create: Prisma.XOR<Prisma.RecipeCreateWithoutFavoritedByInput, Prisma.RecipeUncheckedCreateWithoutFavoritedByInput>;
};
export type RecipeUpsertWithoutFavoritedByInput = {
    update: Prisma.XOR<Prisma.RecipeUpdateWithoutFavoritedByInput, Prisma.RecipeUncheckedUpdateWithoutFavoritedByInput>;
    create: Prisma.XOR<Prisma.RecipeCreateWithoutFavoritedByInput, Prisma.RecipeUncheckedCreateWithoutFavoritedByInput>;
    where?: Prisma.RecipeWhereInput;
};
export type RecipeUpdateToOneWithWhereWithoutFavoritedByInput = {
    where?: Prisma.RecipeWhereInput;
    data: Prisma.XOR<Prisma.RecipeUpdateWithoutFavoritedByInput, Prisma.RecipeUncheckedUpdateWithoutFavoritedByInput>;
};
export type RecipeUpdateWithoutFavoritedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recipeSlug?: Prisma.StringFieldUpdateOperationsInput | string;
    imageKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    baseServings?: Prisma.IntFieldUpdateOperationsInput | number;
    cookTimeMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    prepTimeMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    parentRecipe?: Prisma.RecipeUpdateOneWithoutVariantsNestedInput;
    variants?: Prisma.RecipeUpdateManyWithoutParentRecipeNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutRecipesNestedInput;
    country?: Prisma.CountryUpdateOneRequiredWithoutRecipesNestedInput;
    ingredients?: Prisma.RecipeIngredientUpdateManyWithoutRecipeNestedInput;
    instructions?: Prisma.RecipeInstructionUpdateManyWithoutRecipeNestedInput;
    tags?: Prisma.RecipeTagUpdateManyWithoutRecipeNestedInput;
};
export type RecipeUncheckedUpdateWithoutFavoritedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    parentRecipeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recipeSlug?: Prisma.StringFieldUpdateOperationsInput | string;
    imageKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    countryId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    baseServings?: Prisma.IntFieldUpdateOperationsInput | number;
    cookTimeMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    prepTimeMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    variants?: Prisma.RecipeUncheckedUpdateManyWithoutParentRecipeNestedInput;
    ingredients?: Prisma.RecipeIngredientUncheckedUpdateManyWithoutRecipeNestedInput;
    instructions?: Prisma.RecipeInstructionUncheckedUpdateManyWithoutRecipeNestedInput;
    tags?: Prisma.RecipeTagUncheckedUpdateManyWithoutRecipeNestedInput;
};
export type RecipeCreateWithoutCountryInput = {
    id?: string;
    recipeSlug: string;
    imageKey?: string | null;
    title: string;
    description: string;
    baseServings?: number;
    cookTimeMinutes?: number | null;
    prepTimeMinutes?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    parentRecipe?: Prisma.RecipeCreateNestedOneWithoutVariantsInput;
    variants?: Prisma.RecipeCreateNestedManyWithoutParentRecipeInput;
    user: Prisma.UserCreateNestedOneWithoutRecipesInput;
    ingredients?: Prisma.RecipeIngredientCreateNestedManyWithoutRecipeInput;
    instructions?: Prisma.RecipeInstructionCreateNestedManyWithoutRecipeInput;
    favoritedBy?: Prisma.FavoriteRecipeCreateNestedManyWithoutRecipeInput;
    tags?: Prisma.RecipeTagCreateNestedManyWithoutRecipeInput;
};
export type RecipeUncheckedCreateWithoutCountryInput = {
    id?: string;
    parentRecipeId?: string | null;
    recipeSlug: string;
    imageKey?: string | null;
    userId: string;
    title: string;
    description: string;
    baseServings?: number;
    cookTimeMinutes?: number | null;
    prepTimeMinutes?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    variants?: Prisma.RecipeUncheckedCreateNestedManyWithoutParentRecipeInput;
    ingredients?: Prisma.RecipeIngredientUncheckedCreateNestedManyWithoutRecipeInput;
    instructions?: Prisma.RecipeInstructionUncheckedCreateNestedManyWithoutRecipeInput;
    favoritedBy?: Prisma.FavoriteRecipeUncheckedCreateNestedManyWithoutRecipeInput;
    tags?: Prisma.RecipeTagUncheckedCreateNestedManyWithoutRecipeInput;
};
export type RecipeCreateOrConnectWithoutCountryInput = {
    where: Prisma.RecipeWhereUniqueInput;
    create: Prisma.XOR<Prisma.RecipeCreateWithoutCountryInput, Prisma.RecipeUncheckedCreateWithoutCountryInput>;
};
export type RecipeCreateManyCountryInputEnvelope = {
    data: Prisma.RecipeCreateManyCountryInput | Prisma.RecipeCreateManyCountryInput[];
    skipDuplicates?: boolean;
};
export type RecipeUpsertWithWhereUniqueWithoutCountryInput = {
    where: Prisma.RecipeWhereUniqueInput;
    update: Prisma.XOR<Prisma.RecipeUpdateWithoutCountryInput, Prisma.RecipeUncheckedUpdateWithoutCountryInput>;
    create: Prisma.XOR<Prisma.RecipeCreateWithoutCountryInput, Prisma.RecipeUncheckedCreateWithoutCountryInput>;
};
export type RecipeUpdateWithWhereUniqueWithoutCountryInput = {
    where: Prisma.RecipeWhereUniqueInput;
    data: Prisma.XOR<Prisma.RecipeUpdateWithoutCountryInput, Prisma.RecipeUncheckedUpdateWithoutCountryInput>;
};
export type RecipeUpdateManyWithWhereWithoutCountryInput = {
    where: Prisma.RecipeScalarWhereInput;
    data: Prisma.XOR<Prisma.RecipeUpdateManyMutationInput, Prisma.RecipeUncheckedUpdateManyWithoutCountryInput>;
};
export type RecipeCreateManyUserInput = {
    id?: string;
    parentRecipeId?: string | null;
    recipeSlug: string;
    imageKey?: string | null;
    countryId: string;
    title: string;
    description: string;
    baseServings?: number;
    cookTimeMinutes?: number | null;
    prepTimeMinutes?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RecipeUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recipeSlug?: Prisma.StringFieldUpdateOperationsInput | string;
    imageKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    baseServings?: Prisma.IntFieldUpdateOperationsInput | number;
    cookTimeMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    prepTimeMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    parentRecipe?: Prisma.RecipeUpdateOneWithoutVariantsNestedInput;
    variants?: Prisma.RecipeUpdateManyWithoutParentRecipeNestedInput;
    country?: Prisma.CountryUpdateOneRequiredWithoutRecipesNestedInput;
    ingredients?: Prisma.RecipeIngredientUpdateManyWithoutRecipeNestedInput;
    instructions?: Prisma.RecipeInstructionUpdateManyWithoutRecipeNestedInput;
    favoritedBy?: Prisma.FavoriteRecipeUpdateManyWithoutRecipeNestedInput;
    tags?: Prisma.RecipeTagUpdateManyWithoutRecipeNestedInput;
};
export type RecipeUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    parentRecipeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recipeSlug?: Prisma.StringFieldUpdateOperationsInput | string;
    imageKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    countryId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    baseServings?: Prisma.IntFieldUpdateOperationsInput | number;
    cookTimeMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    prepTimeMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    variants?: Prisma.RecipeUncheckedUpdateManyWithoutParentRecipeNestedInput;
    ingredients?: Prisma.RecipeIngredientUncheckedUpdateManyWithoutRecipeNestedInput;
    instructions?: Prisma.RecipeInstructionUncheckedUpdateManyWithoutRecipeNestedInput;
    favoritedBy?: Prisma.FavoriteRecipeUncheckedUpdateManyWithoutRecipeNestedInput;
    tags?: Prisma.RecipeTagUncheckedUpdateManyWithoutRecipeNestedInput;
};
export type RecipeUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    parentRecipeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recipeSlug?: Prisma.StringFieldUpdateOperationsInput | string;
    imageKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    countryId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    baseServings?: Prisma.IntFieldUpdateOperationsInput | number;
    cookTimeMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    prepTimeMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RecipeCreateManyParentRecipeInput = {
    id?: string;
    recipeSlug: string;
    imageKey?: string | null;
    userId: string;
    countryId: string;
    title: string;
    description: string;
    baseServings?: number;
    cookTimeMinutes?: number | null;
    prepTimeMinutes?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RecipeUpdateWithoutParentRecipeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recipeSlug?: Prisma.StringFieldUpdateOperationsInput | string;
    imageKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    baseServings?: Prisma.IntFieldUpdateOperationsInput | number;
    cookTimeMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    prepTimeMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    variants?: Prisma.RecipeUpdateManyWithoutParentRecipeNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutRecipesNestedInput;
    country?: Prisma.CountryUpdateOneRequiredWithoutRecipesNestedInput;
    ingredients?: Prisma.RecipeIngredientUpdateManyWithoutRecipeNestedInput;
    instructions?: Prisma.RecipeInstructionUpdateManyWithoutRecipeNestedInput;
    favoritedBy?: Prisma.FavoriteRecipeUpdateManyWithoutRecipeNestedInput;
    tags?: Prisma.RecipeTagUpdateManyWithoutRecipeNestedInput;
};
export type RecipeUncheckedUpdateWithoutParentRecipeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recipeSlug?: Prisma.StringFieldUpdateOperationsInput | string;
    imageKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    countryId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    baseServings?: Prisma.IntFieldUpdateOperationsInput | number;
    cookTimeMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    prepTimeMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    variants?: Prisma.RecipeUncheckedUpdateManyWithoutParentRecipeNestedInput;
    ingredients?: Prisma.RecipeIngredientUncheckedUpdateManyWithoutRecipeNestedInput;
    instructions?: Prisma.RecipeInstructionUncheckedUpdateManyWithoutRecipeNestedInput;
    favoritedBy?: Prisma.FavoriteRecipeUncheckedUpdateManyWithoutRecipeNestedInput;
    tags?: Prisma.RecipeTagUncheckedUpdateManyWithoutRecipeNestedInput;
};
export type RecipeUncheckedUpdateManyWithoutParentRecipeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recipeSlug?: Prisma.StringFieldUpdateOperationsInput | string;
    imageKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    countryId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    baseServings?: Prisma.IntFieldUpdateOperationsInput | number;
    cookTimeMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    prepTimeMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RecipeCreateManyCountryInput = {
    id?: string;
    parentRecipeId?: string | null;
    recipeSlug: string;
    imageKey?: string | null;
    userId: string;
    title: string;
    description: string;
    baseServings?: number;
    cookTimeMinutes?: number | null;
    prepTimeMinutes?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RecipeUpdateWithoutCountryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recipeSlug?: Prisma.StringFieldUpdateOperationsInput | string;
    imageKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    baseServings?: Prisma.IntFieldUpdateOperationsInput | number;
    cookTimeMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    prepTimeMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    parentRecipe?: Prisma.RecipeUpdateOneWithoutVariantsNestedInput;
    variants?: Prisma.RecipeUpdateManyWithoutParentRecipeNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutRecipesNestedInput;
    ingredients?: Prisma.RecipeIngredientUpdateManyWithoutRecipeNestedInput;
    instructions?: Prisma.RecipeInstructionUpdateManyWithoutRecipeNestedInput;
    favoritedBy?: Prisma.FavoriteRecipeUpdateManyWithoutRecipeNestedInput;
    tags?: Prisma.RecipeTagUpdateManyWithoutRecipeNestedInput;
};
export type RecipeUncheckedUpdateWithoutCountryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    parentRecipeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recipeSlug?: Prisma.StringFieldUpdateOperationsInput | string;
    imageKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    baseServings?: Prisma.IntFieldUpdateOperationsInput | number;
    cookTimeMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    prepTimeMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    variants?: Prisma.RecipeUncheckedUpdateManyWithoutParentRecipeNestedInput;
    ingredients?: Prisma.RecipeIngredientUncheckedUpdateManyWithoutRecipeNestedInput;
    instructions?: Prisma.RecipeInstructionUncheckedUpdateManyWithoutRecipeNestedInput;
    favoritedBy?: Prisma.FavoriteRecipeUncheckedUpdateManyWithoutRecipeNestedInput;
    tags?: Prisma.RecipeTagUncheckedUpdateManyWithoutRecipeNestedInput;
};
export type RecipeUncheckedUpdateManyWithoutCountryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    parentRecipeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recipeSlug?: Prisma.StringFieldUpdateOperationsInput | string;
    imageKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    baseServings?: Prisma.IntFieldUpdateOperationsInput | number;
    cookTimeMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    prepTimeMinutes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type RecipeCountOutputType
 */
export type RecipeCountOutputType = {
    variants: number;
    ingredients: number;
    instructions: number;
    favoritedBy: number;
    tags: number;
};
export type RecipeCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    variants?: boolean | RecipeCountOutputTypeCountVariantsArgs;
    ingredients?: boolean | RecipeCountOutputTypeCountIngredientsArgs;
    instructions?: boolean | RecipeCountOutputTypeCountInstructionsArgs;
    favoritedBy?: boolean | RecipeCountOutputTypeCountFavoritedByArgs;
    tags?: boolean | RecipeCountOutputTypeCountTagsArgs;
};
/**
 * RecipeCountOutputType without action
 */
export type RecipeCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeCountOutputType
     */
    select?: Prisma.RecipeCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * RecipeCountOutputType without action
 */
export type RecipeCountOutputTypeCountVariantsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RecipeWhereInput;
};
/**
 * RecipeCountOutputType without action
 */
export type RecipeCountOutputTypeCountIngredientsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RecipeIngredientWhereInput;
};
/**
 * RecipeCountOutputType without action
 */
export type RecipeCountOutputTypeCountInstructionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RecipeInstructionWhereInput;
};
/**
 * RecipeCountOutputType without action
 */
export type RecipeCountOutputTypeCountFavoritedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FavoriteRecipeWhereInput;
};
/**
 * RecipeCountOutputType without action
 */
export type RecipeCountOutputTypeCountTagsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RecipeTagWhereInput;
};
export type RecipeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    parentRecipeId?: boolean;
    recipeSlug?: boolean;
    imageKey?: boolean;
    userId?: boolean;
    countryId?: boolean;
    title?: boolean;
    description?: boolean;
    baseServings?: boolean;
    cookTimeMinutes?: boolean;
    prepTimeMinutes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    parentRecipe?: boolean | Prisma.Recipe$parentRecipeArgs<ExtArgs>;
    variants?: boolean | Prisma.Recipe$variantsArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    country?: boolean | Prisma.CountryDefaultArgs<ExtArgs>;
    ingredients?: boolean | Prisma.Recipe$ingredientsArgs<ExtArgs>;
    instructions?: boolean | Prisma.Recipe$instructionsArgs<ExtArgs>;
    favoritedBy?: boolean | Prisma.Recipe$favoritedByArgs<ExtArgs>;
    tags?: boolean | Prisma.Recipe$tagsArgs<ExtArgs>;
    _count?: boolean | Prisma.RecipeCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["recipe"]>;
export type RecipeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    parentRecipeId?: boolean;
    recipeSlug?: boolean;
    imageKey?: boolean;
    userId?: boolean;
    countryId?: boolean;
    title?: boolean;
    description?: boolean;
    baseServings?: boolean;
    cookTimeMinutes?: boolean;
    prepTimeMinutes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    parentRecipe?: boolean | Prisma.Recipe$parentRecipeArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    country?: boolean | Prisma.CountryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["recipe"]>;
export type RecipeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    parentRecipeId?: boolean;
    recipeSlug?: boolean;
    imageKey?: boolean;
    userId?: boolean;
    countryId?: boolean;
    title?: boolean;
    description?: boolean;
    baseServings?: boolean;
    cookTimeMinutes?: boolean;
    prepTimeMinutes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    parentRecipe?: boolean | Prisma.Recipe$parentRecipeArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    country?: boolean | Prisma.CountryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["recipe"]>;
export type RecipeSelectScalar = {
    id?: boolean;
    parentRecipeId?: boolean;
    recipeSlug?: boolean;
    imageKey?: boolean;
    userId?: boolean;
    countryId?: boolean;
    title?: boolean;
    description?: boolean;
    baseServings?: boolean;
    cookTimeMinutes?: boolean;
    prepTimeMinutes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type RecipeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "parentRecipeId" | "recipeSlug" | "imageKey" | "userId" | "countryId" | "title" | "description" | "baseServings" | "cookTimeMinutes" | "prepTimeMinutes" | "createdAt" | "updatedAt", ExtArgs["result"]["recipe"]>;
export type RecipeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    parentRecipe?: boolean | Prisma.Recipe$parentRecipeArgs<ExtArgs>;
    variants?: boolean | Prisma.Recipe$variantsArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    country?: boolean | Prisma.CountryDefaultArgs<ExtArgs>;
    ingredients?: boolean | Prisma.Recipe$ingredientsArgs<ExtArgs>;
    instructions?: boolean | Prisma.Recipe$instructionsArgs<ExtArgs>;
    favoritedBy?: boolean | Prisma.Recipe$favoritedByArgs<ExtArgs>;
    tags?: boolean | Prisma.Recipe$tagsArgs<ExtArgs>;
    _count?: boolean | Prisma.RecipeCountOutputTypeDefaultArgs<ExtArgs>;
};
export type RecipeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    parentRecipe?: boolean | Prisma.Recipe$parentRecipeArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    country?: boolean | Prisma.CountryDefaultArgs<ExtArgs>;
};
export type RecipeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    parentRecipe?: boolean | Prisma.Recipe$parentRecipeArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    country?: boolean | Prisma.CountryDefaultArgs<ExtArgs>;
};
export type $RecipePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Recipe";
    objects: {
        parentRecipe: Prisma.$RecipePayload<ExtArgs> | null;
        variants: Prisma.$RecipePayload<ExtArgs>[];
        user: Prisma.$UserPayload<ExtArgs>;
        country: Prisma.$CountryPayload<ExtArgs>;
        ingredients: Prisma.$RecipeIngredientPayload<ExtArgs>[];
        instructions: Prisma.$RecipeInstructionPayload<ExtArgs>[];
        favoritedBy: Prisma.$FavoriteRecipePayload<ExtArgs>[];
        tags: Prisma.$RecipeTagPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        parentRecipeId: string | null;
        recipeSlug: string;
        imageKey: string | null;
        userId: string;
        countryId: string;
        title: string;
        description: string;
        baseServings: number;
        cookTimeMinutes: number | null;
        prepTimeMinutes: number | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["recipe"]>;
    composites: {};
};
export type RecipeGetPayload<S extends boolean | null | undefined | RecipeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RecipePayload, S>;
export type RecipeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RecipeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RecipeCountAggregateInputType | true;
};
export interface RecipeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Recipe'];
        meta: {
            name: 'Recipe';
        };
    };
    /**
     * Find zero or one Recipe that matches the filter.
     * @param {RecipeFindUniqueArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecipeFindUniqueArgs>(args: Prisma.SelectSubset<T, RecipeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RecipeClient<runtime.Types.Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Recipe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecipeFindUniqueOrThrowArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecipeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RecipeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RecipeClient<runtime.Types.Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Recipe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindFirstArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecipeFindFirstArgs>(args?: Prisma.SelectSubset<T, RecipeFindFirstArgs<ExtArgs>>): Prisma.Prisma__RecipeClient<runtime.Types.Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Recipe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindFirstOrThrowArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecipeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RecipeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RecipeClient<runtime.Types.Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Recipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recipes
     * const recipes = await prisma.recipe.findMany()
     *
     * // Get first 10 Recipes
     * const recipes = await prisma.recipe.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const recipeWithIdOnly = await prisma.recipe.findMany({ select: { id: true } })
     *
     */
    findMany<T extends RecipeFindManyArgs>(args?: Prisma.SelectSubset<T, RecipeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Recipe.
     * @param {RecipeCreateArgs} args - Arguments to create a Recipe.
     * @example
     * // Create one Recipe
     * const Recipe = await prisma.recipe.create({
     *   data: {
     *     // ... data to create a Recipe
     *   }
     * })
     *
     */
    create<T extends RecipeCreateArgs>(args: Prisma.SelectSubset<T, RecipeCreateArgs<ExtArgs>>): Prisma.Prisma__RecipeClient<runtime.Types.Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Recipes.
     * @param {RecipeCreateManyArgs} args - Arguments to create many Recipes.
     * @example
     * // Create many Recipes
     * const recipe = await prisma.recipe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends RecipeCreateManyArgs>(args?: Prisma.SelectSubset<T, RecipeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Recipes and returns the data saved in the database.
     * @param {RecipeCreateManyAndReturnArgs} args - Arguments to create many Recipes.
     * @example
     * // Create many Recipes
     * const recipe = await prisma.recipe.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Recipes and only return the `id`
     * const recipeWithIdOnly = await prisma.recipe.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends RecipeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RecipeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Recipe.
     * @param {RecipeDeleteArgs} args - Arguments to delete one Recipe.
     * @example
     * // Delete one Recipe
     * const Recipe = await prisma.recipe.delete({
     *   where: {
     *     // ... filter to delete one Recipe
     *   }
     * })
     *
     */
    delete<T extends RecipeDeleteArgs>(args: Prisma.SelectSubset<T, RecipeDeleteArgs<ExtArgs>>): Prisma.Prisma__RecipeClient<runtime.Types.Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Recipe.
     * @param {RecipeUpdateArgs} args - Arguments to update one Recipe.
     * @example
     * // Update one Recipe
     * const recipe = await prisma.recipe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends RecipeUpdateArgs>(args: Prisma.SelectSubset<T, RecipeUpdateArgs<ExtArgs>>): Prisma.Prisma__RecipeClient<runtime.Types.Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Recipes.
     * @param {RecipeDeleteManyArgs} args - Arguments to filter Recipes to delete.
     * @example
     * // Delete a few Recipes
     * const { count } = await prisma.recipe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends RecipeDeleteManyArgs>(args?: Prisma.SelectSubset<T, RecipeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recipes
     * const recipe = await prisma.recipe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends RecipeUpdateManyArgs>(args: Prisma.SelectSubset<T, RecipeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Recipes and returns the data updated in the database.
     * @param {RecipeUpdateManyAndReturnArgs} args - Arguments to update many Recipes.
     * @example
     * // Update many Recipes
     * const recipe = await prisma.recipe.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Recipes and only return the `id`
     * const recipeWithIdOnly = await prisma.recipe.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends RecipeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RecipeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Recipe.
     * @param {RecipeUpsertArgs} args - Arguments to update or create a Recipe.
     * @example
     * // Update or create a Recipe
     * const recipe = await prisma.recipe.upsert({
     *   create: {
     *     // ... data to create a Recipe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recipe we want to update
     *   }
     * })
     */
    upsert<T extends RecipeUpsertArgs>(args: Prisma.SelectSubset<T, RecipeUpsertArgs<ExtArgs>>): Prisma.Prisma__RecipeClient<runtime.Types.Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeCountArgs} args - Arguments to filter Recipes to count.
     * @example
     * // Count the number of Recipes
     * const count = await prisma.recipe.count({
     *   where: {
     *     // ... the filter for the Recipes we want to count
     *   }
     * })
    **/
    count<T extends RecipeCountArgs>(args?: Prisma.Subset<T, RecipeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RecipeCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Recipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecipeAggregateArgs>(args: Prisma.Subset<T, RecipeAggregateArgs>): Prisma.PrismaPromise<GetRecipeAggregateType<T>>;
    /**
     * Group by Recipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends RecipeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RecipeGroupByArgs['orderBy'];
    } : {
        orderBy?: RecipeGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RecipeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Recipe model
     */
    readonly fields: RecipeFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Recipe.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__RecipeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    parentRecipe<T extends Prisma.Recipe$parentRecipeArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Recipe$parentRecipeArgs<ExtArgs>>): Prisma.Prisma__RecipeClient<runtime.Types.Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    variants<T extends Prisma.Recipe$variantsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Recipe$variantsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    country<T extends Prisma.CountryDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CountryDefaultArgs<ExtArgs>>): Prisma.Prisma__CountryClient<runtime.Types.Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    ingredients<T extends Prisma.Recipe$ingredientsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Recipe$ingredientsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    instructions<T extends Prisma.Recipe$instructionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Recipe$instructionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RecipeInstructionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    favoritedBy<T extends Prisma.Recipe$favoritedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Recipe$favoritedByArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FavoriteRecipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    tags<T extends Prisma.Recipe$tagsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Recipe$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RecipeTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Recipe model
 */
export interface RecipeFieldRefs {
    readonly id: Prisma.FieldRef<"Recipe", 'String'>;
    readonly parentRecipeId: Prisma.FieldRef<"Recipe", 'String'>;
    readonly recipeSlug: Prisma.FieldRef<"Recipe", 'String'>;
    readonly imageKey: Prisma.FieldRef<"Recipe", 'String'>;
    readonly userId: Prisma.FieldRef<"Recipe", 'String'>;
    readonly countryId: Prisma.FieldRef<"Recipe", 'String'>;
    readonly title: Prisma.FieldRef<"Recipe", 'String'>;
    readonly description: Prisma.FieldRef<"Recipe", 'String'>;
    readonly baseServings: Prisma.FieldRef<"Recipe", 'Int'>;
    readonly cookTimeMinutes: Prisma.FieldRef<"Recipe", 'Int'>;
    readonly prepTimeMinutes: Prisma.FieldRef<"Recipe", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Recipe", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Recipe", 'DateTime'>;
}
/**
 * Recipe findUnique
 */
export type RecipeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: Prisma.RecipeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Recipe
     */
    omit?: Prisma.RecipeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecipeInclude<ExtArgs> | null;
    /**
     * Filter, which Recipe to fetch.
     */
    where: Prisma.RecipeWhereUniqueInput;
};
/**
 * Recipe findUniqueOrThrow
 */
export type RecipeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: Prisma.RecipeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Recipe
     */
    omit?: Prisma.RecipeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecipeInclude<ExtArgs> | null;
    /**
     * Filter, which Recipe to fetch.
     */
    where: Prisma.RecipeWhereUniqueInput;
};
/**
 * Recipe findFirst
 */
export type RecipeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: Prisma.RecipeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Recipe
     */
    omit?: Prisma.RecipeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecipeInclude<ExtArgs> | null;
    /**
     * Filter, which Recipe to fetch.
     */
    where?: Prisma.RecipeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Recipes to fetch.
     */
    orderBy?: Prisma.RecipeOrderByWithRelationInput | Prisma.RecipeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Recipes.
     */
    cursor?: Prisma.RecipeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Recipes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Recipes.
     */
    distinct?: Prisma.RecipeScalarFieldEnum | Prisma.RecipeScalarFieldEnum[];
};
/**
 * Recipe findFirstOrThrow
 */
export type RecipeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: Prisma.RecipeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Recipe
     */
    omit?: Prisma.RecipeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecipeInclude<ExtArgs> | null;
    /**
     * Filter, which Recipe to fetch.
     */
    where?: Prisma.RecipeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Recipes to fetch.
     */
    orderBy?: Prisma.RecipeOrderByWithRelationInput | Prisma.RecipeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Recipes.
     */
    cursor?: Prisma.RecipeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Recipes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Recipes.
     */
    distinct?: Prisma.RecipeScalarFieldEnum | Prisma.RecipeScalarFieldEnum[];
};
/**
 * Recipe findMany
 */
export type RecipeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: Prisma.RecipeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Recipe
     */
    omit?: Prisma.RecipeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecipeInclude<ExtArgs> | null;
    /**
     * Filter, which Recipes to fetch.
     */
    where?: Prisma.RecipeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Recipes to fetch.
     */
    orderBy?: Prisma.RecipeOrderByWithRelationInput | Prisma.RecipeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Recipes.
     */
    cursor?: Prisma.RecipeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Recipes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Recipes.
     */
    distinct?: Prisma.RecipeScalarFieldEnum | Prisma.RecipeScalarFieldEnum[];
};
/**
 * Recipe create
 */
export type RecipeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: Prisma.RecipeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Recipe
     */
    omit?: Prisma.RecipeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecipeInclude<ExtArgs> | null;
    /**
     * The data needed to create a Recipe.
     */
    data: Prisma.XOR<Prisma.RecipeCreateInput, Prisma.RecipeUncheckedCreateInput>;
};
/**
 * Recipe createMany
 */
export type RecipeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recipes.
     */
    data: Prisma.RecipeCreateManyInput | Prisma.RecipeCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Recipe createManyAndReturn
 */
export type RecipeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: Prisma.RecipeSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Recipe
     */
    omit?: Prisma.RecipeOmit<ExtArgs> | null;
    /**
     * The data used to create many Recipes.
     */
    data: Prisma.RecipeCreateManyInput | Prisma.RecipeCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecipeIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Recipe update
 */
export type RecipeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: Prisma.RecipeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Recipe
     */
    omit?: Prisma.RecipeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecipeInclude<ExtArgs> | null;
    /**
     * The data needed to update a Recipe.
     */
    data: Prisma.XOR<Prisma.RecipeUpdateInput, Prisma.RecipeUncheckedUpdateInput>;
    /**
     * Choose, which Recipe to update.
     */
    where: Prisma.RecipeWhereUniqueInput;
};
/**
 * Recipe updateMany
 */
export type RecipeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Recipes.
     */
    data: Prisma.XOR<Prisma.RecipeUpdateManyMutationInput, Prisma.RecipeUncheckedUpdateManyInput>;
    /**
     * Filter which Recipes to update
     */
    where?: Prisma.RecipeWhereInput;
    /**
     * Limit how many Recipes to update.
     */
    limit?: number;
};
/**
 * Recipe updateManyAndReturn
 */
export type RecipeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: Prisma.RecipeSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Recipe
     */
    omit?: Prisma.RecipeOmit<ExtArgs> | null;
    /**
     * The data used to update Recipes.
     */
    data: Prisma.XOR<Prisma.RecipeUpdateManyMutationInput, Prisma.RecipeUncheckedUpdateManyInput>;
    /**
     * Filter which Recipes to update
     */
    where?: Prisma.RecipeWhereInput;
    /**
     * Limit how many Recipes to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecipeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Recipe upsert
 */
export type RecipeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: Prisma.RecipeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Recipe
     */
    omit?: Prisma.RecipeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecipeInclude<ExtArgs> | null;
    /**
     * The filter to search for the Recipe to update in case it exists.
     */
    where: Prisma.RecipeWhereUniqueInput;
    /**
     * In case the Recipe found by the `where` argument doesn't exist, create a new Recipe with this data.
     */
    create: Prisma.XOR<Prisma.RecipeCreateInput, Prisma.RecipeUncheckedCreateInput>;
    /**
     * In case the Recipe was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.RecipeUpdateInput, Prisma.RecipeUncheckedUpdateInput>;
};
/**
 * Recipe delete
 */
export type RecipeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: Prisma.RecipeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Recipe
     */
    omit?: Prisma.RecipeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecipeInclude<ExtArgs> | null;
    /**
     * Filter which Recipe to delete.
     */
    where: Prisma.RecipeWhereUniqueInput;
};
/**
 * Recipe deleteMany
 */
export type RecipeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Recipes to delete
     */
    where?: Prisma.RecipeWhereInput;
    /**
     * Limit how many Recipes to delete.
     */
    limit?: number;
};
/**
 * Recipe.parentRecipe
 */
export type Recipe$parentRecipeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: Prisma.RecipeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Recipe
     */
    omit?: Prisma.RecipeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecipeInclude<ExtArgs> | null;
    where?: Prisma.RecipeWhereInput;
};
/**
 * Recipe.variants
 */
export type Recipe$variantsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: Prisma.RecipeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Recipe
     */
    omit?: Prisma.RecipeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecipeInclude<ExtArgs> | null;
    where?: Prisma.RecipeWhereInput;
    orderBy?: Prisma.RecipeOrderByWithRelationInput | Prisma.RecipeOrderByWithRelationInput[];
    cursor?: Prisma.RecipeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RecipeScalarFieldEnum | Prisma.RecipeScalarFieldEnum[];
};
/**
 * Recipe.ingredients
 */
export type Recipe$ingredientsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: Prisma.RecipeIngredientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecipeIngredient
     */
    omit?: Prisma.RecipeIngredientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecipeIngredientInclude<ExtArgs> | null;
    where?: Prisma.RecipeIngredientWhereInput;
    orderBy?: Prisma.RecipeIngredientOrderByWithRelationInput | Prisma.RecipeIngredientOrderByWithRelationInput[];
    cursor?: Prisma.RecipeIngredientWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RecipeIngredientScalarFieldEnum | Prisma.RecipeIngredientScalarFieldEnum[];
};
/**
 * Recipe.instructions
 */
export type Recipe$instructionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeInstruction
     */
    select?: Prisma.RecipeInstructionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecipeInstruction
     */
    omit?: Prisma.RecipeInstructionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecipeInstructionInclude<ExtArgs> | null;
    where?: Prisma.RecipeInstructionWhereInput;
    orderBy?: Prisma.RecipeInstructionOrderByWithRelationInput | Prisma.RecipeInstructionOrderByWithRelationInput[];
    cursor?: Prisma.RecipeInstructionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RecipeInstructionScalarFieldEnum | Prisma.RecipeInstructionScalarFieldEnum[];
};
/**
 * Recipe.favoritedBy
 */
export type Recipe$favoritedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteRecipe
     */
    select?: Prisma.FavoriteRecipeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FavoriteRecipe
     */
    omit?: Prisma.FavoriteRecipeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FavoriteRecipeInclude<ExtArgs> | null;
    where?: Prisma.FavoriteRecipeWhereInput;
    orderBy?: Prisma.FavoriteRecipeOrderByWithRelationInput | Prisma.FavoriteRecipeOrderByWithRelationInput[];
    cursor?: Prisma.FavoriteRecipeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FavoriteRecipeScalarFieldEnum | Prisma.FavoriteRecipeScalarFieldEnum[];
};
/**
 * Recipe.tags
 */
export type Recipe$tagsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeTag
     */
    select?: Prisma.RecipeTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecipeTag
     */
    omit?: Prisma.RecipeTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecipeTagInclude<ExtArgs> | null;
    where?: Prisma.RecipeTagWhereInput;
    orderBy?: Prisma.RecipeTagOrderByWithRelationInput | Prisma.RecipeTagOrderByWithRelationInput[];
    cursor?: Prisma.RecipeTagWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RecipeTagScalarFieldEnum | Prisma.RecipeTagScalarFieldEnum[];
};
/**
 * Recipe without action
 */
export type RecipeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: Prisma.RecipeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Recipe
     */
    omit?: Prisma.RecipeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecipeInclude<ExtArgs> | null;
};
//# sourceMappingURL=Recipe.d.ts.map