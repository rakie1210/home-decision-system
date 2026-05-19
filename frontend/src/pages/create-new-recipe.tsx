import { useState, useEffect } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  CheckmarkCircle01Icon,
  ChefHatIcon,
  Clock01Icon,
  FloppyDiskIcon,
  GitBranchIcon,
  ImageUploadIcon,
  KitchenUtensilsIcon,
  Link01Icon,
  NoteEditIcon,
  Plus,
  Minus,
} from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PageHeader } from "@/components/page-header";
import { SideBarLayout } from "@/components/sidebar";
import createRecipeIllustration from "@/assets/create-recipe-illustration.png";
import pottedPlantsImage from "@/assets/potted-plants.png";
import { getCountries } from "@/actions/common-actions";
import { useQuery } from "@tanstack/react-query";

const ingredientVariationRows = [
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

const futureLinks = [
  "Connect this variant to the original adobo recipe",
  "Add more country versions under the same recipe family",
  "Compare ingredients and notes between each variation",
];

const quickTags = [
  "Original recipe",
  "Country variant",
  "Family favorite",
  "Dinner",
];

export default function CreateNewRecipe() {
  const [selectedTags, setSelectedTags] = useState([
    "Country variant",
    "Dinner",
  ]);

  const [selectedCountry, setSelectedCountry] = useState("Sweden");

  const {
    data: countries = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["countries"],
    queryFn: async () => {
      const response = await getCountries();
      return response.map((country) => ({
        id: country.id,
        name: country.name,
        code: country.code,
      }));
    },
  });

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
          eyebrow="Create recipe variant"
          title="Add a recipe with country variations"
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

        <section className="mb-6 grid gap-4 xl:grid-cols-[1.55fr_1fr]">
          <div className="overflow-hidden rounded-lg border-2 border-border bg-card shadow-[0_18px_45px_rgba(89,76,45,0.08)]">
            <div className="grid gap-3 p-6 lg:grid-cols-[1fr_0.85fr] lg:items-center">
              <div className="space-y-5">
                <div>
                  <div className="mb-5 flex items-center gap-2">
                    <HugeiconsIcon icon={ChefHatIcon} className="h-5 w-5" />
                    <h2 className="text-xl font-semibold">Recipe basics</h2>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <label className="space-y-2">
                      <span className="text-sm font-medium">
                        Original recipe name
                      </span>
                      <Input defaultValue="Filipino Chicken Adobo" />
                    </label>
                    <label className="space-y-2">
                      <span className="text-sm font-medium">Base servings</span>
                      <Input defaultValue="2" />
                    </label>
                    <label className="space-y-2">
                      <span className="text-sm font-medium">
                        Original country
                      </span>
                      <Select
                        disabled={isLoading || isError}
                        onValueChange={setSelectedCountry}
                        value={selectedCountry}
                      >
                        <SelectTrigger className="w-full max-w-64">
                          <SelectValue
                            placeholder={
                              isLoading
                                ? "Loading countries..."
                                : isError
                                  ? "Could not load countries"
                                  : "Select a country"
                            }
                          />
                        </SelectTrigger>
                        <SelectContent position="popper" className="h-64 w-2xs">
                          {countries.map((country) => (
                            <SelectItem key={country.id} value={country.name}>
                              {country.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </label>
                    <label className="space-y-2">
                      <span className="text-sm font-medium">Prep time</span>
                      <Input defaultValue="15 min" />
                    </label>
                    <label className="space-y-2">
                      <span className="text-sm font-medium">Cook time</span>
                      <Input defaultValue="45 min" />
                    </label>
                  </div>
                  <label className="mt-4 block space-y-2">
                    <span className="text-sm font-medium">
                      Recipe description
                    </span>
                    <textarea
                      className="min-h-24 w-full rounded-md border border-input bg-background px-3 py-3 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/25"
                      defaultValue="A chicken dish cooked in soy sauce, vinegar, garlic, and bay leaves."
                    />
                  </label>
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
              <h2 className="text-lg font-semibold">Variant progress</h2>
              <HugeiconsIcon
                icon={CheckmarkCircle01Icon}
                className="h-6 w-6 text-primary"
              />
            </div>
            <div className="space-y-4">
              {[
                {
                  title: "Original recipe",
                  detail: "Filipino adobo is the parent",
                  done: true,
                },
                {
                  title: "Country variation",
                  detail: "Sweden version is being drafted",
                  done: true,
                },
                {
                  title: "Ingredient swaps",
                  detail: "Local pantry substitutions mapped",
                  done: true,
                },
                {
                  title: "Variant links",
                  detail: "Future recipe relationships planned",
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
              <div className="mb-5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <HugeiconsIcon
                    icon={KitchenUtensilsIcon}
                    className="h-5 w-5"
                  />
                  <h2 className="text-xl font-semibold">Ingredients</h2>
                </div>
              </div>
              <div className="space-y-3">
                {ingredientVariationRows.map((row) => (
                  <div
                    className="grid gap-3 rounded-md border border-border bg-background/70 p-3 lg:grid-cols-[1fr_2fr_2fr_3fr]"
                    key={row.original}
                  >
                    <label className="space-y-2">
                      <span className="text-xs font-medium text-muted-foreground">
                        Amount
                      </span>
                      <ButtonGroup
                        orientation="horizontal"
                        aria-label="Amount"
                        className="w-full"
                      >
                        <Input placeholder="2" defaultValue={row.amount} />
                        <Button variant="outline" size="icon">
                          <HugeiconsIcon icon={Plus} className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon">
                          <HugeiconsIcon icon={Minus} className="h-4 w-4" />
                        </Button>
                      </ButtonGroup>
                    </label>
                    <label className="space-y-2">
                      <span className="text-xs font-medium text-muted-foreground">
                        Ingredient name
                      </span>
                      <Input
                        defaultValue={row.original}
                        aria-label="Original ingredient"
                      />
                    </label>
                    <label className="space-y-2">
                      <span className="text-xs font-medium text-muted-foreground">
                        Replacement ingredient
                      </span>
                      <Input
                        defaultValue={row.variation}
                        aria-label="replacement ingredient"
                      />
                    </label>
                    <label className="space-y-2">
                      <span className="text-xs font-medium text-muted-foreground">
                        Note
                      </span>
                      <Input
                        defaultValue={row.note}
                        aria-label="ingredient note"
                      />
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border-2 border-border bg-card p-5">
              <div className="mb-5 flex items-center gap-2">
                <HugeiconsIcon icon={NoteEditIcon} className="h-5 w-5" />
                <h2 className="text-xl font-semibold">Cooking steps</h2>
              </div>
              <div className="space-y-3">
                {[
                  "Brown chicken pieces, then add garlic, peppercorns, bay leaves, soy sauce, and vinegar.",
                  "Simmer gently until the chicken is tender and the sauce is glossy.",
                  "Stir in a small spoon of lingonberry jam near the end for the Sweden variation.",
                ].map((step, index) => (
                  <label
                    className="grid gap-3 rounded-md border border-border bg-background/70 p-3 md:grid-cols-[2.5rem_1fr]"
                    key={step}
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-sm font-semibold text-primary">
                      {index + 1}
                    </span>
                    <textarea
                      className="min-h-16 w-full rounded-md border border-input bg-card px-3 py-3 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/25"
                      defaultValue={step}
                    />
                  </label>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-lg border-2 border-border bg-card p-5">
              <div className="mb-4 flex items-center gap-2">
                <HugeiconsIcon icon={Link01Icon} className="h-5 w-5" />
                <h2 className="text-xl font-semibold">Recipe links</h2>
              </div>
              <div className="space-y-4">
                <label className="space-y-2">
                  <span className="text-sm font-medium">
                    Original recipe link
                  </span>
                  <Input defaultValue="https://homewise.app/recipes/filipino-adobo" />
                </label>
              </div>
            </div>

            <div className="rounded-lg border-2 border-border bg-card p-5">
              <div className="mb-4 flex items-center gap-2">
                <HugeiconsIcon icon={ImageUploadIcon} className="h-5 w-5" />
                <h2 className="text-xl font-semibold">Cover photo</h2>
              </div>
              <div className="flex min-h-56 flex-col items-center justify-center rounded-lg border border-dashed border-sidebar-border bg-background/70 p-6 text-center">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-muted text-primary">
                  <HugeiconsIcon icon={ImageUploadIcon} className="h-6 w-6" />
                </div>
                <p className="text-sm font-semibold">Upload variant image</p>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                  This can show the country variation on the recipe card.
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
              <div className="mb-4 flex items-center justify-between gap-3">
                <h2 className="text-xl font-semibold">Card preview</h2>
                <HugeiconsIcon icon={Clock01Icon} className="h-5 w-5" />
              </div>
              <div className="overflow-hidden rounded-lg border border-border bg-background">
                <img
                  src={createRecipeIllustration}
                  alt=""
                  className="h-36 w-full object-cover"
                />
                <div className="p-4">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <span className="rounded-full bg-[#dce9f6] px-3 py-1 text-xs font-semibold text-[#335b78]">
                      Sweden variant
                    </span>
                    <span className="text-xs text-muted-foreground">
                      60 min
                    </span>
                  </div>
                  <h3 className="font-semibold">Sweden Adobo</h3>
                  <p className="mt-2 text-sm leading-5 text-muted-foreground">
                    Adapted from Filipino Chicken Adobo with local pantry swaps.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </section>
      </main>
    </SideBarLayout>
  );
}
