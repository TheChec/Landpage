"use client";

import { useState } from "react";
import { projects, tech, type Project } from "@/data/portfolio";
import MediaDialog from "./MediaDialog";
import Reveal from "./Reveal";

/** Lista de proyectos de un tipo (clientes o personales). */
export default function Projects({ kind }: { kind: Project["kind"] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const list = projects.filter((p) => p.kind === kind);
  const current = openIndex === null ? null : list[openIndex];

  const step = (dir: 1 | -1) =>
    setOpenIndex((i) => (i === null ? i : (i + dir + list.length) % list.length));

  return (
    <>
      <ol className="work">
        {list.map((p, i) => (
          <Reveal as="li" key={p.id} delay={Math.min(i, 4) * 50}>
            <button type="button" className="work__row" onClick={() => setOpenIndex(i)}>
              <span className="work__n">{String(i + 1).padStart(2, "0")}</span>
              <span className="work__main">
                <span className="work__title">{p.title}</span>
                <span className="work__summary">{p.summary}</span>
              </span>
              <span className="work__tech">{p.tech.map((t) => tech[t].name).join(" · ")}</span>
              <span className="work__kind">{p.num && <b>Num</b>}</span>
              <span className="work__arrow" aria-hidden>
                →
              </span>
            </button>
          </Reveal>
        ))}
      </ol>

      <MediaDialog
        item={current}
        onClose={() => setOpenIndex(null)}
        onPrev={() => step(-1)}
        onNext={() => step(1)}
      />
    </>
  );
}
