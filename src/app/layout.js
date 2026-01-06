import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata = {
  title: "Santosh Bhandari - Personal Portfolio | Backend Developer & Full-Stack Engineer",
  description: "Santosh Bhandari's personal portfolio - Professional Backend Developer and Full-Stack Engineer from Nepal. Explore my projects, skills, and experience in Python, Django, FastAPI, and modern web development.",
  keywords: "Santosh Bhandari, Santosh Bhandari personal portfolio, Santosh Bhandari portfolio Website, Santosh Bhandari developer, Santosh Bhandari backend developer, Santosh Bhandari Nepal, Santosh Bhandari Jhapa, Backend Developer Nepal, Python Developer Santosh, Django Developer Santosh Bhandari, FastAPI Expert Santosh, Full Stack Developer Santosh Bhandari, Web Developer Santosh Bhandari, API Developer Santosh, Database Expert Santosh Bhandari, Santosh Bhandari GitHub, Santosh Bhandari LinkedIn, Professional Portfolio Santosh Bhandari",
  authors: [{ name: "Santosh Bhandari" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}
