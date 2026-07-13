"use client";

import Link from "next/link";
import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import PageShell from "@/components/PageShell";
import SymbolCard from "@/components/SymbolCard";
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
    <PageShell className="max-w-6xl py-12">
      <Link
        href="/"
        className="mb-8 inline-block text-sm font-semibold text-purple-200 transition hover:text-purple-100"
      >
        ← Ana Sayfaya Dön
      </Link>

      <PageHeader
        badge="☕ Sembol Sözlüğü"
        title="Sembolleri Ara"
        description="Kahve falı veya sembolik yorumlarda gördüğün şeklin anlamını ara. Kuş, yol, kalp, anahtar, göz veya balık gibi sembollerle başlayabilirsin."
      />

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
          <SymbolCard key={symbol.id} symbol={symbol} />
        ))}
      </div>

      {filteredSymbols.length === 0 && (
        <div className="mx-auto mt-8 max-w-2xl rounded-[2rem] border border-purple-300/25 bg-white/5 p-7 text-center text-zinc-300">
          Bu sembol henüz sözlükte yok. Sonra yeni semboller ekleyebiliriz.
        </div>
      )}
    </PageShell>
  );
}