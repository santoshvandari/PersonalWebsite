import { experience } from "@/lib/content";
import ExperienceItem from "@/components/experience/ExperienceItem";

export default function ExperienceTimeline() {
  return (
    <div className="relative border-b border-line">
      <div
        aria-hidden="true"
        className="absolute top-0 bottom-0 left-[5px] w-px bg-line"
      />
      {experience.map((entry) => (
        <ExperienceItem key={entry.number} entry={entry} />
      ))}
    </div>
  );
}
