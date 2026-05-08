import { env } from "process";
import { S3Client } from "@aws-sdk/client-s3";

const AWS_REGION = env.AWS_REGION;
const AWS_S3_BUCKET = env.AWS_S3_BUCKET;

if (!AWS_REGION) {
  throw new Error("AWS_REGION environment variable is required.");
}
if (!AWS_S3_BUCKET) {
  throw new Error("AWS_S3_BUCKET environment variable is required.");
}

export const s3 = new S3Client({
  region: AWS_REGION,
});

export const s3Bucket = AWS_S3_BUCKET;
