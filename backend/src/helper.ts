import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3, s3Bucket } from "./s3";
import crypto from "crypto";
import slugify from "slugify";
import { nanoid } from "nanoid";

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
export async function uploadRecipeImageToS3({
  recipeId,
  file,
}: UploadRecipeImageInput) {
  const extension = file.mimetype.split("/")[1];
  const imageKey = `recipes/${recipeId}/${crypto.randomUUID()}.${extension}`;

  //Uploads the recipe image to s3 bucket
  await s3.send(
    new PutObjectCommand({
      Bucket: s3Bucket,
      Key: imageKey,
      Body: file.buffer,
      ContentType: file.mimetype,
    }),
  );
  return imageKey;
}

/**
 * Creates a unique slug for a recipe
 * @param title - The title of the recipe
 * @returns A unique slug for the recipe
 */
export function createRecipeSlug(title: string) {
  const base = slugify(title, { lower: true, strict: true });
  return `${base}-${nanoid(6)}`;
}
