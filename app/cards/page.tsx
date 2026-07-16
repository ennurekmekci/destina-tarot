"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import PageShell from "@/components/PageShell";
import TarotCardImage from "@/components/TarotCardImage";
import { tarotCards, type TarotCard } from "@/data/tarotCards";

type CardGroup = "all" | "major" | "wands" | "cups" | "swords" | "pentacles";

const cardGroups: { id: CardGroup; label: string }[] = [
  { id: "all", label: "Tüm Kartlar" },
  { id: "major", label: "Major Arcana" },
  { id: "wands", label: "Değnekler" },
  { id: "cups", label: "Kupalar" },
  { id: "swords", label: "Kılıçlar" },
  { id: "pentacles", label: "Tılsımlar" },
];

function getCardGroup(card: TarotCard): CardGroup {
  if (card.id >= 1 && card.id <= 22) {
    return "major";
  }

  if (card.id >= 23 && card.id <= 36) {
    return "wands";
  }

  if (card.id >= 37 && card.id <= 50) {
    return "cups";
  }

  if (card.id >= 51 && card.id <= 64) {
    return "swords";
  }

  return "pentacles";
}

export default function CardsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGroup, setSelectedGroup] = useState<CardGroup>("all");
  const [openCardId, setOpenCardId] = useState<number | null>(null);

  const filteredCards = useMemo(() => {
    const normalizedSearch = searchTerm.toLocaleLowerCase("tr-TR").trim();

    return tarotCards.filter((card) => {
      const matchesGroup =
        selectedGroup === "all" || getCardGroup(card) === selectedGroup;

      const searchableText = `
        ${card.turkishName}
        ${card.name}
        ${card.keywords.join(" ")}
        ${card.generalMeaning}
        ${card.loveMeaning}
        ${card.careerMeaning}
      `.toLocaleLowerCase("tr-TR");

      const matchesSearch =
        normalizedSearch.length === 0 ||
        searchableText.includes(normalizedSearch);

      return matchesGroup && matchesSearch;
    });
  }, [searchTerm, selectedGroup]);

  return (
    <PageShell className="flex min-h-screen max-w-7xl flex-col items-center py-12 md:py-16">
      <div className="mb-8 flex w-full flex-wrap items-center justify-between gap-4">
        <Link
          href="/"
          className="text-sm font-semibold text-purple-200 transition hover:text-purple-100"
        >
          ← Ana Sayfaya Dön
        </Link>

        <Link
          href="/tarot"
          className="text-sm font-semibold text-purple-200 transition hover:text-purple-100"
        >
          Tarot Açılımı →
        </Link>
      </div>

      <div className="mb-8 rounded-full border border-purple-300/30 bg-white/5 px-5 py-2 text-sm uppercase tracking-[0.3em] text-purple-200">
        ✦ Destina Kart Rehberi ✦
      </div>

      <div className="mb-10 max-w-3xl text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-purple-300">
          Tarot Kartları
        </p>

        <h1 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-7xl">
          Kart Rehberi
        </h1>

        <p className="leading-8 text-zinc-300">
          78 tarot kartını incele, kart adına göre ara ve her kartın genel, aşk
          ve kariyer yorumuna bak.
        </p>
      </div>

      <div className="mb-8 w-full rounded-[2rem] border border-purple-300/25 bg-white/10 p-5 shadow-2xl backdrop-blur">
        <input
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Kart adı veya anahtar kelime ara..."
          className="mb-5 w-full rounded-full border border-purple-300/30 bg-[#120914]/70 px-5 py-4 text-white outline-none placeholder:text-zinc-500 focus:border-purple-300"
        />

        <div className="flex flex-wrap gap-3">
          {cardGroups.map((group) => (
            <button
              key={group.id}
              type="button"
              onClick={() => setSelectedGroup(group.id)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                selectedGroup === group.id
                  ? "border-purple-200 bg-purple-300 text-[#120914]"
                  : "border-purple-300/25 bg-white/5 text-purple-100 hover:border-purple-200/60"
              }`}
            >
              {group.label}
            </button>
          ))}
        </div>
      </div>

      <p className="mb-6 w-full text-left text-sm text-zinc-400">
        {filteredCards.length} kart gösteriliyor.
      </p>

      <div className="grid w-full gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredCards.map((card) => {
          const isOpen = openCardId === card.id;

          return (
            <article
              key={card.id}
              className="overflow-hidden rounded-[2rem] border border-purple-300/25 bg-white/10 text-left shadow-2xl backdrop-blur transition hover:border-purple-200/50"
            >
              <button
                type="button"
                onClick={() => setOpenCardId(isOpen ? null : card.id)}
                className="w-full p-5 text-left"
              >
                <div className="flex gap-4">
                  <div className="flex h-28 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-purple-300/25 bg-[#120914]/80">
                    <TarotCardImage card={card} className="h-full w-full" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="mb-2 text-xs uppercase tracking-[0.25em] text-purple-200">
                      {getCardGroup(card) === "major"
                        ? "Major Arcana"
                        : cardGroups.find(
                            (group) => group.id === getCardGroup(card),
                          )?.label}
                    </p>

                    <h2 className="text-2xl font-bold leading-8 text-white">
                      {card.turkishName}
                    </h2>

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
                      {isOpen ? "Kart anlamını kapat ↑" : "Kart anlamını gör ↓"}
                    </p>
                  </div>
                </div>
              </button>

              {isOpen && (
                <div className="space-y-5 border-t border-purple-300/20 px-5 pb-6 pt-5">
                  <div>
                    <p className="mb-2 text-sm uppercase tracking-[0.25em] text-purple-200">
                      Genel Yorum
                    </p>
                    <p className="leading-8 text-zinc-200">
                      {card.generalMeaning}
                    </p>
                  </div>

                  <div>
                    <p className="mb-2 text-sm uppercase tracking-[0.25em] text-purple-200">
                      Aşk Yorumu
                    </p>
                    <p className="leading-8 text-zinc-200">
                      {card.loveMeaning}
                    </p>
                  </div>

                  <div>
                    <p className="mb-2 text-sm uppercase tracking-[0.25em] text-purple-200">
                      Kariyer Yorumu
                    </p>
                    <p className="leading-8 text-zinc-200">
                      {card.careerMeaning}
                    </p>
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>

      {filteredCards.length === 0 && (
        <div className="mt-10 rounded-[2rem] border border-purple-300/25 bg-white/10 p-8 text-center shadow-2xl backdrop-blur">
          <p className="text-xl font-bold text-white">Kart bulunamadı.</p>
          <p className="mt-3 text-zinc-300">
            Farklı bir kart adı veya anahtar kelime deneyebilirsin.
          </p>
        </div>
      )}
    </PageShell>
  );
}