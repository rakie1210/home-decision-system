import { useMemo, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  CheckmarkCircle01Icon,
  ChefHatIcon,
  Clock01Icon,
  FloppyDiskIcon,
  KitchenUtensilsIcon,
  Link01Icon,
  NoteEditIcon,
  Tick02Icon,
  Loading01Icon,
} from "@hugeicons/core-free-icons";
import { useForm } from "@tanstack/react-form";
import { useQuery } from "@tanstack/react-query";

import { getCountries } from "@/actions/common-actions";
import createRecipeIllustration from "@/assets/create-recipe-illustration.png";
import pottedPlantsImage from "@/assets/potted-plants.png";
import { PageHeader } from "@/components/page-header";
import { SideBarLayout } from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Stepper,
  StepperContent,
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperNav,
  StepperPanel,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/components/reui/stepper";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

import {
  cookingSteps,
  ingredientRow,
} from "./contants/create-new-recipe-contants";
import type { ReciperFormValues } from "./types/create-new-recipe-types";

const quickTags = [
  "Original recipe",
  "Country variant",
  "Family favorite",
  "Dinner",
];

const createRecipeSteps = [
  {
    id: "basics",
    label: "Basics",
    description: "Create your recipe",
    icon: ChefHatIcon,
  },
  {
    id: "country",
    label: "Country version",
    description: "Add a country variant",
    icon: Link01Icon,
  },
  {
    id: "ingredients",
    label: "Ingredients",
    description: "Add ingredients",
    icon: KitchenUtensilsIcon,
  },
  {
    id: "steps",
    label: "Steps",
    description: "Add cooking steps",
    icon: NoteEditIcon,
  },
  {
    id: "review",
    label: "Review",
    description: "Review your recipe",
    icon: CheckmarkCircle01Icon,
  },
] as const;

const defaultRecipeValues: ReciperFormValues = {
  recipeId: null,
  recipeName: "Filipino Chicken Adobo",
  recipeDescription:
    "A chicken dish cooked in soy sauce, vinegar, garlic, and bay leaves.",
  baseServings: 2,
  prepTime: 15,
  cookTime: 45,
  originalCountry: "Philippines",
  variantCountry: "Sweden",
  ingredients: ingredientRow,
  cookingSteps,
  tags: ["Country variant", "Dinner"],
  recipeLink: "https://homewise.app/recipes/filipino-adobo",
};

type StepId = (typeof createRecipeSteps)[number]["id"];

type CountryOption = {
  id: string;
  name: string;
  code: string;
};

type ValidationItem = {
  section: StepId;
  message: string;
};

function fieldError(errors: unknown[]) {
  return errors.length ? (
    <p className="text-xs font-medium text-destructive">{String(errors[0])}</p>
  ) : null;
}

/**
 * Validates a specific step based on the current form values
 * @param step - The step ID to validate
 * @param values - The current form values
 * @returns true if the step is complete, false otherwise
 */
function validateStep(step: StepId, values: ReciperFormValues): boolean {
  if (step === "basics") {
    return Boolean(
      values.recipeName.trim() &&
      values.recipeDescription.trim() &&
      values.baseServings > 0 &&
      values.prepTime >= 0 &&
      values.cookTime >= 0 &&
      values.originalCountry,
    );
  }

  if (step === "country") {
    return Boolean(values.variantCountry && values.recipeLink.trim());
  }

  if (step === "ingredients") {
    return values.ingredients.every(
      (ingredient) =>
        ingredient.amount.amountText.trim() &&
        ingredient.ingredientName.trim() &&
        ingredient.variationIngredientName?.trim(),
    );
  }

  if (step === "steps") {
    return values.cookingSteps.every((step) => step.instruction.trim());
  }

  return (
    validateStep("basics", values) &&
    validateStep("country", values) &&
    validateStep("ingredients", values) &&
    validateStep("steps", values)
  );
}

/**
 * Gets validation items for all incomplete steps
 * @param values - The current form values
 * @returns Array of validation items with section and message
 */
