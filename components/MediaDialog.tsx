"use client";

import { useEffect, useRef } from "react";
import { asset } from "@/lib/asset";
import { tech, type TechKey } from "@/data/portfolio";

export type MediaItem = {
  title: string;
  description?: string;
  video?: string;
  image?: string;
  link?: string;
  tech?: TechKey[];
};

export default function MediaDialog({
  item,
  onClose,
  onPrev,
  onNext,
}: {
  item: MediaItem | null;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dlg = ref.current;
    if (!dlg) return;
    if (item && !dlg.open) dlg.showModal();
    if (!item && dlg.open) dlg.close();
  }, [item]);

  useEffect(() => {
    if (!item) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") onNext?.();
      if (e.key === "ArrowLeft") onPrev?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [item, onNext, onPrev]);

  return (
    <dialog
      ref={ref}
      className="dialog"
      onClose={onClose}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      aria-labelledby="dialog-title"
    >
      {item && (
        <div className="dialog__body">
          <header className="dialog__head">
            <h3 id="dialog-title">{item.title}</h3>
            <button type="button" className="icon-btn" onClick={onClose} aria-label="Cerrar">
              ✕
            </button>
          </header>

          <div className="dialog__media">
            {item.video ? (
              <video
                key={item.video}
                src={asset(item.video)}
                controls
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            ) : item.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={asset(item.image)} alt={item.title} />
            ) : null}
          </div>

          {item.description && <p className="dialog__desc">{item.description}</p>}

          <footer className="dialog__foot">
            {item.tech && item.tech.length > 0 && (
              <ul className="tags" aria-label="Tecnologías">
                {item.tech.map((t) => (
                  <li key={t}>{tech[t].name}</li>
                ))}
              </ul>
            )}
            <div className="dialog__actions">
              {onPrev && (
                <button type="button" className="icon-btn" onClick={onPrev} aria-label="Anterior">
                  ←
                </button>
              )}
              {onNext && (
                <button type="button" className="icon-btn" onClick={onNext} aria-label="Siguiente">
                  →
                </button>
              )}
              {item.link && (
                <a className="btn btn--solid" href={item.link} target="_blank" rel="noreferrer">
                  Visitar sitio ↗
                </a>
              )}
            </div>
          </footer>
        </div>
      )}
    </dialog>
  );
}
