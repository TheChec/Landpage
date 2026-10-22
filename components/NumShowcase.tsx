import { num } from "@/data/portfolio";
import Reveal from "./Reveal";

/** Sección del producto estrella: Num, la pieza central que alimenta varias tiendas. */
export default function NumShowcase() {
  return (
    <>
      <div className="num">
        <Reveal className="num__intro">
          <p className="label">Producto estrella</p>
          <p className="num__logo" aria-label={num.name}>
            {num.name}
            <span>by {num.by}</span>
          </p>
          <h2 className="heading">
            El catálogo online que <em>vende por WhatsApp.</em>
          </h2>
          <p className="muted num__desc">{num.description}</p>
          <div className="actions">
            <a href={num.link} className="btn btn--solid" target="_blank" rel="noreferrer">
              Ver catálogo de Num <span aria-hidden>↗</span>
            </a>
            <a href={num.studio.link} className="btn" target="_blank" rel="noreferrer">
              {num.studio.name} <span aria-hidden>↗</span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={120} className="hub" as="figure">
          <figcaption className="sublabel">Una API, {num.stores.length} tiendas</figcaption>
          <div className="hub__core">
            {num.parts.map((p) => (
              <div key={p.name}>
                <strong>{p.name}</strong>
                <span>{p.detail}</span>
              </div>
            ))}
          </div>
          <ul className="hub__stores">
            {num.stores.map((s) => (
              <li key={s.name}>
                <a href={s.link} target="_blank" rel="noreferrer">
                  <span>
                    <strong>{s.name}</strong>
                    <span>{s.detail}</span>
                  </span>
                  <span aria-hidden>↗</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <ol className="num__features">
        {num.features.map((f, i) => (
          <Reveal as="li" key={f.title} delay={(i % 3) * 70}>
            <span className="num__n">{String(i + 1).padStart(2, "0")}</span>
            <h3>{f.title}</h3>
            <p className="muted">{f.detail}</p>
          </Reveal>
        ))}
      </ol>

      <ul className="tags num__stack" aria-label="Tecnologías de Num">
        {num.stack.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </>
  );
}
