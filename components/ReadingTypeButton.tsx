type ReadingTypeButtonProps = {
  label: string;
  description: string;
  isSelected: boolean;
  onClick: () => void;
};

export default function ReadingTypeButton({
  label,
  description,
  isSelected,
  onClick,
}: ReadingTypeButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-2xl border px-5 py-4 text-left transition ${
        isSelected
          ? "border-purple-200 bg-purple-300 text-[#120914]"
          : "border-purple-300/25 bg-white/5 text-purple-100 hover:bg-purple-300/10"
      }`}
    >
      <span className="block font-semibold">{label}</span>

      <span
        className={`mt-1 block text-sm ${
          isSelected ? "text-[#120914]/70" : "text-zinc-400"
        }`}
      >
        {description}
      </span>
    </button>
  );
}