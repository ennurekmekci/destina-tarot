"use client";

import Link from "next/link";
import { useState } from "react";
import { symbols } from "@/data/symbols";

export default function SymbolsPage() {
  const [symbolSearch, setSymbolSearch] = useState("");

  const filteredSymbols = symbols.filter((symbol) => {
    const searchText = symbolSearch.trim().toLocaleLowerCase("tr-TR");

    if (!searchText) {
      return true;
    }

    return (
      symbol.name.toLocaleLowerCase("tr-TR").includes(searchText) ||
      symbol.keywords.some((keyword) =>
        keyword.toLocaleLowerCase("tr-TR").includes(searchText),
      )
    );
  });

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0f0711] text-white">
      <div className="absolute left-[-120px] top-[-120px] h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />
      <div className="absolute bottom-[-160px] right-[-120px] h-96 w-96 rounded-full bg-fuchsia-400/20 blur-3xl" />

      <section className="relative z-10 mx-auto w-full max-w-6xl px-6 py-12">
        <Link
          href="/"
          className="mb-8 inline-block text-sm font-semibold text-purple-200 transition hover:text-purple-100"
        >
          ← Ana Sayfaya Dön
        </Link>

        <div className="mb-10 text-center">
          <div className="mb-6 inline-block rounded-full border border-purple-300/30 bg-white/5 px-5 py-2 text-sm uppercase tracking-[0.3em] text-purple-200">
            ☕ Sembol Sözlüğü
          </div>

          <h1 className="mb-5 text-5xl font-bold tracking-tight md:text-7xl">
            Sembolleri Ara
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-zinc-300">
            Kahve falı veya sembolik yorumlarda gördüğün şeklin anlamını ara.
            Kuş, yol, kalp, anahtar, göz veya balık gibi sembollerle başlayabilirsin.
          </p>
        </div>

        <div className="mx-auto mb-8 max-w-2xl">
          <input
            value={symbolSearch}
            onChange={(event) => setSymbolSearch(event.target.value)}
            placeholder="Sembol ara..."
            className="w-full rounded-full border border-purple-300/30 bg-white/10 px-6 py-4 text-white outline-none placeholder:text-zinc-500 focus:border-purple-300"
          />
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {filteredSymbols.map((symbol) => (
            <div
              key={symbol.id}
              className="rounded-[2rem] border border-purple-300/25 bg-white/10 p-7 text-left shadow-2xl backdrop-blur"
            >
              <h2 className="text-3xl font-bold text-white">{symbol.name}</h2>

              <div className="mt-4 flex flex-wrap gap-2">
                {symbol.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="rounded-full bg-purple-300/15 px-3 py-1 text-sm text-purple-100"
                  >
                    {keyword}
                  </span>
                ))}
              </div>

              <p className="mt-5 leading-7 text-zinc-300">{symbol.meaning}</p>

              <div className="mt-5 space-y-3 text-sm leading-6 text-zinc-300">
                <p>
                  <span className="font-semibold text-purple-200">Aşk:</span>{" "}
                  {symbol.loveMeaning}
                </p>

                <p>
                  <span className="font-semibold text-purple-200">Kariyer:</span>{" "}
                  {symbol.careerMeaning}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredSymbols.length === 0 && (
          <div className="mx-auto mt-8 max-w-2xl rounded-[2rem] border border-purple-300/25 bg-white/5 p-7 text-center text-zinc-300">
            Bu sembol henüz sözlükte yok. Sonra yeni semboller ekleyebiliriz.
          </div>
        )}
      </section>
    </main>
  );
}