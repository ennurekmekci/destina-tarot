"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import HistoryItemCard, {
  type HistoryReadingItem,
} from "@/components/HistoryItemCard";
import PageShell from "@/components/PageShell";
import { generateSixCardReading } from "@/lib/readingEngine";

function createCurrentReadingFromHistory(item: HistoryReadingItem) {
  return {
    ...item,
    result: generateSixCardReading({
      question: item.question,
      readingType: item.readingType,
      drawnCards: item.cards,
    }),
  };
}

export default function HistoryPage() {
  const router = useRouter();
  const [history, setHistory] = useState<HistoryReadingItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedHistory = localStorage.getItem("destina-reading-history");

    if (savedHistory) {
      try {
        setHistory(JSON.parse(savedHistory));
      } catch {
        localStorage.removeItem("destina-reading-history");
      }
    }

    setIsLoaded(true);
  }, []);

  function openHistoryReading(item: HistoryReadingItem) {
    const currentReading = createCurrentReadingFromHistory(item);

    localStorage.setItem(
      "destina-current-reading",
      JSON.stringify(currentReading),
    );

    router.push("/reading");
  }

  if (!isLoaded) {
    return (
      <PageShell className="flex min-h-screen max-w-5xl flex-col items-center justify-center py-16 text-center">
        <div className="rounded-[2rem] border border-purple-300/25 bg-white/10 p-8 shadow-2xl backdrop-blur">
          <p className="text-lg text-zinc-300">Açılım geçmişi yükleniyor...</p>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell className="flex min-h-screen max-w-6xl flex-col items-center py-12 md:py-16">
      <div className="mb-8 flex w-full flex-wrap items-center justify-between gap-4">
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
          Yeni Açılım Yap →
        </Link>
      </div>

      <div className="mb-8 text-center">
        <div className="mb-6 inline-block rounded-full border border-purple-300/30 bg-white/5 px-5 py-2 text-sm uppercase tracking-[0.3em] text-purple-200">
          ✦ Açılım Geçmişi ✦
        </div>

        <h1 className="mb-5 text-5xl font-bold tracking-tight text-white md:text-7xl">
          Geçmiş Açılımlar
        </h1>

        <p className="mx-auto max-w-2xl text-lg leading-8 text-zinc-300">
          Önceki tarot açılımlarını buradan tekrar görüntüleyebilirsin.
        </p>
      </div>

      {history.length === 0 ? (
        <div className="w-full rounded-[2rem] border border-purple-300/25 bg-white/10 p-8 text-center shadow-2xl backdrop-blur">
          <p className="mb-4 text-2xl">🌙</p>

          <h2 className="mb-3 text-2xl font-bold text-white">
            Henüz kayıtlı açılım yok
          </h2>

          <p className="mx-auto mb-6 max-w-xl leading-8 text-zinc-300">
            İlk açılımını yaptığında burada geçmiş olarak görünecek.
          </p>

          <Link
            href="/tarot"
            className="inline-flex rounded-full bg-purple-300 px-6 py-3 font-bold text-[#120914] transition hover:bg-purple-200"
          >
            İlk Açılımı Başlat
          </Link>
        </div>
      ) : (
        <div className="grid w-full gap-6 md:grid-cols-2">
          {history.map((item) => (
            <HistoryItemCard
              key={item.id}
              item={item}
              onOpen={() => openHistoryReading(item)}
            />
          ))}
        </div>
      )}
    </PageShell>
  );
}