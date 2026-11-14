// bigpig-happy v1 — ai-happy-01 entry (Node 22, standard library only).
// The program copies the entry image to the output directory.
// The judge sees exactly the bytes of /output/entry.png, so the image
// file must be a whole PNG or JPEG, at most 1 MiB and 1024 by 1024.
import { copyFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const src = new URL('./entry.png', import.meta.url);
const dest = join(outDir, 'entry.png');
copyFileSync(src, dest);
// Guard: never ship a file the gate would refuse for size.
if (statSync(dest).size > 1048576) throw new Error('entry.png exceeds 1 MiB');
