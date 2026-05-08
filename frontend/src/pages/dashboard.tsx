import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HugeiconsIcon } from "@hugeicons/react";

// shadcn components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// common components
import { SideBarLayout } from "@/components/sidebar";
import { PageHeader } from "@/components/page-header";
import { RecipeCard } from "@/components/recipe-card";

// Hugeicons
import { Search, Plus, Filter } from "@hugeicons/core-free-icons";

// assets
import cardImage from "@/assets/pancake-v2.png";
import pottedPlantsImage from "@/assets/potted-plants.png";
import breakfastImage from "@/assets/morning.png";
import lunchImage from "@/assets/lunch.png";
import afterNoonImage from "@/assets/afternoon.png";
import dinnerImage from "@/assets/night.png";
import midnightImage from "@/assets/midnight.png";
import taiyaki from "@/assets/meals/taiyaki.png";
import binignit from "@/assets/meals/binignit.png";
import pistachioRaspberryCake from "@/assets/meals/pistachio-raspberry-cake.jpg";

export default function Dashboard() {
  const navigate = useNavigate();
  const mealSuggestionsData = [
    {
      startTime: "04:00",
      endTime: "11:00",
      mealType: "breakfast",
      suggestion:
        "Good morning. Let's make breakfast cozy enough to convince the day to behave.",
      image: breakfastImage,
    },
    {
      startTime: "11:01",
      endTime: "13:59",
      mealType: "lunch",
      suggestion:
        "It is lunchtime. Let's make something fresh, filling, and very proud of itself.",
      image: lunchImage,
    },
    {
      startTime: "14:00",
      endTime: "17:59",
      mealType: "snack",
      suggestion:
        "Afternoon snack time. Let's make a little treat before dinner starts asking questions.",
      image: afterNoonImage,
    },
    {
      startTime: "18:00",
      endTime: "21:59",
      mealType: "dinner",
      suggestion:
        "Dinner time. Let's cook something warm, satisfying, and worthy of a second helping.",
      image: dinnerImage,
    },
    {
      startTime: "22:00",
      endTime: "03:59",
      mealType: "midnight_snack",
      suggestion:
        "Late-night kitchen visit? Let's make something cozy, quiet, and absolutely not judgey.",
      image: midnightImage,
    },
  ];
  const favoriteRecipes = [
    {
      title: "Creamy Tomato Pasta",
      image: "/dashboard-images/creamy-tomato-pasta.png",
      duration: "25 min",
      difficulty: "Easy",
      rating: "4.8",
      defaultFavorite: true,
      onClick: () => navigate("/recipes/view"),
    },
    {
      title: "Taiyaki",
      image: taiyaki,
      duration: "35 min",
      difficulty: "Medium",
      rating: "4.9",
    },
    {
      title: "Binignit",
      image: binignit,
      duration: "20 min",
      difficulty: "Easy",
      rating: "4.7",
    },
    {
      title: "Pistachio Raspberry Cake",
      image: pistachioRaspberryCake,
      duration: "1 hr 30 min",
      difficulty: "Easy",
      rating: "5.0",
    },
  ];

  const getCurrentMealSuggestion = () => {
    const currentMealSuggestion = mealSuggestionsData.find((suggestion) => {
      const [startHour, startMinute] = suggestion.startTime
        .split(":")
        .map(Number);
      const [endHour, endMinute] = suggestion.endTime.split(":").map(Number);
      const now = new Date();
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();

      const startTotalMinutes = startHour * 60 + startMinute;
      const endTotalMinutes = endHour * 60 + endMinute;
      const currentTotalMinutes = currentHour * 60 + currentMinute;

      if (startTotalMinutes <= endTotalMinutes) {
        return (
          currentTotalMinutes >= startTotalMinutes &&
          currentTotalMinutes <= endTotalMinutes
        );
      }

      return (
        currentTotalMinutes >= startTotalMinutes ||
        currentTotalMinutes <= endTotalMinutes
      );
    });
    return currentMealSuggestion;
  };

  const [kitchenNote, setKitchenNote] = useState(getCurrentMealSuggestion);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setKitchenNote(getCurrentMealSuggestion());
    }, 60_000);

    return () => window.clearInterval(interval);
  }, []);

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
      <div className="flex h-screen">
        <main className="flex-2 p-8 overflow-auto">
          {/* Header */}
          <PageHeader
            breadcrumbs={undefined}
            eyebrow="Hello, Raquelle!"
            title="What would you like to cook today?"
          />

          <div className="flex flex-row gap-4">
            {/* Add Recipe Card */}
            <div className="flex-2">
              {/* Add Calendar Card content will go here */}
              <div className="flex bg-card rounded-md p-6 mb-8 text-gray-800 border-2 space-y-2">
                <div className="w-1/2 space-y-4">
                  <h2 className="text-xl font-semibold mb-4">
                    Add a new recipe
                  </h2>
                  <p className="text-gray-500 text-sm mt-2 paddong">
                    Save a family favorite, a quick dinner, or something you
                    just discovered.
                  </p>
                  <div className="flex gap-4">
                    <Button
                      className="bg-primary text-white hover:bg-primary-foreground hover:text-gray-800 rounded-md"
                      onClick={() => navigate("/recipes/new")}
                    >
                      <HugeiconsIcon icon={Plus} className="w-4 h-4 mr-2" />
                      Add new recipe
                    </Button>
                    <Button
                      variant="outline"
                      className="bg-white/10 text-gray-800 border-sidebar-border hover:bg-secondary-foreground
                  hover:text-gray-800 border-border-secondary-button rounded-md"
                    >
                      Import recipe
                    </Button>
                  </div>
                </div>
                <div className="w-1/2 flex justify-end">
                  <img
                    src={cardImage}
                    alt="card image"
                    className="h-40 w-auto object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Add Kitchen Note */}
            <div className="flex-1">
              <div className="flex bg-card rounded-md p-6 mb-8 text-gray-800 border-2 space-y-2 items-center">
                {kitchenNote?.image && (
                  <img
                    src={kitchenNote.image}
                    alt="kitchen note image"
                    className="h-38 w-auto object-contain mr-4"
                  />
                )}
                <p className="text-sm text-gray-800 italic">
                  {kitchenNote?.suggestion}
                </p>
              </div>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="flex gap-4 items-center mb-8">
            <div className="flex-1 relative">
              <HugeiconsIcon
                icon={Search}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
              />
              <Input placeholder="Search for recipes" className="pl-10 py-3" />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <HugeiconsIcon icon={Filter} className="w-4 h-4" />
              Filters
            </Button>

            {/* Filter Tags */}
            <div className="flex gap-2 flex-wrap">
              <span className="px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium">
                Chicken
              </span>
              <span className="px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-medium">
                Tomato
              </span>
              <span className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                Pasta
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                Rice
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                Vegetarian
              </span>
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                Under 30 min
              </span>
            </div>
          </div>

          {/* Most Favorite Recipes */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Your most favorite recipes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {favoriteRecipes.map((recipe) => (
                <RecipeCard key={recipe.title} {...recipe} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </SideBarLayout>
  );
}
