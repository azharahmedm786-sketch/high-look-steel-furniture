import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "whatsapp" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium tracking-wide transition-colors duration-200 focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-white hover:bg-navy",
  secondary: "border border-ink/20 text-ink hover:border-ink hover:bg-white",
  whatsapp: "bg-whatsapp text-white hover:brightness-95",
  ghost: "text-ink underline decoration-line underline-offset-4 hover:decoration-ink px-0 py-0",
};

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  disabled?: boolean;
  external?: boolean;
  "aria-label"?: string;
}

export function Button({
  children,
  variant = "primary",
  href,
  onClick,
  type = "button",
  className = "",
  disabled,
  external,
  ...rest
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          onClick={onClick}
          {...rest}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} onClick={onClick} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}
