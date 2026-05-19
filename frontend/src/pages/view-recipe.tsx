import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  BookOpen01Icon,
  CheckmarkCircle01Icon,
  Clock01Icon,
  Exchange01Icon,
  FavouriteIcon,
  Flag01Icon,
  GitBranchIcon,
  Globe02Icon,
  KitchenUtensilsIcon,
  Link01Icon,
  Note01Icon,
  PencilEdit01Icon,
  PrinterIcon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/page-header";
import { SideBarLayout } from "@/components/sidebar";
import createRecipeIllustration from "@/assets/create-recipe-illustration.png";
import pottedPlantsImage from "@/assets/potted-plants.png";

const variantTabs = [
  {
    country: "Philippines",
    label: "Original",
    name: "Filipino Chicken Adobo",
    status: "Base recipe",
  },
  {
    country: "Sweden",
    label: "Active variant",
    name: "Sweden Adobo",
    status: "Ready to cook",
  },
  {
    country: "Japan",
    label: "Future",
    name: "Miso Adobo",
    status: "Idea",
  },
];

const countryProfiles = [
  { label: "Original country", value: "Philippines", icon: Flag01Icon },
  { label: "Variant country", value: "Sweden", icon: Globe02Icon },
  { label: "Relationship", value: "Adapted from original", icon: GitBranchIcon },
  { label: "Variant goal", value: "Local pantry version", icon: Exchange01Icon },
];

