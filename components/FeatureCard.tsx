import Link from "next/link";

type FeatureCardProps = {
  href: string;
  icon: string;
  title: string;
  description: string;
};

export default function FeatureCard({
  href,
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <Link
      href={href}
      className="rounded-[2rem] border border-purple-300/25 bg-white/10 p-7 text-left shadow-2xl backdrop-blur transition hover:-translate-y-1 hover:border-purple-200/50"
    >
      <p className="mb-4 text-3xl">{icon}</p>
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <p className="mt-3 leading-7 text-zinc-300">{description}</p>
    </Link>
  );
}