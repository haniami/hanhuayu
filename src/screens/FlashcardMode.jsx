import { useState } from "react";
import { GOLD, ORANGE, BG, BLOB1, BLOB2, MAX } from "../constants/theme";
import { RANDOM_SET_IDX } from "../constants/quiz";
import { QUIZ_SETS } from "../data/quizSets";
import { getRandomSet } from "../utils/quiz";
import { BackBtn } from "../components/BackBtn";
import { TabBar } from "../components/TabBar";
import { ProgressRow } from "../components/ProgressRow";

export function FlashcardMode({ setIdx, customCards, initialIndex, onProgress, onBack, onGoConv, onGoQuiz }) {
  const [cards] = useState(()=>customCards||(setIdx===RANDOM_SET_IDX?getRandomSet():QUIZ_SETS[setIdx]));
  const [index, setIndex] = useState(initialIndex||0);
  const [flipped, setFlipped] = useState(false);
  const [dir, setDir] = useState(null);
  const total=cards.length; const card=cards[index];
  const go=(d)=>{ setDir(d); setFlipped(false); setTimeout(()=>{ setIndex(p=>{ const next=d==="next"?(p+1)%total:(p-1+total)%total; onProgress&&onProgress(setIdx,next,total); return next; }); setDir(null); },200); };
  const label = setIdx===RANDOM_SET_IDX?"🎲 Random":`Set ${setIdx+1}`;
  return (
    <div style={BG}>
      <div style={BLOB1}/><div style={BLOB2}/>
      <div style={{ display:"flex", alignItems:"center", width:"100%", maxWidth:MAX, marginBottom:12, zIndex:1, gap:10 }}>
        <BackBtn onClick={onBack} label="Sets"/>
        <div style={{ flex:1 }}><ProgressRow label={label} current={index+1} total={total} accent={GOLD}/></div>
      </div>
      <TabBar current="flash" onFlash={onBack} onConv={onGoConv} onQuiz={onGoQuiz}/>
      <p style={{ color:"rgba(255,255,255,0.38)", fontSize:12, marginBottom:10, zIndex:1 }}>Tap card to reveal</p>
      <div onClick={()=>setFlipped(f=>!f)} style={{ width:"100%", maxWidth:MAX, height:200, perspective:"1000px", cursor:"pointer", marginBottom:22, zIndex:1, opacity:dir?0:1, transform:dir==="next"?"translateX(-22px)":dir==="prev"?"translateX(22px)":"none", transition:"opacity 0.2s,transform 0.2s" }}>
        <div style={{ position:"relative", width:"100%", height:"100%", transformStyle:"preserve-3d", transition:"transform 0.55s cubic-bezier(.4,.2,.2,1)", transform:flipped?"rotateY(180deg)":"rotateY(0)" }}>
          <div style={{ position:"absolute", inset:0, backfaceVisibility:"hidden", WebkitBackfaceVisibility:"hidden", background:"linear-gradient(145deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))", border:"1px solid rgba(245,200,66,0.25)", borderRadius:20, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:8, boxShadow:"0 8px 40px rgba(0,0,0,0.4)" }}>
            <span style={{ fontSize:72, lineHeight:1, color:"#fff", textShadow:"0 4px 24px rgba(245,200,66,0.3)" }}>{card.char}</span>
            <span style={{ fontSize:15, color:GOLD, letterSpacing:3, fontStyle:"italic" }}>{card.pinyin}</span>
          </div>
          <div style={{ position:"absolute", inset:0, backfaceVisibility:"hidden", WebkitBackfaceVisibility:"hidden", transform:"rotateY(180deg)", background:"linear-gradient(145deg,rgba(245,200,66,0.12),rgba(245,200,66,0.03))", border:"1px solid rgba(245,200,66,0.5)", borderRadius:20, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:10, padding:20 }}>
            <span style={{ fontSize:28, color:"rgba(255,255,255,0.18)" }}>{card.char}</span>
            <span style={{ fontSize:20, color:"#fff", fontWeight:600, textAlign:"center", lineHeight:1.4 }}>{card.meaning}</span>
            <span style={{ fontSize:13, color:GOLD, letterSpacing:3, fontStyle:"italic" }}>{card.pinyin}</span>
          </div>
        </div>
      </div>
      <div style={{ display:"flex", gap:12, alignItems:"center", zIndex:1, width:"100%", maxWidth:MAX, justifyContent:"center" }}>
        <button onClick={()=>go("prev")} style={{ width:48, height:48, borderRadius:"50%", background:"rgba(255,255,255,0.07)", border:"1px solid rgba(255,255,255,0.15)", color:"#fff", fontSize:18, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>←</button>
        <button onClick={()=>setFlipped(f=>!f)} style={{ flex:1, maxWidth:180, padding:"12px 0", borderRadius:99, background:`linear-gradient(135deg,${GOLD},${ORANGE})`, border:"none", color:"#1a1500", fontSize:13, fontWeight:700, cursor:"pointer" }}>{flipped?"HIDE":"REVEAL"}</button>
        <button onClick={()=>go("next")} style={{ width:48, height:48, borderRadius:"50%", background:"rgba(255,255,255,0.07)", border:"1px solid rgba(255,255,255,0.15)", color:"#fff", fontSize:18, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>→</button>
      </div>
    </div>
  );
}
