import { GOLD, ORANGE, TEAL } from "../constants/theme";

export function ProgressRow({ label, current, total, accent }) {
  const ac = accent || GOLD;
  return (
    <div style={{ width:"100%", zIndex:1 }}>
      <div style={{ display:"flex", justifyContent:"space-between", marginBottom:4 }}>
        <span style={{ color:ac, fontSize:12, fontWeight:700, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap", maxWidth:"70%" }}>{label}</span>
        <span style={{ color:"rgba(255,255,255,0.42)", fontSize:12, flexShrink:0 }}>{current}/{total}</span>
      </div>
      <div style={{ background:"rgba(255,255,255,0.08)", borderRadius:99, height:5, overflow:"hidden" }}>
        <div style={{ width:`${(current/total)*100}%`, height:"100%", background:`linear-gradient(90deg,${ac},${ac===TEAL?"#60a5fa":ORANGE})`, borderRadius:99, transition:"width 0.4s" }} />
      </div>
    </div>
  );
}
