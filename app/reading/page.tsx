"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import PageShell from "@/components/PageShell";
import TarotResultCard from "@/components/TarotResultCard";
import type { DrawnCard, ReadingType, SixCardReading } from "@/lib/readingEngine";

type CurrentReading = {
  id: string;
  readingType: ReadingType;
  question: string;
  cards: DrawnCard[];
  createdAt: string;
  result: SixCardReading;
};

type ReadingSection = SixCardReading["pastSummary"];

const readingTypeLabels: Record<ReadingType, string> = {
  general: "Genel",
  love: "Aşk",
  career: "Kariyer",
};

function ReadingTextBox({
  label,
  section,
  variant = "default",
}: {
  label: string;
  section: ReadingSection;
  variant?: "default" | "highlight";
}) {
  return (
    <div
      className={`mt-6 rounded-[2rem] border p-7 text-left shadow-2xl backdrop-blur ${
        variant === "highlight"
          ? "border-purple-300/30 bg-purple-300/10"
          : "border-purple-300/30 bg-white/5"
      }`}
    >
      <p className="mb-3 text-sm uppercase tracking-[0.25em] text-purple-200">
        {label}
      </p>

      <p className="mb-3 text-xl font-bold leading-8 text-white">
        {section.headline}
      </p>

      <p className="leading-8 text-zinc-200">{section.detail}</p>
    </div>
  );
}

export default function ReadingPage() {
  const [currentReading, setCurrentReading] = useState<CurrentReading | null>(
    null,
  );
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedReading = localStorage.getItem("destina-current-reading");

    if (savedReading) {
      setCurrentReading(JSON.parse(savedReading));
    }

    setIsLoaded(true);
  }, []);

  function getCardMeaning(card: DrawnCard["card"]) {
    if (!currentReading) {
      return card.generalMeaning;
    }

    if (currentReading.readingType === "love") {
      return card.loveMeaning;
    }

    if (currentReading.readingType === "career") {
      return card.careerMeaning;
    }

    return card.generalMeaning;
  }

  if (!isLoaded) {
    return (
      <PageShell className="flex min-h-screen max-w-5xl flex-col items-center justify-center py-16 text-center">
        <p className="text-xl font-bold text-white">Açılım yükleniyor...</p>
      </PageShell>
    );
  }

  if (!currentReading) {
    return (
      <PageShell className="flex min-h-screen max-w-5xl flex-col items-center justify-center py-16 text-center">
        <div className="rounded-[2rem] border border-purple-300/25 bg-white/10 p-8 shadow-2xl backdrop-blur">
          <p className="mb-3 text-4xl">🌙</p>

          <h1 className="mb-4 text-3xl font-bold text-white">
            Açılım bulunamadı
          </h1>

          <p className="mb-8 leading-8 text-zinc-300">
            Henüz gösterilecek bir açılım yok. Yeni bir tarot açılımı yaparak
            sonucu burada görüntüleyebilirsin.
          </p>

          <Link
            href="/tarot"
            className="rounded-full bg-purple-300 px-8 py-4 font-bold text-[#120914] transition hover:bg-purple-200"
          >
            Yeni Açılım Yap
          </Link>
        </div>
      </PageShell>
    );
  }

  const pastCards = currentReading.cards.slice(0, 2);
  const presentCards = currentReading.cards.slice(2, 4);
  const futureCards = currentReading.cards.slice(4, 6);

  return (
    <PageShell className="flex min-h-screen max-w-7xl flex-col items-center py-12 md:py-16">
      <div className="mb-8 flex w-full flex-wrap items-center justify-between gap-4">
        <Link
          href="/tarot"
          className="text-sm font-semibold text-purple-200 transition hover:text-purple-100"
        >
          ← Yeni Açılım Yap
        </Link>

        <Link
          href="/history"
          className="text-sm font-semibold text-purple-200 transition hover:text-purple-100"
        >
          Açılım Geçmişi →
        </Link>
      </div>

      <div className="mb-8 rounded-full border border-purple-300/30 bg-white/5 px-5 py-2 text-sm uppercase tracking-[0.3em] text-purple-200">
        ✦ Destina Açılım Sonucu ✦
      </div>

      <div className="mb-12 max-w-3xl text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.35em] text-purple-300">
          {readingTypeLabels[currentReading.readingType]} Açılımı
        </p>

        <h1 className="mb-4 text-5xl font-bold tracking-tight text-white md:text-7xl">
          Açılım Sonucu
        </h1>

        <p className="leading-8 text-zinc-300">
          <span className="font-semibold text-purple-100">Niyet:</span>{" "}
          {currentReading.question}
        </p>
      </div>

      <section className="w-full">
        <div className="mb-6 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-purple-300">
            Geçmiş Zaman
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white">
            Geçmişten Gelen İz
          </h2>
        </div>

        <div className="grid w-full gap-6 md:grid-cols-2">
          {pastCards.map((item) => (
            <TarotResultCard
              key={`${item.position}-${item.card.id}`}
              position={item.position}
              card={item.card}
              readingTypeLabel={readingTypeLabels[currentReading.readingType]}
              meaning={getCardMeaning(item.card)}
            />
          ))}
        </div>

        <ReadingTextBox
          label="Geçmiş Zaman Yorumu"
          section={currentReading.result.pastSummary}
        />
      </section>

      <section className="mt-12 w-full">
        <div className="mb-6 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-purple-300">
            Şimdiki Zaman
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white">
            İçinde Bulunduğun Enerji
          </h2>
        </div>

        <div className="grid w-full gap-6 md:grid-cols-2">
          {presentCards.map((item) => (
            <TarotResultCard
              key={`${item.position}-${item.card.id}`}
              position={item.position}
              card={item.card}
              readingTypeLabel={readingTypeLabels[currentReading.readingType]}
              meaning={getCardMeaning(item.card)}
            />
          ))}
        </div>

        <ReadingTextBox
          label="Şimdiki Zaman Yorumu"
          section={currentReading.result.presentSummary}
        />
      </section>

      <section className="mt-12 w-full">
        <div className="mb-6 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-purple-300">
            Gelecek Zaman
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white">
            Yakındaki Yön
          </h2>
        </div>

        <div className="grid w-full gap-6 md:grid-cols-2">
          {futureCards.map((item) => (
            <TarotResultCard
              key={`${item.position}-${item.card.id}`}
              position={item.position}
              card={item.card}
              readingTypeLabel={readingTypeLabels[currentReading.readingType]}
              meaning={getCardMeaning(item.card)}
            />
          ))}
        </div>

        <ReadingTextBox
          label="Gelecek Zaman Yorumu"
          section={currentReading.result.futureSummary}
        />
      </section>

      <section className="mt-12 grid w-full gap-6 lg:grid-cols-2">
        <ReadingTextBox
          label="Genel Akış"
          section={currentReading.result.flowSummary}
          variant="highlight"
        />

        <ReadingTextBox
          label="Tavsiye"
          section={currentReading.result.advice}
          variant="highlight"
        />
      </section>
    </PageShell>
  );
}