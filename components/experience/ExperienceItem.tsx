import type { ExperienceEntry } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";

export default function ExperienceItem({
  entry,
}: {
  entry: ExperienceEntry;
}) {
  return (
    <Reveal as="article" className="group border-t border-line py-10 md:py-14">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
        <div className="flex items-start gap-4 md:col-span-2">
          <span
            aria-hidden="true"
            className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full border border-line bg-transparent transition-colors duration-200 group-hover:border-accent group-hover:bg-accent"
          />
          <span className="type-label text-muted transition-colors duration-200 group-hover:text-foreground">
            {entry.date}
          </span>
        </div>

        <div className="min-w-0 md:col-span-10">
          <h3 className="type-heading text-[clamp(1.6rem,3vw,2.5rem)]">
            {entry.role}
          </h3>
          <p className="type-label mt-2 text-accent">{entry.company}</p>
          <p className="type-label mt-6 text-muted normal-case">
            {entry.technologies.join(" · ")}
          </p>
        </div>
      </div>
    </Reveal>
  );
}
