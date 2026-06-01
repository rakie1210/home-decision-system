import { useEffect, useMemo, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Add01Icon,
  ArrowDown01Icon,
  ArrowUp01Icon,
  Cancel01Icon,
  CheckmarkCircle01Icon,
  ChefHatIcon,
  Delete02Icon,
  ImageUploadIcon,
  KitchenUtensilsIcon,
  Link01Icon,
  NoteEditIcon,
  Tick02Icon,
  Loading01Icon,
} from "@hugeicons/core-free-icons";
import { useForm } from "@tanstack/react-form";
import { useQuery } from "@tanstack/react-query";

import { getCountries } from "@/actions/common-actions";
import { saveNewRecipe } from "@/actions/recipe-actions";
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
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperNav,
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
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxSeparator,
  useComboboxAnchor,
} from "@/components/ui/combobox";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

import {
  cookingSteps,
  ingredientRow,
} from "./contants/create-new-recipe-contants";
import type {
  CookingStep,
  IngredientRow,
  ReciperFormValues,
} from "./types/create-new-recipe-types";

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
  recipeImageUrl: createRecipeIllustration,
  recipeImageFile: null,
  baseServings: 2,
  prepTime: 15,
  cookTime: 45,
  recipeCountry: "Philippines",
  originalCountry: "Sweden",
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

function createEmptyIngredientRow(): IngredientRow {
  return {
    id: crypto.randomUUID(),
    amount: {
      amountText: "",
      system: null,
    },
    ingredientName: "",
    variationIngredientName: "",
    note: "",
  };
}

function createEmptyCookingStep(stepNo: number): CookingStep {
  return {
    id: crypto.randomUUID(),
    stepNo,
    instruction: "",
    imageUrl: null,
    imageFile: null,
  };
}

function normalizeCookingStepNumbers(steps: CookingStep[]) {
  return steps.map((step, index) => ({
    ...step,
    stepNo: index + 1,
  }));
}

function moveCookingStep(
  steps: CookingStep[],
  fromIndex: number,
  toIndex: number,
) {
  if (toIndex < 0 || toIndex >= steps.length) {
    return steps;
  }

  const nextSteps = [...steps];
  const [step] = nextSteps.splice(fromIndex, 1);

  if (!step) {
    return steps;
  }

  nextSteps.splice(toIndex, 0, step);
  return normalizeCookingStepNumbers(nextSteps);
}

function isFilledIngredient(ingredient: IngredientRow) {
  return Boolean(
    ingredient.amount.amountText.trim() ||
    ingredient.ingredientName.trim() ||
    ingredient.variationIngredientName?.trim() ||
    ingredient.note?.trim(),
  );
}

function isFilledCookingStep(step: CookingStep) {
  return Boolean(step.instruction.trim() || step.imageFile || step.imageUrl);
}

