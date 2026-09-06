"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { navSections } from "@/lib/content";
import { site } from "@/lib/site";
import ThemeToggle from "@/components/ui/ThemeToggle";
import ScrollProgress from "@/components/navigation/ScrollProgress";

export default function EditorialNav() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState(navSections[0].id);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  const active =
    navSections.find((s) => s.id === activeId) ?? navSections[0];

  useEffect(() => {
    const elements = navSections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    elements.forEach((el) => observer.observe(el));

    const introEl = document.getElementById("intro");
    const scrollObserver = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { rootMargin: "-88px 0px 0px 0px", threshold: 0 }
    );
    if (introEl) scrollObserver.observe(introEl);

    return () => {
      observer.disconnect();
      scrollObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = useCallback(() => {
    setOpen(false);
    toggleRef.current?.focus();
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 flex h-[var(--header-h)] items-center justify-between border-b px-[var(--edge)] transition-colors duration-300 ${
          scrolled || open
            ? "border-line bg-background/90 backdrop-blur-sm"
            : "border-transparent bg-transparent"
        }`}
      >
        <Link
          href="#intro"
          className="type-label min-w-0 shrink truncate text-foreground"
        >
          {site.name}
        </Link>

        <div className="flex shrink-0 items-center gap-4 sm:gap-6">
          <span
            className="type-label hidden text-muted sm:inline-flex"
            aria-hidden="true"
          >
            {active.number} / {active.label}
          </span>
          <a
            href={site.blog}
            target="_blank"
            rel="noopener noreferrer"
            className="type-label hidden items-center gap-2 text-foreground transition-colors duration-200 hover:text-accent sm:inline-flex"
          >
            Blog
            <span aria-hidden="true" className="text-accent">
              →
            </span>
          </a>
          <a
            href={site.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="type-label flex items-center gap-2 text-foreground transition-colors duration-200 hover:text-accent"
          >
            <span aria-hidden="true" className="text-accent">
              ↓
            </span>
            <span className="hidden sm:inline">Download CV</span>
            <span className="sm:hidden">CV</span>
          </a>
          <ThemeToggle />
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="site-index"
            className="type-label flex items-center gap-2 text-foreground"
          >
            <span aria-hidden="true" className="text-accent">
              {open ? "×" : "＋"}
            </span>
            {open ? "Close" : "Index"}
          </button>
        </div>
        <ScrollProgress />
      </header>

      <nav
        id="site-index"
        aria-label="Section index"
        aria-hidden={!open}
        className={`fixed inset-0 z-40 flex flex-col justify-center bg-background px-[var(--edge)] transition-opacity duration-300 ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <ol className="mx-auto flex w-full max-w-3xl flex-col">
          {navSections.map((section, i) => (
            <li
              key={section.id}
              className="border-b border-line first:border-t"
            >
              <Link
                ref={i === 0 ? firstLinkRef : undefined}
                href={`#${section.id}`}
                onClick={close}
                tabIndex={open ? 0 : -1}
                className="group flex items-baseline justify-between py-4 sm:py-5"
              >
                <span className="flex items-baseline gap-4 sm:gap-6">
                  <span className="type-label text-accent">
                    {section.number}
                  </span>
                  <span className="type-heading text-[clamp(1.75rem,6vw,4rem)] text-foreground transition-transform duration-200 group-hover:translate-x-2">
                    {section.label}
                  </span>
                </span>
                {section.id === activeId && (
                  <span
                    aria-hidden="true"
                    className="hidden h-2 w-2 shrink-0 rounded-full bg-accent sm:block"
                  />
                )}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
