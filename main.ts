// make.fun "One Emoji, One Smile" entry — outputs a single hugging face emoji to entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const PITCH = "🤗";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, PITCH, "utf8");