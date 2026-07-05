"use client";

import { useEffect, useState } from "react";
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

const readingTypeLabels: Record<ReadingType, string> = {
  general: "Genel",
  love: "Aşk",
  career: "Kariyer",
};

export default function Home() {
  const [drawnCards, setDrawnCards] = useState<DrawnCard[]>([]);
  const [readingType, setReadingType] = useState<ReadingType>("general");
  const [userQuestion, setUserQuestion] = useState("");
  const [readingHistory, setReadingHistory] = useState<ReadingHistoryItem[]>([]);
  
    useEffect(() => {
    const savedHistory = localStorage.getItem("destina-reading-history");

    if (savedHistory) {
      setReadingHistory(JSON.parse(savedHistory));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "destina-reading-history",
      JSON.stringify(readingHistory),
    );
  }, [readingHistory]);

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

    function clearReadingHistory() {
    setReadingHistory([]);
    localStorage.removeItem("destina-reading-history");
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
    <main className="min-h-screen bg-[#120914] text-white">
      <section className="flex min-h-screen flex-col items-center px-6 py-16 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-purple-300">
          Tarot & Sembol Yorumlama
        </p>

        <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
          Destina
        </h1>

        <p className="mb-8 max-w-2xl text-lg leading-8 text-zinc-300">
          Kartların ve sembollerin anlattığı yolu birlikte yorumlayan,
          yapay zekâ destekli mistik bir rehber.
        </p>

        <div className="mb-8 w-full max-w-2xl text-left">
          <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.25em] text-purple-200">
            Niyetini Yaz
          </label>

          <textarea
            value={userQuestion}
            onChange={(event) => setUserQuestion(event.target.value)}
            placeholder="Örneğin: Aşk hayatımda yakın zamanda ne olur?"
            className="min-h-28 w-full resize-none rounded-3xl border border-purple-300/30 bg-white/10 px-5 py-4 text-white outline-none placeholder:text-zinc-500 focus:border-purple-300"
          />
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {(["general", "love", "career"] as ReadingType[]).map((type) => (
            <button
              key={type}
              onClick={() => setReadingType(type)}
              className={`rounded-full px-6 py-2 font-semibold transition ${
                readingType === type
                  ? "bg-purple-300 text-[#120914]"
                  : "border border-purple-300/50 text-purple-200 hover:bg-purple-300/10"
              }`}
            >
              {readingTypeLabels[type]}
            </button>
          ))}
        </div>

        <button
          onClick={drawThreeCards}
          className="rounded-full bg-purple-300 px-8 py-3 font-semibold text-[#120914] transition hover:bg-purple-200"
        >
          {readingTypeLabels[readingType]} Açılımı Yap
        </button>

        {drawnCards.length > 0 && (
          <>
            <div className="mt-12 grid w-full max-w-6xl gap-6 md:grid-cols-3">
              {drawnCards.map((item) => (
                <div
                  key={`${item.position}-${item.card.id}`}
                  className="rounded-3xl border border-purple-300/30 bg-white/10 p-7 text-left shadow-2xl"
                >
                  <p className="mb-3 text-sm uppercase tracking-[0.25em] text-purple-200">
                    {item.position}
                  </p>

                  <h2 className="text-3xl font-bold text-white">
                    {item.card.turkishName}
                  </h2>

                  <p className="mt-1 text-purple-200">{item.card.name}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.card.keywords.map((keyword) => (
                      <span
                        key={keyword}
                        className="rounded-full bg-purple-300/20 px-3 py-1 text-sm text-purple-100"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 text-zinc-200">
                    <h3 className="font-semibold text-purple-200">
                      {readingTypeLabels[readingType]} Yorumu
                    </h3>

                    <p className="mt-2 leading-7">{getCardMeaning(item.card)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 w-full max-w-4xl rounded-3xl border border-purple-300/30 bg-purple-300/10 p-8 text-left shadow-2xl">
              <p className="mb-3 text-sm uppercase tracking-[0.25em] text-purple-200">
                Açılımın Ana Mesajı
              </p>

              <p className="text-lg leading-8 text-zinc-200">
                {getSpreadSummary()}
              </p>
            </div>
          </>
        )}

        {readingHistory.length > 0 && (
          <div className="mt-10 w-full max-w-4xl rounded-3xl border border-purple-300/30 bg-white/5 p-8 text-left shadow-2xl">
                        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm uppercase tracking-[0.25em] text-purple-200">
                Son Açılımlar
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

                  <p className="mb-3 text-sm text-zinc-300">
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
        )}
      </section>
    </main>
  );
}