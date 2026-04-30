import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export function Section({ children, className = "", id, dark = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 sm:py-28 lg:py-36 ${dark ? "bg-surface-light" : "bg-surface"} ${className}`}
    >
      {children}
    </section>
  );
}
