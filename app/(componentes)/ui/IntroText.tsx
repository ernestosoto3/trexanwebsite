import type { ReactNode } from "react";

type IntroTextProps = {
  children: ReactNode;
};

export default function IntroText({ children }: IntroTextProps) {
  return (
    <section className="bg-white py-8 md:py-14">
      <div className="section">
        <p className="text-center text-xl md:text-2xl leading-relaxed text-zinc-600 max-w-6xl mx-auto">
          {children}
        </p>
      </div>
    </section>
  );
}
