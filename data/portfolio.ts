export const profile = {
  name: "Sergio Calderon",
  role: "Desarrollador de Software",
  summary:
    "Desarrollador de software especializado en desarrollo web Full Stack (Angular, NodeJS, Express, SQL, NoSQL), automatización de procesos con UiPath y creación de sitios en WordPress con Elementor. Curioso, colaborativo y autodidacta, con la meta de liderar proyectos tecnológicos y emprender.",
  avatar: "104942937.jpeg",
  focus: [
    { title: "Desarrollo web Full Stack", detail: "Angular, React, NodeJS, Express, SQL y NoSQL" },
    { title: "Automatización de procesos", detail: "Robots RPA con UiPath" },
    { title: "Sitios en WordPress", detail: "Diseño y maquetación con Elementor" },
  ],
  links: {
    github: "https://github.com/TheChec",
    linkedin: "https://www.linkedin.com/in/sergiocalderondevelopment/",
  },
};

export const tech = {
  angular: { name: "Angular", icon: "angularIcon.png" },
  node: { name: "NodeJS", icon: "nodejsIcon.png" },
  sql: { name: "SQL", icon: "sqlIcon.png" },
  js: { name: "JavaScript", icon: "jsIcon.png" },
  ts: { name: "TypeScript", icon: "typescript.png" },
  html: { name: "HTML", icon: "htmlIcon.png" },
  css: { name: "CSS", icon: "cssIcon.png" },
  vb: { name: "Visual Basic", icon: "visual-basic_icon.jpg" },
  python: { name: "Python", icon: "pythonIcon.png" },
  java: { name: "Java", icon: "javaIcon.png" },
  csharp: { name: "C#", icon: "csharp.png" },
  react: { name: "React", icon: "React-icon.svg.png" },
  dotnet: { name: ".NET Core", icon: "netcore.png" },
  mongo: { name: "MongoDB", icon: "mongodbIcon.png" },
  postgres: { name: "PostgreSQL", icon: "postgresql.png" },
  express: { name: "Express", icon: "expressIcon.png" },
  uipath: { name: "UiPath", icon: "uipath.png" },
  postman: { name: "Postman", icon: "postman-icon.png" },
  git: { name: "Git", icon: "githubIcon.png" },
  powerbi: { name: "Power BI", icon: "power-bi-icon.png" },
  next: { name: "Next.js" },
  tailwind: { name: "Tailwind CSS" },
  prisma: { name: "Prisma" },
  redis: { name: "Redis" },
  r2: { name: "Cloudflare R2" },
  wompi: { name: "Wompi" },
  num: { name: "API Num" },
} satisfies Record<string, { name: string; icon?: string }>;

export type TechKey = keyof typeof tech;

export const mainStack: TechKey[] = ["angular", "node", "sql", "js", "ts", "html", "css"];

export const levels = [
  "Conozco lo básico, puedo entender conceptos y hacer ajustes simples.",
  "Manejo tareas sencillas con ayuda de documentación.",
  "Trabajo de forma autónoma en partes de un proyecto y aplico buenas prácticas básicas.",
  "Desarrollo proyectos completos de forma independiente y optimizo mi código.",
  "Domino la tecnología y resuelvo problemas complejos con rapidez.",
];

