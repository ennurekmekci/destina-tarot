"use client";

import type { DrawnCard, ReadingType } from "@/lib/readingEngine";

export type HistoryReadingItem = {
  id: string;
  readingType: ReadingType;
  question: string;
  cards: DrawnCard[];
  createdAt: string;
  summary?: {
    flowHeadline: string;
    flowDetail: string;
    adviceHeadline: string;
    adviceDetail: string;
  };
};

type HistoryItemCardProps = {
  item: HistoryReadingItem;
  onOpen: () => void;
};

const readingTypeLabels: Record<ReadingType, string> = {
  general: "Genel",
  love: "Aşk",
  career: "Kariyer",
};

export default function HistoryItemCard({ item, onOpen }: HistoryItemCardProps) {
  return (
    <article className="rounded-[2rem] border border-purple-300/25 bg-white/10 p-6 text-left shadow-2xl backdrop-blur transition hover:-translate-y-1 hover:border-purple-200/50">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="rounded-full border border-purple-300/25 bg-purple-300/10 px-3 py-1 text-xs font-semibold text-purple-100">
          {readingTypeLabels[item.readingType]} Açılımı
        </span>

        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
          {item.createdAt}
        </span>
      </div>

      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-purple-200">
        Niyet
      </p>

      <h2 className="text-2xl font-bold leading-8 text-white">
        {item.question}
      </h2>

      {item.summary && (
        <p className="mt-4 leading-7 text-zinc-300">
          {item.summary.flowHeadline}
        </p>
      )}

      <div className="mt-5 flex flex-wrap gap-2">
        {item.cards.map((drawnCard) => (
          <span
            key={`${item.id}-${drawnCard.position}-${drawnCard.card.id}`}
            className="rounded-full border border-purple-300/20 bg-[#120914]/50 px-3 py-1 text-xs text-purple-100"
          >
            {drawnCard.card.turkishName}
          </span>
        ))}
      </div>

      <button
        type="button"
        onClick={onOpen}
        className="mt-6 w-full rounded-full bg-purple-300 px-6 py-3 font-bold text-[#120914] shadow-lg shadow-purple-950/40 transition hover:bg-purple-200"
      >
        Açılımı Tekrar Aç
      </button>
    </article>
  );
}