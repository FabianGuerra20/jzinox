import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const raiz = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const manifest = JSON.parse(readFileSync(path.join(raiz, "src/data/img-manifest.json"), "utf8"));
const salida = {};
for (const src of Object.keys(manifest)) {
  if (src.includes("logo")) continue;
  const buffer = await sharp(path.join(raiz, "public", src)).resize(24).webp({ quality: 60 }).toBuffer();
  salida[src] = `data:image/webp;base64,${buffer.toString("base64")}`;
}
writeFileSync(path.join(raiz, "src/data/img-blur.json"), JSON.stringify(salida, null, 1) + "\n");
console.log(`${Object.keys(salida).length} fondos desenfocados`);
