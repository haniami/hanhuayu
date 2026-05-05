export const GOLD = "#f5c842";
export const ORANGE = "#ff8c42";
export const TEAL = "#2dd4bf";

export const MAX = 480;

export const BG = {
  minHeight: "100vh",
  width: "100%",
  boxSizing: "border-box",
  background: "linear-gradient(135deg,#0f0c29,#302b63,#24243e)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontFamily: "'Noto Serif','Noto Sans SC',Georgia,serif",
  padding: "12px 12px 60px",
  position: "relative",
  overflowX: "hidden",
  overflowY: "auto",
};

export const BLOB1 = {
  position: "fixed",
  width: 260,
  height: 260,
  borderRadius: "50%",
  background: "rgba(255,180,50,0.06)",
  top: -60,
  right: -60,
  filter: "blur(50px)",
  pointerEvents: "none",
  zIndex: 0,
};

export const BLOB2 = {
  position: "fixed",
  width: 220,
  height: 220,
  borderRadius: "50%",
  background: "rgba(100,150,255,0.08)",
  bottom: -50,
  left: -50,
  filter: "blur(40px)",
  pointerEvents: "none",
  zIndex: 0,
};
