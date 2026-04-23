export function BackBtn({ onClick, label }) {
  return (
    <button onClick={onClick} style={{ display:"flex", alignItems:"center", gap:5, background:"rgba(255,255,255,0.08)", border:"1px solid rgba(255,255,255,0.14)", borderRadius:99, padding:"8px 16px", color:"rgba(255,255,255,0.75)", fontSize:13, fontWeight:700, cursor:"pointer", flexShrink:0 }}>
      ← {label || "Back"}
    </button>
  );
}