export const skillGroups: { title: string; items: { tech: TechKey; level: number }[] }[] = [
  {
    title: "Lenguajes",
    items: [
      { tech: "vb", level: 4 },
      { tech: "python", level: 3 },
      { tech: "java", level: 3 },
      { tech: "csharp", level: 3 },
    ],
  },
  {
    title: "Frameworks",
    items: [
      { tech: "react", level: 3 },
      { tech: "dotnet", level: 3 },
    ],
  },
  {
    title: "Bases de datos",
    items: [
      { tech: "mongo", level: 3 },
      { tech: "postgres", level: 4 },
    ],
  },
  {
    title: "Herramientas",
    items: [
      { tech: "uipath", level: 4 },
      { tech: "postman", level: 4 },
      { tech: "git", level: 4 },
      { tech: "powerbi", level: 2 },
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  kind: "cliente" | "personal";
  summary: string;
  description: string;
  logo?: string;
  video?: string;
  link?: string;
  tech: TechKey[];
  /** Ocupa una celda grande en la cuadrícula. */
  featured?: boolean;
  /** Color de acento de la tarjeta. */
  accent: "mint" | "blue" | "coral" | "violet";
  /** Consume la API de Num. */
  num?: boolean;
};

export const projects: Project[] = [
  {
    id: "AmorePerLei",
    title: "Amore Per Lei",
    kind: "cliente",
    summary: "Boutique de moda femenina en EE. UU., bilingüe y con pagos en línea.",
    description:
      "Tienda online para una boutique de moda femenina en Estados Unidos. Inglés como idioma principal y español bajo /es, precios en USD (o COP si la visita viene de Colombia), pagos con Wompi y SEO internacional con hreflang y datos estructurados. El catálogo, el stock y los pedidos vienen de Num.",
    link: "https://amore-per-lei.com",
    tech: ["next", "tailwind", "num", "wompi"],
    accent: "coral",
    num: true,
  },
  {
    id: "AmorePerLeiSport",
    title: "Amore Per Lei Sport",
    kind: "cliente",
    summary: "Tienda de ropa deportiva femenina con catálogo, carrito y pagos.",
    description:
      "Sitio de ropa deportiva femenina de Medellín: inicio, catálogo con filtros, ficha de producto, carrito persistente, selector de moneda, contacto con mapa y botón de WhatsApp. Optimizado para buscadores tradicionales y para asistentes con IA (SEO, GEO y AEO). Funciona sobre Num.",
    link: "https://sport.amore-per-lei.com",
    tech: ["next", "tailwind", "num", "wompi"],
    accent: "violet",
    num: true,
  },
  {
    id: "Fariha",
    title: "Fariha",
    kind: "cliente",
    summary: "Catálogo de carteras tejidas a mano con pedidos por WhatsApp.",
    description:
      "Sitio estático en Next.js para una marca de carteras tejidas a mano: inicio, nosotros, catálogo y vista de producto, con carrito que arma el pedido (envío nacional, delivery o retiro) y lo envía por WhatsApp. Los productos se administran desde Num.",
    link: "https://fariha.com",
    tech: ["next", "tailwind", "num"],
    accent: "mint",
    num: true,
  },
  {
    id: "Contabot",
    title: "Contabot",
    kind: "cliente",
    summary: "Sistema contable que automatiza acuses de recibo y causación de facturas.",
    description:
      "Un sistema contable que automatiza el acuse de recibo de facturas electrónicas y la causación de facturas de compra. Además, incluye módulos para la gestión de empleados, clientes y administración de permisos dentro de la aplicación.",
    logo: "contaboticon.jpeg",
    video: "contabotuto.mp4",
    tech: ["postgres", "express", "angular", "node"],
    featured: true,
    accent: "mint",
  },
  {
    id: "Kuva",
    title: "Kuva",
    kind: "cliente",
    summary: "Plataforma para cotizar, registrar y monitorear eventos.",
    description:
      "Una plataforma para cotizar, registrar y monitorear eventos además de tener un módulo para organizar empleados, clientes, empresas, redes sociales y demás cosas.",
    logo: "React-icon.svg.png",
    video: "kuvatutorial.mp4",
    link: "https://agenda-kuva.vercel.app/",
    tech: ["sql", "express", "react", "node"],
    featured: true,
    accent: "blue",
  },
  {
    id: "Artesana",
    title: "Artesana",
    kind: "cliente",
    summary: "Catálogo de proyectos de crochet organizado por categorías.",
    description:
      "Este catálogo fue diseñado para una clienta que buscaba reunir todos sus proyectos de crochet en un solo lugar, organizado por categorías para facilitar su visualización. La primera versión fue en HTML, CSS y JavaScript; hoy corre en Next.js y su catálogo se administra desde Num.",
    logo: "logoArtesanaRedondo.png",
    video: "artesanatuto.mp4",
    link: "https://artesanashop.com",
    tech: ["next", "num", "html", "css", "js"],
    accent: "coral",
    num: true,
  },
  {
    id: "ArtesanaInsumos",
    title: "Artesana Insumos",
    kind: "cliente",
    summary: "Tienda de insumos de tejido con carrito y pedidos por WhatsApp.",
    description:
      "Un catálogo de insumos para hacer tejido (crochet), con carrito de compras y conexión a WhatsApp para continuar con la experiencia personalizada. Migrado a Next.js y conectado a Num.",
    logo: "logoArtesanaRedondo.png",
    video: "artesanainsumos.mp4",
    link: "https://insumos.artesanashop.com",
    tech: ["next", "num", "html", "css", "js"],
    accent: "violet",
    num: true,
  },
  {
    id: "Instalamos",
    title: "Instalamos",
    kind: "cliente",
    summary: "Landing para empresa de construcción y decoración de interiores.",
    description:
      "Landing page para Instalamos, empresa de construcción y decoración de interiores. En la página se ve su entidad empresarial, proyectos y enlaces de comunicación.",
    logo: "instalamosLogo.png",
    video: "instalamosPreview.mp4",
    link: "https://thechec.github.io/Instalamos/",
    tech: ["html", "css", "js"],
    accent: "mint",
  },
  {
    id: "CreditCar",
    title: "CreditCar",
    kind: "personal",
    summary: "Concesionarios publican vehículos y usuarios verifican su elegibilidad de financiación.",
    description:
      "Una plataforma en EE. UU. que permite a concesionarios publicar vehículos y a usuarios registrados verificar su elegibilidad para financiación y encontrar concesionarios con mejor afinidad financiera.",
    logo: "angularIcon.png",
    video: "creditcar-preview.mp4",
    tech: ["mongo", "express", "angular", "node"],
    featured: true,
    accent: "coral",
  },
  {
    id: "PoliNet",
    title: "PoliNet",
    kind: "personal",
    summary: "Red social para emprendedores, mentores y usuarios.",
    description:
      "Proyecto orientado a emprendedores, mentores y usuarios del común. Es una red social donde se puede publicar, reaccionar e interactuar con otros.",
    logo: "logoPolinet.png",
    video: "polinet-preview.mp4",
    link: "https://polinet.vercel.app/",
    tech: ["mongo", "express", "angular", "node"],
    accent: "blue",
  },
  {
    id: "Algebraic-Showdown",
    title: "Algebraic Showdown",
    kind: "personal",
    summary: "Álgebra lineal contra piedra, papel o tijera.",
    description:
      "Juego de álgebra lineal combinado con piedra, papel o tijera, en el que tendrás que solucionar matrices por métodos como el de Sarrus y Cramer.",
    logo: "Hand-scissor.svg",
    video: "algebraic-showdown-preview.mp4",
    link: "https://thechec.github.io/Algebraic-Showdown/",
    tech: ["html", "css", "js"],
    accent: "violet",
  },
  {
    id: "ResisTool",
    title: "ResisTool",
    kind: "personal",
    summary: "Calculadora de resistencia y capacitancia en serie y paralelo.",
    description:
      "Esta calculadora está diseñada para ayudarte a determinar la resistencia total y la capacitancia total en circuitos en serie y paralelo, facilitando el diseño y análisis de tus circuitos eléctricos.",
    logo: "resistence_logo.png",
    video: "resistool-preview.mp4",
    link: "https://thechec.github.io/ResisTool/",
    tech: ["html", "css", "js"],
    accent: "mint",
  },
];

export const num = {
  name: "Num",
  by: "Eavynex",
  tagline: "El catálogo online que vende por WhatsApp.",
  description:
    "Mi producto estrella: una plataforma SaaS multi-tenant que diseñé y construí de punta a punta. Un solo backend sirve el catálogo, los pedidos y la facturación de varias marcas; cada empresa administra productos, stock y pedidos desde su panel y vende desde su propia web o desde el catálogo público de Num.",
  link: "https://num-catalogo.eavynex.com",
  studio: { name: "Eavynex", link: "https://eavynex.com" },
  parts: [
    { name: "API", detail: "Express 5 · Prisma · PostgreSQL" },
    { name: "Panel", detail: "Next.js 16 · roles y permisos" },
    { name: "Catálogo", detail: "Next.js · multi-tenant por URL" },
  ],
  features: [
    { title: "Checkout por WhatsApp o Wompi", detail: "El pedido llega al WhatsApp de la tienda o se paga en línea, con stock reservado mientras el cliente paga." },
    { title: "Carga masiva desde Excel", detail: "Hasta 5.000 productos por archivo: crea categorías y subcategorías y reporta errores fila por fila." },
    { title: "Variantes con stock propio", detail: "Colores y tallas anidadas, cada una con su stock, precio y fotos." },
    { title: "Multi-empresa con roles", detail: "Un usuario puede manejar varias empresas; permisos por rol y sesión por empresa activa." },
    { title: "Facturación de la plataforma", detail: "Cobro periódico por empresa, pruebas gratis, promociones y bloqueo automático por falta de pago." },
    { title: "Pedidos con historial", detail: "Estados, envíos, facturas inmutables y un timeline de cada pedido y producto." },
  ],
  stack: ["Express 5", "Prisma", "PostgreSQL", "Redis", "Cloudflare R2", "Next.js 16", "Tailwind CSS", "Swagger", "Vitest", "Docker"],
  stores: [
    { name: "Amore Per Lei", detail: "Moda femenina · EE. UU.", link: "https://amore-per-lei.com" },
    { name: "Amore Per Lei Sport", detail: "Ropa deportiva · Medellín", link: "https://sport.amore-per-lei.com" },
    { name: "Artesana", detail: "Crochet hecho a mano", link: "https://artesanashop.com" },
    { name: "Artesana Insumos", detail: "Insumos para tejer", link: "https://insumos.artesanashop.com" },
    { name: "Fariha", detail: "Carteras tejidas a mano", link: "https://fariha.com" },
  ],
};

export const achievements = [
  {
    id: "ICPC",
    title: "ICPC 2021",
    year: "2021",
    description: "Maratón nacional de programación en representación del Politécnico Grancolombiano.",
    logo: "ICPC.png",
    certificate: "certificado-icpc.png",
  },
  {
    id: "Expoingenieria",
    title: "Hack_Challenge Expoingeniería",
    year: "2023",
    description: "Evento departamental en el que obtuve el segundo lugar en la categoría de diseño web.",
    logo: "Expoingenieria-2023.png",
  },
];
