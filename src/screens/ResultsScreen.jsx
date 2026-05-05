import { GOLD, ORANGE, TEAL, BG, BLOB1, BLOB2, MAX } from "../constants/theme";
import { RANDOM_SET_IDX } from "../constants/quiz";
import { CONV_TOPICS } from "../data/convTopics";
import { BackBtn } from "../components/BackBtn";

export function ResultsScreen({ quizSpec, score, answers, questions, onRetry, onHome }) {
  const isConv = quizSpec?.type==="conv";
  const total=answers.length; const pct=Math.round((score/total)*100);
  const sc=pct===100?"#4ade80":pct>=70?GOLD:"#f87171";
  const emoji=pct===100?"🏆":pct>=70?"👏":"💪";
  const msg=pct===100?"Perfect score!":pct>=70?"Great job!":"Keep practicing!";
  const accent=isConv?TEAL:GOLD;
  const topic=isConv?CONV_TOPICS.find(t=>t.id===quizSpec.id):null;
  const label=isConv?`${topic?.emoji} ${topic?.category}`:quizSpec?.idx===RANDOM_SET_IDX?"🎲 Random":`Set ${(quizSpec?.idx??0)+1}`;
  return (
    <div style={BG}>
      <div style={BLOB1}/><div style={BLOB2}/>
      <div style={{ width:"100%", maxWidth:MAX, zIndex:1, marginBottom:14 }}>
        <BackBtn onClick={onHome} label="Sets"/>
      </div>
      <div style={{ textAlign:"center", marginBottom:16, zIndex:1 }}>
        <div style={{ fontSize:46 }}>{emoji}</div>
        <h2 style={{ color:"#fff", fontSize:24, fontWeight:700, margin:"8px 0 4px" }}>{msg}</h2>
        <p style={{ color:"rgba(255,255,255,0.38)", fontSize:15 }}>{label}</p>
        <div style={{ fontSize:48, fontWeight:800, color:sc, textShadow:`0 0 30px ${sc}55`, marginTop:6 }}>{score}<span style={{ fontSize:22, color:"rgba(255,255,255,0.28)" }}>/{total}</span></div>
      </div>
      <div style={{ width:"100%", maxWidth:MAX, display:"flex", flexDirection:"column", gap:7, zIndex:1, marginBottom:18 }}>
        {answers.map((ok,i)=>{ const q=questions[i]; return (
          <div key={i} style={{ display:"flex", flexDirection:"column", gap:4, background:ok?"rgba(74,222,128,0.07)":"rgba(248,113,113,0.07)", border:`1px solid ${ok?"rgba(74,222,128,0.22)":"rgba(248,113,113,0.22)"}`, borderRadius:12, padding:"10px 11px" }}>
            <div style={{ display:"flex", alignItems:"flex-start", gap:9 }}>
              <span style={{ fontSize:isConv?16:22, lineHeight:1.4, color:"#fff", flex:1, minWidth:0 }}>{q.prompt}</span>
              <span style={{ fontSize:17, color:ok?"#4ade80":"#f87171", flexShrink:0 }}>{ok?"✓":"✗"}</span>
            </div>
            <div style={{ fontSize:11, color:"rgba(255,255,255,0.35)", letterSpacing:1 }}>{isConv?"":q.type?.toUpperCase()}</div>
            <div style={{ fontSize:14, color:"#fff", lineHeight:1.4 }}>{q.answer}</div>
          </div>
        ); })}
      </div>
      <div style={{ display:"flex", gap:10, zIndex:1, width:"100%", maxWidth:MAX }}>
        <button onClick={onHome} style={{ flex:1, padding:"13px 0", borderRadius:99, background:"rgba(255,255,255,0.08)", border:"1px solid rgba(255,255,255,0.15)", color:"#fff", fontSize:15, fontWeight:700, cursor:"pointer" }}>← Sets</button>
        <button onClick={onRetry} style={{ flex:1, padding:"13px 0", borderRadius:99, background:`linear-gradient(135deg,${accent},${isConv?"#60a5fa":ORANGE})`, border:"none", color:isConv?"#0a1a1a":"#fff", fontSize:15, fontWeight:700, cursor:"pointer" }}>RETRY ↺</button>
      </div>
    </div>
  );
}
