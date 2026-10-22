const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Ruta pública a un archivo dentro de /public/assets, respetando el basePath. */
export const asset = (file: string) => `${basePath}/assets/${file}`;
