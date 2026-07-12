import FeatureCard from "@/components/FeatureCard";
import PageShell from "@/components/PageShell";

export default function Home() {
  return (
    <PageShell className="flex min-h-screen max-w-6xl flex-col items-center justify-center py-16 text-center">
      <div className="mb-8 rounded-full border border-purple-300/30 bg-white/5 px-5 py-2 text-sm uppercase tracking-[0.3em] text-purple-200">
        ✦ Destina Beta ✦
      </div>

      <p className="mb-4 text-sm uppercase tracking-[0.35em] text-purple-300">
        Tarot & Sembol Yorumlama
      </p>

      <h1 className="mb-6 text-6xl font-bold tracking-tight md:text-8xl">
        Destina
      </h1>

      <p className="mb-10 max-w-2xl text-lg leading-8 text-zinc-300">
        Kartların, niyetlerin ve sembollerin anlattığı yolu daha düzenli, daha
        sezgisel ve daha kişisel yorumlayan mistik bir rehber.
      </p>

      <div className="grid w-full max-w-4xl gap-5 md:grid-cols-3">
        <FeatureCard
          href="/tarot"
          icon="🃏"
          title="Tarot Açılımı"
          description="Niyetini yaz, Genel / Aşk / Kariyer seç ve 3 kart açılımını gör."
        />

        <FeatureCard
          href="/symbols"
          icon="☕"
          title="Sembol Sözlüğü"
          description="Kahve falı ve sembolik yorumlarda gördüğün şekillerin anlamlarını ara."
        />

        <FeatureCard
          href="/history"
          icon="🌙"
          title="Açılım Geçmişi"
          description="Son açılımlarını kaydet, geçmiş niyetlerini ve çıkan kartları takip et."
        />
      </div>
    </PageShell>
  );
}