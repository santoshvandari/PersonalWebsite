import SectionLabel from "@/components/typography/SectionLabel";
import EditorialLink from "@/components/ui/EditorialLink";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="section-inner">
        <SectionLabel number="06" label="CONTACT" />

        <Reveal
          as="h2"
          className="type-display mt-10 text-[clamp(3rem,10vw,8rem)] md:mt-16"
        >
          <span className="block">HAVE A</span>
          <span className="block">PROBLEM</span>
          <span className="block">
            WORTH <span className="text-accent">SOLVING?</span>
          </span>
        </Reveal>

        <div className="mt-14 flex flex-col gap-4 md:mt-20 md:flex-row md:flex-wrap md:gap-8">
          <EditorialLink href={`mailto:${site.email}`}>
            Email <span className="break-all">{site.email}</span>
          </EditorialLink>
          <EditorialLink href={site.github} external>
            GitHub
          </EditorialLink>
          <EditorialLink href={site.linkedin} external>
            LinkedIn
          </EditorialLink>
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-line pt-6 sm:flex-row sm:items-end sm:justify-between md:mt-28">
          <div>
            <p className="type-label text-foreground">{site.name}</p>
            <p className="type-label text-muted">{site.role}</p>
          </div>
          <p className="type-label text-muted">
            FOLIO NO. 06 — © {site.year}
          </p>
        </div>
      </div>
    </section>
  );
}
