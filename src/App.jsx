import { useState, useEffect } from "react";

const hsk1Cards = [
  { char: "爱", pinyin: "ài", meaning: "love; to love" },
  { char: "八", pinyin: "bā", meaning: "eight" },
  { char: "爸爸", pinyin: "bàba", meaning: "dad; father" },
  { char: "杯子", pinyin: "bēizi", meaning: "cup; glass" },
  { char: "北京", pinyin: "Běijīng", meaning: "Beijing" },
  { char: "本", pinyin: "běn", meaning: "measure word for books" },
  { char: "不", pinyin: "bù", meaning: "not; no" },
  { char: "不客气", pinyin: "bù kèqi", meaning: "you're welcome" },
  { char: "菜", pinyin: "cài", meaning: "dish; vegetable" },
  { char: "茶", pinyin: "chá", meaning: "tea" },
  { char: "吃", pinyin: "chī", meaning: "to eat" },
  { char: "出租车", pinyin: "chūzūchē", meaning: "taxi" },
  { char: "打电话", pinyin: "dǎ diànhuà", meaning: "to make a phone call" },
  { char: "大", pinyin: "dà", meaning: "big; large" },
  { char: "的", pinyin: "de", meaning: "possessive particle" },
  { char: "点", pinyin: "diǎn", meaning: "o'clock; point" },
  { char: "电脑", pinyin: "diànnǎo", meaning: "computer" },
  { char: "电视", pinyin: "diànshì", meaning: "television" },
  { char: "电影", pinyin: "diànyǐng", meaning: "movie; film" },
  { char: "东西", pinyin: "dōngxi", meaning: "thing; stuff" },
  { char: "都", pinyin: "dōu", meaning: "all; both" },
  { char: "读", pinyin: "dú", meaning: "to read; to study" },
  { char: "对不起", pinyin: "duìbuqǐ", meaning: "sorry; excuse me" },
  { char: "多", pinyin: "duō", meaning: "many; much; more" },
  { char: "多少", pinyin: "duōshǎo", meaning: "how many; how much" },
  { char: "儿子", pinyin: "érzi", meaning: "son" },
  { char: "二", pinyin: "èr", meaning: "two" },
  { char: "饭店", pinyin: "fàndiàn", meaning: "hotel; restaurant" },
  { char: "飞机", pinyin: "fēijī", meaning: "airplane" },
  { char: "分钟", pinyin: "fēnzhōng", meaning: "minute" },
  { char: "高兴", pinyin: "gāoxìng", meaning: "happy; glad" },
  { char: "个", pinyin: "gè", meaning: "general measure word" },
  { char: "工作", pinyin: "gōngzuò", meaning: "work; job" },
  { char: "狗", pinyin: "gǒu", meaning: "dog" },
  { char: "汉语", pinyin: "Hànyǔ", meaning: "Chinese language" },
  { char: "好", pinyin: "hǎo", meaning: "good; well" },
  { char: "号", pinyin: "hào", meaning: "number; date" },
  { char: "喝", pinyin: "hē", meaning: "to drink" },
  { char: "和", pinyin: "hé", meaning: "and; with" },
  { char: "很", pinyin: "hěn", meaning: "very; quite" },
  { char: "后面", pinyin: "hòumiàn", meaning: "behind; at the back" },
  { char: "回", pinyin: "huí", meaning: "to return; to go back" },
  { char: "会", pinyin: "huì", meaning: "can; to be able to" },
  { char: "几", pinyin: "jǐ", meaning: "how many; several" },
  { char: "家", pinyin: "jiā", meaning: "home; family" },
  { char: "叫", pinyin: "jiào", meaning: "to be called; to call" },
  { char: "今天", pinyin: "jīntiān", meaning: "today" },
  { char: "九", pinyin: "jiǔ", meaning: "nine" },
  { char: "开", pinyin: "kāi", meaning: "to open; to drive" },
  { char: "看", pinyin: "kàn", meaning: "to look; to watch; to read" },
  { char: "看见", pinyin: "kànjiàn", meaning: "to see; to catch sight of" },
  { char: "块", pinyin: "kuài", meaning: "yuan (money); piece" },
  { char: "来", pinyin: "lái", meaning: "to come" },
  { char: "老师", pinyin: "lǎoshī", meaning: "teacher" },
  { char: "了", pinyin: "le", meaning: "completed action particle" },
  { char: "冷", pinyin: "lěng", meaning: "cold" },
  { char: "里", pinyin: "lǐ", meaning: "inside; within" },
  { char: "六", pinyin: "liù", meaning: "six" },
  { char: "妈妈", pinyin: "māma", meaning: "mom; mother" },
  { char: "买", pinyin: "mǎi", meaning: "to buy" },
  { char: "猫", pinyin: "māo", meaning: "cat" },
  { char: "没关系", pinyin: "méi guānxi", meaning: "it doesn't matter; never mind" },
  { char: "没有", pinyin: "méiyǒu", meaning: "don't have; there is not" },
  { char: "米饭", pinyin: "mǐfàn", meaning: "cooked rice" },
  { char: "明天", pinyin: "míngtiān", meaning: "tomorrow" },
  { char: "名字", pinyin: "míngzi", meaning: "name" },
  { char: "哪", pinyin: "nǎ", meaning: "which" },
  { char: "哪儿", pinyin: "nǎr", meaning: "where" },
  { char: "那", pinyin: "nà", meaning: "that" },
  { char: "呢", pinyin: "ne", meaning: "question particle" },
  { char: "能", pinyin: "néng", meaning: "can; to be able to" },
  { char: "你", pinyin: "nǐ", meaning: "you" },
  { char: "你好", pinyin: "nǐ hǎo", meaning: "hello" },
  { char: "年", pinyin: "nián", meaning: "year" },
  { char: "女儿", pinyin: "nǚér", meaning: "daughter" },
  { char: "朋友", pinyin: "péngyou", meaning: "friend" },
  { char: "漂亮", pinyin: "piàoliang", meaning: "beautiful; pretty" },
  { char: "苹果", pinyin: "píngguǒ", meaning: "apple" },
  { char: "七", pinyin: "qī", meaning: "seven" },
  { char: "钱", pinyin: "qián", meaning: "money" },
  { char: "前面", pinyin: "qiánmiàn", meaning: "in front; ahead" },
  { char: "请", pinyin: "qǐng", meaning: "please; to invite" },
  { char: "去", pinyin: "qù", meaning: "to go" },
  { char: "热", pinyin: "rè", meaning: "hot" },
  { char: "人", pinyin: "rén", meaning: "person; people" },
  { char: "认识", pinyin: "rènshi", meaning: "to know; to recognize" },
  { char: "日", pinyin: "rì", meaning: "day; sun" },
  { char: "三", pinyin: "sān", meaning: "three" },
  { char: "商店", pinyin: "shāngdiàn", meaning: "shop; store" },
  { char: "上", pinyin: "shàng", meaning: "up; above; on" },
  { char: "上午", pinyin: "shàngwǔ", meaning: "morning; AM" },
  { char: "少", pinyin: "shǎo", meaning: "few; little; less" },
  { char: "谁", pinyin: "shéi", meaning: "who" },
  { char: "什么", pinyin: "shénme", meaning: "what" },
  { char: "十", pinyin: "shí", meaning: "ten" },
  { char: "时候", pinyin: "shíhou", meaning: "time; moment; when" },
  { char: "是", pinyin: "shì", meaning: "to be; is; am; are" },
  { char: "书", pinyin: "shū", meaning: "book" },
  { char: "水", pinyin: "shuǐ", meaning: "water" },
  { char: "水果", pinyin: "shuǐguǒ", meaning: "fruit" },
  { char: "睡觉", pinyin: "shuìjiào", meaning: "to sleep" },
  { char: "说", pinyin: "shuō", meaning: "to say; to speak" },
  { char: "四", pinyin: "sì", meaning: "four" },
  { char: "岁", pinyin: "suì", meaning: "years old; age" },
  { char: "他", pinyin: "tā", meaning: "he; him" },
  { char: "她", pinyin: "tā", meaning: "she; her" },
  { char: "太", pinyin: "tài", meaning: "too; extremely" },
  { char: "天气", pinyin: "tiānqì", meaning: "weather" },
  { char: "听", pinyin: "tīng", meaning: "to listen; to hear" },
  { char: "同学", pinyin: "tóngxué", meaning: "classmate" },
  { char: "喂", pinyin: "wèi", meaning: "hello (on phone); hey" },
  { char: "我", pinyin: "wǒ", meaning: "I; me" },
  { char: "我们", pinyin: "wǒmen", meaning: "we; us" },
  { char: "五", pinyin: "wǔ", meaning: "five" },
  { char: "下", pinyin: "xià", meaning: "down; below; under; next" },
  { char: "下午", pinyin: "xiàwǔ", meaning: "afternoon; PM" },
  { char: "下雨", pinyin: "xià yǔ", meaning: "to rain" },
  { char: "先生", pinyin: "xiānsheng", meaning: "Mr.; sir; husband" },
  { char: "现在", pinyin: "xiànzài", meaning: "now; currently" },
  { char: "想", pinyin: "xiǎng", meaning: "to want; to think; to miss" },
  { char: "小", pinyin: "xiǎo", meaning: "small; little" },
  { char: "小姐", pinyin: "xiǎojiě", meaning: "Miss; young lady" },
  { char: "写", pinyin: "xiě", meaning: "to write" },
  { char: "谢谢", pinyin: "xièxie", meaning: "thank you" },
  { char: "星期", pinyin: "xīngqī", meaning: "week; weekday" },
  { char: "学生", pinyin: "xuésheng", meaning: "student" },
  { char: "学习", pinyin: "xuéxí", meaning: "to study; to learn" },
  { char: "学校", pinyin: "xuéxiào", meaning: "school" },
  { char: "一", pinyin: "yī", meaning: "one" },
  { char: "一些", pinyin: "yīxiē", meaning: "some; a few" },
  { char: "衣服", pinyin: "yīfu", meaning: "clothes; clothing" },
  { char: "医生", pinyin: "yīshēng", meaning: "doctor; physician" },
  { char: "医院", pinyin: "yīyuàn", meaning: "hospital" },
  { char: "椅子", pinyin: "yǐzi", meaning: "chair" },
  { char: "有", pinyin: "yǒu", meaning: "to have; there is/are" },
  { char: "月", pinyin: "yuè", meaning: "month; moon" },
  { char: "再见", pinyin: "zàijiàn", meaning: "goodbye; see you" },
  { char: "在", pinyin: "zài", meaning: "at; in; on; to be" },
  { char: "怎么", pinyin: "zěnme", meaning: "how; why" },
  { char: "怎么样", pinyin: "zěnmeyàng", meaning: "how is it? what about?" },
  { char: "这", pinyin: "zhè", meaning: "this" },
  { char: "中国", pinyin: "Zhōngguó", meaning: "China" },
  { char: "中午", pinyin: "zhōngwǔ", meaning: "noon; midday" },
  { char: "住", pinyin: "zhù", meaning: "to live; to stay" },
  { char: "字", pinyin: "zì", meaning: "character; word" },
  { char: "走", pinyin: "zǒu", meaning: "to walk; to go; to leave" },
  { char: "坐", pinyin: "zuò", meaning: "to sit; to travel by" },
  { char: "做", pinyin: "zuò", meaning: "to do; to make" },
  { char: "左边", pinyin: "zuǒbiān", meaning: "left side" },
  { char: "右边", pinyin: "yòubiān", meaning: "right side" },
  { char: "上边", pinyin: "shàngbiān", meaning: "upper side; above" },
  { char: "下边", pinyin: "xiàbiān", meaning: "lower side; below" },
  { char: "旁边", pinyin: "pángbiān", meaning: "beside; next to" },
  { char: "百", pinyin: "bǎi", meaning: "hundred" },
  { char: "零", pinyin: "líng", meaning: "zero" },
  { char: "两", pinyin: "liǎng", meaning: "two (of something)" },
  { char: "半", pinyin: "bàn", meaning: "half" },
];

