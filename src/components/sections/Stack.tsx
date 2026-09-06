import { stack } from "@/lib/content";
import SectionLabel from "@/components/typography/SectionLabel";
import Reveal from "@/components/ui/Reveal";

export default function Stack() {
  return (
    <section id="stack" className="section overflow-hidden">
      <p
        aria-hidden="true"
        className="ghost-numeral -top-[3%] left-[var(--edge)] text-[16vw]"
      >
        04
      </p>

      <div className="section-inner relative z-10">
        <SectionLabel number="04" label="STACK" />
        <h2 className="type-heading mt-10 text-[clamp(2rem,4vw,3rem)] md:mt-16">
          Technical Index
        </h2>

        <div className="mt-12 border-t border-line md:mt-16">
          {stack.map((group, i) => (
            <Reveal
              key={group.category}
              delay={i * 50}
              className="grid grid-cols-1 gap-x-8 gap-y-3 border-b border-line py-6 sm:grid-cols-[10rem_1fr] sm:items-baseline md:py-7"
            >
              <h3 className="flex items-baseline gap-3">
                <span className="type-label text-accent">0{i + 1}</span>
                <span className="type-label text-foreground">
                  {group.category}
                </span>
              </h3>
              <p className="text-lg leading-relaxed text-foreground/90 sm:text-xl">
                {group.items.join(" · ")}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
