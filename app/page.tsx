import FeatureCard from "@/components/FeatureCard";
import PageShell from "@/components/PageShell";

export default function Home() {
  return (
    <PageShell className="flex min-h-screen max-w-6xl flex-col items-center justify-center py-16 text-center">
      <div className="mb-8 rounded-full border border-purple-300/30 bg-white/5 px-5 py-2 text-sm uppercase tracking-[0.3em] text-purple-200">
        ✦ Destina Tarot ✦
      </div>

      <p className="mb-4 text-sm uppercase tracking-[0.35em] text-purple-300">
        Tarot Yorumlama
      </p>

      <h1 className="mb-6 text-6xl font-bold tracking-tight md:text-8xl">
        Destina
      </h1>

      <p className="mb-10 max-w-2xl text-lg leading-8 text-zinc-300">
        Niyetini yaz, tarot açılımını seç ve geçmiş zaman, şimdiki zaman,
        gelecek zaman akışında sembolik bir yorum al.
      </p>

      <div className="grid w-full max-w-3xl gap-5 md:grid-cols-2">
        <FeatureCard
          href="/tarot"
          icon="🃏"
          title="Tarot Açılımı"
          description="Niyetini yaz, Genel / Aşk / Kariyer seç ve 6 kartlık açılımını gör."
        />

        <FeatureCard
          href="/history"
          icon="🌙"
          title="Açılım Geçmişi"
          description="Önceki açılımlarını, çıkan kartları ve özet yorumlarını tekrar incele."
        />
      </div>
    </PageShell>
  );
}