function StepImagePreview({
  file,
  imageUrl,
  alt,
  emptyLabel,
  className,
}: {
  file: File | null | undefined;
  imageUrl: string | null | undefined;
  alt: string;
  emptyLabel: string;
  className?: string;
}) {
  const previewUrl = useMemo(() => {
    return file ? URL.createObjectURL(file) : imageUrl;
  }, [file, imageUrl]);

  useEffect(() => {
    return () => {
      if (file && previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [file, previewUrl]);

  if (!previewUrl) {
    return (
      <div
        className={cn(
          "flex aspect-video min-h-24 w-full items-center justify-center gap-2 rounded-md border border-dashed border-border bg-muted/40 text-sm text-muted-foreground",
          className,
        )}
      >
        <HugeiconsIcon icon={ImageUploadIcon} className="h-6 w-6" />
        <span>{emptyLabel}</span>
      </div>
    );
  }

  return (
    <img
      src={previewUrl}
      alt={alt}
      className={cn(
        "aspect-video min-h-24 w-full rounded-md border border-border object-cover",
        className,
      )}
    />
  );
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
      values.recipeCountry,
    );
  }

  if (step === "ingredients") {
    return values.ingredients
      .filter(isFilledIngredient)
      .every(
        (ingredient) =>
          ingredient.amount.amountText.trim() &&
          ingredient.ingredientName.trim() &&
          ingredient.variationIngredientName?.trim(),
      );
  }

  if (step === "steps") {
    return values.cookingSteps
      .filter(isFilledCookingStep)
      .every((step) => step.instruction.trim());
  }

  return (
    validateStep("basics", values) &&
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

  if (!values.recipeCountry) {
    items.push({ section: "basics", message: "Choose the original country." });
  }

  if (!values.originalCountry) {
    items.push({
      section: "basics",
      message: "Choose the Parent recipe's country.",
    });
  }

  values.ingredients.forEach((ingredient, index) => {
    if (!isFilledIngredient(ingredient)) {
      return;
    }

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
  });

  values.cookingSteps.forEach((step, index) => {
    if (!isFilledCookingStep(step)) {
      return;
    }

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
  const [tagInput, setTagInput] = useState("");
  const [customTags, setCustomTags] = useState<string[]>([]);
  const tagsAnchorRef = useComboboxAnchor();

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

  const tagOptions = useMemo(() => {
    return [...quickTags, ...customTags];
  }, [customTags]);

  const normalizedTagInput = tagInput.trim();
  const canCreateTag = Boolean(
    normalizedTagInput &&
    !tagOptions.some(
      (tag) => tag.toLowerCase() === normalizedTagInput.toLowerCase(),
    ),
  );

  function createTag(
    currentTags: string[],
    onChange: (value: string[]) => void,
  ) {
    if (!canCreateTag) {
      return;
    }

    const nextTag = normalizedTagInput;
    const nextTags = currentTags.some(
      (tag) => tag.toLowerCase() === nextTag.toLowerCase(),
    )
      ? currentTags
      : [...currentTags, nextTag];

    setCustomTags((tags) => [...tags, nextTag]);
    onChange(nextTags);
    setTagInput("");
  }

  const form = useForm({
    defaultValues: defaultRecipeValues,
    onSubmit: async ({ value }) => {
      const missingItems = getValidationItems(value);

      if (missingItems.length > 0) {
        setSubmissionStatus("Some details still need attention above.");
        return;
      }

      try {
        const recipe = await saveNewRecipe(value);
        setSubmissionStatus(`${recipe.title} was saved successfully.`);
        toast.success("Recipe saved", {
          description: submissionStatus,
        });
      } catch (error) {
        const message =
          error instanceof Error
            ? error.message
            : "Recipe was not saved successfully.";

        setSubmissionStatus(message);

        toast.error("Save failed", {
          description: submissionStatus,
        });
      }
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
      <main className="bg-background px-6 py-6 text-foreground md:px-10 lg:px-14 lg:py-8 2xl:px-20">
        <div className="mx-auto w-full max-w-5xl">
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
              </>
            }
          />

          <form
            className="space-y-5"
            id="create-recipe-form"
            onSubmit={(event) => {
              event.preventDefault();
              event.stopPropagation();
              form.handleSubmit();
            }}
          >
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

            <SectionCard icon={ImageUploadIcon} title="Main Recipe Image">
              <form.Field name="recipeImageUrl">
                {(imageUrlField) => (
                  <form.Field name="recipeImageFile">
                    {(imageFileField) => {
                      const inputId = `${imageFileField.name}-upload`;

                      return (
                        <div className="relative mx-auto w-full md:w-1/2">
                          <Input
                            id={inputId}
                            key={
                              imageFileField.state.value
                                ? imageFileField.state.value.name
                                : "empty"
                            }
                            accept="image/*"
                            className="sr-only"
                            onBlur={imageFileField.handleBlur}
                            onChange={(event) => {
                              const file = event.target.files?.[0] ?? null;

                              imageFileField.handleChange(file);

                              if (file) {
                                imageUrlField.handleChange(null);
                              }
                            }}
                            type="file"
                          />
                          <Label
                            htmlFor={inputId}
                            className="block cursor-pointer rounded-md focus-within:ring-[3px] focus-within:ring-ring/50"
                          >
                            <StepImagePreview
                              file={imageFileField.state.value}
                              imageUrl={imageUrlField.state.value}
                              alt="Main recipe preview"
                              emptyLabel="Upload main recipe image"
                            />
                          </Label>
                          {(imageFileField.state.value ||
                            imageUrlField.state.value) && (
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon-sm"
                              aria-label="Remove main recipe image"
                              className="absolute top-2 right-2 bg-background/85 shadow-sm hover:bg-background"
                              onClick={() => {
                                imageFileField.handleChange(null);
                                imageUrlField.handleChange(null);
                              }}
                            >
                              <HugeiconsIcon
                                icon={Cancel01Icon}
                                className="h-4 w-4"
                              />
                            </Button>
                          )}
                        </div>
                      );
                    }}
                  </form.Field>
                )}
              </form.Field>
            </SectionCard>

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
                      <Label htmlFor={field.name}>Recipe name</Label>
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

                <form.Field name="recipeCountry">
                  {(field) => (
                    <div className="space-y-2">
                      <Label>Recipe country</Label>
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

            <SectionCard icon={Link01Icon} title="Recipe Links">
              <div className="grid gap-4 md:grid-cols-2">
                <form.Field name="originalCountry">
                  {(field) => (
                    <div className="space-y-2">
                      <Label>Original Recipe Country</Label>
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
              </div>

              <form.Field name="tags">
                {(field) => (
                  <div className="mt-4 space-y-2">
                    <Label>Tags</Label>
                    <Combobox
                      multiple
                      autoHighlight
                      items={tagOptions}
                      inputValue={tagInput}
                      onInputValueChange={setTagInput}
                      onValueChange={field.handleChange}
                      value={field.state.value}
                    >
                      <ComboboxChips ref={tagsAnchorRef} className="w-full">
                        {field.state.value.map((tag) => (
                          <ComboboxChip key={tag}>{tag}</ComboboxChip>
                        ))}
                        <ComboboxChipsInput placeholder="Select or create tags" />
                      </ComboboxChips>

                      <ComboboxContent anchor={tagsAnchorRef}>
                        <ComboboxList>
                          {(tag: string, index: number) => (
                            <ComboboxItem key={tag} index={index} value={tag}>
                              {tag}
                            </ComboboxItem>
                          )}
                        </ComboboxList>

                        <ComboboxEmpty>No tags found.</ComboboxEmpty>

                        {canCreateTag && (
                          <>
                            <ComboboxSeparator />
                            <div className="p-1">
                              <Button
                                type="button"
                                variant="ghost"
                                className="w-full justify-start rounded-xl"
                                onMouseDown={(event) => event.preventDefault()}
                                onClick={() =>
                                  createTag(
                                    field.state.value,
                                    field.handleChange,
                                  )
                                }
                              >
                                Create "{normalizedTagInput}"
                              </Button>
                            </div>
                          </>
                        )}
                      </ComboboxContent>
                    </Combobox>
                  </div>
                )}
              </form.Field>
            </SectionCard>

            <SectionCard icon={KitchenUtensilsIcon} title="Ingredients">
              <form.Field name="ingredients" mode="array">
                {(ingredientsField) => (
                  <div className="space-y-3">
                    {ingredientsField.state.value.map((ingredient, index) => (
                      <div
                        className="relative grid gap-3 rounded-md border border-border bg-background/70 p-3 pt-10 lg:grid-cols-[1fr_2fr_2fr_3fr]"
                        key={ingredient.id}
                      >
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon-xs"
                          aria-label={`Remove ingredient ${index + 1}`}
                          className="absolute top-2 right-2"
                          onClick={() => ingredientsField.removeValue(index)}
                        >
                          <HugeiconsIcon
                            icon={Cancel01Icon}
                            className="h-3.5 w-3.5"
                          />
                        </Button>

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
                              value.trim()
                                ? undefined
                                : "Ingredient is required",
                          }}
                        >
                          {(field) => (
                            <div className="space-y-2">
                              <Label htmlFor={field.name}>
                                Ingredient name
                              </Label>
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
                              value?.trim()
                                ? undefined
                                : "Replacement is required",
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

                    <div className="flex justify-end">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() =>
                          ingredientsField.pushValue(createEmptyIngredientRow())
                        }
                      >
                        <HugeiconsIcon icon={Add01Icon} className="h-4 w-4" />
                        Add ingredient
                      </Button>
                    </div>
                  </div>
                )}
              </form.Field>
            </SectionCard>

            <SectionCard icon={NoteEditIcon} title="Steps">
              <form.Field name="cookingSteps" mode="array">
                {(stepsField) => (
                  <div className="space-y-3">
                    {stepsField.state.value.map((step, index) => (
                      <div
                        className="relative grid gap-3 rounded-md border border-border bg-background/70 p-3 pt-12 md:grid-cols-[2.5rem_1fr]"
                        key={step.id}
                      >
                        <div className="absolute top-2 right-2 flex gap-1">
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon-xs"
                            aria-label={`Move step ${index + 1} up`}
                            disabled={index === 0}
                            onClick={() =>
                              stepsField.handleChange(
                                moveCookingStep(
                                  stepsField.state.value,
                                  index,
                                  index - 1,
                                ),
                              )
                            }
                          >
                            <HugeiconsIcon
                              icon={ArrowUp01Icon}
                              className="h-3.5 w-3.5"
                            />
                          </Button>
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon-xs"
                            aria-label={`Move step ${index + 1} down`}
                            disabled={
                              index === stepsField.state.value.length - 1
                            }
                            onClick={() =>
                              stepsField.handleChange(
                                moveCookingStep(
                                  stepsField.state.value,
                                  index,
                                  index + 1,
                                ),
                              )
                            }
                          >
                            <HugeiconsIcon
                              icon={ArrowDown01Icon}
                              className="h-3.5 w-3.5"
                            />
                          </Button>
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon-xs"
                            aria-label={`Remove step ${index + 1}`}
                            onClick={() =>
                              stepsField.handleChange(
                                normalizeCookingStepNumbers(
                                  stepsField.state.value.filter(
                                    (_, stepIndex) => stepIndex !== index,
                                  ),
                                ),
                              )
                            }
                          >
                            <HugeiconsIcon
                              icon={Cancel01Icon}
                              className="h-3.5 w-3.5"
                            />
                          </Button>
                        </div>

                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-sm font-semibold text-primary">
                          {index + 1}
                        </span>
                        <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_18rem]">
                          <form.Field
                            name={`cookingSteps[${index}].instruction`}
                            validators={{
                              onChange: ({ value }) =>
                                value.trim()
                                  ? undefined
                                  : "Step instruction is required",
                            }}
                          >
                            {(field) => (
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
                            )}
                          </form.Field>

                          <form.Field name={`cookingSteps[${index}].imageUrl`}>
                            {(imageUrlField) => (
                              <form.Field
                                name={`cookingSteps[${index}].imageFile`}
                              >
                                {(imageFileField) => {
                                  const inputId = `${imageFileField.name}-upload`;

                                  return (
                                    <div className="space-y-2">
                                      <StepImagePreview
                                        file={imageFileField.state.value}
                                        imageUrl={imageUrlField.state.value}
                                        alt={`Cooking step ${index + 1} preview`}
                                        emptyLabel="No step image"
                                      />
                                      <div className="flex flex-wrap gap-2">
                                        <Input
                                          id={inputId}
                                          key={
                                            imageFileField.state.value
                                              ? imageFileField.state.value.name
                                              : "empty"
                                          }
                                          accept="image/*"
                                          className="sr-only"
                                          onBlur={imageFileField.handleBlur}
                                          onChange={(event) => {
                                            const file =
                                              event.target.files?.[0] ?? null;

                                            imageFileField.handleChange(file);

                                            if (file) {
                                              imageUrlField.handleChange(null);
                                            }
                                          }}
                                          type="file"
                                        />
                                        <Button
                                          asChild
                                          type="button"
                                          variant="outline"
                                        >
                                          <Label
                                            htmlFor={inputId}
                                            className="cursor-pointer"
                                          >
                                            <HugeiconsIcon
                                              icon={ImageUploadIcon}
                                              className="h-4 w-4"
                                            />
                                            Upload image
                                          </Label>
                                        </Button>
                                        {(imageFileField.state.value ||
                                          imageUrlField.state.value) && (
                                          <Button
                                            type="button"
                                            variant="ghost"
                                            onClick={() => {
                                              imageFileField.handleChange(null);
                                              imageUrlField.handleChange(null);
                                            }}
                                          >
                                            <HugeiconsIcon
                                              icon={Delete02Icon}
                                              className="h-4 w-4"
                                            />
                                            Remove
                                          </Button>
                                        )}
                                      </div>
                                    </div>
                                  );
                                }}
                              </form.Field>
                            )}
                          </form.Field>
                        </div>
                      </div>
                    ))}

                    <div className="flex justify-end">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() =>
                          stepsField.pushValue(
                            createEmptyCookingStep(
                              stepsField.state.value.length + 1,
                            ),
                          )
                        }
                      >
                        <HugeiconsIcon icon={Add01Icon} className="h-4 w-4" />
                        Add step
                      </Button>
                    </div>
                  </div>
                )}
              </form.Field>
            </SectionCard>

            <form.Subscribe selector={(state) => state.values}>
              {(values) => {
                const visibleIngredients =
                  values.ingredients.filter(isFilledIngredient);
                const visibleCookingSteps =
                  values.cookingSteps.filter(isFilledCookingStep);

                return (
                  <SectionCard icon={CheckmarkCircle01Icon} title="Review">
                    <div className="overflow-hidden rounded-md border border-border bg-background/70">
                      <StepImagePreview
                        file={values.recipeImageFile}
                        imageUrl={values.recipeImageUrl}
                        alt={`${values.recipeName} main recipe preview`}
                        emptyLabel="No main recipe image"
                        className="md:w-1/2 mx-auto"
                      />

                      <div className="p-4">
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <div>
                            <p className="text-xs font-medium text-muted-foreground">
                              Recipe
                            </p>
                            <h3 className="mt-2 text-lg font-semibold">
                              {values.recipeName}
                            </h3>
                          </div>
                          <p className="rounded-full bg-[#dce9f6] px-3 py-1 text-xs font-semibold text-[#335b78]">
                            {values.prepTime + values.cookTime} min, serves{" "}
                            {values.baseServings}
                          </p>
                        </div>
                        <p className="mt-3 text-sm text-muted-foreground">
                          {values.recipeDescription}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 grid gap-4 md:grid-cols-2">
                      <div className="rounded-md border border-border bg-background/70 p-4">
                        <p className="text-xs font-medium text-muted-foreground">
                          Country
                        </p>
                        <h3 className="mt-2 text-lg font-semibold">
                          {values.recipeCountry}
                        </h3>
                      </div>

                      {values.originalCountry && (
                        <div className="rounded-md border border-border bg-background/70 p-4">
                          <p className="text-xs font-medium text-muted-foreground">
                            Original country
                          </p>
                          <h3 className="mt-2 text-lg font-semibold">
                            {values.originalCountry}
                          </h3>
                        </div>
                      )}
                    </div>

                    <div className="mt-4 rounded-md border border-border bg-background/70 p-4">
                      <p className="mb-3 text-sm font-semibold">
                        Ingredients with variations based on the country
                      </p>
                      <div className="space-y-1.5 md:px-6">
                        {visibleIngredients.map((ingredient) => (
                          <div
                            className="grid gap-2 text-sm md:grid-cols-[0.5fr_0.5fr_1fr]"
                            key={ingredient.id}
                          >
                            <span>{ingredient.amount.amountText} - </span>
                            <span>{ingredient.ingredientName}</span>
                            <span className="font-medium text-primary">
                              ({ingredient.variationIngredientName})
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 rounded-md border border-border bg-background/70 p-4">
                      <p className="mb-3 text-sm font-semibold">
                        Cooking steps
                      </p>
                      <div className="space-y-3">
                        {visibleCookingSteps.map((step, index) => {
                          const hasStepImage = Boolean(
                            step.imageFile || step.imageUrl,
                          );

                          return (
                            <div
                              className="grid gap-3 rounded-md border border-border bg-card p-3 md:grid-cols-[2.5rem_1fr]"
                              key={step.id}
                            >
                              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-sm font-semibold text-primary">
                                {index + 1}
                              </span>
                              <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_12rem]">
                                <p className="text-sm leading-6">
                                  {step.instruction}
                                </p>
                                {hasStepImage && (
                                  <StepImagePreview
                                    file={step.imageFile}
                                    imageUrl={step.imageUrl}
                                    alt={`Cooking step ${index + 1} preview`}
                                    emptyLabel="No step image"
                                  />
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {values.tags.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {values.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="border-badge-sage/60 bg-badge-sage text-badge-sage-foreground"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}

                    <div className="mt-5 flex items-end justify-end pt-5">
                      <Button type="submit">Submit recipe</Button>
                    </div>
                  </SectionCard>
                );
              }}
            </form.Subscribe>
          </form>
        </div>
      </main>
    </SideBarLayout>
  );
}
