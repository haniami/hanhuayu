import { GOLD, TEAL, BG, BLOB1, BLOB2, MAX } from "../constants/theme";
import { RANDOM_SET_IDX } from "../constants/quiz";
import { QUIZ_SETS } from "../data/quizSets";
import { CONV_TOPICS } from "../data/convTopics";
import { TabBar } from "../components/TabBar";

export function QuizSetSelector({ onSelect, onGoFlash, onGoConv, scores }) {
  const convScores = scores.conv||{};
  return (
    <div style={BG}>
      <div style={BLOB1}/><div style={BLOB2}/>
      <div style={{ textAlign:"center", marginBottom:12, zIndex:1 }}>
        <h1 style={{ color:GOLD, fontSize:22, fontWeight:700, letterSpacing:2, margin:0 }}>HSK 1 · Quiz</h1>
        <p style={{ color:"rgba(255,255,255,0.38)", fontSize:12, marginTop:4 }}>Characters · Conversations</p>
      </div>
      <TabBar current="quiz" onFlash={onGoFlash} onConv={onGoConv} onQuiz={()=>{}}/>
      <div style={{ width:"100%", maxWidth:MAX, zIndex:1, marginBottom:18 }}>
        <p style={{ color:GOLD, fontSize:10, fontWeight:700, letterSpacing:2, marginBottom:8 }}>CHARACTERS · HSK 1</p>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:7 }}>
          {QUIZ_SETS.map((set,i)=>{ const sc=scores.char?.[i]; const done=sc!=null; const col=done?(sc===10?"#4ade80":sc>=7?GOLD:"#f87171"):null; return (
            <button key={i} onClick={()=>onSelect({type:"char",idx:i})} style={{ borderRadius:12, padding:"11px 4px", background:done?"rgba(245,200,66,0.1)":"rgba(255,255,255,0.05)", border:`1px solid ${done?"rgba(245,200,66,0.4)":"rgba(255,255,255,0.11)"}`, color:"#fff", cursor:"pointer", display:"flex", flexDirection:"column", alignItems:"center", gap:3 }}>
              <span style={{ fontSize:11, fontWeight:700, color:done?GOLD:"rgba(255,255,255,0.8)" }}>Set {i+1}</span>
              {done?<span style={{ fontSize:10, color:col, fontWeight:700 }}>{sc}/10 ✓</span>:<span style={{ fontSize:15, color:"rgba(255,255,255,0.35)" }}>{set[0].char}</span>}
            </button>
          ); })}
          <button onClick={()=>onSelect({type:"char",idx:RANDOM_SET_IDX})} style={{ borderRadius:12, padding:"11px 4px", background:"linear-gradient(135deg,rgba(100,150,255,0.15),rgba(180,100,255,0.15))", border:"1px solid rgba(150,130,255,0.4)", color:"#fff", cursor:"pointer", display:"flex", flexDirection:"column", alignItems:"center", gap:3 }}>
            <span style={{ fontSize:11, fontWeight:700, color:"#c4b5fd" }}>Random</span><span style={{ fontSize:16 }}>🎲</span>
          </button>
        </div>
      </div>
      <div style={{ width:"100%", maxWidth:MAX, zIndex:1 }}>
        <p style={{ color:TEAL, fontSize:10, fontWeight:700, letterSpacing:2, marginBottom:8 }}>CONVERSATIONS</p>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:7 }}>
          {CONV_TOPICS.map(topic=>{ const sc=convScores[topic.id]; const done=sc!=null; const total=topic.sentences.length; const col=done?(sc===total?"#4ade80":sc>=total*0.7?GOLD:"#f87171"):null; return (
            <button key={topic.id} onClick={()=>onSelect({type:"conv",id:topic.id})} style={{ borderRadius:12, padding:"10px 10px", background:done?"rgba(45,212,191,0.08)":"rgba(255,255,255,0.04)", border:`1px solid ${done?"rgba(45,212,191,0.35)":"rgba(255,255,255,0.1)"}`, color:"#fff", cursor:"pointer", display:"flex", alignItems:"center", gap:7, textAlign:"left" }}>
              <span style={{ fontSize:17, flexShrink:0 }}>{topic.emoji}</span>
              <div style={{ flex:1, minWidth:0 }}>
                <div style={{ fontSize:10, fontWeight:700, color:done?TEAL:"rgba(255,255,255,0.8)", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{topic.category}</div>
                {done?<div style={{ fontSize:9, color:col, fontWeight:700 }}>{sc}/{total} ✓</div>:<div style={{ fontSize:9, color:"rgba(255,255,255,0.35)" }}>{total} qs</div>}
              </div>
            </button>
          ); })}
        </div>
      </div>
    </div>
  );
}
