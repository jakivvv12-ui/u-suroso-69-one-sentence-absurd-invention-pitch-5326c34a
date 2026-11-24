import { mkdirSync, writeFileSync } from "node:fs";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(
  `${out}/entry.txt`,
  "A houseplant that texts 'I'm fine, stop watering me' the moment you reach for the jug for the third time today."
);
