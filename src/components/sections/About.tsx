import SectionLabel from "@/components/typography/SectionLabel";
import Reveal from "@/components/ui/Reveal";

const facts = [
  "Python Backend Developer",
  "2+ years experience",
  "FastAPI",
  "Django",
  "PostgreSQL",
  "Docker",
  "Next.js",
];

export default function About() {
  return (
    <section id="about" className="section overflow-hidden">
      <p
        aria-hidden="true"
        className="ghost-numeral -top-[4%] left-[var(--edge)] text-[16vw]"
      >
        02
      </p>

      <div className="section-inner relative z-10">
        <SectionLabel number="02" label="ABOUT" />

        <div className="mt-10 grid grid-cols-1 gap-10 md:mt-16 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-3">
            <h2 className="type-heading text-[clamp(2rem,4vw,3rem)]">
              About
            </h2>
          </div>

          <div className="md:col-span-9">
            <Reveal
              as="p"
              className="type-heading text-[clamp(1.6rem,3.4vw,2.75rem)] text-balance"
            >
              I build backend systems, APIs and web applications with a focus
              on reliability, performance and maintainability.
            </Reveal>

            <ul className="mt-10 grid grid-cols-2 gap-x-8 border-t border-line sm:grid-cols-3">
              {facts.map((fact) => (
                <li
                  key={fact}
                  className="type-label border-b border-line py-3 text-muted"
                >
                  {fact}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
