import type { TarotCard } from "@/data/tarotCards";

type TarotResultCardProps = {
  position: string;
  card: TarotCard;
  readingTypeLabel: string;
  meaning: string;
};

export default function TarotResultCard({
  position,
  card,
  readingTypeLabel,
  meaning,
}: TarotResultCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-[2rem] border border-purple-300/25 bg-gradient-to-b from-white/15 to-white/5 p-7 text-left shadow-2xl transition hover:-translate-y-1 hover:border-purple-200/50">
      <div className="absolute right-5 top-5 text-purple-200/60">✦</div>

      <p className="mb-5 text-sm uppercase tracking-[0.25em] text-purple-200">
        {position}
      </p>

      <div className="mb-6 flex h-44 items-center justify-center rounded-[1.5rem] border border-purple-300/20 bg-[#120914]/70">
        <div className="text-center">
          <p className="mb-3 text-4xl">☾</p>

          <h2 className="text-3xl font-bold text-white">
            {card.turkishName}
          </h2>

          <p className="mt-1 text-purple-200">{card.name}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {card.keywords.map((keyword) => (
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
          {readingTypeLabel} Yorumu
        </h3>

        <p className="mt-2 leading-7">{meaning}</p>
      </div>
    </div>
  );
}