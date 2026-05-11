import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { FavouriteIcon } from "@hugeicons/core-free-icons";

import { Toggle } from "@/components/ui/toggle";

type RecipeCardProps = {
  title: string;
  image: string;
  duration: string;
  difficulty: string;
  rating: string;
  defaultFavorite?: boolean;
  imageAlt?: string;
  onClick?: () => void;
  currentPage?: string;
};

export function RecipeCard({
  title,
  image,
  duration,
  difficulty,
  rating,
  defaultFavorite,
  imageAlt = title,
  onClick,
  currentPage,
}: RecipeCardProps) {
  const [isFavorite, setIsFavorite] = useState(defaultFavorite);

  return (
    <div
      className="bg-white rounded-xl shadow-sm overflow-hidden text-left cursor-pointer"
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <div className="h-48">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          {currentPage !== "allRecipes" && (
            <Toggle
              aria-label={`Toggle ${title} favorite`}
              onClick={(e) => e.stopPropagation()}
              onPressedChange={(pressed) => setIsFavorite(pressed)}
              pressed={isFavorite}
              size="sm"
              variant="outline"
            >
              <HugeiconsIcon
                icon={FavouriteIcon}
                className="group-data-[state=on]/toggle:fill-foreground"
              />
            </Toggle>
          )}
          <span>{duration}</span>
          <span>{difficulty}</span>
          <div className="flex items-center gap-1">
            <span>⭐</span>
            <span>{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
