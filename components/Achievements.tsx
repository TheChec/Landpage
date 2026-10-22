"use client";

import { useState } from "react";
import { achievements } from "@/data/portfolio";
import MediaDialog, { type MediaItem } from "./MediaDialog";
import Reveal from "./Reveal";

export default function Achievements() {
  const [item, setItem] = useState<MediaItem | null>(null);

  return (
    <>
      <ol className="awards">
        {achievements.map((a, i) => (
          <Reveal as="li" key={a.id} delay={i * 80} className="awards__item">
            <span className="awards__year">{a.year}</span>
            <div>
              <h3>{a.title}</h3>
              <p className="muted">{a.description}</p>
              {a.certificate && (
                <button
                  type="button"
                  className="link"
                  onClick={() => setItem({ title: a.title, image: a.certificate, description: a.description })}
                >
                  Ver certificado →
                </button>
              )}
            </div>
          </Reveal>
        ))}
      </ol>
      <MediaDialog item={item} onClose={() => setItem(null)} />
    </>
  );
}
