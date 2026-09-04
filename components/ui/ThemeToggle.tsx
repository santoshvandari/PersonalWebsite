"use client";

function toggleTheme() {
  const root = document.documentElement;
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  try {
    localStorage.setItem("theme", next);
  } catch {
    // storage unavailable — theme still applies for this session
  }
}

export default function ThemeToggle() {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle light or dark theme"
      className="type-label flex items-center gap-2 text-foreground"
    >
      <span
        aria-hidden="true"
        className="theme-dot flex h-3 w-3 items-center justify-center rounded-full border border-current"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      </span>
      <span data-theme-label="light">Light</span>
      <span data-theme-label="dark">Dark</span>
    </button>
  );
}
