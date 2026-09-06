import { think } from "@/lib/content";
import SectionLabel from "@/components/typography/SectionLabel";
import Reveal from "@/components/ui/Reveal";

export default function Think() {
  return (
    <section id="think" className="section overflow-hidden">
      <p
        aria-hidden="true"
        className="ghost-numeral -top-[3%] right-[var(--edge)] text-[16vw]"
      >
        05
      </p>
      <div className="section-inner relative z-10">
        <SectionLabel number="05" label="THINK" />
        <h2 className="type-heading mt-10 max-w-2xl text-[clamp(2rem,4.5vw,3.5rem)] md:mt-16">
          What I&apos;m interested in
        </h2>

        <div className="mt-10 grid grid-cols-1 border-t border-line sm:grid-cols-2 md:mt-16">
          {think.map((item, i) => (
            <Reveal
              key={item.number}
              delay={i * 50}
              className={`group border-b border-line py-8 md:py-10 ${
                i % 2 === 1 ? "sm:border-l sm:pl-10" : "sm:pr-10"
              }`}
            >
              <p className="type-label text-accent transition-colors duration-200 group-hover:text-foreground">
                {item.number}
              </p>
              <h3 className="type-heading mt-3 text-[clamp(1.4rem,2.6vw,2.1rem)]">
                {item.title}
              </h3>
              <p className="mt-3 max-w-sm text-[0.9rem] leading-relaxed text-muted">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
