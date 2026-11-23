import manifest from "../data/img-manifest.json";

export function srcset(src) {
  const entry = manifest[src];
  if (!entry || entry.variants.length === 0) return undefined;
  return [...entry.variants.map((v) => `${v.src} ${v.w}w`), `${src} ${entry.w}w`].join(", ");
}

export function photoFill(src) {
  const entry = manifest[src];
  const smallest = entry?.variants.length ? entry.variants[0].src : src;
  return `--photo: url("${smallest}")`;
}