function getValidationItems(values: ReciperFormValues): ValidationItem[] {
  const items: ValidationItem[] = [];

  if (!values.recipeName.trim()) {
    items.push({ section: "basics", message: "Add the recipe name." });
  }

  if (!values.recipeDescription.trim()) {
    items.push({ section: "basics", message: "Add a short description." });
  }

  if (values.baseServings <= 0) {
    items.push({ section: "basics", message: "Servings must be above 0." });
  }

  if (values.prepTime < 0 || values.cookTime < 0) {
    items.push({
      section: "basics",
      message: "Prep and cook time cannot be below 0.",
    });
  }

  if (!values.originalCountry) {
    items.push({ section: "basics", message: "Choose the original country." });
  }

  if (!values.variantCountry) {
    items.push({ section: "country", message: "Choose the variant country." });
  }

  if (!values.recipeLink.trim()) {
    items.push({
      section: "country",
      message: "Add the original recipe link.",
    });
  }

  values.ingredients.forEach((ingredient, index) => {
    if (!ingredient.amount.amountText.trim()) {
      items.push({
        section: "ingredients",
        message: `Ingredient ${index + 1} needs an amount.`,
      });
    }

    if (!ingredient.ingredientName.trim()) {
      items.push({
        section: "ingredients",
        message: `Ingredient ${index + 1} needs a name.`,
      });
    }

    if (!ingredient.variationIngredientName?.trim()) {
      items.push({
        section: "ingredients",
        message: `Ingredient ${index + 1} needs a replacement.`,
      });
    }
  });

  values.cookingSteps.forEach((step, index) => {
    if (!step.instruction.trim()) {
      items.push({
        section: "steps",
        message: `Step ${index + 1} needs instructions.`,
      });
    }
  });

  return items;
}

/**
 * Renders a section card with icon and title
 * @param param0
 * @returns
 */
function SectionCard({
  children,
  icon,
  title,
}: {
  children: React.ReactNode;
  icon: typeof ChefHatIcon;
  title: string;
}) {
  return (
    <section className="rounded-lg border-2 border-border bg-card p-5">
      <div className="mb-5 flex items-center gap-2">
        <HugeiconsIcon icon={icon} className="h-5 w-5" />
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      {children}
    </section>
  );
}

