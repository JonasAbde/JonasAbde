import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "primary" | "success" | "warning";
}

const variantClasses: Record<string, string> = {
  default: "bg-surface-lighter text-pearl-dark",
  primary: "bg-primary/10 text-primary-light",
  success: "bg-success/10 text-success",
  warning: "bg-warning/10 text-warning",
};

export function Badge({ children, variant = "default" }: BadgeProps) {
  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${variantClasses[variant]}`}
    >
      {children}
    </span>
  );
}