// 16 fixed sets of 10 cards (index 16 = random, generated fresh each time)
const QUIZ_SETS = Array.from({ length: 16 }, (_, si) =>
  Array.from({ length: 10 }, (_, qi) => hsk1Cards[(si * 10 + qi) % hsk1Cards.length])
);
const RANDOM_SET_IDX = 16;
function getRandomSet() {
  const a = [...hsk1Cards];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a.slice(0, 10);
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildQuestion(card, type) {
  const field = type === "pinyin" ? "pinyin" : "meaning";
  const pool = shuffle(hsk1Cards.filter(c => c[field] !== card[field])).slice(0, 3);
  // Each option carries both pinyin + meaning so we can display both
  const correctOpt = { pinyin: card.pinyin, meaning: card.meaning, value: card[field] };
  const wrongOpts = pool.map(c => ({ pinyin: c.pinyin, meaning: c.meaning, value: c[field] }));
  const options = shuffle([correctOpt, ...wrongOpts]);
  return { prompt: card.char, label: type === "pinyin" ? "What is the pinyin?" : "What is the meaning?", answer: card[field], options, type };
}

const GOLD = "#f5c842"; const ORANGE = "#ff8c42";
const BG = { minHeight: "100vh", width: "100%", boxSizing: "border-box", background: "linear-gradient(135deg,#0f0c29,#302b63,#24243e)", display: "flex", flexDirection: "column", alignItems: "center", fontFamily: "'Noto Serif',Georgia,serif", padding: "28px 20px 40px", position: "relative", overflowX: "hidden", overflowY: "auto" };
const BLOB1 = { position: "absolute", width: 300, height: 300, borderRadius: "50%", background: "rgba(255,180,50,0.07)", top: -80, right: -80, filter: "blur(60px)", pointerEvents: "none" };
const BLOB2 = { position: "absolute", width: 250, height: 250, borderRadius: "50%", background: "rgba(100,150,255,0.09)", bottom: -60, left: -60, filter: "blur(50px)", pointerEvents: "none" };

function ModeToggle({ current, onFlash, onQuiz }) {
  return (
    <div style={{ display: "flex", gap: 8, marginBottom: 24, zIndex: 1 }}>
      <button onClick={onFlash} style={{ padding: "7px 20px", borderRadius: 99, background: current === "flash" ? `linear-gradient(135deg,${GOLD},${ORANGE})` : "rgba(255,255,255,0.06)", border: current === "flash" ? "none" : "1px solid rgba(255,255,255,0.15)", color: current === "flash" ? "#1a1500" : "rgba(255,255,255,0.6)", fontSize: 12, fontWeight: 700, letterSpacing: 1, cursor: "pointer" }}>FLASHCARDS</button>
      <button onClick={onQuiz} style={{ padding: "7px 20px", borderRadius: 99, background: current === "quiz" ? `linear-gradient(135deg,${GOLD},${ORANGE})` : "rgba(255,255,255,0.06)", border: current === "quiz" ? "none" : "1px solid rgba(255,255,255,0.15)", color: current === "quiz" ? "#1a1500" : "rgba(255,255,255,0.6)", fontSize: 12, fontWeight: 700, letterSpacing: 1, cursor: "pointer" }}>QUIZ</button>
    </div>
  );
}

// ── FLASHCARD SET SELECTOR ──────────────────────────────────────────────────
function FlashSetSelector({ onSelect, onGoQuiz, flashProgress, flashDone }) {
  return (
    <div style={BG}>
      <div style={BLOB1} /><div style={BLOB2} />
      <div style={{ textAlign: "center", marginBottom: 20, zIndex: 1 }}>
        <h1 style={{ color: GOLD, fontSize: 26, fontWeight: 700, letterSpacing: 2, margin: 0 }}>HSK 1 · 汉字</h1>
        <p style={{ color: "rgba(255,255,255,0.38)", fontSize: 12, marginTop: 5 }}>16 sets · 10 cards each · tap to reveal</p>
      </div>
      <ModeToggle current="flash" onFlash={() => {}} onQuiz={onGoQuiz} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10, width: "100%", maxWidth: 440, zIndex: 1 }}>
        {QUIZ_SETS.map((set, i) => {
          const done = flashDone[i];
          const prog = flashProgress[i];
          const inProgress = !done && prog > 0;
          return (
            <button key={i} onClick={() => onSelect(i)} style={{ borderRadius: 14, padding: "14px 6px", background: done ? "rgba(74,222,128,0.1)" : inProgress ? "rgba(245,200,66,0.08)" : "rgba(255,255,255,0.05)", border: `1px solid ${done ? "rgba(74,222,128,0.4)" : inProgress ? "rgba(245,200,66,0.3)" : "rgba(255,255,255,0.11)"}`, color: "#fff", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 4, transition: "all 0.18s", position: "relative" }}
              onMouseEnter={e => e.currentTarget.style.opacity = "0.8"}
              onMouseLeave={e => e.currentTarget.style.opacity = "1"}
            >
              <span style={{ fontSize: 13, fontWeight: 700, color: done ? "#4ade80" : inProgress ? GOLD : "rgba(255,255,255,0.8)" }}>Set {i + 1}</span>
              <span style={{ fontSize: 18, color: done ? "rgba(74,222,128,0.6)" : "rgba(255,255,255,0.35)" }}>{set[0].char}</span>
              {done && <span style={{ fontSize: 10, color: "#4ade80", fontWeight: 700 }}>✓ Done</span>}
              {inProgress && <span style={{ fontSize: 10, color: GOLD }}>{prog + 1}/10</span>}
            </button>
          );
        })}
        <button onClick={() => onSelect(RANDOM_SET_IDX)} style={{ borderRadius: 14, padding: "14px 6px", background: "linear-gradient(135deg,rgba(100,150,255,0.15),rgba(180,100,255,0.15))", border: "1px solid rgba(150,130,255,0.4)", color: "#fff", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 5, transition: "all 0.18s" }}
          onMouseEnter={e => e.currentTarget.style.opacity = "0.8"}
          onMouseLeave={e => e.currentTarget.style.opacity = "1"}
        >
          <span style={{ fontSize: 13, fontWeight: 700, color: "#c4b5fd" }}>Random</span>
          <span style={{ fontSize: 20 }}>🎲</span>
        </button>
      </div>
      <p style={{ color: "rgba(255,255,255,0.18)", fontSize: 11, marginTop: 24, zIndex: 1, letterSpacing: 1 }}>
        {Object.keys(flashDone).length}/16 sets completed
      </p>
    </div>
  );
}

