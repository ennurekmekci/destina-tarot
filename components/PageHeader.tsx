type PageHeaderProps = {
  badge: string;
  title: string;
  description: string;
};

export default function PageHeader({
  badge,
  title,
  description,
}: PageHeaderProps) {
  return (
    <div className="mb-10 text-center">
      <div className="mb-6 inline-block rounded-full border border-purple-300/30 bg-white/5 px-5 py-2 text-sm uppercase tracking-[0.3em] text-purple-200">
        {badge}
      </div>

      <h1 className="mb-5 text-5xl font-bold tracking-tight md:text-7xl">
        {title}
      </h1>

      <p className="mx-auto max-w-2xl text-lg leading-8 text-zinc-300">
        {description}
      </p>
    </div>
  );
}