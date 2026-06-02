# home-decision-system

This is a project to add a smart app to help homemakers store recipes, meal plan and calculate calories in the recipes

## Tech Stack

- Frontend: React, TypeScript, TailwindCSS
- Backend: Node.js, TypeScript, Prisma, PostgreSQL
- Deployment: Docker, GitHub Actions

## Backend Development

To run the backend locally, use the following command:

```bash
cd backend
pnpm dev
```

To build the docker in the backend folder, use the following command:

```bash
cd backend
docker build -t home-wise-backend -f Dockerfile/dockerfile .
```

To run the docker image, use the following command:

```bash
cd backend
docker run --rm \
  --name home-wise-backend \
  -p 3001:3001 \
  --env-file .env \
  home-wise-backend
```
