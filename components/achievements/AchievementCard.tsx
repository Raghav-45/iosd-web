"use client";

import React from "react";
import { Achievement } from "@/types/achievements";
import { cn } from "@/lib/utils/cn";
import { MapPinIcon } from "lucide-react";




export const AchievementCard = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
    setActive,
  }: {
    card: Achievement;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    setActive: (card: Achievement) => void;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      onClick={() => {setActive(card); setHovered(index)}}
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <img
        src={card.images[0]}
        alt={card.event_name}
        className="object-cover absolute inset-0 h-full"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex flex-col h-full items-end justify-end py-8 px-4 transition-opacity duration-300 cursor-pointer",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200 text-end">
          {card.event_name}
        </div>
        <div className="text-sm font-muted-foreground flex gap-2 items-center mt-2">
          <MapPinIcon className="w-4 h-4" />
          <span>{card.location_of_event}</span>
        </div>
      </div>
    </div>
  )
);

AchievementCard.displayName = "AchievementCard";