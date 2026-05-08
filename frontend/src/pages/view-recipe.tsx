import { useNavigate } from "react-router-dom";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  BookOpen01Icon,
  CheckmarkCircle01Icon,
  Clock01Icon,
  FavouriteIcon,
  KitchenUtensilsIcon,
  Note01Icon,
  PencilEdit01Icon,
  PrinterIcon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/page-header";
import { SideBarLayout } from "@/components/sidebar";
import pottedPlantsImage from "@/assets/potted-plants.png";

const tomatoPastaImage = "/dashboard-images/creamy-tomato-pasta.png";

const ingredients = [
  "250 g tagliatelle or spaghetti",
  "2 cups fresh tomatoes, chopped",
  "3 cloves garlic, finely minced",
  "1 tbsp olive oil",
  "1/2 cup cream",
  "Fresh basil, parmesan, salt, and pepper",
];

const steps = [
  "Bring a pot of salted water to a boil and cook the pasta until just tender.",
  "Warm olive oil in a pan, then saute garlic until fragrant and lightly golden.",
  "Add tomatoes and simmer for 10-12 minutes until they soften into a rustic sauce.",
  "Stir in cream, season to taste, and fold the pasta through the sauce.",
  "Finish with basil, parmesan, and a little extra pepper before serving warm.",
];

const tags = ["Tomato", "Pasta", "Cream", "Family favorite"];

export default function ViewRecipe() {
  const navigate = useNavigate();

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
            { label: "Recipes", to: "/dashboard" },
            { label: "Creamy Tomato Pasta" },
          ]}
          eyebrow="Recipe details"
          title="Creamy Tomato Pasta"
          actions={
            <>
              <Button
                variant="outline"
                className="rounded-md border-border-secondary-button bg-card"
              >
                <HugeiconsIcon icon={PrinterIcon} className="mr-2 h-4 w-4" />
                Print
              </Button>
              <Button
                className="rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => navigate("/recipes/new")}
              >
                <HugeiconsIcon
                  icon={PencilEdit01Icon}
                  className="mr-2 h-4 w-4"
                />
                Edit recipe
              </Button>
            </>
          }
        />

        <section className="mb-6 grid gap-5 xl:grid-cols-[1.45fr_0.95fr]">
          <article className="overflow-hidden rounded-lg border-2 border-border bg-card shadow-[0_18px_45px_rgba(89,76,45,0.08)]">
            <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="p-6">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-sm font-medium text-primary">
                  <HugeiconsIcon icon={BookOpen01Icon} className="h-4 w-4" />
                  Saved family recipe
                </div>
                <h2 className="text-2xl font-semibold">
                  A warm weeknight pasta with a soft tomato cream sauce.
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
                  A cozy dinner recipe for the nights when everyone wanders into
                  the kitchen early. Simple ingredients, gentle flavor, and
                  enough sauce to make seconds feel inevitable.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      className="rounded-full bg-muted px-4 py-2 text-sm font-medium text-primary"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <img
                src={tomatoPastaImage}
                alt="Creamy tomato pasta"
                className="h-72 w-full object-cover lg:h-full"
              />
            </div>
          </article>

          <aside className="rounded-lg border-2 border-border bg-card p-5 shadow-[0_18px_45px_rgba(89,76,45,0.08)]">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Recipe snapshot</h2>
              <HugeiconsIcon
                icon={FavouriteIcon}
                className="h-6 w-6 text-[#d27a43]"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Prep", value: "10 min", icon: Clock01Icon },
                { label: "Cook", value: "25 min", icon: Clock01Icon },
                { label: "Servings", value: "4 plates", icon: UserGroupIcon },
                {
                  label: "Difficulty",
                  value: "Easy",
                  icon: CheckmarkCircle01Icon,
                },
              ].map((item) => (
                <div
                  className="rounded-lg border border-border bg-background/70 p-4"
                  key={item.label}
                >
                  <HugeiconsIcon
                    icon={item.icon}
                    className="mb-3 h-5 w-5 text-primary"
                  />
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  <p className="mt-1 text-lg font-semibold">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-lg border border-border bg-background/70 p-4">
              <p className="text-sm font-semibold">Kitchen note</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Save a splash of pasta water before draining. It helps the sauce
                cling beautifully.
              </p>
            </div>
          </aside>
        </section>

        <section className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
          <aside className="space-y-6">
            <div className="rounded-lg border-2 border-border bg-card p-5">
              <div className="mb-5 flex items-center gap-2">
                <HugeiconsIcon icon={KitchenUtensilsIcon} className="h-5 w-5" />
                <h2 className="text-xl font-semibold">Ingredients</h2>
              </div>
              <div className="space-y-3">
                {ingredients.map((ingredient) => (
                  <label
                    className="flex items-start gap-3 rounded-md border border-border bg-background/70 p-3 text-sm"
                    key={ingredient}
                  >
                    <input
                      className="mt-1 size-4 rounded border-input accent-primary"
                      type="checkbox"
                    />
                    <span>{ingredient}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="rounded-lg border-2 border-border bg-card p-5">
              <h2 className="mb-4 text-xl font-semibold">Added by</h2>
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  RM
                </span>
                <div>
                  <p className="font-semibold">Raquelle Mae</p>
                  <p className="text-sm text-muted-foreground">
                    Saved on May 8, 2026
                  </p>
                </div>
              </div>
            </div>
          </aside>

          <article className="rounded-lg border-2 border-border bg-card p-5">
            <div className="mb-5 flex items-center gap-2">
              <HugeiconsIcon icon={Note01Icon} className="h-5 w-5" />
              <h2 className="text-xl font-semibold">Cooking method</h2>
            </div>
            <ol className="space-y-4">
              {steps.map((step, index) => (
                <li
                  className="grid gap-4 rounded-lg border border-border bg-background/70 p-4 md:grid-cols-[2.75rem_1fr]"
                  key={step}
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-muted text-sm font-semibold text-primary">
                    {index + 1}
                  </span>
                  <p className="pt-2 text-sm leading-6">{step}</p>
                </li>
              ))}
            </ol>
          </article>
        </section>
      </main>
    </SideBarLayout>
  );
}
