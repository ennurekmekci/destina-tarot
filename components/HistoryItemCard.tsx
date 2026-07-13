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
    <div className="rounded-2xl border border-purple-300/20 bg-[#120914]/60 p-5">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <p className="font-semibold text-purple-100">
          {readingTypeLabel} Açılımı
        </p>

        <p className="text-sm text-zinc-400">{historyItem.createdAt}</p>
      </div>

      <p className="mb-4 text-sm leading-6 text-zinc-300">
        “{historyItem.question}”
      </p>

      <div className="flex flex-wrap gap-2">
        {historyItem.cards.map((item) => (
          <span
            key={`${historyItem.id}-${item.position}`}
            className="rounded-full bg-purple-300/15 px-3 py-1 text-sm text-purple-100"
          >
            {item.position}: {item.card.turkishName}
          </span>
        ))}
      </div>
    </div>
  );
}