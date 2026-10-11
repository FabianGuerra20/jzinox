// Variantes livianas de cada foto de public/img (ver img-manifest.json, que
// genera el script de optimización). Sin esto, un teléfono bajaba la foto de
// 1600 px para mostrarla a 350.
import manifest from "../data/img-manifest.json";

/** `srcset` con las variantes que existan, o undefined si la foto no tiene. */
export function srcset(src) {
  const entry = manifest[src];
  if (!entry || entry.variants.length === 0) return undefined;
  return [...entry.variants.map((v) => `${v.src} ${v.w}w`), `${src} ${entry.w}w`].join(", ");
}
