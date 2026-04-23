import { useState } from "react";
import { GOLD, ORANGE, BG, BLOB1, BLOB2, MAX } from "../constants/theme";
import { QUIZ_SETS } from "../data/quizSets";
import { BackBtn } from "../components/BackBtn";

export function RandomPicker({ mode, onStart, onBack }) {
  const [selected,setSelected]=useState(Array(16).fill(true));
  const toggle=(i)=>setSelected(p=>{ const n=[...p]; n[i]=!n[i]; return n; });
  const allOn=selected.every(Boolean); const count=selected.filter(Boolean).length;
  function buildRandomCards(){ const pool=[]; selected.forEach((on,i)=>{ if(on)pool.push(...QUIZ_SETS[i]); }); const a=[...pool]; for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a.slice(0,10); }
  return (
    <div style={BG}>
      <div style={BLOB1}/><div style={BLOB2}/>
      <div style={{ width:"100%", maxWidth:MAX, zIndex:1, marginBottom:16 }}>
        <BackBtn onClick={onBack} label="Back"/>
        <div style={{ textAlign:"center", marginTop:10 }}>
          <h2 style={{ color:GOLD, fontSize:20, fontWeight:700, margin:0 }}>🎲 Random Mix</h2>
          <p style={{ color:"rgba(255,255,255,0.38)", fontSize:12, marginTop:3 }}>Choose which sets to draw from</p>
        </div>
      </div>
      <div style={{ width:"100%", maxWidth:MAX, marginBottom:10, zIndex:1 }}>
        <button onClick={()=>setSelected(Array(16).fill(!allOn))} style={{ padding:"7px 14px", borderRadius:99, background:allOn?"rgba(245,200,66,0.15)":"rgba(255,255,255,0.07)", border:`1px solid ${allOn?"rgba(245,200,66,0.4)":"rgba(255,255,255,0.15)"}`, color:allOn?GOLD:"rgba(255,255,255,0.6)", fontSize:11, fontWeight:700, cursor:"pointer" }}>{allOn?"Deselect All":"Select All"}</button>
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:7, width:"100%", maxWidth:MAX, zIndex:1, marginBottom:20 }}>
        {QUIZ_SETS.map((set,i)=>{ const on=selected[i]; return (
          <button key={i} onClick={()=>toggle(i)} style={{ borderRadius:12, padding:"11px 4px", background:on?"rgba(245,200,66,0.15)":"rgba(255,255,255,0.04)", border:`1px solid ${on?"rgba(245,200,66,0.5)":"rgba(255,255,255,0.1)"}`, color:"#fff", cursor:"pointer", display:"flex", flexDirection:"column", alignItems:"center", gap:3, position:"relative" }}>
            {on&&<span style={{ position:"absolute", top:4, right:6, fontSize:8, color:GOLD }}>✓</span>}
            <span style={{ fontSize:11, fontWeight:700, color:on?GOLD:"rgba(255,255,255,0.5)" }}>Set {i+1}</span>
            <span style={{ fontSize:15, color:on?"rgba(255,255,255,0.6)":"rgba(255,255,255,0.2)" }}>{set[0].char}</span>
          </button>
        ); })}
      </div>
      <button onClick={()=>{ if(count>0)onStart(buildRandomCards()); }} style={{ padding:"13px 0", width:"100%", maxWidth:MAX, borderRadius:99, background:count>0?`linear-gradient(135deg,${GOLD},${ORANGE})`:"rgba(255,255,255,0.08)", border:"none", color:count>0?"#1a1500":"rgba(255,255,255,0.3)", fontSize:13, fontWeight:700, cursor:count>0?"pointer":"default", zIndex:1 }}>
        {count===0?"Select at least 1 set":`Start · ${count*10} cards in pool`}
      </button>
    </div>
  );
}