export default function CreateNewRecipe() {
  const [submissionStatus, setSubmissionStatus] = useState("");

  const {
    data: countries = [],
    isLoading,
    isError,
  } = useQuery<CountryOption[]>({
    queryKey: ["countries"],
    queryFn: async () => {
      const response = await getCountries();
      return response.map((country: CountryOption) => ({
        id: country.id,
        name: country.name,
        code: country.code,
      }));
    },
  });

  const countryOptions = useMemo(() => {
    const fallbackCountries = [
      { id: "philippines", name: "Philippines", code: "PH" },
      { id: "sweden", name: "Sweden", code: "SE" },
    ];

    return countries.length ? countries : fallbackCountries;
  }, [countries]);

  const form = useForm({
    defaultValues: defaultRecipeValues,
    onSubmit: async ({ value }) => {
      const missingItems = getValidationItems(value);

      if (missingItems.length > 0) {
        setSubmissionStatus("Some details still need attention above.");
        return;
      }

      setSubmissionStatus(
        `${value.recipeName} is ready to publish as a ${value.variantCountry} version.`,
      );
      console.info("Create recipe submission", value);
    },
  });

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
                type="button"
              >
                Save draft
              </Button>
              <Button
                className="rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
                form="create-recipe-form"
                type="submit"
              >
                <HugeiconsIcon icon={FloppyDiskIcon} className="mr-2 h-4 w-4" />
                Publish recipe
              </Button>
            </>
          }
        />

        <form
          className="grid gap-6 xl:grid-cols-[1.35fr_0.8fr]"
          id="create-recipe-form"
          onSubmit={(event) => {
            event.preventDefault();
            event.stopPropagation();
            form.handleSubmit();
          }}
        >
          <div className="space-y-5">
            <form.Subscribe selector={(state) => state.values}>
              {(values) => {
                const validationItems = getValidationItems(values);

                return (
                  <section className="rounded-lg border-2 border-border bg-card p-5 shadow-[0_18px_45px_rgba(89,76,45,0.08)]">
                    <Stepper
                      orientation="horizontal"
                      interactive={false}
                      indicators={{
                        completed: (
                          <HugeiconsIcon icon={Tick02Icon} size={16} />
                        ),
                        loading: (
                          <HugeiconsIcon
                            icon={Loading01Icon}
                            className="size-3.5 animate-spin"
                          />
                        ),
                      }}
                      className="flex w-full space-y-8"
                    >
                      <StepperNav>
                        {createRecipeSteps.map((step, index) => {
                          const isStepComplete = validateStep(step.id, values);
                          return (
                            <StepperItem
                              key={step.id}
                              step={index + 1}
                              completed={isStepComplete}
                              className="relative flex-1 items-start"
                            >
                              <StepperTrigger className="flex flex-col gap-2.5">
                                <StepperIndicator>
                                  <HugeiconsIcon
                                    icon={
                                      isStepComplete ? Tick02Icon : step.icon
                                    }
                                    size={16}
                                  />
                                </StepperIndicator>
                                <StepperTitle className="group-data-[state=inactive]/step:text-muted-foreground text-start text-base font-semibold">
                                  {step.label}
                                </StepperTitle>
                                <StepperDescription>
                                  {step.description}
                                </StepperDescription>
                                <Badge
                                  variant="outline"
                                  className={cn(
                                    "gap-1",
                                    isStepComplete
                                      ? "border-badge-sage/60 bg-badge-sage text-badge-sage-foreground"
                                      : "border-border bg-warning/60 text-badge-sage-foreground",
                                  )}
                                >
                                  {isStepComplete
                                    ? "Complete"
                                    : "Needs details"}
                                </Badge>
                              </StepperTrigger>
                              {createRecipeSteps.length > index + 1 && (
                                <StepperSeparator className="group-data-[state=completed]/step:bg-primary absolute inset-x-0 top-2.5 left-[calc(50%+0.875rem)] m-0 group-data-[orientation=horizontal]/stepper-nav:w-[calc(100%-2rem+0.225rem)] group-data-[orientation=horizontal]/stepper-nav:flex-none" />
                              )}
                            </StepperItem>
                          );
                        })}
                      </StepperNav>
                    </Stepper>

                    <div
                      className={cn(
                        "mt-5 rounded-md border p-4",
                        validationItems.length
                          ? "border-destructive/30 bg-destructive/5"
                          : "border-primary/30 bg-primary/10",
                      )}
                    >
                      <p className="text-sm font-semibold">
                        {validationItems.length
                          ? "Details to finish"
                          : "Ready for review"}
                      </p>
                      {validationItems.length ? (
                        <ul className="mt-3 grid gap-2 text-sm text-muted-foreground md:grid-cols-2">
                          {validationItems.map((item) => (
                            <li
                              className="flex gap-2"
                              key={`${item.section}-${item.message}`}
                            >
                              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />
                              <span>{item.message}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="mt-2 text-sm text-muted-foreground">
                          The recipe has the details needed to publish.
                        </p>
                      )}
                    </div>
                  </section>
                );
              }}
            </form.Subscribe>

            <SectionCard icon={ChefHatIcon} title="Basics">
              <div className="grid gap-4 md:grid-cols-2">
                <form.Field
                  name="recipeName"
                  validators={{
                    onChange: ({ value }) =>
                      value.trim() ? undefined : "Recipe name is required",
                  }}
                >
                  {(field) => (
                    <div className="space-y-2">
                      <Label htmlFor={field.name}>Original recipe name</Label>
                      <Input
                        id={field.name}
                        onBlur={field.handleBlur}
                        onChange={(event) =>
                          field.handleChange(event.target.value)
                        }
                        value={field.state.value}
                      />
                      {fieldError(field.state.meta.errors)}
                    </div>
                  )}
                </form.Field>

                <form.Field
                  name="baseServings"
                  validators={{
                    onChange: ({ value }) =>
                      value > 0 ? undefined : "Servings must be above 0",
                  }}
                >
                  {(field) => (
                    <div className="space-y-2">
                      <Label htmlFor={field.name}>Base servings</Label>
                      <Input
                        id={field.name}
                        min={1}
                        onBlur={field.handleBlur}
                        onChange={(event) =>
                          field.handleChange(Number(event.target.value))
                        }
                        type="number"
                        value={field.state.value}
                      />
                      {fieldError(field.state.meta.errors)}
                    </div>
                  )}
                </form.Field>

                <form.Field name="originalCountry">
                  {(field) => (
                    <div className="space-y-2">
                      <Label>Original country</Label>
                      <Select
                        disabled={isLoading || isError}
                        onValueChange={field.handleChange}
                        value={field.state.value}
                      >
                        <SelectTrigger className="w-full">
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
                          {countryOptions.map((country) => (
                            <SelectItem key={country.id} value={country.name}>
                              {country.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                </form.Field>

                <form.Field
                  name="prepTime"
                  validators={{
                    onChange: ({ value }) =>
                      value >= 0
                        ? undefined
                        : "Prep time cannot be less than 0",
                  }}
                >
                  {(field) => (
                    <div className="space-y-2">
                      <Label htmlFor={field.name}>Prep time</Label>
                      <Input
                        id={field.name}
                        min={0}
                        onBlur={field.handleBlur}
                        onChange={(event) =>
                          field.handleChange(Number(event.target.value))
                        }
                        type="number"
                        value={field.state.value}
                      />
                      {fieldError(field.state.meta.errors)}
                    </div>
                  )}
                </form.Field>

                <form.Field
                  name="cookTime"
                  validators={{
                    onChange: ({ value }) =>
                      value >= 0
                        ? undefined
                        : "Cook time cannot be less than 0",
                  }}
                >
                  {(field) => (
                    <div className="space-y-2">
                      <Label htmlFor={field.name}>Cook time</Label>
                      <Input
                        id={field.name}
                        min={0}
                        onBlur={field.handleBlur}
                        onChange={(event) =>
                          field.handleChange(Number(event.target.value))
                        }
                        type="number"
                        value={field.state.value}
                      />
                      {fieldError(field.state.meta.errors)}
                    </div>
                  )}
                </form.Field>
              </div>

              <form.Field
                name="recipeDescription"
                validators={{
                  onChange: ({ value }) =>
                    value.trim() ? undefined : "Recipe description is required",
                }}
              >
                {(field) => (
                  <div className="mt-4 space-y-2">
                    <Label htmlFor={field.name}>Recipe description</Label>
                    <Textarea
                      id={field.name}
                      onBlur={field.handleBlur}
                      onChange={(event) =>
                        field.handleChange(event.target.value)
                      }
                      value={field.state.value}
                    />
                    {fieldError(field.state.meta.errors)}
                  </div>
                )}
              </form.Field>
            </SectionCard>

            <SectionCard icon={Link01Icon} title="Country version">
              <div className="grid gap-4 md:grid-cols-2">
                <form.Field name="variantCountry">
                  {(field) => (
                    <div className="space-y-2">
                      <Label>Variant country</Label>
                      <Select
                        disabled={isLoading || isError}
                        onValueChange={field.handleChange}
                        value={field.state.value}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a country" />
                        </SelectTrigger>
                        <SelectContent position="popper" className="h-64 w-2xs">
                          {countryOptions.map((country) => (
                            <SelectItem key={country.id} value={country.name}>
                              {country.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                </form.Field>

                <form.Field
                  name="recipeLink"
                  validators={{
                    onChange: ({ value }) =>
                      value.trim() ? undefined : "Recipe link is required",
                  }}
                >
                  {(field) => (
                    <div className="space-y-2">
                      <Label htmlFor={field.name}>Original recipe link</Label>
                      <Input
                        id={field.name}
                        onBlur={field.handleBlur}
                        onChange={(event) =>
                          field.handleChange(event.target.value)
                        }
                        value={field.state.value}
                      />
                      {fieldError(field.state.meta.errors)}
                    </div>
                  )}
                </form.Field>
              </div>

              <form.Field name="tags">
                {(field) => (
                  <div className="mt-4 space-y-2">
                    <Label>Tags</Label>
                    <div className="flex flex-wrap gap-2">
                      {quickTags.map((tag) => {
                        const selected = field.state.value.includes(tag);

                        return (
                          <button
                            className={cn(
                              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                              selected
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted text-primary hover:bg-accent",
                            )}
                            key={tag}
                            onClick={() =>
                              field.handleChange(
                                selected
                                  ? field.state.value.filter(
                                      (selectedTag) => selectedTag !== tag,
                                    )
                                  : [...field.state.value, tag],
                              )
                            }
                            type="button"
                          >
                            {tag}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </form.Field>
            </SectionCard>

            <SectionCard icon={KitchenUtensilsIcon} title="Ingredients">
              <div className="space-y-3">
                {defaultRecipeValues.ingredients.map((ingredient, index) => (
                  <div
                    className="grid gap-3 rounded-md border border-border bg-background/70 p-3 lg:grid-cols-[1fr_2fr_2fr_3fr]"
                    key={ingredient.id}
                  >
                    <form.Field
                      name={`ingredients[${index}].amount.amountText`}
                      validators={{
                        onChange: ({ value }) =>
                          value.trim() ? undefined : "Amount is required",
                      }}
                    >
                      {(field) => (
                        <div className="space-y-2">
                          <Label htmlFor={field.name}>Amount</Label>
                          <Input
                            id={field.name}
                            onBlur={field.handleBlur}
                            onChange={(event) =>
                              field.handleChange(event.target.value)
                            }
                            value={field.state.value}
                          />
                          {fieldError(field.state.meta.errors)}
                        </div>
                      )}
                    </form.Field>

                    <form.Field
                      name={`ingredients[${index}].ingredientName`}
                      validators={{
                        onChange: ({ value }) =>
                          value.trim() ? undefined : "Ingredient is required",
                      }}
                    >
                      {(field) => (
                        <div className="space-y-2">
                          <Label htmlFor={field.name}>Ingredient name</Label>
                          <Input
                            id={field.name}
                            onBlur={field.handleBlur}
                            onChange={(event) =>
                              field.handleChange(event.target.value)
                            }
                            value={field.state.value}
                          />
                          {fieldError(field.state.meta.errors)}
                        </div>
                      )}
                    </form.Field>

                    <form.Field
                      name={`ingredients[${index}].variationIngredientName`}
                      validators={{
                        onChange: ({ value }) =>
                          value?.trim() ? undefined : "Replacement is required",
                      }}
                    >
                      {(field) => (
                        <div className="space-y-2">
                          <Label htmlFor={field.name}>
                            Replacement ingredient
                          </Label>
                          <Input
                            id={field.name}
                            onBlur={field.handleBlur}
                            onChange={(event) =>
                              field.handleChange(event.target.value)
                            }
                            value={field.state.value ?? ""}
                          />
                          {fieldError(field.state.meta.errors)}
                        </div>
                      )}
                    </form.Field>

                    <form.Field name={`ingredients[${index}].note`}>
                      {(field) => (
                        <div className="space-y-2">
                          <Label htmlFor={field.name}>Note</Label>
                          <Input
                            id={field.name}
                            onBlur={field.handleBlur}
                            onChange={(event) =>
                              field.handleChange(event.target.value)
                            }
                            value={field.state.value ?? ""}
                          />
                        </div>
                      )}
                    </form.Field>
                  </div>
                ))}
              </div>
            </SectionCard>

            <SectionCard icon={NoteEditIcon} title="Steps">
              <div className="space-y-3">
                {defaultRecipeValues.cookingSteps.map((step, index) => (
                  <form.Field
                    key={step.id}
                    name={`cookingSteps[${index}].instruction`}
                    validators={{
                      onChange: ({ value }) =>
                        value.trim()
                          ? undefined
                          : "Step instruction is required",
                    }}
                  >
                    {(field) => (
                      <div className="grid gap-3 rounded-md border border-border bg-background/70 p-3 md:grid-cols-[2.5rem_1fr]">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-sm font-semibold text-primary">
                          {index + 1}
                        </span>
                        <div className="space-y-2">
                          <Textarea
                            aria-label={`Cooking step ${index + 1}`}
                            onBlur={field.handleBlur}
                            onChange={(event) =>
                              field.handleChange(event.target.value)
                            }
                            value={field.state.value}
                          />
                          {fieldError(field.state.meta.errors)}
                        </div>
                      </div>
                    )}
                  </form.Field>
                ))}
              </div>
            </SectionCard>

            <form.Subscribe selector={(state) => state.values}>
              {(values) => (
                <SectionCard icon={CheckmarkCircle01Icon} title="Review">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-md border border-border bg-background/70 p-4">
                      <p className="text-xs font-medium text-muted-foreground">
                        Recipe
                      </p>
                      <h3 className="mt-2 text-lg font-semibold">
                        {values.recipeName}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {values.recipeDescription}
                      </p>
                    </div>

                    <div className="rounded-md border border-border bg-background/70 p-4">
                      <p className="text-xs font-medium text-muted-foreground">
                        Version
                      </p>
                      <h3 className="mt-2 text-lg font-semibold">
                        {values.variantCountry} version
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {values.prepTime + values.cookTime} min total, serves{" "}
                        {values.baseServings}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 rounded-md border border-border bg-background/70 p-4">
                    <p className="mb-3 text-sm font-semibold">
                      Ingredient swaps
                    </p>
                    <div className="space-y-2">
                      {values.ingredients.map((ingredient) => (
                        <div
                          className="grid gap-2 text-sm md:grid-cols-[1fr_1fr_1fr]"
                          key={ingredient.id}
                        >
                          <span>{ingredient.amount.amountText}</span>
                          <span>{ingredient.ingredientName}</span>
                          <span className="font-medium text-primary">
                            {ingredient.variationIngredientName}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5">
                    <p className="text-sm text-muted-foreground">
                      {submissionStatus}
                    </p>
                    <Button type="submit">Submit recipe</Button>
                  </div>
                </SectionCard>
              )}
            </form.Subscribe>
          </div>

          <aside className="space-y-6 xl:sticky xl:top-8 xl:self-start">
            <form.Subscribe selector={(state) => state.values}>
              {(values) => (
                <>
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
                            {values.variantCountry} variant
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {values.prepTime + values.cookTime} min
                          </span>
                        </div>
                        <h3 className="font-semibold">{values.recipeName}</h3>
                        <p className="mt-2 text-sm leading-5 text-muted-foreground">
                          {values.recipeDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </form.Subscribe>
          </aside>
        </form>
      </main>
    </SideBarLayout>
  );
}
