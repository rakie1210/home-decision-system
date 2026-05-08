import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  BookOpen01Icon,
  CheckmarkCircle01Icon,
  ChefHatIcon,
  Clock01Icon,
  FloppyDiskIcon,
  ImageUploadIcon,
  NoteEditIcon,
  Plus,
} from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PageHeader } from "@/components/page-header";
import { SideBarLayout } from "@/components/sidebar";
import createRecipeIllustration from "@/assets/create-recipe-illustration.png";
import pottedPlantsImage from "@/assets/potted-plants.png";

const ingredientRows = [
  { amount: "2", unit: "cups", ingredient: "Fresh tomatoes" },
  { amount: "1", unit: "tbsp", ingredient: "Olive oil" },
  { amount: "3", unit: "cloves", ingredient: "Garlic" },
];

const quickTags = ["Family favorite", "Under 30 min", "Vegetarian", "Dinner"];

export default function CreateNewRecipe() {
  const [selectedTags, setSelectedTags] = useState(["Family favorite"]);

  function toggleTag(tag: string) {
    setSelectedTags((current) =>
      current.includes(tag)
        ? current.filter((selectedTag) => selectedTag !== tag)
        : [...current, tag],
    );
  }

  return (
    <SideBarLayout
      activeItem="home"
      collapsible="offcanvas"
      defaultOpen
      footerClassName="mt-auto"
      footerImage={pottedPlantsImage}
      footerImageClassName="h-80 w-auto object-cover"
      showBrandName
    >
      <main className="h-screen overflow-auto bg-background p-6 text-foreground lg:p-8">
        <PageHeader
          breadcrumbs={[
            { label: "Dashboard", to: "/dashboard" },
            { label: "Create recipe" },
          ]}
          eyebrow="Create recipe"
          title="Add a new family favorite"
          actions={
            <>
              <Button
                variant="outline"
                className="rounded-md border-border-secondary-button bg-card"
              >
                Save draft
              </Button>
              <Button className="rounded-md bg-primary text-primary-foreground hover:bg-primary/90">
                <HugeiconsIcon icon={FloppyDiskIcon} className="mr-2 h-4 w-4" />
                Publish recipe
              </Button>
            </>
          }
        />

        <section className="mb-6 grid gap-4 xl:grid-cols-[1.6fr_1fr]">
          <div className="overflow-hidden rounded-lg border-2 border-border bg-card shadow-[0_18px_45px_rgba(89,76,45,0.08)]">
            <div className="grid gap-2 p-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-sm font-medium text-primary">
                  <HugeiconsIcon icon={BookOpen01Icon} className="h-4 w-4" />
                  Recipe notebook
                </div>
                <div>
                  <h2 className="text-2xl font-semibold">
                    Capture every cozy detail.
                  </h2>
                  <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
                    Write the story, ingredients, timing, and steps in one calm
                    workspace before it joins your collection.
                  </p>
                </div>
              </div>
              <img
                src={createRecipeIllustration}
                alt="Open recipe notebook with kitchen ingredients"
                className="ml-auto h-56 w-full object-contain lg:h-64"
              />
            </div>
          </div>

          <aside className="rounded-lg border-2 border-border bg-card p-5 shadow-[0_18px_45px_rgba(89,76,45,0.08)]">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Recipe progress</h2>
              <HugeiconsIcon
                icon={CheckmarkCircle01Icon}
                className="h-6 w-6 text-primary"
              />
            </div>
            <div className="space-y-4">
              {[
                {
                  title: "Basics",
                  detail: "Recipe name and story",
                  done: true,
                },
                {
                  title: "Ingredients",
                  detail: "Amounts and pantry items",
                  done: true,
                },
                {
                  title: "Method",
                  detail: "Step-by-step directions",
                  done: false,
                },
                {
                  title: "Photo",
                  detail: "A cover image for the card",
                  done: false,
                },
              ].map((item) => (
                <div className="flex items-start gap-3" key={item.title}>
                  <span
                    className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-semibold ${
                      item.done
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background text-muted-foreground"
                    }`}
                  >
                    {item.done ? "✓" : ""}
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.35fr_0.85fr]">
          <div className="space-y-6">
            <div className="rounded-lg border-2 border-border bg-card p-5">
              <div className="mb-5 flex items-center gap-2">
                <HugeiconsIcon icon={ChefHatIcon} className="h-5 w-5" />
                <h2 className="text-xl font-semibold">Recipe basics</h2>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm font-medium">Recipe name</span>
                  <Input defaultValue="Creamy Tomato Pasta" />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-medium">Cuisine</span>
                  <Input defaultValue="Italian-inspired" />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-medium">Prep time</span>
                  <Input defaultValue="10 min" />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-medium">Cook time</span>
                  <Input defaultValue="25 min" />
                </label>
              </div>
              <label className="mt-4 block space-y-2">
                <span className="text-sm font-medium">Short story</span>
                <textarea
                  className="min-h-24 w-full rounded-md border border-input bg-background px-3 py-3 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/25"
                  defaultValue="A weeknight recipe that tastes like the kitchen slowed down for a minute."
                />
              </label>
            </div>

            <div className="rounded-lg border-2 border-border bg-card p-5">
              <div className="mb-5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <HugeiconsIcon icon={NoteEditIcon} className="h-5 w-5" />
                  <h2 className="text-xl font-semibold">Ingredients</h2>
                </div>
                <Button
                  variant="outline"
                  className="rounded-md border-border-secondary-button bg-background"
                >
                  <HugeiconsIcon icon={Plus} className="mr-2 h-4 w-4" />
                  Add ingredient
                </Button>
              </div>
              <div className="space-y-3">
                {ingredientRows.map((row) => (
                  <div
                    className="grid gap-3 rounded-md border border-border bg-background/70 p-3 md:grid-cols-[0.6fr_0.7fr_1.7fr]"
                    key={row.ingredient}
                  >
                    <Input defaultValue={row.amount} aria-label="Amount" />
                    <Input defaultValue={row.unit} aria-label="Unit" />
                    <Input
                      defaultValue={row.ingredient}
                      aria-label="Ingredient"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border-2 border-border bg-card p-5">
              <div className="mb-5 flex items-center gap-2">
                <HugeiconsIcon icon={Clock01Icon} className="h-5 w-5" />
                <h2 className="text-xl font-semibold">Cooking steps</h2>
              </div>
              <div className="space-y-3">
                {[1, 2, 3].map((step) => (
                  <label
                    className="grid gap-3 rounded-md border border-border bg-background/70 p-3 md:grid-cols-[2.5rem_1fr]"
                    key={step}
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-sm font-semibold text-primary">
                      {step}
                    </span>
                    <textarea
                      className="min-h-16 w-full rounded-md border border-input bg-card px-3 py-3 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/25"
                      placeholder="Describe this step..."
                    />
                  </label>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-lg border-2 border-border bg-card p-5">
              <div className="mb-4 flex items-center gap-2">
                <HugeiconsIcon icon={ImageUploadIcon} className="h-5 w-5" />
                <h2 className="text-xl font-semibold">Cover photo</h2>
              </div>
              <div className="flex min-h-56 flex-col items-center justify-center rounded-lg border border-dashed border-sidebar-border bg-background/70 p-6 text-center">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-muted text-primary">
                  <HugeiconsIcon icon={ImageUploadIcon} className="h-6 w-6" />
                </div>
                <p className="text-sm font-semibold">Upload recipe image</p>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                  This becomes the picture on your recipe card.
                </p>
              </div>
            </div>

            <div className="rounded-lg border-2 border-border bg-card p-5">
              <h2 className="mb-4 text-xl font-semibold">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {quickTags.map((tag) => {
                  const selected = selectedTags.includes(tag);

                  return (
                    <button
                      className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                        selected
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-primary hover:bg-accent"
                      }`}
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      type="button"
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="rounded-lg border-2 border-border bg-card p-5">
              <h2 className="mb-4 text-xl font-semibold">Card preview</h2>
              <div className="overflow-hidden rounded-lg border border-border bg-background">
                <img
                  src={createRecipeIllustration}
                  alt=""
                  className="h-36 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold">Creamy Tomato Pasta</h3>
                  <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                    <span>35 min</span>
                    <span>Family favorite</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </section>
      </main>
    </SideBarLayout>
  );
}
