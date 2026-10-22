import Nav from "@/components/Nav";
import Panel from "@/components/Panel";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Reveal from "@/components/Reveal";
import NumShowcase from "@/components/NumShowcase";
import { levels, mainStack, num, profile, projects, skillGroups, tech } from "@/data/portfolio";

// Posición de cada encaje entre paneles. En escritorio el hero se divide en
// dos piezas lado a lado; en móvil todo queda en una columna.
const JOINT = {
  heroSide: "42%", // héroe → perfil (vertical en escritorio)
  heroDown: "140px", // héroe → Num (escritorio)
  heroMobile: "72%", // héroe → perfil (móvil)
  sideMobile: "28%", // perfil → Num (móvil)
  num: "64%",
  skills: "76%",
  clients: "22%",
  personal: "44%",
  achievements: "58%",
};

export default function Home() {
  const clientCount = projects.filter((p) => p.kind === "cliente").length;

  return (
    <>
      <Nav />

      <main className="puzzle">
        {/* ---------- Hero ---------- */}
        <div id="inicio" className="hero">
          <Panel
            label="Presentación"
            className="hero__intro"
            tabs={[
              { side: "right", at: JOINT.heroSide, only: "desktop" },
              { side: "bottom", at: JOINT.heroDown, only: "desktop" },
              { side: "bottom", at: JOINT.heroMobile, only: "mobile" },
            ]}
          >
            <p className="label">{profile.role} — Creador de Num</p>
            <h1 className="hero__name">{profile.name}</h1>
            <p className="hero__statement">
              Construyo aplicaciones web y <em>automatizo procesos</em> para que cada parte de un negocio encaje con la
              siguiente.
            </p>
            <div className="actions">
              <a href="#proyectos" className="btn btn--solid">
                Ver proyectos
              </a>
              <a href={profile.links.github} className="btn" target="_blank" rel="noreferrer">
                GitHub <span aria-hidden>↗</span>
              </a>
              <a href={profile.links.linkedin} className="btn" target="_blank" rel="noreferrer">
                LinkedIn <span aria-hidden>↗</span>
              </a>
            </div>
          </Panel>

          <Panel
            label="Perfil"
            className="hero__side"
            notches={[
              { side: "left", at: JOINT.heroSide, only: "desktop" },
              { side: "top", at: JOINT.heroMobile, only: "mobile" },
            ]}
            tabs={[{ side: "bottom", at: JOINT.sideMobile, only: "mobile" }]}
          >
            <dl className="stats">
              <div>
                <dd>{String(projects.length).padStart(2, "0")}</dd>
                <dt>Proyectos</dt>
              </div>
              <div>
                <dd>{String(clientCount).padStart(2, "0")}</dd>
                <dt>Para clientes</dt>
              </div>
              <div>
                <dd>{String(Object.keys(tech).length).padStart(2, "0")}</dd>
                <dt>Tecnologías</dt>
              </div>
              <div>
                <dd>{String(num.stores.length).padStart(2, "0")}</dd>
                <dt>Tiendas en Num</dt>
              </div>
            </dl>
            <ol className="focus">
              {profile.focus.map((f, i) => (
                <li key={f.title}>
                  <span className="focus__n">0{i + 1}</span>
                  <div>
                    <strong>{f.title}</strong>
                    <span>{f.detail}</span>
                  </div>
                </li>
              ))}
            </ol>
          </Panel>
        </div>

        {/* ---------- Num: producto estrella ---------- */}
        <Panel
          id="num"
          label="Num, producto estrella"
          tone="paper"
          notches={[
            { side: "top", at: JOINT.heroDown, only: "desktop" },
            { side: "top", at: JOINT.sideMobile, only: "mobile" },
          ]}
          tabs={[{ side: "bottom", at: JOINT.num }]}
        >
          <NumShowcase />
        </Panel>

        {/* ---------- Habilidades ---------- */}
        <Panel
          id="habilidades"
          label="Habilidades"
          notches={[{ side: "top", at: JOINT.num }]}
          tabs={[{ side: "bottom", at: JOINT.skills }]}
        >
          <div className="split">
            <Reveal className="split__aside">
              <p className="label">01 / Habilidades</p>
              <h2 className="heading">
                Herramientas con las que <em>construyo</em>
              </h2>
              <p className="muted">
                Mi especialidad arriba; debajo, el resto del stack con un nivel honesto del 1 al 5.
              </p>
            </Reveal>

            <div className="split__main">
              <Reveal>
                <h3 className="sublabel">Especialidad</h3>
                <ul className="tags">
                  {mainStack.map((k) => (
                    <li key={k}>{tech[k].name}</li>
                  ))}
                </ul>
              </Reveal>

              <div className="skill-groups">
                {skillGroups.map((g, gi) => (
                  <Reveal key={g.title} delay={gi * 60}>
                    <h3 className="sublabel">{g.title}</h3>
                    <ul className="skill-list">
                      {g.items.map(({ tech: k, level }) => (
                        <li key={k}>
                          <span>{tech[k].name}</span>
                          <span className="meter" role="img" aria-label={`Nivel ${level} de 5: ${levels[level - 1]}`}>
                            {levels.map((_, n) => (
                              <i key={n} data-on={n < level} />
                            ))}
                          </span>
                          <span className="meter__n">{level}/5</span>
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                ))}
              </div>

              <details className="legend">
                <summary>¿Cómo leer los niveles?</summary>
                <ol>
                  {levels.map((l, i) => (
                    <li key={i}>
                      <span>{i + 1}</span>
                      {l}
                    </li>
                  ))}
                </ol>
              </details>
            </div>
          </div>
        </Panel>

        {/* ---------- Proyectos para clientes ---------- */}
        <Panel
          id="proyectos"
          label="Proyectos para clientes"
          tone="paper"
          notches={[{ side: "top", at: JOINT.skills }]}
          tabs={[{ side: "bottom", at: JOINT.clients }]}
        >
          <Reveal className="section-head">
            <p className="label">02 / Proyectos para clientes</p>
            <h2 className="heading">
              Trabajo para <em>clientes</em>
            </h2>
            <p className="muted section-head__lead">
              Sitios y sistemas en producción para negocios reales. Los marcados con Num funcionan sobre mi plataforma.
            </p>
          </Reveal>
          <Projects kind="cliente" />
        </Panel>

        {/* ---------- Proyectos personales ---------- */}
        <Panel
          id="personales"
          label="Proyectos personales"
          notches={[{ side: "top", at: JOINT.clients }]}
          tabs={[{ side: "bottom", at: JOINT.personal }]}
        >
          <Reveal className="section-head">
            <p className="label">03 / Proyectos personales</p>
            <h2 className="heading">
              Proyectos <em>personales</em>
            </h2>
            <p className="muted section-head__lead">
              Ideas que construí por curiosidad, para aprender o para resolver un problema propio.
            </p>
          </Reveal>
          <Projects kind="personal" />
        </Panel>

        {/* ---------- Logros ---------- */}
        <Panel
          id="logros"
          label="Logros"
          tone="paper"
          notches={[{ side: "top", at: JOINT.personal }]}
          tabs={[{ side: "bottom", at: JOINT.achievements }]}
        >
          <div className="split">
            <Reveal className="split__aside">
              <p className="label">04 / Participaciones</p>
              <h2 className="heading">
                Competencias y <em>reconocimientos</em>
              </h2>
            </Reveal>
            <div className="split__main">
              <Achievements />
            </div>
          </div>
        </Panel>

        {/* ---------- Contacto ---------- */}
        <Panel id="contacto" label="Contacto" tone="accent" notches={[{ side: "top", at: JOINT.achievements }]}>
          <Reveal className="contact">
            <p className="label">05 / Contacto</p>
            <h2 className="contact__title">
              ¿Tienes un proyecto
              <br />
              <em>que necesita encajar?</em>
            </h2>
            <div className="actions">
              <a href={profile.links.linkedin} className="btn btn--solid" target="_blank" rel="noreferrer">
                Escríbeme en LinkedIn <span aria-hidden>↗</span>
              </a>
              <a href={profile.links.github} className="btn" target="_blank" rel="noreferrer">
                GitHub <span aria-hidden>↗</span>
              </a>
            </div>
          </Reveal>
        </Panel>
      </main>

      <footer className="footer">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <a href="#inicio">Volver arriba ↑</a>
      </footer>
    </>
  );
}
