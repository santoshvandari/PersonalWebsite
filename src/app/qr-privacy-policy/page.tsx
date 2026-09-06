import type { Metadata } from "next";
import SectionLabel from "@/components/typography/SectionLabel";
import EditorialLink from "@/components/ui/EditorialLink";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for the QR Code Generator browser extension.",
  alternates: { canonical: "/qr-privacy-policy" },
};

const sections: { title: string; body: string }[] = [
  {
    title: "Information Collected",
    body: "Our browser extension does not collect any personal information from users. We do not collect any information about your browsing history, search queries, or any other personally identifiable information. However, the extension may collect anonymous data about how users interact with it, such as the number of times it is used or the types of input provided. This information is collected solely to improve the extension's functionality and is not linked to any personal information.",
  },
  {
    title: "Use of Information",
    body: "The anonymous data collected is used to improve the functionality and user experience of the extension. We may use this information to identify bugs or areas where the extension can be improved.",
  },
  {
    title: "Protection of Information",
    body: "We take the protection of user information seriously and implement appropriate security measures to prevent unauthorized access, modification, disclosure, or destruction of user information. However, we cannot guarantee the absolute security of user information, and users should be aware of the risks associated with using any browser extension.",
  },
  {
    title: "Third-Party Services",
    body: "Our browser extension does not use any third-party services or plugins. We do not share user information with any third-party services.",
  },
  {
    title: "Updates to This Policy",
    body: "We reserve the right to update or modify this privacy policy at any time without prior notice. Users are encouraged to review it periodically to stay informed of any changes.",
  },
];

export default function QrPrivacyPolicy() {
  return (
    <section className="section">
      <div className="section-inner">
        <SectionLabel number="—" label="PRIVACY POLICY" />

        <h1 className="type-display mt-10 text-[clamp(2.25rem,6vw,4.5rem)] md:mt-16">
          QR Code Generator
        </h1>
        <p className="type-label mt-4 text-muted">
          Privacy policy for the browser extension
        </p>

        <div className="mt-14 flex flex-col gap-10 border-t border-line pt-10 md:mt-20">
          <p className="max-w-2xl text-lg leading-relaxed text-foreground/90">
            This privacy policy outlines how the browser extension that
            generates QR codes based on the input provided collects, uses,
            and protects user information.
          </p>

          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="type-heading text-[clamp(1.25rem,2.5vw,1.75rem)]">
                {s.title}
              </h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-foreground/90">
                {s.body}
              </p>
            </div>
          ))}

          <div>
            <h2 className="type-heading text-[clamp(1.25rem,2.5vw,1.75rem)]">
              Contact
            </h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-foreground/90">
              If you have any queries or concerns regarding this privacy
              policy, please get in touch.
            </p>
            <div className="mt-6">
              <EditorialLink href="mailto:info@bhandari-santosh.com.np">
                info@bhandari-santosh.com.np
              </EditorialLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
