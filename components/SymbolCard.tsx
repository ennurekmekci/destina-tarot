import type { SymbolMeaning } from "@/data/symbols";

type SymbolCardProps = {
  symbol: SymbolMeaning;
};

export default function SymbolCard({ symbol }: SymbolCardProps) {
  return (
    <div className="rounded-[2rem] border border-purple-300/25 bg-white/10 p-7 text-left shadow-2xl backdrop-blur">
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
  );
}