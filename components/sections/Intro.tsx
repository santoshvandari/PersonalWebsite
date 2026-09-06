import { site } from "@/lib/site";
import HeroHeading from "@/components/sections/HeroHeading";

const statement = ["BUILDING", "SYSTEMS", "THAT", "SCALE."];

const metadata = [
  "BASED IN NEPAL",
  "BACKEND / FULL STACK",
  "PYTHON / NEXT.JS",
  "2+ YEARS EXPERIENCE",
];

export default function Intro() {
  return (
    <section
      id="intro"
      className="section flex min-h-svh flex-col justify-center overflow-hidden py-0 pt-[calc(var(--header-h)+1.5rem)] pb-8"
    >
      <p
        aria-hidden="true"
        className="ghost-numeral top-[8%] right-[var(--edge)] text-[28vw] sm:top-[12%]"
      >
        01
      </p>

      <div className="section-inner relative z-10 flex flex-1 flex-col justify-center gap-6 md:gap-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="type-heading text-[clamp(1.5rem,3.4vw,2.5rem)]">
              {site.name.toUpperCase()}
            </p>
            <p className="type-label mt-2 text-accent">{site.role}</p>
          </div>
          <p className="type-label text-muted">FOLIO NO. 01</p>
        </div>

        <HeroHeading lines={statement} />

        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-lg leading-relaxed text-foreground/90 md:text-xl">
            Python backend developer focused on APIs, databases,
            infrastructure, and modern web applications.
          </p>
          <ul className="type-label flex flex-wrap gap-x-6 gap-y-2 text-muted md:justify-end">
            {metadata.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between border-t border-line pt-4">
          <span className="type-label flex items-center gap-2 text-muted">
            <span aria-hidden="true" className="text-accent">
              ↓
            </span>
            Scroll
          </span>
          <span className="type-label text-muted">{site.year}</span>
        </div>
      </div>
    </section>
  );
}
