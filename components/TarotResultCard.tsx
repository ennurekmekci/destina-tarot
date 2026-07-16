"use client";

import { useState } from "react";
import TarotCardImage from "@/components/TarotCardImage";
import type { TarotCard } from "@/data/tarotCards";

type TarotResultCardProps = {
  position: string;
  card: TarotCard;
  readingTypeLabel: string;
  meaning: string;
};

export default function TarotResultCard({
  position,
  card,
  readingTypeLabel,
  meaning,
}: TarotResultCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="overflow-hidden rounded-[2rem] border border-purple-300/25 bg-white/10 text-left shadow-2xl backdrop-blur transition hover:border-purple-200/50">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="w-full p-5 text-left"
      >
        <div className="flex gap-4">
          <div className="flex h-28 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-purple-300/25 bg-[#120914]/80">
            <TarotCardImage card={card} className="h-full w-full" />
          </div>

          <div className="min-w-0 flex-1">
            <p className="mb-2 text-xs uppercase tracking-[0.25em] text-purple-200">
              {position}
            </p>

            <h3 className="text-2xl font-bold leading-8 text-white">
              {card.turkishName}
            </h3>

            <p className="mt-1 text-sm text-zinc-400">{card.name}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {card.keywords.slice(0, 3).map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full border border-purple-300/25 bg-purple-300/10 px-3 py-1 text-xs text-purple-100"
                >
                  {keyword}
                </span>
              ))}
            </div>

            <p className="mt-4 text-sm font-semibold text-purple-200">
              {isOpen ? "Kart detayını kapat ↑" : "Kart detayını gör ↓"}
            </p>
          </div>
        </div>
      </button>

      {isOpen && (
        <div className="border-t border-purple-300/20 px-5 pb-6 pt-5">
          <p className="mb-2 text-sm uppercase tracking-[0.25em] text-purple-200">
            {readingTypeLabel} Yorumu
          </p>

          <p className="leading-8 text-zinc-200">{meaning}</p>

        </div>
      )}
    </article>
  );
}