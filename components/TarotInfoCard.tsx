type TarotInfoCardProps = {
  icon: string;
  title: string;
  description: string;
};

export default function TarotInfoCard({
  icon,
  title,
  description,
}: TarotInfoCardProps) {
  return (
    <div className="rounded-3xl border border-purple-300/20 bg-white/5 p-5">
      <p className="mb-2 text-2xl">{icon}</p>

      <p className="font-semibold text-purple-100">{title}</p>

      <p className="mt-2 text-sm leading-6 text-zinc-400">{description}</p>
    </div>
  );
}