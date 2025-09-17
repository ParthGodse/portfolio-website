import React from "react";
import type { JSX } from "react";

type PillProps = React.PropsWithChildren<{
  className?: string;
  /** Visual style of the pill */
  variant?:
    | "dark"        // for dark sections (your current default look)
    | "light"       // for white sections
    | "navy"        // deep navy solid
    | "brand"       // hero gradient
    | "brand-c1"    // hero color 1 solid
    | "brand-c2";   // hero color 2 solid
  /** Size of the pill */
  size?: "sm" | "md" | "lg";
  /** Render element */
  as?: keyof JSX.IntrinsicElements;
  style?: React.CSSProperties;
}>;

/**
 * Reusable pill/chip. Rounded-full by default (true capsule).
 * Variants let you switch colors without external overrides.
 *
 * NOTE: For "brand"/"brand-c1"/"brand-c2" variants, define these once in styles.css:
 * :root{
 *   --hero-c1-solid: 245 85% 60%;
 *   --hero-c2-solid: 320 75% 55%;
 * }
 */
export default function Pill({
  className = "",
  children,
  variant = "dark",
  size = "md",
  as = "span",
  style,
}: PillProps) {
  const base = "inline-flex items-center gap-1 rounded-full border font-medium select-none";

  const sizes: Record<NonNullable<PillProps["size"]>, string> = {
    sm: "px-2.5 py-0.5 text-xs",
    md: "px-3 py-1 text-xs",
    lg: "px-3.5 py-1.5 text-sm",
  };

  const variants: Record<NonNullable<PillProps["variant"]>, string> = {
    dark:
      "border-white/15 bg-white/5 text-white/90 backdrop-blur-sm",
    light:
      "border-zinc-200 bg-zinc-100 text-zinc-800",
    navy:
      "border-transparent text-white bg-[hsl(225_68%_22%)]", // deep navy solid
    brand:
      "border-transparent text-white [background:linear-gradient(90deg,hsl(var(--hero-c1-solid)),hsl(var(--hero-c2-solid)))]",
    "brand-c1":
      "border-transparent text-white bg-[hsl(var(--hero-c1-solid))]",
    "brand-c2":
      "border-transparent text-white bg-[hsl(var(--hero-c2-solid))]",
  };

  const Comp = as as any;
  return (
    <Comp
      style={style}
      className={`${base} ${sizes[size]} ${variants[variant]} shadow-sm ${className}`}
    >
      {children}
    </Comp>
  );
}
