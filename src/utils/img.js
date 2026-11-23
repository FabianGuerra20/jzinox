import manifest from "../data/img-manifest.json";
import blur from "../data/img-blur.json";

export function srcset(src) {
  const entry = manifest[src];
  if (!entry || entry.variants.length === 0) return undefined;
  return [...entry.variants.map((v) => `${v.src} ${v.w}w`), `${src} ${entry.w}w`].join(", ");
}

export function photoFill(src) {
  return `--photo: url("${blur[src]}")`;
}
