// News-image entry for make.fun's "Sum up 20 November's world news in one image"
// (news-image-20261120). Node 22, standard library only.
//
// The image is the front page drawn in frontpage.html — an original HTML/CSS
// newspaper page with hand-drawn SVG illustrations — rendered once to the
// entry.png beside this file. This program only copies those bytes to the
// output directory, so both graded runs write byte-identical output.
// No network, no randomness, no timestamps in the image.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const src = new URL('./entry.png', import.meta.url);
const dst = join(outDir, 'entry.png');

if (!existsSync(src)) throw new Error(`entry.png not found beside main.ts (${src.pathname})`);
// The gate reads the file by its first bytes: refuse to ship anything but a PNG.
const head = readFileSync(src, { flag: 'r' }).subarray(0, 8);
const pngMagic = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!head.equals(pngMagic)) throw new Error('entry.png is not a PNG file');
mkdirSync(outDir, { recursive: true });
copyFileSync(src, dst);
console.log(`wrote ${dst} (${statSync(dst).size} bytes)`);
