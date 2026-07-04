"use client";

import { useState } from "react";
import { tarotCards, type TarotCard } from "@/data/tarotCards";

type DrawnCard = {
  position: string;
  card: TarotCard;
};

const positions = ["Geçmiş", "Şimdi", "Yakın Gelecek"];

export default function Home() {
  const [drawnCards, setDrawnCards] = useState<DrawnCard[]>([]);

  function drawThreeCards() {
    const shuffledCards = [...tarotCards].sort(() => Math.random() - 0.5);

    const selectedCards = shuffledCards.slice(0, 3).map((card, index) => ({
      position: positions[index],
      card,
    }));

    setDrawnCards(selectedCards);
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

        <p className="mb-10 max-w-2xl text-lg leading-8 text-zinc-300">
          Kartların ve sembollerin anlattığı yolu birlikte yorumlayan,
          yapay zekâ destekli mistik bir rehber.
        </p>

        <button
          onClick={drawThreeCards}
          className="rounded-full bg-purple-300 px-8 py-3 font-semibold text-[#120914] transition hover:bg-purple-200"
        >
          3 Kart Açılımı Yap
        </button>

        {drawnCards.length > 0 && (
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

                <div className="mt-6 space-y-5 text-zinc-200">
                  <div>
                    <h3 className="font-semibold text-purple-200">
                      Genel Anlam
                    </h3>
                    <p className="mt-1 leading-7">
                      {item.card.generalMeaning}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-purple-200">Aşk</h3>
                    <p className="mt-1 leading-7">{item.card.loveMeaning}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-purple-200">Kariyer</h3>
                    <p className="mt-1 leading-7">{item.card.careerMeaning}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}