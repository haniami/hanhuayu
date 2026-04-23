import { GOLD } from "../constants/theme";

export function Footer() {
  return (
    <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:10, padding:"24px 16px", marginTop:32, borderTop:"1px solid rgba(255,255,255,0.08)", zIndex:1 }}>
      <div style={{ display:"flex", gap:16, justifyContent:"center", flexWrap:"wrap" }}>
        <a href="#privacy" onClick={(e)=>{ e.preventDefault(); alert("Privacy Policy:\n\nWe respect your privacy. No personal data is stored on our servers. All progress is saved locally in your browser. We do not collect, sell, or share any personal information."); }} style={{ fontSize:13, color:GOLD, textDecoration:"none", cursor:"pointer", fontWeight:600 }}>Privacy Policy</a>
        <span style={{ color:"rgba(255,255,255,0.2)" }}>·</span>
        <a href="#terms" onClick={(e)=>{ e.preventDefault(); alert("Terms & Conditions:\n\nThis app is provided as-is for educational purposes. Users agree to use this app only for lawful purposes. We are not responsible for any damages or losses resulting from the use of this app."); }} style={{ fontSize:13, color:GOLD, textDecoration:"none", cursor:"pointer", fontWeight:600 }}>Terms & Conditions</a>
      </div>
      <p style={{ color:"rgba(255,255,255,0.35)", fontSize:12, margin:0 }}>Built by <span style={{ color:GOLD, fontWeight:600 }}>haniami</span></p>
    </div>
  );
}
