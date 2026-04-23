import { useState } from "react";
import { TEAL, BG, BLOB1, BLOB2, MAX } from "../constants/theme";
import { CONV_TOPICS } from "../data/convTopics";
import { BackBtn } from "../components/BackBtn";
import { ProgressRow } from "../components/ProgressRow";

export function ConvFlashMode({ topicId, initialIndex, onProgress, onBack, onGoFlash, onGoQuiz }) {
  const topic = CONV_TOPICS.find(t=>t.id===topicId);
  const sentences = topic.sentences;
  const [index, setIndex] = useState(initialIndex||0);
  const [flipped, setFlipped] = useState(false);
  const [dir, setDir] = useState(null);
  const total=sentences.length; const s=sentences[index];
  const go=(d)=>{ setDir(d); setFlipped(false); setTimeout(()=>{ setIndex(p=>{ const next=d==="next"?(p+1)%total:(p-1+total)%total; onProgress&&onProgress(topicId,next+1); return next; }); setDir(null); },200); };
  return (
    <div style={BG}>
      <div style={BLOB1}/><div style={BLOB2}/>
      <div style={{ display:"flex", alignItems:"center", width:"100%", maxWidth:MAX, marginBottom:12, zIndex:1, gap:10 }}>
        <BackBtn onClick={onBack} label="Topics"/>
        <div style={{ flex:1 }}><ProgressRow label={`${topic.emoji} ${topic.category}`} current={index+1} total={total} accent={TEAL}/></div>
      </div>
      <p style={{ color:"rgba(255,255,255,0.38)", fontSize:14, marginBottom:10, zIndex:1 }}>Tap card to reveal meaning</p>
      <div onClick={()=>setFlipped(f=>!f)} style={{ width:"100%", maxWidth:MAX, perspective:"1000px", cursor:"pointer", marginBottom:22, zIndex:1, opacity:dir?0:1, transition:"opacity 0.2s" }}>
        <div style={{ position:"relative", width:"100%", transformStyle:"preserve-3d", transition:"transform 0.55s cubic-bezier(.4,.2,.2,1)", transform:flipped?"rotateY(180deg)":"rotateY(0)" }}>
          {/* spacer so the container has height matching whichever face is taller */}
          <div style={{ visibility:"hidden", padding:22, minHeight:185 }}>
            <span style={{ fontSize:24 }}>{s.zh}</span>
            {s.words && s.words.map((_,i)=><span key={i} style={{ fontSize:12, display:"block" }}>x</span>)}
          </div>
          {/* Front */}
          <div style={{ position:"absolute", inset:0, backfaceVisibility:"hidden", WebkitBackfaceVisibility:"hidden", background:"linear-gradient(145deg,rgba(45,212,191,0.1),rgba(45,212,191,0.03))", border:"1px solid rgba(45,212,191,0.25)", borderRadius:20, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:10, padding:22, boxShadow:"0 8px 40px rgba(0,0,0,0.4)" }}>
            <span style={{ fontSize:24, color:"#fff", fontWeight:600, textAlign:"center", lineHeight:1.6 }}>{s.zh}</span>
            <span style={{ fontSize:15, color:TEAL, letterSpacing:1, fontStyle:"italic", textAlign:"center" }}>{s.pinyin}</span>
          </div>
          {/* Back */}
          <div style={{ position:"absolute", inset:0, backfaceVisibility:"hidden", WebkitBackfaceVisibility:"hidden", transform:"rotateY(180deg)", background:"linear-gradient(145deg,rgba(45,212,191,0.15),rgba(45,212,191,0.05))", border:"1px solid rgba(45,212,191,0.5)", borderRadius:20, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"flex-start", padding:"18px 20px", overflow:"auto" }}>
            <span style={{ fontSize:16, color:"rgba(255,255,255,0.22)", textAlign:"center", marginBottom:6 }}>{s.zh}</span>
            <span style={{ fontSize:19, color:"#fff", fontWeight:600, textAlign:"center", lineHeight:1.5, marginBottom:6 }}>{s.meaning}</span>
            <span style={{ fontSize:13, color:TEAL, fontStyle:"italic", textAlign:"center", marginBottom:s.words ? 10 : 0 }}>{s.pinyin}</span>
            {s.words && (
              <>
                <div style={{ width:"100%", height:1, background:"rgba(45,212,191,0.2)", marginBottom:10 }}/>
                <div style={{ display:"flex", flexWrap:"wrap", gap:6, justifyContent:"center", width:"100%" }}>
                  {s.words.map((w,i) => (
                    <div key={i} style={{ background:"rgba(45,212,191,0.12)", border:"1px solid rgba(45,212,191,0.25)", borderRadius:10, padding:"5px 10px", textAlign:"center", minWidth:60 }}>
                      <div style={{ fontSize:17, color:"#fff", fontWeight:600 }}>{w.w}</div>
                      <div style={{ fontSize:12, color:TEAL, fontStyle:"italic" }}>{w.p}</div>
                      <div style={{ fontSize:12, color:"rgba(255,255,255,0.55)" }}>{w.m}</div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div style={{ display:"flex", gap:12, alignItems:"center", zIndex:1, width:"100%", maxWidth:MAX, justifyContent:"center" }}>
        <button onClick={()=>go("prev")} style={{ width:48, height:48, borderRadius:"50%", background:"rgba(255,255,255,0.07)", border:"1px solid rgba(255,255,255,0.15)", color:"#fff", fontSize:20, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>←</button>
        <button onClick={()=>setFlipped(f=>!f)} style={{ flex:1, maxWidth:180, padding:"12px 0", borderRadius:99, background:`linear-gradient(135deg,${TEAL},#60a5fa)`, border:"none", color:"#0a1a1a", fontSize:15, fontWeight:700, cursor:"pointer" }}>{flipped?"HIDE":"REVEAL"}</button>
        <button onClick={()=>go("next")} style={{ width:48, height:48, borderRadius:"50%", background:"rgba(255,255,255,0.07)", border:"1px solid rgba(255,255,255,0.15)", color:"#fff", fontSize:20, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>→</button>
      </div>
    </div>
  );
}
