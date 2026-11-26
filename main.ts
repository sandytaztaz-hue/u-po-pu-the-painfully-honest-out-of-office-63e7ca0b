// The Painfully Honest Out-of-Office — make.fun entry.
// Writes exactly one out-of-office auto-reply (one sentence, 177 chars)
// to /output/entry.txt. Deterministic: no input, no randomness, no newline.
// The line is honest about the inbox (3,612 unread) and the sender's
// enthusiasm (none — they left to escape exactly this), and stays polite
// enough for a manager with its closing thank-you.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I'm away until Monday, and your email joins 3,612 unread messages I will answer with all the enthusiasm of someone who left to escape exactly this — thank you for your patience.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
