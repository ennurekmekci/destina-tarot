"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import PageShell from "@/components/PageShell";
import ReadingTypeButton from "@/components/ReadingTypeButton";
import TarotInfoCard from "@/components/TarotInfoCard";
import TarotResultCard from "@/components/TarotResultCard";
import { tarotCards } from "@/data/tarotCards";
import {
  generateSixCardReading,
  type DrawnCard,
  type ReadingType,
  type SixCardReading,
} from "@/lib/readingEngine";

type ReadingHistoryItem = {
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

type ReadingSection = SixCardReading["pastSummary"];

const positions = [
  "Geçmiş Zaman 1",
  "Geçmiş Zaman 2",
  "Şimdiki Zaman 1",
  "Şimdiki Zaman 2",
  "Gelecek Zaman 1",
  "Gelecek Zaman 2",
];

const readingTypes: ReadingType[] = ["general", "love", "career"];

const readingTypeLabels: Record<ReadingType, string> = {
  general: "Genel",
  love: "Aşk",
  career: "Kariyer",
};

const readingTypeDescriptions: Record<ReadingType, string> = {
  general: "Genel enerjini ve yakın dönem yönünü yorumlar.",
  love: "Duygusal bağları, hisleri ve ilişki dinamiklerini yorumlar.",
  career: "Hedeflerini, kararlarını ve kariyer yolunu yorumlar.",
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

export default function TarotPage() {
  const [drawnCards, setDrawnCards] = useState<DrawnCard[]>([]);
  const [readingResult, setReadingResult] = useState<SixCardReading | null>(
    null,
  );
  const router = useRouter();
  const [readingType, setReadingType] = useState<ReadingType>("general");
  const [userQuestion, setUserQuestion] = useState("");
  const [readingHistory, setReadingHistory] = useState<ReadingHistoryItem[]>(
    [],
  );
  const [isHistoryLoaded, setIsHistoryLoaded] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const savedHistory = localStorage.getItem("destina-reading-history");

    if (savedHistory) {
      setReadingHistory(JSON.parse(savedHistory));
    }

    setIsHistoryLoaded(true);
  }, []);

  useEffect(() => {
    if (!isHistoryLoaded) {
      return;
    }

    localStorage.setItem(
      "destina-reading-history",
      JSON.stringify(readingHistory),
    );
  }, [readingHistory, isHistoryLoaded]);

  async function drawSixCards() {
  setIsDrawing(true);
  setDrawnCards([]);
  setReadingResult(null);

  await new Promise((resolve) => setTimeout(resolve, 900));

  const shuffledCards = [...tarotCards].sort(() => Math.random() - 0.5);

  const selectedCards = shuffledCards.slice(0, 6).map((card, index) => ({
    position: positions[index],
    card,
  }));

  const generatedReading = generateSixCardReading({
    question: userQuestion,
    readingType,
    drawnCards: selectedCards,
  });

  const newHistoryItem: ReadingHistoryItem = {
    id: `${Date.now()}-${Math.random()}`,
    readingType,
    question: userQuestion.trim() || "Niyet yazılmadı",
    cards: selectedCards,
    createdAt: new Date().toLocaleTimeString("tr-TR", {
      hour: "2-digit",
      minute: "2-digit",
    }),
    summary: {
      flowHeadline: generatedReading.flowSummary.headline,
      flowDetail: generatedReading.flowSummary.detail,
      adviceHeadline: generatedReading.advice.headline,
      adviceDetail: generatedReading.advice.detail,
    },
  };

  const currentReading = {
    ...newHistoryItem,
    result: generatedReading,
  };

  const updatedHistory = [newHistoryItem, ...readingHistory.slice(0, 4)];

  setDrawnCards(selectedCards);
  setReadingResult(generatedReading);
  setReadingHistory(updatedHistory);

  localStorage.setItem(
    "destina-reading-history",
    JSON.stringify(updatedHistory),
  );

  localStorage.setItem(
    "destina-current-reading",
    JSON.stringify(currentReading),
  );

  setIsDrawing(false);
  router.push("/reading");
}

  function getCardMeaning(card: DrawnCard["card"]) {
    if (readingType === "love") {
      return card.loveMeaning;
    }

    if (readingType === "career") {
      return card.careerMeaning;
    }

    return card.generalMeaning;
  }

  const pastCards = drawnCards.slice(0, 2);
  const presentCards = drawnCards.slice(2, 4);
  const futureCards = drawnCards.slice(4, 6);

  return (
    <PageShell className="flex min-h-screen max-w-7xl flex-col items-center py-12 md:py-16">
      <div className="mb-8 flex w-full flex-wrap items-center justify-between gap-4">
        <Link
          href="/"
          className="text-sm font-semibold text-purple-200 transition hover:text-purple-100"
        >
          ← Ana Sayfaya Dön
        </Link>

        <div className="flex flex-wrap gap-4">

          <Link
            href="/history"
            className="text-sm font-semibold text-purple-200 transition hover:text-purple-100"
          >
            Açılım Geçmişi →
          </Link>
        </div>
      </div>

      <div className="mb-8 rounded-full border border-purple-300/30 bg-white/5 px-5 py-2 text-sm uppercase tracking-[0.3em] text-purple-200">
        ✦ Destina Yorum Motoru ✦
      </div>

      <div className="grid w-full items-center gap-10 lg:grid-cols-[1fr_430px]">
        <div className="text-center lg:text-left">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-purple-300">
            Niyetli 6 Kart Açılımı
          </p>

          <h1 className="mb-6 text-6xl font-bold tracking-tight md:text-8xl">
            Destina
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-zinc-300 lg:mx-0">
            Sorunu yaz, açılım türünü seç ve geçmiş zaman, şimdiki zaman,
            gelecek zaman çizgisinde ikişer karttan oluşan yorumunu oku.
          </p>

          <div className="grid gap-4 text-left sm:grid-cols-3">
            <TarotInfoCard
              icon="🃏"
              title="6 Kart Açılımı"
              description="Geçmiş, şimdiki zaman ve gelecek zaman için ikişer kart seçer."
            />

            <TarotInfoCard
              icon="✨"
              title="Birlikte Yorum"
              description="Kartları tek tek değil, dönem çiftleri olarak okur."
            />

            <TarotInfoCard
              icon="🌙"
              title="Destina Tavsiyesi"
              description="Altı kartın genel enerjisinden sonuç ve tavsiye üretir."
            />
          </div>
        </div>

        <div className="rounded-[2rem] border border-purple-300/25 bg-white/10 p-6 text-left shadow-2xl backdrop-blur">
          <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.25em] text-purple-200">
            Niyetini Yaz
          </label>

          <textarea
            value={userQuestion}
            onChange={(event) => setUserQuestion(event.target.value)}
            placeholder="Örneğin: Şu an görmem gereken mesaj ne?"
            className="min-h-32 w-full resize-none rounded-3xl border border-purple-300/30 bg-[#120914]/70 px-5 py-4 text-white outline-none placeholder:text-zinc-500 focus:border-purple-300"
          />

          <div className="mt-6 grid gap-3">
            {readingTypes.map((type) => (
              <ReadingTypeButton
                key={type}
                label={readingTypeLabels[type]}
                description={readingTypeDescriptions[type]}
                isSelected={readingType === type}
                onClick={() => setReadingType(type)}
              />
            ))}
          </div>

          <button
            onClick={drawSixCards}
            disabled={isDrawing}
            className="mt-6 w-full rounded-full bg-purple-300 px-8 py-4 font-bold text-[#120914] shadow-lg shadow-purple-950/40 transition hover:bg-purple-200 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isDrawing
              ? "Destina kartları karıştırıyor..."
              : `${readingTypeLabels[readingType]} 6 Kart Açılımı Yap`}
          </button>
        </div>
      </div>

      {isDrawing && (
        <div className="mt-14 w-full rounded-[2rem] border border-purple-300/25 bg-white/10 p-8 text-center shadow-2xl backdrop-blur">
          <p className="mb-3 text-4xl">🌙</p>

          <p className="text-2xl font-bold text-white">
            Destina kartları karıştırıyor...
          </p>

          <p className="mt-3 leading-7 text-zinc-300">
            Niyetin okunuyor, kartlar seçiliyor ve açılım hazırlanıyor.
          </p>
        </div>
      )}

      {drawnCards.length > 0 && readingResult && (
        <>
          <section className="mt-14 w-full">
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
                  readingTypeLabel={readingTypeLabels[readingType]}
                  meaning={getCardMeaning(item.card)}
                />
              ))}
            </div>

            <ReadingTextBox
              label="Geçmiş Zaman Yorumu"
              section={readingResult.pastSummary}
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
                  readingTypeLabel={readingTypeLabels[readingType]}
                  meaning={getCardMeaning(item.card)}
                />
              ))}
            </div>

            <ReadingTextBox
              label="Şimdiki Zaman Yorumu"
              section={readingResult.presentSummary}
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
                  readingTypeLabel={readingTypeLabels[readingType]}
                  meaning={getCardMeaning(item.card)}
                />
              ))}
            </div>

            <ReadingTextBox
              label="Gelecek Zaman Yorumu"
              section={readingResult.futureSummary}
            />
          </section>

          <section className="mt-12 grid w-full gap-6 lg:grid-cols-2">
            <ReadingTextBox
              label="Genel Akış"
              section={readingResult.flowSummary}
              variant="highlight"
            />

            <ReadingTextBox
              label="Tavsiye"
              section={readingResult.advice}
              variant="highlight"
            />
          </section>
        </>
      )}
    </PageShell>
  );
}