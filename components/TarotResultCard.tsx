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

function getPeriodLabel(position: string) {
  if (position.includes("Geçmiş")) {
    return "Geçmiş";
  }

  if (position.includes("Şimdiki")) {
    return "Şu an";
  }

  if (position.includes("Gelecek")) {
    return "Gelecek";
  }

  return "Kart";
}

export default function TarotResultCard({
  position,
  card,
  readingTypeLabel,
  meaning,
}: TarotResultCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const periodLabel = getPeriodLabel(position);

  return (
    <article className="self-start overflow-hidden rounded-[2rem] border border-purple-300/25 bg-white/10 text-left shadow-2xl backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-purple-200/50 hover:bg-white/[0.13]">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="w-full text-left"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(216,180,254,0.13),transparent_45%)]" />

          <div className="relative flex gap-5 p-5">
            <div className="relative h-36 w-24 shrink-0 overflow-hidden rounded-2xl border border-purple-300/25 bg-[#120914]/80 shadow-xl shadow-black/30">
              <TarotCardImage card={card} className="h-full w-full" />

              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
            </div>

            <div className="min-w-0 flex-1">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-purple-300/25 bg-purple-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-purple-100">
                  {periodLabel}
                </span>
              </div>

              <h3 className="text-2xl font-bold leading-8 text-white">
                {card.turkishName}
              </h3>

              <p className="mt-1 text-sm text-zinc-400">{card.name}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {card.keywords.slice(0, 3).map((keyword) => (
                  <span
                    key={keyword}
                    className="rounded-full border border-purple-300/20 bg-[#120914]/50 px-3 py-1 text-xs text-purple-100"
                  >
                    {keyword}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-purple-200">
                <span>{isOpen ? "Kart yorumunu kapat" : "Kart yorumunu aç"}</span>
                <span>{isOpen ? "↑" : "↓"}</span>
              </div>
            </div>
          </div>
        </div>
      </button>

      {isOpen && (
        <div className="border-t border-purple-300/15 bg-[#120914]/35 px-5 pb-6 pt-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-purple-200">
            {readingTypeLabel} Yorumu
          </p>

          <p className="leading-8 text-zinc-200">{meaning}</p>
        </div>
      )}
    </article>
  );
}