// ── FLASHCARD MODE ──────────────────────────────────────────────────────────
function FlashcardMode({ setIdx, customCards, initialIndex, onProgress, onBack, onGoQuiz }) {
  const [cards] = useState(() => customCards || (setIdx === RANDOM_SET_IDX ? getRandomSet() : QUIZ_SETS[setIdx]));
  const [index, setIndex] = useState(initialIndex || 0);
  const [flipped, setFlipped] = useState(false);
  const [dir, setDir] = useState(null);
  const total = cards.length;
  const card = cards[index];

  const go = (d) => {
    setDir(d); setFlipped(false);
    setTimeout(() => {
      setIndex(p => {
        const next = d === "next" ? (p + 1) % total : (p - 1 + total) % total;
        onProgress && onProgress(setIdx, next, total);
        return next;
      });
      setDir(null);
    }, 200);
  };

  return (
    <div style={BG}>
      <div style={BLOB1} /><div style={BLOB2} />
      <div style={{ display: "flex", alignItems: "center", width: "100%", maxWidth: 440, marginBottom: 18, zIndex: 1, gap: 12 }}>
        <button onClick={onBack} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.5)", fontSize: 22, cursor: "pointer", padding: 0, lineHeight: 1 }}>←</button>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
            <span style={{ color: GOLD, fontSize: 13, fontWeight: 700 }}>{setIdx === RANDOM_SET_IDX ? "🎲 Random" : `Set ${setIdx + 1}`}</span>
            <span style={{ color: "rgba(255,255,255,0.42)", fontSize: 12 }}>{index + 1} / {total}</span>
          </div>
          <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: 99, height: 5, overflow: "hidden" }}>
            <div style={{ width: `${((index + 1) / total) * 100}%`, height: "100%", background: `linear-gradient(90deg,${GOLD},${ORANGE})`, borderRadius: 99, transition: "width 0.4s" }} />
          </div>
        </div>
        <button onClick={onGoQuiz} style={{ padding: "6px 14px", borderRadius: 99, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.55)", fontSize: 11, fontWeight: 700, letterSpacing: 1, cursor: "pointer" }}>QUIZ</button>
      </div>
      <p style={{ color: "rgba(255,255,255,0.38)", fontSize: 12, marginBottom: 14, zIndex: 1 }}>Tap card to reveal meaning</p>
      <div onClick={() => setFlipped(f => !f)} style={{ width: "100%", maxWidth: 440, height: 240, perspective: "1000px", cursor: "pointer", marginBottom: 30, zIndex: 1, opacity: dir ? 0 : 1, transform: dir === "next" ? "translateX(-28px)" : dir === "prev" ? "translateX(28px)" : "none", transition: "opacity 0.2s, transform 0.2s" }}>
        <div style={{ position: "relative", width: "100%", height: "100%", transformStyle: "preserve-3d", transition: "transform 0.55s cubic-bezier(.4,.2,.2,1)", transform: flipped ? "rotateY(180deg)" : "rotateY(0)" }}>
          <div style={{ position: "absolute", inset: 0, backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", background: "linear-gradient(145deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))", border: "1px solid rgba(245,200,66,0.25)", borderRadius: 24, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10, boxShadow: "0 8px 48px rgba(0,0,0,0.4)" }}>
            <span style={{ fontSize: 82, lineHeight: 1, color: "#fff", textShadow: "0 4px 24px rgba(245,200,66,0.3)" }}>{card.char}</span>
            <span style={{ fontSize: 17, color: GOLD, letterSpacing: 3, fontStyle: "italic" }}>{card.pinyin}</span>
          </div>
          <div style={{ position: "absolute", inset: 0, backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", transform: "rotateY(180deg)", background: "linear-gradient(145deg,rgba(245,200,66,0.12),rgba(245,200,66,0.04))", border: "1px solid rgba(245,200,66,0.5)", borderRadius: 24, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12, padding: 28 }}>
            <span style={{ fontSize: 36, color: "rgba(255,255,255,0.2)" }}>{card.char}</span>
            <span style={{ fontSize: 22, color: "#fff", fontWeight: 600, textAlign: "center", lineHeight: 1.4 }}>{card.meaning}</span>
            <span style={{ fontSize: 14, color: GOLD, letterSpacing: 3, fontStyle: "italic" }}>{card.pinyin}</span>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", gap: 18, alignItems: "center", zIndex: 1 }}>
        <button onClick={() => go("prev")} style={{ width: 52, height: 52, borderRadius: "50%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", fontSize: 20, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>←</button>
        <button onClick={() => setFlipped(f => !f)} style={{ padding: "11px 28px", borderRadius: 99, background: `linear-gradient(135deg,${GOLD},${ORANGE})`, border: "none", color: "#1a1500", fontSize: 13, fontWeight: 700, letterSpacing: 1, cursor: "pointer" }}>{flipped ? "HIDE" : "REVEAL"}</button>
        <button onClick={() => go("next")} style={{ width: 52, height: 52, borderRadius: "50%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", fontSize: 20, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>→</button>
      </div>
      <p style={{ color: "rgba(255,255,255,0.18)", fontSize: 11, marginTop: 24, zIndex: 1, letterSpacing: 1 }}>HSK 1 · {setIdx === RANDOM_SET_IDX ? "Random Mix" : `Set ${setIdx + 1} of 16`}</p>
    </div>
  );
}

// ── QUIZ SET SELECTOR ───────────────────────────────────────────────────────
function QuizSetSelector({ onSelect, onGoFlash, scores }) {
  return (
    <div style={BG}>
      <div style={BLOB1} /><div style={BLOB2} />
      <div style={{ textAlign: "center", marginBottom: 20, zIndex: 1 }}>
        <h1 style={{ color: GOLD, fontSize: 26, fontWeight: 700, letterSpacing: 2, margin: 0 }}>HSK 1 · Quiz</h1>
        <p style={{ color: "rgba(255,255,255,0.38)", fontSize: 12, marginTop: 5 }}>16 sets · 10 questions each · pinyin & meaning</p>
      </div>
      <ModeToggle current="quiz" onFlash={onGoFlash} onQuiz={() => {}} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10, width: "100%", maxWidth: 440, zIndex: 1 }}>
        {QUIZ_SETS.map((set, i) => {
          const sc = scores[i]; const done = sc != null;
          const col = done ? (sc === 10 ? "#4ade80" : sc >= 7 ? GOLD : "#f87171") : null;
          return (
            <button key={i} onClick={() => onSelect(i)} style={{ borderRadius: 14, padding: "14px 6px", background: done ? "rgba(245,200,66,0.1)" : "rgba(255,255,255,0.05)", border: `1px solid ${done ? "rgba(245,200,66,0.4)" : "rgba(255,255,255,0.11)"}`, color: "#fff", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: done ? GOLD : "rgba(255,255,255,0.8)" }}>Set {i + 1}</span>
              {done
                ? <span style={{ fontSize: 12, color: col, fontWeight: 700 }}>{sc}/10 ✓</span>
                : <span style={{ fontSize: 18, color: "rgba(255,255,255,0.35)" }}>{set[0].char}</span>}
            </button>
          );
        })}
        <button onClick={() => onSelect(RANDOM_SET_IDX)} style={{ borderRadius: 14, padding: "14px 6px", background: "linear-gradient(135deg,rgba(100,150,255,0.15),rgba(180,100,255,0.15))", border: "1px solid rgba(150,130,255,0.4)", color: "#fff", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: "#c4b5fd" }}>Random</span>
          <span style={{ fontSize: 20 }}>🎲</span>
        </button>
      </div>
      <p style={{ color: "rgba(255,255,255,0.18)", fontSize: 11, marginTop: 24, zIndex: 1, letterSpacing: 1 }}>Scores saved for this session</p>
    </div>
  );
}

// ── QUIZ QUESTION ───────────────────────────────────────────────────────────
function QuizMode({ setIdx, customCards, onBack, onFinish }) {
  const [cards] = useState(() => customCards || (setIdx === RANDOM_SET_IDX ? getRandomSet() : QUIZ_SETS[setIdx]));
  const [questions] = useState(() => shuffle(cards).map((c, i) => buildQuestion(c, i % 2 === 0 ? "pinyin" : "meaning")));
  const [qIdx, setQIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [answers, setAnswers] = useState([]);
  const q = questions[qIdx];
  const isLast = qIdx === questions.length - 1;
  const LABELS = ["A", "B", "C", "D"];

  const pick = (opt) => { if (revealed) return; setSelected(opt); setRevealed(true); };
  const next = () => {
    const na = [...answers, selected === q.answer];
    if (isLast) { onFinish(na.filter(Boolean).length, na, questions); }
    else { setAnswers(na); setQIdx(q => q + 1); setSelected(null); setRevealed(false); }
  };

  return (
    <div style={BG}>
      <div style={BLOB1} /><div style={BLOB2} />
      <div style={{ display: "flex", alignItems: "center", width: "100%", maxWidth: 440, marginBottom: 18, zIndex: 1, gap: 12 }}>
        <button onClick={onBack} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.5)", fontSize: 22, cursor: "pointer", padding: 0, lineHeight: 1 }}>←</button>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
            <span style={{ color: GOLD, fontSize: 13, fontWeight: 700 }}>{setIdx === RANDOM_SET_IDX ? "🎲 Random" : `Set ${setIdx + 1}`}</span>
            <span style={{ color: "rgba(255,255,255,0.42)", fontSize: 12 }}>{qIdx + 1} / {questions.length}</span>
          </div>
          <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: 99, height: 5, overflow: "hidden" }}>
            <div style={{ width: `${(qIdx / questions.length) * 100}%`, height: "100%", background: `linear-gradient(90deg,${GOLD},${ORANGE})`, borderRadius: 99, transition: "width 0.3s" }} />
          </div>
        </div>
      </div>
      <p style={{ color: "rgba(255,255,255,0.42)", fontSize: 12, letterSpacing: 1, marginBottom: 12, zIndex: 1 }}>{q.label}</p>
      <div style={{ width: "100%", maxWidth: 440, background: "linear-gradient(145deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))", border: "1px solid rgba(245,200,66,0.25)", borderRadius: 22, display: "flex", alignItems: "center", justifyContent: "center", height: 156, marginBottom: 22, zIndex: 1, boxShadow: "0 8px 40px rgba(0,0,0,0.35)" }}>
        <span style={{ fontSize: 86, color: "#fff", textShadow: "0 4px 24px rgba(245,200,66,0.3)", lineHeight: 1 }}>{q.prompt}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, width: "100%", maxWidth: 440, zIndex: 1 }}>
        {q.options.map((opt, i) => {
          const isCorrect = opt.value === q.answer, isChosen = opt.value === selected;
          let bg = "rgba(255,255,255,0.05)", border = "1px solid rgba(255,255,255,0.11)", lbg = "rgba(255,255,255,0.1)", tc = "#fff", tc2 = "rgba(255,255,255,0.45)";
          if (revealed) {
            if (isCorrect) { bg = "rgba(74,222,128,0.12)"; border = "1px solid rgba(74,222,128,0.5)"; lbg = "rgba(74,222,128,0.28)"; tc = "#4ade80"; tc2 = "rgba(74,222,128,0.7)"; }
            else if (isChosen) { bg = "rgba(248,113,113,0.12)"; border = "1px solid rgba(248,113,113,0.5)"; lbg = "rgba(248,113,113,0.28)"; tc = "#f87171"; tc2 = "rgba(248,113,113,0.7)"; }
          }
          return (
            <button key={i} onClick={() => pick(opt.value)} style={{ display: "flex", alignItems: "center", gap: 12, background: bg, border, borderRadius: 14, padding: "12px 16px", cursor: revealed ? "default" : "pointer", transition: "all 0.22s", textAlign: "left" }}>
              <span style={{ width: 28, height: 28, borderRadius: 8, background: lbg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: revealed && isCorrect ? "#4ade80" : revealed && isChosen && !isCorrect ? "#f87171" : GOLD, flexShrink: 0 }}>{LABELS[i]}</span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 14, color: tc, fontStyle: q.type === "pinyin" ? "italic" : "normal", letterSpacing: q.type === "pinyin" ? 1 : 0 }}>{opt.pinyin}</div>
                <div style={{ fontSize: 12, color: tc2, marginTop: 2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{opt.meaning}</div>
              </div>
              {revealed && isCorrect && <span style={{ fontSize: 16, marginLeft: "auto", flexShrink: 0 }}>✓</span>}
              {revealed && isChosen && !isCorrect && <span style={{ fontSize: 16, marginLeft: "auto", flexShrink: 0 }}>✗</span>}
            </button>
          );
        })}
      </div>
      {revealed && (
        <button onClick={next} style={{ marginTop: 22, padding: "13px 42px", borderRadius: 99, background: `linear-gradient(135deg,${GOLD},${ORANGE})`, border: "none", color: "#1a1500", fontSize: 14, fontWeight: 700, letterSpacing: 1, cursor: "pointer", boxShadow: `0 4px 20px rgba(245,200,66,0.32)`, zIndex: 1 }}>
          {isLast ? "SEE RESULTS" : "NEXT →"}
        </button>
      )}
    </div>
  );
}

