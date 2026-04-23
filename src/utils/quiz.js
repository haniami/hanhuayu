import { hsk1Cards } from "../data/hsk1Cards";
import { shuffle } from "./shuffle";

export function getRandomSet() {
  const a = [...hsk1Cards];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a.slice(0, 10);
}

export function buildConvQuestion(sentence, allSentences) {
  const wrong = shuffle(allSentences.filter(s => s.meaning !== sentence.meaning)).slice(0, 3);
  const options = shuffle([sentence.meaning, ...wrong.map(s => s.meaning)]);
  return {
    prompt: sentence.zh,
    sub: sentence.pinyin,
    label: "What does this mean?",
    answer: sentence.meaning,
    options: options.map(o => ({ value: o, display: o })),
    type: "meaning",
  };
}

export function buildQuestion(card, type) {
  const field = type === "pinyin" ? "pinyin" : "meaning";
  const pool = shuffle(hsk1Cards.filter(c => c[field] !== card[field])).slice(0, 3);
  const correctOpt = { pinyin: card.pinyin, meaning: card.meaning, value: card[field] };
  const wrongOpts = pool.map(c => ({ pinyin: c.pinyin, meaning: c.meaning, value: c[field] }));
  const options = shuffle([correctOpt, ...wrongOpts]);
  return {
    prompt: card.char,
    label: type === "pinyin" ? "What is the pinyin?" : "What is the meaning?",
    answer: card[field],
    options,
    type,
  };
}
