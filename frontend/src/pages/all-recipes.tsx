import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Filter,
  Plus,
  Search,
  ServingFoodIcon,
} from "@hugeicons/core-free-icons";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PageHeader } from "@/components/page-header";
import { RecipeCard } from "@/components/recipe-card";
import { SideBarLayout } from "@/components/sidebar";
import pottedPlantsImage from "@/assets/potted-plants.png";
import taiyaki from "@/assets/meals/taiyaki.png";
import binignit from "@/assets/meals/binignit.png";
import pistachioRaspberryCake from "@/assets/meals/pistachio-raspberry-cake.jpg";

const recipes = [
  {
    title: "Creamy Tomato Pasta",
    image: "/dashboard-images/creamy-tomato-pasta.png",
    duration: "25 min",
    difficulty: "Easy",
    rating: "4.8",
    category: "Dinner",
    defaultFavorite: true,
    currentPage: "allRecipes",
  },
  {
    title: "Taiyaki",
    image: taiyaki,
    duration: "35 min",
    difficulty: "Medium",
    rating: "4.9",
    category: "Dessert",
    currentPage: "allRecipes",
  },
  {
    title: "Binignit",
    image: binignit,
    duration: "20 min",
    difficulty: "Easy",
    rating: "4.7",
    category: "Snack",
    defaultFavorite: true,
    currentPage: "allRecipes",
  },
  {
    title: "Pistachio Raspberry Cake",
    image: pistachioRaspberryCake,
    duration: "1 hr 30 min",
    difficulty: "Easy",
    rating: "5.0",
    category: "Dessert",
    currentPage: "allRecipes",
  },
];

const categories = ["All", "Dinner", "Dessert", "Snack"];

export default function AllRecipes() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredRecipes = useMemo(() => {
    const normalizedSearchTerm = searchTerm.trim().toLowerCase();

    return recipes.filter((recipe) => {
      const matchesCategory =
        selectedCategory === "All" || recipe.category === selectedCategory;

      if (!normalizedSearchTerm) {
        return matchesCategory;
      }

      const searchableText = [
        recipe.title,
        recipe.category,
        recipe.difficulty,
        recipe.duration,
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && searchableText.includes(normalizedSearchTerm);
    });
  }, [searchTerm, selectedCategory]);

  return (
    <SideBarLayout
      activeItem="recipes"
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
            { label: "Recipes" },
          ]}
          eyebrow="Recipe library"
          title="All recipes"
          actions={
            <Button
              className="rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => navigate("/recipes/new")}
            >
              <HugeiconsIcon icon={Plus} className="mr-2 h-4 w-4" />
              Add recipe
            </Button>
          }
        />

        <section className="mb-6 rounded-lg border-2 border-border bg-card p-5 shadow-[0_18px_45px_rgba(89,76,45,0.08)]">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-muted text-primary">
                <HugeiconsIcon icon={ServingFoodIcon} className="h-5 w-5" />
              </span>
              <div>
                <h2 className="text-lg font-semibold">Recipe collection</h2>
                <p className="text-sm text-muted-foreground">
                  {filteredRecipes.length} recipes ready to cook
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 md:flex-row md:items-center">
              <div className="relative min-w-72">
                <HugeiconsIcon
                  icon={Search}
                  className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                />
                <Input
                  className="pl-10"
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search recipes"
                  value={searchTerm}
                />
              </div>
              <Button
                className="rounded-md border-border-secondary-button bg-background"
                type="button"
                variant="outline"
              >
                <HugeiconsIcon icon={Filter} className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-primary hover:bg-muted/70"
                }`}
                key={category}
                onClick={() => setSelectedCategory(category)}
                type="button"
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {filteredRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.title}
              {...recipe}
              onClick={() => navigate("/recipes/view")}
            />
          ))}
        </section>
      </main>
    </SideBarLayout>
  );
}