// ── RANDOM PICKER ────────────────────────────────────────────────────────────
function RandomPicker({ mode, onStart, onBack }) {
  const [selected, setSelected] = useState(Array(16).fill(true));
  const toggle = (i) => setSelected(p => { const n = [...p]; n[i] = !n[i]; return n; });
  const allOn = selected.every(Boolean);
  const count = selected.filter(Boolean).length;

  function buildRandomCards() {
    const pool = [];
    selected.forEach((on, i) => { if (on) pool.push(...QUIZ_SETS[i]); });
    const a = [...pool];
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a.slice(0, 10);
  }

  return (
    <div style={BG}>
      <div style={BLOB1} /><div style={BLOB2} />
      <div style={{ display: "flex", alignItems: "center", width: "100%", maxWidth: 440, marginBottom: 20, zIndex: 1, gap: 12 }}>
        <button onClick={onBack} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.5)", fontSize: 22, cursor: "pointer", padding: 0, lineHeight: 1 }}>←</button>
        <div>
          <h2 style={{ color: GOLD, fontSize: 20, fontWeight: 700, margin: 0 }}>🎲 Random Mix</h2>
          <p style={{ color: "rgba(255,255,255,0.38)", fontSize: 12, margin: "3px 0 0" }}>Pick which sets to draw from</p>
        </div>
      </div>

      {/* Select all toggle */}
      <div style={{ width: "100%", maxWidth: 440, marginBottom: 12, zIndex: 1 }}>
        <button onClick={() => setSelected(Array(16).fill(!allOn))} style={{ padding: "7px 16px", borderRadius: 99, background: allOn ? "rgba(245,200,66,0.15)" : "rgba(255,255,255,0.06)", border: `1px solid ${allOn ? "rgba(245,200,66,0.4)" : "rgba(255,255,255,0.15)"}`, color: allOn ? GOLD : "rgba(255,255,255,0.55)", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>
          {allOn ? "Deselect All" : "Select All"}
        </button>
      </div>

      {/* Set grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10, width: "100%", maxWidth: 440, zIndex: 1, marginBottom: 24 }}>
        {QUIZ_SETS.map((set, i) => {
          const on = selected[i];
          return (
            <button key={i} onClick={() => toggle(i)} style={{ borderRadius: 14, padding: "14px 6px", background: on ? "rgba(245,200,66,0.15)" : "rgba(255,255,255,0.04)", border: `1px solid ${on ? "rgba(245,200,66,0.5)" : "rgba(255,255,255,0.1)"}`, color: "#fff", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 5, transition: "all 0.18s", position: "relative" }}>
              {on && <span style={{ position: "absolute", top: 5, right: 7, fontSize: 10, color: GOLD }}>✓</span>}
              <span style={{ fontSize: 13, fontWeight: 700, color: on ? GOLD : "rgba(255,255,255,0.5)" }}>Set {i + 1}</span>
              <span style={{ fontSize: 18, color: on ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.2)" }}>{set[0].char}</span>
            </button>
          );
        })}
      </div>

      <button
        onClick={() => { if (count > 0) onStart(buildRandomCards()); }}
        style={{ padding: "14px 40px", borderRadius: 99, background: count > 0 ? `linear-gradient(135deg,${GOLD},${ORANGE})` : "rgba(255,255,255,0.08)", border: "none", color: count > 0 ? "#1a1500" : "rgba(255,255,255,0.3)", fontSize: 14, fontWeight: 700, letterSpacing: 1, cursor: count > 0 ? "pointer" : "default", boxShadow: count > 0 ? `0 4px 20px rgba(245,200,66,0.3)` : "none", zIndex: 1, transition: "all 0.2s" }}
      >
        {count === 0 ? "Select at least 1 set" : `Start · ${count * 10} cards in pool`}
      </button>
    </div>
  );
}
function ResultsScreen({ setIdx, score, answers, questions, usedCards, onRetry, onBack }) {
  const total = answers.length;
  const pct = Math.round((score / total) * 100);
  const cards = usedCards || QUIZ_SETS[setIdx];
  const sc = pct === 100 ? "#4ade80" : pct >= 70 ? GOLD : "#f87171";
  const emoji = pct === 100 ? "🏆" : pct >= 70 ? "👏" : "💪";
  const msg = pct === 100 ? "Perfect score!" : pct >= 70 ? "Great job!" : "Keep practicing!";

  return (
    <div style={BG}>
      <div style={BLOB1} /><div style={BLOB2} />
      <div style={{ textAlign: "center", marginBottom: 24, zIndex: 1 }}>
        <div style={{ fontSize: 50 }}>{emoji}</div>
        <h2 style={{ color: "#fff", fontSize: 22, fontWeight: 700, margin: "8px 0 4px" }}>{msg}</h2>
        <p style={{ color: "rgba(255,255,255,0.38)", fontSize: 13 }}>{setIdx === RANDOM_SET_IDX ? "🎲 Random Mix Results" : `Set ${setIdx + 1} Results`}</p>
        <div style={{ fontSize: 52, fontWeight: 800, color: sc, textShadow: `0 0 30px ${sc}55`, marginTop: 8 }}>
          {score}<span style={{ fontSize: 24, color: "rgba(255,255,255,0.28)" }}>/{total}</span>
        </div>
      </div>
      <div style={{ width: "100%", maxWidth: 440, display: "flex", flexDirection: "column", gap: 8, zIndex: 1, marginBottom: 24 }}>
        {answers.map((ok, i) => {
          const q = questions[i];
          const type = q.type === "pinyin" ? "Pinyin" : "Meaning";
          const val = q.answer;
          return (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, background: ok ? "rgba(74,222,128,0.07)" : "rgba(248,113,113,0.07)", border: `1px solid ${ok ? "rgba(74,222,128,0.22)" : "rgba(248,113,113,0.22)"}`, borderRadius: 12, padding: "10px 14px" }}>
              <span style={{ fontSize: 26, lineHeight: 1, color: "#fff" }}>{q.prompt}</span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", marginBottom: 2, letterSpacing: 1 }}>{type.toUpperCase()}</div>
                <div style={{ fontSize: 13, color: "#fff", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{val}</div>
              </div>
              <span style={{ fontSize: 17, color: ok ? "#4ade80" : "#f87171" }}>{ok ? "✓" : "✗"}</span>
            </div>
          );
        })}
      </div>
      <div style={{ display: "flex", gap: 12, zIndex: 1 }}>
        <button onClick={onBack} style={{ padding: "12px 22px", borderRadius: 99, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>ALL SETS</button>
        <button onClick={onRetry} style={{ padding: "12px 30px", borderRadius: 99, background: `linear-gradient(135deg,${GOLD},${ORANGE})`, border: "none", color: "#fff", fontSize: 13, fontWeight: 700, cursor: "pointer", boxShadow: `0 4px 20px rgba(245,200,66,0.3)` }}>RETRY ↺</button>
      </div>
    </div>
  );
}

// ── LOCAL STORAGE HELPERS ─────────────────────────────────────────────────────
const LS_FLASH_PROGRESS = "hsk1_flash_progress";   // {setIdx: cardIndex}
const LS_FLASH_DONE     = "hsk1_flash_done";        // {setIdx: true}
const LS_QUIZ_SCORES    = "hsk1_quiz_scores";       // [score, ...]

function lsGet(key, fallback) {
  try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch { return fallback; }
}
function lsSet(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
}

// ── ROOT ─────────────────────────────────────────────────────────────────────
export default function App() {
  const [screen, setScreenState] = useState("flashSelect");
  const [activeSet, setActiveSet] = useState(null);
  const [randomCards, setRandomCards] = useState(null);
  const [randomMode, setRandomMode] = useState(null);
  const [quizResult, setQuizResult] = useState(null);
  const [quizCards, setQuizCards] = useState(null);
  const [quizQuestions, setQuizQuestions] = useState(null);

  const [setScores, setSetScores] = useState(() => lsGet(LS_QUIZ_SCORES, Array(16).fill(null)));
  const [flashProgress, setFlashProgress] = useState(() => lsGet(LS_FLASH_PROGRESS, {}));
  const [flashDone, setFlashDone] = useState(() => lsGet(LS_FLASH_DONE, {}));

  // Push a new history entry whenever screen changes
  const setScreen = (newScreen) => {
    window.history.pushState({ screen: newScreen }, "", "");
    setScreenState(newScreen);
  };

  // Handle phone/browser back button
  useEffect(() => {
    const onPop = () => {
      const s = window.history.state?.screen;
      if (s) setScreenState(s);
      else setScreenState("flashSelect");
    };
    window.addEventListener("popstate", onPop);
    // Set initial history entry so first back press doesn't leave the app
    window.history.replaceState({ screen: "flashSelect" }, "", "");
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const markFlashProgress = (setIdx, cardIndex, total) => {
    if (setIdx === RANDOM_SET_IDX) return;
    const done = cardIndex === total - 1;
    setFlashProgress(prev => { const n = { ...prev, [setIdx]: cardIndex }; lsSet(LS_FLASH_PROGRESS, n); return n; });
    if (done) setFlashDone(prev => { const n = { ...prev, [setIdx]: true }; lsSet(LS_FLASH_DONE, n); return n; });
  };

  const finishQuiz = (score, answers, questions) => {
    setQuizResult({ score, answers });
    setQuizQuestions(questions);
    if (activeSet !== RANDOM_SET_IDX) {
      setSetScores(prev => {
        const n = [...prev]; n[activeSet] = score;
        lsSet(LS_QUIZ_SCORES, n);
        return n;
      });
    }
    setScreen("results");
  };

  const handleFlashSelect = (i) => {
    if (i === RANDOM_SET_IDX) { setRandomMode("flash"); setScreen("randomPicker"); }
    else { setActiveSet(i); setRandomCards(null); setScreen("flash"); }
  };

  const handleQuizSelect = (i) => {
    if (i === RANDOM_SET_IDX) { setRandomMode("quiz"); setScreen("randomPicker"); }
    else { setActiveSet(i); setRandomCards(null); setScreen("quiz"); }
  };

  const handleRandomStart = (cards) => {
    setActiveSet(RANDOM_SET_IDX);
    setRandomCards(cards);
    setQuizCards(cards);
    setScreen(randomMode === "flash" ? "flash" : "quiz");
  };

  if (screen === "flashSelect") return <FlashSetSelector onSelect={handleFlashSelect} onGoQuiz={() => setScreen("quizSelect")} flashProgress={flashProgress} flashDone={flashDone} />;
  if (screen === "randomPicker") return <RandomPicker mode={randomMode} onStart={handleRandomStart} onBack={() => setScreen(randomMode === "flash" ? "flashSelect" : "quizSelect")} />;
  if (screen === "flash") return <FlashcardMode key={`flash-${activeSet}`} setIdx={activeSet} customCards={activeSet === RANDOM_SET_IDX ? randomCards : null} initialIndex={flashProgress[activeSet] || 0} onProgress={markFlashProgress} onBack={() => setScreen("flashSelect")} onGoQuiz={() => setScreen("quizSelect")} />;
  if (screen === "quizSelect") return <QuizSetSelector scores={setScores} onSelect={handleQuizSelect} onGoFlash={() => setScreen("flashSelect")} />;
  if (screen === "quiz") return <QuizMode key={`quiz-${activeSet}-${Date.now()}`} setIdx={activeSet} customCards={quizCards} onBack={() => setScreen("quizSelect")} onFinish={finishQuiz} />;
  if (screen === "results") return <ResultsScreen setIdx={activeSet} score={quizResult.score} answers={quizResult.answers} questions={quizQuestions} usedCards={quizCards} onRetry={() => setScreen("quiz")} onBack={() => setScreen("quizSelect")} />;
}
