import { useState } from "react";
import { GOLD, ORANGE, TEAL, BG, BLOB1, BLOB2, MAX } from "../constants/theme";
import { RANDOM_SET_IDX } from "../constants/quiz";
import { QUIZ_SETS } from "../data/quizSets";
import { CONV_TOPICS } from "../data/convTopics";
import { shuffle } from "../utils/shuffle";
import { buildQuestion, buildConvQuestion, getRandomSet } from "../utils/quiz";
import { BackBtn } from "../components/BackBtn";
import { ProgressRow } from "../components/ProgressRow";

const OPTION_LABELS = ["A","B","C","D"];

export function QuizMode({ quizSpec, customCards, onBack, onFinish }) {
  const isConv = quizSpec.type==="conv";
  const [questions] = useState(()=>{
    if(isConv){ const topic=CONV_TOPICS.find(t=>t.id===quizSpec.id); const all=CONV_TOPICS.flatMap(t=>t.sentences); return shuffle(topic.sentences).map(s=>buildConvQuestion(s,all)); }
    const cards=customCards||(quizSpec.idx===RANDOM_SET_IDX?getRandomSet():QUIZ_SETS[quizSpec.idx]);
    return shuffle(cards).map((c,i)=>buildQuestion(c,i%2===0?"pinyin":"meaning"));
  });
  const [qIdx,setQIdx]=useState(0); const [selected,setSelected]=useState(null); const [revealed,setRevealed]=useState(false); const [answers,setAnswers]=useState([]);
  const q=questions[qIdx]; const isLast=qIdx===questions.length-1;
  const accent=isConv?TEAL:GOLD;
  const topic=isConv?CONV_TOPICS.find(t=>t.id===quizSpec.id):null;
  const headerLabel=isConv?`${topic?.emoji} ${topic?.category}`:quizSpec.idx===RANDOM_SET_IDX?"🎲 Random":`Set ${quizSpec.idx+1}`;
  const pick=(val)=>{ if(revealed)return; setSelected(val); setRevealed(true); };
  const next=()=>{ const na=[...answers,selected===q.answer]; if(isLast)onFinish(na.filter(Boolean).length,na,questions); else{ setAnswers(na);setQIdx(i=>i+1);setSelected(null);setRevealed(false); } };
  return (
    <div style={BG}>
      <div style={BLOB1}/><div style={BLOB2}/>
      <div style={{ display:"flex", alignItems:"center", width:"100%", maxWidth:MAX, marginBottom:12, zIndex:1, gap:10 }}>
        <BackBtn onClick={onBack} label="Sets"/>
        <div style={{ flex:1 }}><ProgressRow label={headerLabel} current={qIdx+1} total={questions.length} accent={accent}/></div>
      </div>
      <p style={{ color:"rgba(255,255,255,0.42)", fontSize:13, letterSpacing:1, marginBottom:8, zIndex:1 }}>{q.label}</p>
      <div style={{ width:"100%", maxWidth:MAX, background:"linear-gradient(145deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))", border:`1px solid ${accent}44`, borderRadius:20, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", minHeight:isConv?85:125, marginBottom:14, zIndex:1, padding:"16px 18px", boxShadow:"0 8px 40px rgba(0,0,0,0.35)" }}>
        {isConv?<><span style={{ fontSize:21, color:"#fff", fontWeight:600, textAlign:"center", lineHeight:1.6 }}>{q.prompt}</span><span style={{ fontSize:14, color:accent, fontStyle:"italic", marginTop:5, textAlign:"center" }}>{q.sub}</span></>:<span style={{ fontSize:70, color:"#fff", textShadow:`0 4px 24px ${accent}44`, lineHeight:1 }}>{q.prompt}</span>}
      </div>
      <div style={{ display:"flex", flexDirection:"column", gap:7, width:"100%", maxWidth:MAX, zIndex:1 }}>
        {q.options.map((opt,i)=>{ const val=opt.value??opt; const isCorrect=val===q.answer, isChosen=val===selected;
          let bg="rgba(255,255,255,0.05)",border="1px solid rgba(255,255,255,0.11)",lbg="rgba(255,255,255,0.1)",tc="#fff",tc2="rgba(255,255,255,0.45)";
          if(revealed){ if(isCorrect){bg="rgba(74,222,128,0.12)";border="1px solid rgba(74,222,128,0.5)";lbg="rgba(74,222,128,0.28)";tc="#4ade80";tc2="rgba(74,222,128,0.7)";} else if(isChosen){bg="rgba(248,113,113,0.12)";border="1px solid rgba(248,113,113,0.5)";lbg="rgba(248,113,113,0.28)";tc="#f87171";tc2="rgba(248,113,113,0.7)";} }
          return (
            <button key={i} onClick={()=>pick(val)} style={{ display:"flex", alignItems:"center", gap:9, background:bg, border, borderRadius:14, padding:"11px 12px", cursor:revealed?"default":"pointer", transition:"all 0.2s", textAlign:"left", width:"100%" }}>
              <span style={{ width:26, height:26, borderRadius:7, background:lbg, display:"flex", alignItems:"center", justifyContent:"center", fontSize:13, fontWeight:700, color:revealed&&isCorrect?"#4ade80":revealed&&isChosen&&!isCorrect?"#f87171":accent, flexShrink:0 }}>{OPTION_LABELS[i]}</span>
              <div style={{ flex:1, minWidth:0 }}>
                {isConv?<div style={{ fontSize:15, color:tc, lineHeight:1.4 }}>{opt.display??opt.value}</div>
                  :<><div style={{ fontSize:15, color:tc, fontStyle:q.type==="pinyin"?"italic":"normal" }}>{opt.pinyin}</div><div style={{ fontSize:13, color:tc2, marginTop:2, lineHeight:1.3 }}>{opt.meaning}</div></>}
              </div>
              {revealed&&isCorrect&&<span style={{ fontSize:16, color:"#4ade80", flexShrink:0 }}>✓</span>}
              {revealed&&isChosen&&!isCorrect&&<span style={{ fontSize:16, color:"#f87171", flexShrink:0 }}>✗</span>}
            </button>
          );
        })}
      </div>
      {revealed&&<button onClick={next} style={{ marginTop:16, padding:"13px 0", width:"100%", maxWidth:MAX, borderRadius:99, background:`linear-gradient(135deg,${accent},${isConv?"#60a5fa":ORANGE})`, border:"none", color:isConv?"#0a1a1a":"#1a1500", fontSize:16, fontWeight:700, cursor:"pointer", zIndex:1 }}>{isLast?"SEE RESULTS":"NEXT →"}</button>}
    </div>
  );
}
