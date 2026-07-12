"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import PageHeader from "@/components/PageHeader";
import PageShell from "@/components/PageShell";

type ReadingType = "general" | "love" | "career";

type HistoryCard = {
  position: string;
  card: {
    id: number;
    name: string;
    turkishName: string;
  };
};

type ReadingHistoryItem = {
  id: string;
  readingType: ReadingType;
  question: string;
  cards: HistoryCard[];
  createdAt: string;
};

const readingTypeLabels: Record<ReadingType, string> = {
  general: "Genel",
  love: "Aşk",
  career: "Kariyer",
};

export default function HistoryPage() {
  const [readingHistory, setReadingHistory] = useState<ReadingHistoryItem[]>([]);

  useEffect(() => {
    const savedHistory = localStorage.getItem("destina-reading-history");

    if (savedHistory) {
      setReadingHistory(JSON.parse(savedHistory));
    }
  }, []);

  function clearReadingHistory() {
    setReadingHistory([]);
    localStorage.removeItem("destina-reading-history");
  }

  return (
    <PageShell className="max-w-5xl py-12">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
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

      <PageHeader
        badge="🌙 Açılım Geçmişi"
        title="Son Açılımların"
        description="Daha önce yaptığın açılımları, niyetlerini ve çıkan kartları burada görebilirsin."
      />

      {readingHistory.length > 0 ? (
        <div className="rounded-[2rem] border border-purple-300/30 bg-white/5 p-8 text-left shadow-2xl backdrop-blur">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm uppercase tracking-[0.25em] text-purple-200">
              Kayıtlı Açılımlar
            </p>

            <button
              onClick={clearReadingHistory}
              className="rounded-full border border-purple-300/40 px-4 py-2 text-sm font-semibold text-purple-100 transition hover:bg-purple-300 hover:text-[#120914]"
            >
              Geçmişi Temizle
            </button>
          </div>

          <div className="space-y-4">
            {readingHistory.map((historyItem) => (
              <div
                key={historyItem.id}
                className="rounded-2xl border border-purple-300/20 bg-[#120914]/60 p-5"
              >
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <p className="font-semibold text-purple-100">
                    {readingTypeLabels[historyItem.readingType]} Açılımı
                  </p>

                  <p className="text-sm text-zinc-400">
                    {historyItem.createdAt}
                  </p>
                </div>

                <p className="mb-4 text-sm leading-6 text-zinc-300">
                  “{historyItem.question}”
                </p>

                <div className="flex flex-wrap gap-2">
                  {historyItem.cards.map((item) => (
                    <span
                      key={`${historyItem.id}-${item.position}`}
                      className="rounded-full bg-purple-300/15 px-3 py-1 text-sm text-purple-100"
                    >
                      {item.position}: {item.card.turkishName}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="rounded-[2rem] border border-purple-300/25 bg-white/5 p-8 text-center shadow-2xl backdrop-blur">
          <p className="text-lg text-zinc-300">
            Henüz kayıtlı açılım yok. İlk açılımını yapmak için tarot sayfasına
            geçebilirsin.
          </p>

          <Link
            href="/tarot"
            className="mt-6 inline-block rounded-full bg-purple-300 px-7 py-3 font-bold text-[#120914] transition hover:bg-purple-200"
          >
            Tarot Açılımı Yap
          </Link>
        </div>
      )}
    </PageShell>
  );
}