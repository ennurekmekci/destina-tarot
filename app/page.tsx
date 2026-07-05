import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0f0711] text-white">
      <div className="absolute left-[-120px] top-[-120px] h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />
      <div className="absolute bottom-[-160px] right-[-120px] h-96 w-96 rounded-full bg-fuchsia-400/20 blur-3xl" />
      <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-200/10 blur-3xl" />

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center px-6 py-16 text-center">
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
          Kartların, niyetlerin ve sembollerin anlattığı yolu daha düzenli,
          daha sezgisel ve daha kişisel yorumlayan mistik bir rehber.
        </p>

        <div className="grid w-full max-w-4xl gap-5 md:grid-cols-3">
          <Link
            href="/tarot"
            className="rounded-[2rem] border border-purple-300/25 bg-white/10 p-7 text-left shadow-2xl backdrop-blur transition hover:-translate-y-1 hover:border-purple-200/50"
          >
            <p className="mb-4 text-3xl">🃏</p>
            <h2 className="text-2xl font-bold text-white">Tarot Açılımı</h2>
            <p className="mt-3 leading-7 text-zinc-300">
              Niyetini yaz, Genel / Aşk / Kariyer seç ve 3 kart açılımını gör.
            </p>
          </Link>

          <Link
            href="/symbols"
            className="rounded-[2rem] border border-purple-300/25 bg-white/10 p-7 text-left shadow-2xl backdrop-blur transition hover:-translate-y-1 hover:border-purple-200/50"
          >
            <p className="mb-4 text-3xl">☕</p>
            <h2 className="text-2xl font-bold text-white">Sembol Sözlüğü</h2>
            <p className="mt-3 leading-7 text-zinc-300">
              Kahve falı ve sembolik yorumlarda gördüğün şekillerin anlamlarını
              ara.
            </p>
          </Link>

          <Link
            href="/history"
            className="rounded-[2rem] border border-purple-300/25 bg-white/10 p-7 text-left shadow-2xl backdrop-blur transition hover:-translate-y-1 hover:border-purple-200/50"
          >
            <p className="mb-4 text-3xl">🌙</p>
            <h2 className="text-2xl font-bold text-white">Açılım Geçmişi</h2>
            <p className="mt-3 leading-7 text-zinc-300">
              Son açılımlarını kaydet, geçmiş niyetlerini ve çıkan kartları
              takip et.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}