const ingredientVariations = [
  {
    amount: "1/2 cup",
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

const ingredients = [
  "1 kg chicken thighs or drumsticks",
  "1/2 cup apple cider vinegar",
  "1/4 cup light soy sauce + 1 tsp mushroom fond",
  "6 cloves garlic, crushed",
  "3 bay leaves + a few dill stems",
  "1 tbsp lingonberry jam",
];

const steps = [
  "Brown chicken pieces, then add garlic, peppercorns, bay leaves, soy sauce, mushroom fond, and vinegar.",
  "Simmer gently until the chicken is tender and the sauce has reduced into a glossy adobo glaze.",
  "Stir in lingonberry jam near the end so the Sweden variation has a gentle sweet-tart finish.",
  "Serve with rice, boiled potatoes, or a simple cucumber salad depending on the meal you want.",
];

const tags = ["Adobo", "Sweden variant", "Filipino original", "Dinner"];

export default function ViewRecipe() {
  const navigate = useNavigate();
  const [activeVariant, setActiveVariant] = useState("Sweden");

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
            { label: "Sweden Adobo" },
          ]}
          eyebrow="Recipe variant details"
          title="Sweden Adobo"
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
                Edit variant
              </Button>
            </>
          }
        />

        <section className="mb-6 grid gap-5 xl:grid-cols-[1.45fr_0.95fr]">
          <article className="overflow-hidden rounded-lg border-2 border-border bg-card shadow-[0_18px_45px_rgba(89,76,45,0.08)]">
            <div className="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="p-6">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#dce9f6] px-3 py-1 text-sm font-medium text-[#335b78]">
                  <HugeiconsIcon icon={GitBranchIcon} className="h-4 w-4" />
                  Adapted from Filipino Chicken Adobo
                </div>
                <h2 className="text-2xl font-semibold">
                  A Sweden-friendly adobo that keeps the Filipino backbone and
                  swaps in local pantry ingredients.
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
                  This variant keeps soy, vinegar, garlic, peppercorns, and bay
                  leaves at the center, then adds apple cider vinegar, mushroom
                  fond, dill stems, and lingonberry jam for a Nordic pantry
                  interpretation.
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
                src={createRecipeIllustration}
                alt="Recipe notebook for a country recipe variation"
                className="h-72 w-full object-cover lg:h-full"
              />
            </div>
          </article>

          <aside className="rounded-lg border-2 border-border bg-card p-5 shadow-[0_18px_45px_rgba(89,76,45,0.08)]">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Variant snapshot</h2>
              <HugeiconsIcon
                icon={FavouriteIcon}
                className="h-6 w-6 text-[#d27a43]"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Prep", value: "15 min", icon: Clock01Icon },
                { label: "Cook", value: "45 min", icon: Clock01Icon },
                { label: "Servings", value: "4 plates", icon: UserGroupIcon },
                {
                  label: "Status",
                  value: "Variant",
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
                Add the lingonberry jam at the end. It should balance the sauce,
                not turn the adobo sweet.
              </p>
            </div>
          </aside>
        </section>

        <section className="mb-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {countryProfiles.map((profile) => (
            <div
              className="rounded-lg border-2 border-border bg-card p-4"
              key={profile.label}
            >
              <HugeiconsIcon
                icon={profile.icon}
                className="mb-3 h-5 w-5 text-primary"
              />
              <p className="text-xs text-muted-foreground">{profile.label}</p>
              <p className="mt-1 text-base font-semibold">{profile.value}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-6 xl:grid-cols-[0.85fr_1.15fr]">
          <aside className="space-y-6">
            <div className="rounded-lg border-2 border-border bg-card p-5">
              <div className="mb-5 flex items-center gap-2">
                <HugeiconsIcon icon={Globe02Icon} className="h-5 w-5" />
                <h2 className="text-xl font-semibold">Recipe family</h2>
              </div>
              <div className="space-y-3">
                {variantTabs.map((variant) => {
                  const selected = activeVariant === variant.country;

                  return (
                    <button
                      className={`w-full rounded-lg border p-4 text-left transition-colors ${
                        selected
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-background/70 hover:bg-muted"
                      }`}
                      key={variant.country}
                      onClick={() => setActiveVariant(variant.country)}
                      type="button"
                    >
                      <div className="mb-3 flex items-center justify-between gap-3">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${
                            selected
                              ? "bg-primary-foreground/20"
                              : "bg-[#f2d9c7] text-[#70462f]"
                          }`}
                        >
                          {variant.label}
                        </span>
                        <HugeiconsIcon icon={Flag01Icon} className="h-5 w-5" />
                      </div>
                      <p className="font-semibold">{variant.name}</p>
                      <p
                        className={`mt-1 text-sm ${
                          selected
                            ? "text-primary-foreground/80"
                            : "text-muted-foreground"
                        }`}
                      >
                        {variant.country} · {variant.status}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

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
              <div className="mb-4 flex items-center gap-2">
                <HugeiconsIcon icon={Link01Icon} className="h-5 w-5" />
                <h2 className="text-xl font-semibold">Recipe links</h2>
              </div>
              <div className="space-y-3 text-sm">
                <a
                  className="block rounded-md border border-border bg-background/70 p-3 text-primary underline-offset-4 hover:underline"
                  href="https://homewise.app/recipes/filipino-adobo"
                >
                  Original recipe: Filipino Chicken Adobo
                </a>
                <a
                  className="block rounded-md border border-border bg-background/70 p-3 text-primary underline-offset-4 hover:underline"
                  href="https://homewise.app/recipes/sweden-adobo-draft"
                >
                  Variant source: Sweden Adobo
                </a>
                <div className="rounded-md border border-border bg-background/70 p-3">
                  <p className="text-xs text-muted-foreground">
                    Parent recipe ID
                  </p>
                  <p className="mt-1 font-semibold">recipe_fil_adobo_001</p>
                </div>
              </div>
            </div>
          </aside>

          <div className="space-y-6">
            <article className="rounded-lg border-2 border-border bg-card p-5">
              <div className="mb-5 flex items-center gap-2">
                <HugeiconsIcon icon={Exchange01Icon} className="h-5 w-5" />
                <h2 className="text-xl font-semibold">
                  Ingredient variations
                </h2>
              </div>
              <div className="space-y-3">
                {ingredientVariations.map((row) => (
                  <div
                    className="grid gap-3 rounded-lg border border-border bg-background/70 p-4 lg:grid-cols-[0.45fr_1fr_1fr]"
                    key={row.original}
                  >
                    <div>
                      <p className="text-xs text-muted-foreground">Amount</p>
                      <p className="mt-1 font-semibold">{row.amount}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">
                        Original ingredient
                      </p>
                      <p className="mt-1 font-semibold">{row.original}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">
                        Sweden variation
                      </p>
                      <p className="mt-1 font-semibold">{row.variation}</p>
                    </div>
                    <p className="text-sm leading-6 text-muted-foreground lg:col-span-3">
                      {row.note}
                    </p>
                  </div>
                ))}
              </div>
            </article>

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

            <article className="rounded-lg border-2 border-border bg-card p-5">
              <div className="mb-4 flex items-center gap-2">
                <HugeiconsIcon icon={BookOpen01Icon} className="h-5 w-5" />
                <h2 className="text-xl font-semibold">Variant notes</h2>
              </div>
              <div className="grid gap-3 md:grid-cols-3">
                {[
                  "Keeps the original adobo structure visible.",
                  "Stores the country-specific changes as ingredient metadata.",
                  "Ready for future links to Japan, Mexico, or other variants.",
                ].map((note) => (
                  <div
                    className="rounded-lg border border-border bg-background/70 p-4 text-sm leading-6"
                    key={note}
                  >
                    {note}
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>
      </main>
    </SideBarLayout>
  );
}
