"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import PageShell from "@/components/PageShell";
import TarotResultCard from "@/components/TarotResultCard";
import { tarotCards, type TarotCard } from "@/data/tarotCards";

type DrawnCard = {
  position: string;
  card: TarotCard;
};

type ReadingType = "general" | "love" | "career";

type ReadingHistoryItem = {
  id: string;
  readingType: ReadingType;
  question: string;
  cards: DrawnCard[];
  createdAt: string;
};

const positions = ["Geçmiş", "Şimdi", "Yakın Gelecek"];
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

export default function TarotPage() {
  const [drawnCards, setDrawnCards] = useState<DrawnCard[]>([]);
  const [readingType, setReadingType] = useState<ReadingType>("general");
  const [userQuestion, setUserQuestion] = useState("");
  const [readingHistory, setReadingHistory] = useState<ReadingHistoryItem[]>([]);
  const [isHistoryLoaded, setIsHistoryLoaded] = useState(false);

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

  function drawThreeCards() {
    const shuffledCards = [...tarotCards].sort(() => Math.random() - 0.5);

    const selectedCards = shuffledCards.slice(0, 3).map((card, index) => ({
      position: positions[index],
      card,
    }));

    const newHistoryItem: ReadingHistoryItem = {
      id: `${Date.now()}-${Math.random()}`,
      readingType,
      question: userQuestion.trim() || "Niyet yazılmadı",
      cards: selectedCards,
      createdAt: new Date().toLocaleTimeString("tr-TR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setDrawnCards(selectedCards);
    setReadingHistory((previousHistory) => [
      newHistoryItem,
      ...previousHistory.slice(0, 4),
    ]);
  }

  function getCardMeaning(card: TarotCard) {
    if (readingType === "love") {
      return card.loveMeaning;
    }

    if (readingType === "career") {
      return card.careerMeaning;
    }

    return card.generalMeaning;
  }

  function getQuestionIntro() {
    const trimmedQuestion = userQuestion.trim();

    if (!trimmedQuestion) {
      return "";
    }

    return `Bu açılım "${trimmedQuestion}" niyeti üzerinden yorumlanıyor. `;
  }

  function getSpreadSummary() {
    if (drawnCards.length === 0) {
      return "";
    }

    const pastCard = drawnCards[0].card;
    const presentCard = drawnCards[1].card;
    const futureCard = drawnCards[2].card;
    const selectedLabel = readingTypeLabels[readingType];
    const questionIntro = getQuestionIntro();

    if (readingType === "love") {
      return `${questionIntro}Bu aşk açılımında geçmişte ${pastCard.turkishName} kartının temsil ettiği "${pastCard.keywords[0]}" teması duygusal alana iz bırakmış görünüyor. Şu anda ${presentCard.turkishName} kartı, ilişkilerde "${presentCard.keywords[0]}" enerjisinin daha belirgin olduğunu anlatıyor. Yakın gelecekte ise ${futureCard.turkishName} kartı, aşk konusunda "${futureCard.keywords[0]}" temasının güçlenebileceğini gösteriyor. Genel olarak bu açılım, kalpte netleşme ve duygusal yönde bir seçim yapma ihtimalini öne çıkarıyor.`;
    }

    if (readingType === "career") {
      return `${questionIntro}Bu kariyer açılımında geçmişte ${pastCard.turkishName} kartının temsil ettiği "${pastCard.keywords[0]}" teması iş ve hedefler üzerinde etkili olmuş. Şu anda ${presentCard.turkishName} kartı, kariyer alanında "${presentCard.keywords[0]}" enerjisinin daha görünür olduğunu söylüyor. Yakın gelecekte ise ${futureCard.turkishName} kartı, "${futureCard.keywords[0]}" temasının yeni bir yön veya karar getirebileceğini gösteriyor. Genel olarak bu açılım, emek verilen konularda daha bilinçli ilerleme ve fırsatları doğru değerlendirme mesajı taşıyor.`;
    }

    return `${questionIntro}Bu ${selectedLabel.toLowerCase()} açılımda geçmişte ${pastCard.turkishName} kartının temsil ettiği "${pastCard.keywords[0]}" teması öne çıkıyor. Şu anda ${presentCard.turkishName} kartı, "${presentCard.keywords[0]}" enerjisinin daha görünür olduğunu anlatıyor. Yakın gelecekte ise ${futureCard.turkishName} kartı, "${futureCard.keywords[0]}" temasının güçlenebileceğini gösteriyor. Genel olarak bu açılım, geçmişten gelen bir etkinin bugünkü seçimlerine yansıdığını ve yakın gelecekte yeni bir yön belirleme ihtimalinin arttığını söylüyor.`;
  }

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
            href="/symbols"
            className="text-sm font-semibold text-purple-200 transition hover:text-purple-100"
          >
            Sembol Sözlüğü
          </Link>

          <Link
            href="/history"
            className="text-sm font-semibold text-purple-200 transition hover:text-purple-100"
          >
            Açılım Geçmişi →
          </Link>
        </div>
      </div>

      <div className="mb-8 rounded-full border border-purple-300/30 bg-white/5 px-5 py-2 text-sm uppercase tracking-[0.3em] text-purple-200">
        ✦ Tarot Açılımı ✦
      </div>

      <div className="grid w-full items-center gap-10 lg:grid-cols-[1fr_430px]">
        <div className="text-center lg:text-left">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-purple-300">
            Niyetli 3 Kart Açılımı
          </p>

          <h1 className="mb-6 text-6xl font-bold tracking-tight md:text-8xl">
            Destina
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-zinc-300 lg:mx-0">
            Sorunu yaz, açılım türünü seç ve geçmiş, şimdi, yakın gelecek
            çizgisinde kartların verdiği mesajı oku.
          </p>

          <div className="grid gap-4 text-left sm:grid-cols-3">
            <div className="rounded-3xl border border-purple-300/20 bg-white/5 p-5">
              <p className="mb-2 text-2xl">🃏</p>
              <p className="font-semibold text-purple-100">3 Kart Açılımı</p>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Geçmiş, şimdi ve yakın gelecek enerjisini gösterir.
              </p>
            </div>

            <div className="rounded-3xl border border-purple-300/20 bg-white/5 p-5">
              <p className="mb-2 text-2xl">✨</p>
              <p className="font-semibold text-purple-100">Niyetli Yorum</p>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Yazdığın soruyu açılımın ana mesajına dahil eder.
              </p>
            </div>

            <div className="rounded-3xl border border-purple-300/20 bg-white/5 p-5">
              <p className="mb-2 text-2xl">🌙</p>
              <p className="font-semibold text-purple-100">Geçmiş Kaydı</p>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Son açılımlarını tarayıcı hafızasında saklar.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-purple-300/25 bg-white/10 p-6 text-left shadow-2xl backdrop-blur">
          <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.25em] text-purple-200">
            Niyetini Yaz
          </label>

          <textarea
            value={userQuestion}
            onChange={(event) => setUserQuestion(event.target.value)}
            placeholder="Örneğin: Aşk hayatımda yakın zamanda ne olur?"
            className="min-h-32 w-full resize-none rounded-3xl border border-purple-300/30 bg-[#120914]/70 px-5 py-4 text-white outline-none placeholder:text-zinc-500 focus:border-purple-300"
          />

          <div className="mt-6 grid gap-3">
            {readingTypes.map((type) => (
              <button
                key={type}
                onClick={() => setReadingType(type)}
                className={`rounded-2xl border px-5 py-4 text-left transition ${
                  readingType === type
                    ? "border-purple-200 bg-purple-300 text-[#120914]"
                    : "border-purple-300/25 bg-white/5 text-purple-100 hover:bg-purple-300/10"
                }`}
              >
                <span className="block font-semibold">
                  {readingTypeLabels[type]}
                </span>
                <span
                  className={`mt-1 block text-sm ${
                    readingType === type ? "text-[#120914]/70" : "text-zinc-400"
                  }`}
                >
                  {readingTypeDescriptions[type]}
                </span>
              </button>
            ))}
          </div>

          <button
            onClick={drawThreeCards}
            className="mt-6 w-full rounded-full bg-purple-300 px-8 py-4 font-bold text-[#120914] shadow-lg shadow-purple-950/40 transition hover:bg-purple-200"
          >
            {readingTypeLabels[readingType]} Açılımı Yap
          </button>
        </div>
      </div>

      {drawnCards.length > 0 && (
        <>
          <div className="mt-14 grid w-full gap-6 md:grid-cols-3">
            {drawnCards.map((item) => (
              <TarotResultCard
                key={`${item.position}-${item.card.id}`}
                position={item.position}
                card={item.card}
                readingTypeLabel={readingTypeLabels[readingType]}
                meaning={getCardMeaning(item.card)}
              />
            ))}
          </div>

          <div className="mt-8 w-full max-w-4xl rounded-[2rem] border border-purple-300/30 bg-purple-300/10 p-8 text-left shadow-2xl backdrop-blur">
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-purple-200">
              Açılımın Ana Mesajı
            </p>

            <p className="text-lg leading-8 text-zinc-200">
              {getSpreadSummary()}
            </p>
          </div>
        </>
      )}
    </PageShell>
  );
}