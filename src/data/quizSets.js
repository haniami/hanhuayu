import { hsk1Cards } from "./hsk1Cards";

export const QUIZ_SETS = Array.from({ length: 16 }, (_, si) =>
  Array.from({ length: 10 }, (_, qi) => hsk1Cards[(si * 10 + qi) % hsk1Cards.length])
);
