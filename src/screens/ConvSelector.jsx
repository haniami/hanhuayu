import { TEAL, BG, BLOB1, BLOB2, MAX } from "../constants/theme";
import { CONV_TOPICS } from "../data/convTopics";
import { TabBar } from "../components/TabBar";

const CONV_CATEGORIES = [
  { group:"Essentials", color:"#f5c842", topics:["essentials","introductions","numbers","datetime","smalltalk"] },
  { group:"Food & Drink", color:"#fb923c", topics:["food","restaurant","coffeeshop","delivery","complaint"] },
  { group:"Shopping", color:"#a78bfa", topics:["buystore","bargain","onlineshopping"] },
  { group:"Movement", color:"#2dd4bf", topics:["directions","grabtaxi","airport","hotel"] },
  { group:"Education", color:"#60a5fa", topics:["school","groupwork","asklecturer"] },
  { group:"Work", color:"#4ade80", topics:["colleagues","meetings","followup"] },
  { group:"Social", color:"#f472b6", topics:["dating","makefriends","family"] },
  { group:"Emergency", color:"#f87171", topics:["clinic","police","emergency"] },
  { group:"Malaysian 🇲🇾", color:"#fbbf24", topics:["kopitiam","auntieuncle","transport","manglish","slang"] },
];

export function ConvSelector({ onSelect, onGoFlash, onGoQuiz, convProgress }) {
  const topicMap = Object.fromEntries(CONV_TOPICS.map(t=>[t.id,t]));
  return (
    <div style={BG}>
      <div style={BLOB1}/><div style={BLOB2}/>
      <div style={{ textAlign:"center", marginBottom:12, zIndex:1 }}>
        <h1 style={{ color:TEAL, fontSize:22, fontWeight:700, letterSpacing:2, margin:0 }}>Conversations · 会话</h1>
        <p style={{ color:"rgba(255,255,255,0.38)", fontSize:12, marginTop:4 }}>{CONV_TOPICS.length} topics</p>
      </div>
      <TabBar current="conv" onFlash={onGoFlash} onConv={()=>{}} onQuiz={onGoQuiz}/>
      <div style={{ width:"100%", maxWidth:MAX, zIndex:1, display:"flex", flexDirection:"column", gap:14 }}>
        {CONV_CATEGORIES.map(cat => {
          const topics = cat.topics.map(id=>topicMap[id]).filter(Boolean);
          return (
            <div key={cat.group}>
              <p style={{ color:cat.color, fontSize:10, fontWeight:700, letterSpacing:2, marginBottom:7, textTransform:"uppercase" }}>{cat.group}</p>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:7 }}>
                {topics.map(topic => {
                  const prog=convProgress[topic.id]||0; const done=prog>=topic.sentences.length;
                  return (
                    <button key={topic.id} onClick={()=>onSelect(topic.id)} style={{ borderRadius:13, padding:"11px 10px", background:done?"rgba(45,212,191,0.1)":"rgba(255,255,255,0.05)", border:`1px solid ${done?"rgba(45,212,191,0.35)":"rgba(255,255,255,0.1)"}`, color:"#fff", cursor:"pointer", display:"flex", alignItems:"center", gap:8, textAlign:"left" }}>
                      <span style={{ fontSize:20, flexShrink:0 }}>{topic.emoji}</span>
                      <div style={{ flex:1, minWidth:0 }}>
                        <div style={{ fontSize:11, fontWeight:700, color:done?TEAL:"rgba(255,255,255,0.85)", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{topic.category}</div>
                        <div style={{ fontSize:10, color:"rgba(255,255,255,0.35)", marginTop:2 }}>{topic.sentences.length} sentences{done?" · ✓":prog>0?` · ${prog}/${topic.sentences.length}`:""}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
