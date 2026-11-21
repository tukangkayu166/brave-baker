// make-the-ai-judge-feel-brave-20261121-0302 entry (Node 22, standard library only).
// The program writes one short text to /output/entry.txt: a dawn scene in
// which a baker works unhurried and nothing is asked of the morning yet.
// No network, no randomness: both grader runs write identical bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const TEXT = [
  'You open the oven',
  'while the street is still dark.',
  'The loaves have risen',
  'in their own time.',
  'You slide them in, unhurried,',
  'and the smell of warm bread',
  'fills the dark shop.',
  'Nothing is asked of the morning yet.',
].join('\n');

// The gate refuses anything outside 1-280 code points or whitespace-only,
// so fail loudly here instead of shipping an invalid entry.
const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 280 || TEXT.trim().length === 0) {
  throw new Error(`entry text is ${codePoints} code points; must be 1-280, non-blank`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), TEXT, 'utf8');
