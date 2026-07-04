"use client";

import { useState } from "react";
import { tarotCards, type TarotCard } from "@/data/tarotCards";

export default function Home() {
  const [selectedCard, setSelectedCard] = useState<TarotCard | null>(null);

  function drawCard() {
    const randomIndex = Math.floor(Math.random() * tarotCards.length);
    const randomCard = tarotCards[randomIndex];
    setSelectedCard(randomCard);
  }

  return (
    <main className="min-h-screen bg-[#120914] text-white">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 py-16 text-center">
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
          onClick={drawCard}
          className="rounded-full bg-purple-300 px-8 py-3 font-semibold text-[#120914] transition hover:bg-purple-200"
        >
          Kart Çek
        </button>

        {selectedCard && (
          <div className="mt-10 w-full max-w-2xl rounded-3xl border border-purple-300/30 bg-white/10 p-8 text-left shadow-2xl">
            <p className="mb-2 text-sm uppercase tracking-[0.25em] text-purple-200">
              Seçilen Kart
            </p>

            <h2 className="text-3xl font-bold text-white">
              {selectedCard.turkishName}
            </h2>

            <p className="mt-1 text-purple-200">{selectedCard.name}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {selectedCard.keywords.map((keyword) => (
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
                <h3 className="font-semibold text-purple-200">Genel Anlam</h3>
                <p className="mt-1 leading-7">{selectedCard.generalMeaning}</p>
              </div>

              <div>
                <h3 className="font-semibold text-purple-200">Aşk</h3>
                <p className="mt-1 leading-7">{selectedCard.loveMeaning}</p>
              </div>

              <div>
                <h3 className="font-semibold text-purple-200">Kariyer</h3>
                <p className="mt-1 leading-7">{selectedCard.careerMeaning}</p>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}