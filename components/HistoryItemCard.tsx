type ReadingType = "general" | "love" | "career";

type HistoryCard = {
  position: string;
  card: {
    id: number;
    name: string;
    turkishName: string;
  };
};

type ReadingHistoryItem = {
  id: string;
  readingType: ReadingType;
  question: string;
  cards: HistoryCard[];
  createdAt: string;
  summary?: {
    flowHeadline: string;
    flowDetail: string;
    adviceHeadline: string;
    adviceDetail: string;
  };
};

type HistoryItemCardProps = {
  historyItem: ReadingHistoryItem;
  readingTypeLabel: string;
};

export default function HistoryItemCard({
  historyItem,
  readingTypeLabel,
}: HistoryItemCardProps) {
  return (
    <div className="rounded-[2rem] border border-purple-300/20 bg-[#120914]/60 p-6 shadow-2xl">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <p className="rounded-full bg-purple-300/15 px-4 py-1 text-sm font-semibold text-purple-100">
          {readingTypeLabel} Açılımı
        </p>

        <p className="text-sm text-zinc-400">{historyItem.createdAt}</p>
      </div>

      <p className="mb-5 text-sm leading-6 text-zinc-300">
        <span className="font-semibold text-purple-200">Niyet:</span>{" "}
        “{historyItem.question}”
      </p>

      <div className="mb-5 flex flex-wrap gap-2">
        {historyItem.cards.map((item) => (
          <span
            key={`${historyItem.id}-${item.position}`}
            className="rounded-full bg-purple-300/15 px-3 py-1 text-sm text-purple-100"
          >
            {item.position}: {item.card.turkishName}
          </span>
        ))}
      </div>

      {historyItem.summary && (
        <div className="space-y-4 border-t border-purple-300/15 pt-5">
          <div>
            <p className="mb-2 text-sm uppercase tracking-[0.25em] text-purple-300">
              Genel Akış
            </p>

            <p className="font-bold leading-7 text-white">
              {historyItem.summary.flowHeadline}
            </p>

            <p className="mt-2 line-clamp-3 text-sm leading-6 text-zinc-300">
              {historyItem.summary.flowDetail}
            </p>
          </div>

          <div>
            <p className="mb-2 text-sm uppercase tracking-[0.25em] text-purple-300">
              Tavsiye
            </p>

            <p className="font-bold leading-7 text-white">
              {historyItem.summary.adviceHeadline}
            </p>

            <p className="mt-2 line-clamp-3 text-sm leading-6 text-zinc-300">
              {historyItem.summary.adviceDetail}
            </p>
          </div>
        </div>
      )}

      {!historyItem.summary && (
        <p className="border-t border-purple-300/15 pt-5 text-sm leading-6 text-zinc-400">
          Bu açılım eski sürümde kaydedilmiş. Özet bilgisi bulunmuyor.
        </p>
      )}
    </div>
  );
}