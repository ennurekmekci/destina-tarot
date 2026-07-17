"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { type CSSProperties, useEffect, useRef, useState } from "react";
import PageShell from "@/components/PageShell";
import ReadingTypeButton from "@/components/ReadingTypeButton";
import TarotInfoCard from "@/components/TarotInfoCard";
import { tarotCards, type TarotCard } from "@/data/tarotCards";
import {
  generateSixCardReading,
  type DrawnCard,
  type ReadingType,
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

type ShufflePhase = "idle" | "gather" | "deal";

type ShuffleOffset = {
  x: number;
  y: number;
  rotate: number;
};

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

function wait(milliseconds: number) {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

function waitForFrame() {
  return new Promise<void>((resolve) => {
    requestAnimationFrame(() => resolve());
  });
}

function shuffleCards(cards: TarotCard[]) {
  const shuffledCards = [...cards];

  for (let index = shuffledCards.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));

    [shuffledCards[index], shuffledCards[randomIndex]] = [
      shuffledCards[randomIndex],
      shuffledCards[index],
    ];
  }

  return shuffledCards;
}

function DeckCardBack({
  card,
  selectedOrder,
  onClick,
  disabled,
  shufflePhase,
  shuffleOffset,
  setCardRef,
}: {
  card: TarotCard;
  selectedOrder?: number;
  onClick: () => void;
  disabled: boolean;
  shufflePhase: ShufflePhase;
  shuffleOffset?: ShuffleOffset;
  setCardRef: (cardId: number, element: HTMLButtonElement | null) => void;
}) {
  const isSelected = selectedOrder !== undefined;

  const shuffleClass =
    shufflePhase === "gather"
      ? "destina-card-gather"
      : shufflePhase === "deal"
        ? "destina-card-deal"
        : "";

  const cardStyle = {
    "--shuffle-x": `${shuffleOffset?.x ?? 0}px`,
    "--shuffle-y": `${shuffleOffset?.y ?? 0}px`,
    "--shuffle-r": `${shuffleOffset?.rotate ?? 0}deg`,
  } as CSSProperties;

  return (
    <button
      ref={(element) => setCardRef(card.id, element)}
      type="button"
      style={cardStyle}
      onClick={onClick}
      disabled={(disabled && !isSelected) || shufflePhase !== "idle"}
      aria-label={`${card.turkishName} kartını seç`}
      className={`group relative aspect-[2/3] overflow-hidden rounded-[1rem] border transition-all duration-300 ${shuffleClass} ${
        isSelected
          ? "scale-[1.03] border-purple-100 bg-[#241027] shadow-[0_0_34px_rgba(216,180,254,0.28)]"
          : "border-purple-300/20 bg-[#130716] hover:-translate-y-1 hover:border-purple-200/50 hover:bg-[#1d0c21] hover:shadow-[0_12px_36px_rgba(0,0,0,0.35)]"
      } ${disabled && !isSelected ? "cursor-not-allowed opacity-35" : ""}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(216,180,254,0.13),transparent_34%),radial-gradient(circle_at_50%_82%,rgba(168,85,247,0.10),transparent_36%)]" />

      <div className="absolute inset-[7px] rounded-[0.8rem] border border-purple-200/18" />
      <div className="absolute inset-[15px] rounded-[0.55rem] border border-purple-200/10" />

      <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-purple-200/20" />
      <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-purple-200/14" />

      <div className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-200/30" />
      <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-200/18" />

      <div className="absolute left-4 top-4 h-5 w-5 border-l border-t border-purple-200/22" />
      <div className="absolute right-4 top-4 h-5 w-5 border-r border-t border-purple-200/22" />
      <div className="absolute bottom-4 left-4 h-5 w-5 border-b border-l border-purple-200/22" />
      <div className="absolute bottom-4 right-4 h-5 w-5 border-b border-r border-purple-200/22" />

      <div className="absolute left-1/2 top-6 h-1.5 w-1.5 -translate-x-1/2 rotate-45 bg-purple-200/45" />
      <div className="absolute bottom-6 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rotate-45 bg-purple-200/45" />
      <div className="absolute left-6 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rotate-45 bg-purple-200/35" />
      <div className="absolute right-6 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rotate-45 bg-purple-200/35" />

      {isSelected && (
        <div className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-purple-200 text-xs font-bold text-[#140917] shadow-md">
          {selectedOrder}
        </div>
      )}
    </button>
  );
}

export default function TarotPage() {
  const router = useRouter();

  const deckRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Record<number, HTMLButtonElement | null>>({});

  const [readingType, setReadingType] = useState<ReadingType>("general");
  const [userQuestion, setUserQuestion] = useState("");
  const [readingHistory, setReadingHistory] = useState<ReadingHistoryItem[]>(
    [],
  );
  const [isHistoryLoaded, setIsHistoryLoaded] = useState(false);
  const [deckCards, setDeckCards] = useState<TarotCard[]>([]);
  const [selectedCards, setSelectedCards] = useState<TarotCard[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [shufflePhase, setShufflePhase] = useState<ShufflePhase>("idle");
  const [shuffleOffsets, setShuffleOffsets] = useState<
    Record<number, ShuffleOffset>
  >({});

  useEffect(() => {
    setDeckCards(shuffleCards(tarotCards));

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

  function calculateShuffleOffsets() {
    const deckElement = deckRef.current;

    if (!deckElement) {
      return {};
    }

    const deckRect = deckElement.getBoundingClientRect();
    const deckCenterX = deckRect.left + deckRect.width / 2;
    const deckCenterY = deckRect.top + deckRect.height / 2;

    const offsets: Record<number, ShuffleOffset> = {};

    tarotCards.forEach((card) => {
      const cardElement = cardRefs.current[card.id];

      if (!cardElement) {
        return;
      }

      const cardRect = cardElement.getBoundingClientRect();
      const cardCenterX = cardRect.left + cardRect.width / 2;
      const cardCenterY = cardRect.top + cardRect.height / 2;

      offsets[card.id] = {
        x: deckCenterX - cardCenterX,
        y: deckCenterY - cardCenterY,
        rotate: ((card.id % 9) - 4) * 7,
      };
    });

    return offsets;
  }

  async function reshuffleDeck() {
    if (shufflePhase !== "idle" || isDrawing) {
      return;
    }

    setSelectedCards([]);
    setShuffleOffsets(calculateShuffleOffsets());
    setShufflePhase("gather");

    await wait(650);

    setDeckCards(shuffleCards(tarotCards));

    await waitForFrame();
    await waitForFrame();

    setShuffleOffsets(calculateShuffleOffsets());
    setShufflePhase("deal");

    await wait(750);

    setShufflePhase("idle");
    setShuffleOffsets({});
  }

  function toggleCardSelection(card: TarotCard) {
    const isAlreadySelected = selectedCards.some(
      (selectedCard) => selectedCard.id === card.id,
    );

    if (isAlreadySelected) {
      setSelectedCards((currentCards) =>
        currentCards.filter((selectedCard) => selectedCard.id !== card.id),
      );
      return;
    }

    if (selectedCards.length >= 6) {
      return;
    }

    setSelectedCards((currentCards) => [...currentCards, card]);
  }

  async function createReadingFromSelectedCards() {
    if (selectedCards.length !== 6) {
      return;
    }

    setIsDrawing(true);

    await wait(700);

    const drawnCards = selectedCards.map((card, index) => ({
      position: positions[index],
      card,
    }));

    const generatedReading = generateSixCardReading({
      question: userQuestion,
      readingType,
      drawnCards,
    });

    const newHistoryItem: ReadingHistoryItem = {
      id: `${Date.now()}-${Math.random()}`,
      readingType,
      question: userQuestion.trim() || "Niyet yazılmadı",
      cards: drawnCards,
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

  return (
    <PageShell className="flex min-h-screen max-w-7xl flex-col items-center py-6 md:py-14">
      <div className="mb-6 flex w-full flex-wrap items-center justify-between gap-4 md:mb-8">
        <Link
          href="/"
          className="text-sm font-semibold text-purple-200 transition hover:text-purple-100"
        >
          ← Ana Sayfaya Dön
        </Link>

        <Link
          href="/history"
          className="text-sm font-semibold text-purple-200 transition hover:text-purple-100"
        >
          Açılım Geçmişi →
        </Link>
      </div>

      <div className="mb-6 rounded-full border border-purple-300/30 bg-white/5 px-5 py-2 text-sm uppercase tracking-[0.3em] text-purple-200 md:mb-8">
        ✦ Destina Yorum Motoru ✦
      </div>

      <div className="mb-8 w-full max-w-3xl text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.35em] text-purple-300">
          Niyetli 6 Kart Açılımı
        </p>

        <h1 className="mb-4 text-5xl font-bold tracking-tight text-white md:text-7xl">
          Destina
        </h1>

        <p className="mx-auto max-w-2xl text-base leading-7 text-zinc-300 md:text-lg md:leading-8">
          Niyetini yaz, açılım türünü seç ve kapalı desteden 6 kart seç.
          Kartların yeri her karıştırmada değişir.
        </p>
      </div>

      <section className="w-full">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-sm uppercase tracking-[0.35em] text-purple-300">
              Kapalı Deste
            </p>

            <h2 className="text-3xl font-bold text-white md:text-4xl">
              6 Kart Seç
            </h2>
          </div>

          <div className="text-left sm:text-right">
            <p className="text-sm leading-7 text-zinc-400">
              Seçim sıran açılım pozisyonlarını belirler.
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-purple-300/20 bg-white/5 p-5 shadow-2xl backdrop-blur">
          <div className="mb-5 flex flex-col gap-3 border-b border-purple-300/15 pb-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-200">
              {selectedCards.length}/6 kart seçildi
            </p>

            <button
              type="button"
              onClick={reshuffleDeck}
              disabled={isDrawing || shufflePhase !== "idle"}
              className="rounded-full border border-purple-300/30 px-6 py-3 font-bold text-purple-100 transition hover:border-purple-200 hover:bg-purple-300/10 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {shufflePhase !== "idle"
                ? "Karıştırılıyor..."
                : "Kartları Karıştır"}
            </button>
          </div>

          <div
            ref={deckRef}
            className="grid grid-cols-4 gap-3 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12"
          >
            {deckCards.map((card) => {
              const selectedIndex = selectedCards.findIndex(
                (selectedCard) => selectedCard.id === card.id,
              );

              return (
                <DeckCardBack
                  key={card.id}
                  card={card}
                  selectedOrder={
                    selectedIndex >= 0 ? selectedIndex + 1 : undefined
                  }
                  onClick={() => toggleCardSelection(card)}
                  disabled={selectedCards.length >= 6}
                  shufflePhase={shufflePhase}
                  shuffleOffset={shuffleOffsets[card.id]}
                  setCardRef={(cardId, element) => {
                    cardRefs.current[cardId] = element;
                  }}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="mt-8 w-full rounded-[2rem] border border-purple-300/25 bg-white/10 p-6 text-left shadow-2xl backdrop-blur">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr_220px]">
          <div>
            <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.25em] text-purple-200">
              Niyetini Yaz
            </label>

            <textarea
              value={userQuestion}
              onChange={(event) => setUserQuestion(event.target.value)}
              placeholder="Örneğin: Şu an görmem gereken mesaj ne?"
              className="min-h-28 w-full resize-none rounded-3xl border border-purple-300/30 bg-[#120914]/70 px-5 py-4 text-white outline-none placeholder:text-zinc-500 focus:border-purple-300"
            />
          </div>

          <div>
            <p className="mb-3 block text-sm font-semibold uppercase tracking-[0.25em] text-purple-200">
              Açılım Türü
            </p>

            <div className="grid gap-3">
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
          </div>

          <div className="flex flex-col justify-end">
            <button
              type="button"
              onClick={createReadingFromSelectedCards}
              disabled={
                selectedCards.length !== 6 ||
                isDrawing ||
                shufflePhase !== "idle"
              }
              className="rounded-full bg-purple-300 px-6 py-4 font-bold text-[#120914] shadow-lg shadow-purple-950/40 transition hover:bg-purple-200 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isDrawing
                ? "Açılım hazırlanıyor..."
                : selectedCards.length === 6
                  ? "Açılımı Göster"
                  : `${selectedCards.length}/6 Kart Seç`}
            </button>

            <p className="mt-3 text-center text-xs leading-5 text-zinc-500">
              Açılımı görmek için 6 kart seçmelisin.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10 grid w-full gap-4 text-left md:grid-cols-3">
        <TarotInfoCard
          icon="🃏"
          title="78 Kartlık Deste"
          description="Her açılımda tüm kartların yeri yeniden karışır."
        />

        <TarotInfoCard
          icon="✦"
          title="Kendi Seçimin"
          description="Sonucu sistem değil, senin seçtiğin 6 kart oluşturur."
        />

        <TarotInfoCard
          icon="🌙"
          title="Destina Yorumu"
          description="Seçilen kartlar dönem çiftleri olarak birlikte okunur."
        />
      </section>
    </PageShell>
  );
}