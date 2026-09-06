import type { Metadata } from "next";
import SectionLabel from "@/components/typography/SectionLabel";
import EditorialLink from "@/components/ui/EditorialLink";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="section flex min-h-svh flex-col justify-center">
      <div className="section-inner">
        <SectionLabel number="404" label="NOT FOUND" />

        <h1 className="type-display mt-10 text-[clamp(3rem,10vw,8rem)] md:mt-16">
          <span className="block">PAGE NOT</span>
          <span className="block">
            <span className="text-accent">FOUND.</span>
          </span>
        </h1>

        <p className="mt-8 max-w-md text-lg leading-relaxed text-foreground/90">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>

        <div className="mt-14 flex flex-col gap-4 md:flex-row md:flex-wrap md:gap-8">
          <EditorialLink href="/">Back to home</EditorialLink>
          <EditorialLink href={`mailto:${site.email}`}>
            Contact {site.name}
          </EditorialLink>
        </div>
      </div>
    </section>
  );
}
