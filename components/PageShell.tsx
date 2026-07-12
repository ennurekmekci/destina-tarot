import type { ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
  className?: string;
};

export default function PageShell({ children, className = "" }: PageShellProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0f0711] text-white">
      <div className="absolute left-[-120px] top-[-120px] h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />
      <div className="absolute bottom-[-160px] right-[-120px] h-96 w-96 rounded-full bg-fuchsia-400/20 blur-3xl" />
      <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-200/10 blur-3xl" />

      <section className={`relative z-10 mx-auto w-full px-6 ${className}`}>
        {children}
      </section>
    </main>
  );
}