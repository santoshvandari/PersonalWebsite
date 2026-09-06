import type {Metadata, Viewport} from "next";
import {Archivo, IBM_Plex_Sans, IBM_Plex_Mono} from "next/font/google";
import {site} from "@/lib/site";
import {experience} from "@/lib/content";
import EditorialNav from "@/components/navigation/EditorialNav";
import PaperGrain from "@/components/layout/PaperGrain";
import GridGuides from "@/components/layout/GridGuides";
import "./globals.css";

const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||t==='light'){document.documentElement.setAttribute('data-theme',t)}}catch(e){}})();`;

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["800"],
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-plex-sans",
  weight: ["400", "500"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Santosh Bhandari",
    "Python Backend Developer",
    "Full Stack Developer",
    "FastAPI Developer",
    "Django Developer",
    "Next.js Developer",
    "React Developer",
    "REST API",
    "PostgreSQL",
    "Backend Engineer Nepal",
  ],
  authors: [{name: site.name, url: site.url}],
  creator: site.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.title,
    title: site.title,
    description: site.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f3efe6",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  url: site.url,
  email: `mailto:${site.email}`,
  address: {
    "@type": "PostalAddress",
    addressCountry: site.location,
  },
  sameAs: [site.github, site.linkedin, site.blog],
  knowsAbout: [
    "Python",
    "FastAPI",
    "Django",
    "PostgreSQL",
    "Docker",
    "Next.js",
    "React.js",
  ],
  worksFor: experience
    .filter((entry) => entry.company !== "Remote")
    .map((entry) => ({
      "@type": "Organization",
      name: entry.company,
      ...(entry.companyUrl ? {url: entry.companyUrl} : {}),
    })),
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Purbanchal University",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Tribhuvan University",
    },
  ],
};

export default function RootLayout({children}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <body>
        <script dangerouslySetInnerHTML={{__html: themeInitScript}} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
        />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <GridGuides />
        <PaperGrain />
        <EditorialNav />
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
