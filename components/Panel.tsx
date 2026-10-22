import type { CSSProperties, ReactNode } from "react";

type Only = "desktop" | "mobile";

/** Pestaña que sale del panel. `at` es la posición a lo largo del borde (px o %). */
export type Tab = { side: "bottom" | "right"; at: string; only?: Only };
/** Hueco donde encaja la pestaña del panel anterior. */
export type Notch = { side: "top" | "left"; at: string; only?: Only };

// La pestaña es un círculo de radio r con el centro 0.6r fuera del borde, así
// el cuello queda más angosto que la cabeza. El hueco usa el mismo centro,
// desplazado por el espacio entre paneles, y un poco de holgura.
function hole({ side, at }: Notch) {
  const depth = "calc(var(--pz-r) * 0.6 - var(--pz-gap))";
  const pos = side === "top" ? `${at} ${depth}` : `${depth} ${at}`;
  const r = "calc(var(--pz-r) + var(--pz-clear))";
  return `radial-gradient(circle at ${pos}, #0000 ${r}, #000 calc(${r} + 0.5px))`;
}

function maskFor(notches: Notch[], bp: Only) {
  const list = notches.filter((n) => !n.only || n.only === bp);
  return list.length ? list.map(hole).join(", ") : "none";
}

export default function Panel({
  id,
  tone = "ink",
  tabs = [],
  notches = [],
  className = "",
  label,
  children,
}: {
  id?: string;
  tone?: "ink" | "paper" | "accent";
  tabs?: Tab[];
  notches?: Notch[];
  className?: string;
  label?: string;
  children: ReactNode;
}) {
  const style = {
    "--mask-d": maskFor(notches, "desktop"),
    "--mask-m": maskFor(notches, "mobile"),
  } as CSSProperties;

  return (
    <section id={id} aria-label={label} className={`panel panel--${tone} ${className}`} style={style}>
      {tabs.map((t, i) => (
        <span
          key={i}
          aria-hidden
          className={`pz-tab pz-tab--${t.side} ${t.only ? `only-${t.only}` : ""}`}
          style={{ "--at": t.at } as CSSProperties}
        />
      ))}
      {children}
    </section>
  );
}
