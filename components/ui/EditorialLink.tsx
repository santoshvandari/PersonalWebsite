import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";

type EditorialLinkProps = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

export default function EditorialLink({
  href,
  children,
  external = false,
  className = "",
  ...rest
}: EditorialLinkProps) {
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 border-b border-line py-1 font-mono text-sm tracking-[0.08em] uppercase text-foreground transition-colors duration-200 hover:border-accent ${className}`}
      {...externalProps}
      {...rest}
    >
      <span>{children}</span>
      <span
        aria-hidden="true"
        className="text-accent transition-transform duration-200 ease-out group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}
