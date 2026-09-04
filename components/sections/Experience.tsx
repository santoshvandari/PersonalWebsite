import SectionLabel from "@/components/typography/SectionLabel";
import ExperienceTimeline from "@/components/experience/ExperienceTimeline";

export default function Experience() {
  return (
    <section id="experience" className="section overflow-hidden">
      <p
        aria-hidden="true"
        className="ghost-numeral -top-[3%] right-[var(--edge)] text-[16vw]"
      >
        03
      </p>
      <div className="section-inner relative z-10">
        <SectionLabel number="03" label="EXPERIENCE" />
        <h2 className="type-heading mt-10 text-[clamp(2rem,4vw,3rem)] md:mt-16">
          Experience
        </h2>
        <ExperienceTimeline />
      </div>
    </section>
  );
}
