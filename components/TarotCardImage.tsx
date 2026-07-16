"use client";

import { useState } from "react";
import type { TarotCard } from "@/data/tarotCards";

type TarotCardImageProps = {
  card: TarotCard;
  className?: string;
};

export default function TarotCardImage({
  card,
  className = "",
}: TarotCardImageProps) {
  const [hasError, setHasError] = useState(false);

  const imageSrc = card.image || `/cards/${card.id}.jpg`;

  if (hasError) {
    return (
      <div
        className={`flex items-center justify-center bg-[#120914]/80 ${className}`}
      >
        <div className="text-center">
          <p className="text-3xl">☾</p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-purple-200">
            Tarot
          </p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={imageSrc}
      alt={card.turkishName}
      onError={() => setHasError(true)}
      className={`object-cover ${className}`}
    />
  );
}