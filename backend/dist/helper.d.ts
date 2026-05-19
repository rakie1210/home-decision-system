type UploadRecipeImageInput = {
    recipeId: string;
    file: Express.Multer.File;
};
/**
 * Uploads a recipe image to S3
 * @param recipeId - The ID of the recipe
 * @param file - The file to upload
 * @returns The key of the uploaded file
 */
export declare function uploadRecipeImageToS3({ recipeId, file, }: UploadRecipeImageInput): Promise<string>;
/**
 * Creates a unique slug for a recipe
 * @param title - The title of the recipe
 * @returns A unique slug for the recipe
 */
export declare function createRecipeSlug(title: string): string;
export {};
//# sourceMappingURL=helper.d.ts.map