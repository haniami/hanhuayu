import { GOLD, BG, BLOB1, BLOB2, MAX } from "../constants/theme";
import { RANDOM_SET_IDX } from "../constants/quiz";
import { QUIZ_SETS } from "../data/quizSets";
import { TabBar } from "../components/TabBar";

export function FlashSetSelector({ onSelect, onGoConv, onGoQuiz, flashProgress, flashDone }) {
  return (
    <div style={BG}>
      <div style={BLOB1}/><div style={BLOB2}/>
      <div style={{ textAlign:"center", marginBottom:12, zIndex:1 }}>
        <h1 style={{ color:GOLD, fontSize:22, fontWeight:700, letterSpacing:2, margin:0 }}>HSK 1 · 汉字</h1>
        <p style={{ color:"rgba(255,255,255,0.38)", fontSize:12, marginTop:4 }}>16 sets · 10 cards each</p>
      </div>
      <TabBar current="flash" onFlash={()=>{}} onConv={onGoConv} onQuiz={onGoQuiz}/>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:8, width:"100%", maxWidth:MAX, zIndex:1 }}>
        {QUIZ_SETS.map((set,i) => {
          const done=flashDone[i]; const prog=flashProgress[i]; const inProg=!done&&prog>0;
          return (
            <button key={i} onClick={()=>onSelect(i)} style={{ borderRadius:14, padding:"12px 4px", background:done?"rgba(74,222,128,0.1)":inProg?"rgba(245,200,66,0.08)":"rgba(255,255,255,0.05)", border:`1px solid ${done?"rgba(74,222,128,0.4)":inProg?"rgba(245,200,66,0.3)":"rgba(255,255,255,0.11)"}`, color:"#fff", cursor:"pointer", display:"flex", flexDirection:"column", alignItems:"center", gap:3 }}>
              <span style={{ fontSize:12, fontWeight:700, color:done?"#4ade80":inProg?GOLD:"rgba(255,255,255,0.8)" }}>Set {i+1}</span>
              <span style={{ fontSize:17, color:done?"rgba(74,222,128,0.6)":"rgba(255,255,255,0.35)" }}>{set[0].char}</span>
              {done&&<span style={{ fontSize:8, color:"#4ade80", fontWeight:700 }}>✓ Done</span>}
              {inProg&&<span style={{ fontSize:8, color:GOLD }}>{prog+1}/10</span>}
            </button>
          );
        })}
        <button onClick={()=>onSelect(RANDOM_SET_IDX)} style={{ borderRadius:14, padding:"12px 4px", background:"linear-gradient(135deg,rgba(100,150,255,0.15),rgba(180,100,255,0.15))", border:"1px solid rgba(150,130,255,0.4)", color:"#fff", cursor:"pointer", display:"flex", flexDirection:"column", alignItems:"center", gap:3 }}>
          <span style={{ fontSize:12, fontWeight:700, color:"#c4b5fd" }}>Random</span>
          <span style={{ fontSize:20 }}>🎲</span>
        </button>
      </div>
      <p style={{ color:"rgba(255,255,255,0.18)", fontSize:11, marginTop:14, zIndex:1 }}>{Object.keys(flashDone).length}/16 completed</p>
    </div>
  );
}
