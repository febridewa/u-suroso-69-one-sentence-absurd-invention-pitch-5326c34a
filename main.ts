// One-Sentence Absurd Invention Pitch — u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a
// Writes one original absurd-invention pitch to /output/entry.txt.
// The pitch: the mystery of the vanishing sock is solved — the washing
// machine is the kidnapper, and it only releases its hostage for a ransom
// paid in fabric softener. The annoyance (lost socks), the invention (a
// sock-kidnapping washing machine) and its silly mechanism (the ransom)
// are all in one tight sentence.
// Deterministic: the same fixed string on every run.
// One sentence, 103 characters — inside the gate's 1–220 character window.
import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "A washing machine that kidnaps one sock per load and returns it only after a ransom of fabric softener.";

// Guard the gate before writing: the entry must be 1–220 UTF-8 characters
// and not only whitespace, or the sealed scorer refuses it.
if (PITCH.length < 1 || PITCH.length > 220) {
  throw new Error(`Pitch must be 1–220 characters, got ${PITCH.length}`);
}
if (PITCH.trim().length === 0) {
  throw new Error("Pitch must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
console.log(`Wrote ${PITCH.length} chars to /output/entry.txt`);
