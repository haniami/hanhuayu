import { GOLD, ORANGE, MAX } from "../constants/theme";

export function TabBar({ current, onFlash, onConv, onQuiz }) {
  const tabs = [{ id:"flash", label:"CARDS", fn:onFlash }, { id:"conv", label:"CONVO", fn:onConv }, { id:"quiz", label:"QUIZ", fn:onQuiz }];
  return (
    <div style={{ display:"flex", gap:6, marginBottom:14, zIndex:1, width:"100%", maxWidth:MAX, justifyContent:"center" }}>
      {tabs.map(t => (
        <button key={t.id} onClick={t.fn} style={{ flex:1, padding:"9px 4px", borderRadius:99, background:current===t.id?`linear-gradient(135deg,${GOLD},${ORANGE})`:"rgba(255,255,255,0.07)", border:current===t.id?"none":"1px solid rgba(255,255,255,0.14)", color:current===t.id?"#1a1500":"rgba(255,255,255,0.6)", fontSize:11, fontWeight:700, letterSpacing:1, cursor:"pointer" }}>{t.label}</button>
      ))}
    </div>
  );
}
