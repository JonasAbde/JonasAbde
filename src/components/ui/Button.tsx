import { Link } from "react-router-dom";
import type { ReactNode, MouseEventHandler, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

const baseClasses =
  "inline-flex items-center justify-center transition-all duration-200 rounded-lg font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50 disabled:pointer-events-none";

const variantClasses: Record<string, string> = {
  primary: "bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/20",
  secondary: "glass border-primary/20 hover:border-primary/40 text-pearl",
  ghost: "bg-transparent hover:bg-surface-lighter text-pearl",
  outline: "border border-primary/30 hover:border-primary bg-transparent text-primary-light",
};

const sizeClasses: Record<string, string> = {
  sm: "text-sm px-3 py-1.5",
  md: "text-sm px-4 py-2",
  lg: "text-base px-6 py-3",
};

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

// External link
interface ButtonExternalLinkProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  disabled?: never;
  href: string;
  to?: never;
  onClick?: never;
  rel?: string;
}

// React Router link
interface ButtonRouterLinkProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  disabled?: never;
  href?: never;
  to: string;
}

// Native button
interface ButtonNativeProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  href?: never;
  to?: never;
}

type ButtonProps = ButtonExternalLinkProps | ButtonRouterLinkProps | ButtonNativeProps;

function isExternalLink(props: ButtonProps): props is ButtonExternalLinkProps {
  return "href" in props && !!props.href;
}

function isRouterLink(props: ButtonProps): props is ButtonRouterLinkProps {
  return "to" in props && !!props.to;
}

export function Button(props: ButtonProps) {
  const { children, variant = "primary", size = "md", className = "" } = props;
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (isExternalLink(props)) {
    const { href, rel, ...rest } = props;
    const restProps = rest as Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "rel" | "children" | "className">;
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel={rel ?? "noopener noreferrer"}
        {...restProps}
      >
        {children}
      </a>
    );
  }

  if (isRouterLink(props)) {
    const { to } = props;
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  // Native button
  const { type = "button", disabled = false, onClick, ...nativeRest } = props as ButtonNativeProps;
  return (
    <button
      className={classes}
      type={type}
      disabled={disabled}
      onClick={onClick as MouseEventHandler<HTMLButtonElement>}
      {...nativeRest}
    >
      {children}
    </button>
  );
}
