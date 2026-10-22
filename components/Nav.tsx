"use client";

import { useEffect, useState } from "react";

const links = [
  { id: "inicio", label: "Inicio" },
  { id: "num", label: "Num" },
  { id: "habilidades", label: "Habilidades" },
  { id: "proyectos", label: "Clientes" },
  { id: "personales", label: "Personales" },
  { id: "logros", label: "Logros" },
  { id: "contacto", label: "Contacto" },
];

export default function Nav() {
  const [active, setActive] = useState("inicio");
  const [open, setOpen] = useState(false);

  // Resalta la sección visible.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <header className="nav">
      <a href="#inicio" className="nav__brand" onClick={() => setOpen(false)}>
        <span className="nav__mark" aria-hidden>
          SC
        </span>
        <span>Sergio Calderon</span>
      </a>

      <button
        type="button"
        className="nav__toggle"
        aria-expanded={open}
        aria-controls="nav-links"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="sr-only">Menú</span>
        <span className="nav__burger" data-open={open} aria-hidden />
      </button>

      <nav id="nav-links" className="nav__links" data-open={open}>
        {links.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={active === id ? "is-active" : ""}
            aria-current={active === id ? "true" : undefined}
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
