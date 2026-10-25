// Nitro bundles PGLite into the server function but leaves its wasm/data files
// behind. The runtime loads them next to the chunk via import.meta.url.
import { copyFileSync, existsSync, readdirSync } from "node:fs";
import { join } from "node:path";

const libs = join(process.cwd(), ".vercel/output/functions/__server.func/_libs");
if (!existsSync(libs)) process.exit(0);
const bundled = readdirSync(libs).some((name) => name.includes("electric-sql__pglite"));
if (!bundled) process.exit(0);
const src = join(process.cwd(), "node_modules/@electric-sql/pglite/dist");
for (const name of ["pglite.data", "pglite.wasm", "initdb.wasm"]) {
  copyFileSync(join(src, name), join(libs, name));
}
console.log("[pglite] copied wasm/data next to the server bundle");
