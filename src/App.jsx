import { useState, useEffect } from "react";
import { RANDOM_SET_IDX } from "./constants/quiz";
import {
  LS_FLASH_PROGRESS,
  LS_FLASH_DONE,
  LS_QUIZ_SCORES,
  LS_CONV_PROGRESS,
  LS_CONV_SCORES,
} from "./constants/storage";
import { lsGet, lsSet } from "./utils/storage";
import { FlashSetSelector } from "./screens/FlashSetSelector";
import { FlashcardMode } from "./screens/FlashcardMode";
import { ConvSelector } from "./screens/ConvSelector";
import { ConvFlashMode } from "./screens/ConvFlashMode";
import { QuizSetSelector } from "./screens/QuizSetSelector";
import { QuizMode } from "./screens/QuizMode";
import { RandomPicker } from "./screens/RandomPicker";
import { ResultsScreen } from "./screens/ResultsScreen";
import { Footer } from "./components/Footer";

export default function App() {
  const [screen,setScreenState]=useState("flashSelect");
  const [activeSet,setActiveSet]=useState(null);
  const [activeQuizSpec,setActiveQuizSpec]=useState(null);
  const [activeConvTopic,setActiveConvTopic]=useState(null);
  const [randomCards,setRandomCards]=useState(null);
  const [randomMode,setRandomMode]=useState(null);
  const [quizResult,setQuizResult]=useState(null);
  const [quizCards,setQuizCards]=useState(null);
  const [quizQuestions,setQuizQuestions]=useState(null);
  const [scores,setScores]=useState(()=>({ char:lsGet(LS_QUIZ_SCORES,{}), conv:lsGet(LS_CONV_SCORES,{}) }));
  const [flashProgress,setFlashProgress]=useState(()=>lsGet(LS_FLASH_PROGRESS,{}));
  const [flashDone,setFlashDone]=useState(()=>lsGet(LS_FLASH_DONE,{}));
  const [convProgress,setConvProgress]=useState(()=>lsGet(LS_CONV_PROGRESS,{}));

  const setScreen=(s)=>{ window.history.pushState({screen:s},"",""); setScreenState(s); };
  // replaceScreen swaps the current history entry instead of pushing — used when
  // we want the phone back button to skip the replaced screen (e.g. quiz → results)
  const replaceScreen=(s)=>{ window.history.replaceState({screen:s},"",""); setScreenState(s); };

  useEffect(()=>{
    const onPop=()=>{ const s=window.history.state?.screen; setScreenState(s||"flashSelect"); };
    window.addEventListener("popstate",onPop);
    window.history.replaceState({screen:"flashSelect"},"","");
    return ()=>window.removeEventListener("popstate",onPop);
  },[]);

  const markFlashProgress=(setIdx,cardIndex,total)=>{ if(setIdx===RANDOM_SET_IDX)return; const done=cardIndex===total-1; setFlashProgress(prev=>{ const n={...prev,[setIdx]:cardIndex}; lsSet(LS_FLASH_PROGRESS,n); return n; }); if(done)setFlashDone(prev=>{ const n={...prev,[setIdx]:true}; lsSet(LS_FLASH_DONE,n); return n; }); };
  const markConvProgress=(topicId,index)=>{ setConvProgress(prev=>{ const n={...prev,[topicId]:Math.max(prev[topicId]||0,index)}; lsSet(LS_CONV_PROGRESS,n); return n; }); };

  const finishQuiz=(score,answers,questions)=>{
    setQuizResult({score,answers}); setQuizQuestions(questions);
    const spec=activeQuizSpec;
    if(spec.type==="char"&&spec.idx!==RANDOM_SET_IDX){ setScores(prev=>{ const n={...prev,char:{...prev.char,[spec.idx]:score}}; lsSet(LS_QUIZ_SCORES,n.char); return n; }); }
    else if(spec.type==="conv"){ setScores(prev=>{ const n={...prev,conv:{...prev.conv,[spec.id]:score}}; lsSet(LS_CONV_SCORES,n.conv); return n; }); }
    replaceScreen("results");
  };

  const goHome=()=>setScreen("flashSelect");
  const goFlash=()=>setScreen("flashSelect");
  const goConv=()=>setScreen("convSelect");
  const goQuiz=()=>setScreen("quizSelect");

  const handleFlashSelect=(i)=>{ if(i===RANDOM_SET_IDX){setRandomMode("flash");setScreen("randomPicker");} else{setActiveSet(i);setRandomCards(null);setScreen("flash");} };
  const handleQuizSelect=(spec)=>{ if(spec.type==="char"&&spec.idx===RANDOM_SET_IDX){setRandomMode("quiz");setScreen("randomPicker");} else{setActiveQuizSpec(spec);setQuizCards(null);setScreen("quiz");} };
  const handleRandomStart=(cards)=>{ if(randomMode==="flash"){setActiveSet(RANDOM_SET_IDX);setRandomCards(cards);setScreen("flash");} else{setActiveQuizSpec({type:"char",idx:RANDOM_SET_IDX});setQuizCards(cards);setScreen("quiz");} };

  if(screen==="flashSelect") return <><FlashSetSelector onSelect={handleFlashSelect} onGoConv={goConv} onGoQuiz={goQuiz} flashProgress={flashProgress} flashDone={flashDone}/><Footer/></>;
  if(screen==="flash") return <><FlashcardMode key={`flash-${activeSet}`} setIdx={activeSet} customCards={activeSet===RANDOM_SET_IDX?randomCards:null} initialIndex={flashProgress[activeSet]||0} onProgress={markFlashProgress} onBack={goFlash} onGoConv={goConv} onGoQuiz={goQuiz}/><Footer/></>;
  if(screen==="convSelect") return <><ConvSelector onSelect={id=>{setActiveConvTopic(id);setScreen("convFlash");}} onGoFlash={goFlash} onGoQuiz={goQuiz} convProgress={convProgress}/><Footer/></>;
  if(screen==="convFlash") return <><ConvFlashMode key={`conv-${activeConvTopic}`} topicId={activeConvTopic} initialIndex={convProgress[activeConvTopic]||0} onProgress={markConvProgress} onBack={goConv} onGoFlash={goFlash} onGoQuiz={goQuiz}/><Footer/></>;
  if(screen==="randomPicker") return <><RandomPicker mode={randomMode} onStart={handleRandomStart} onBack={()=>setScreen(randomMode==="flash"?"flashSelect":"quizSelect")}/><Footer/></>;
  if(screen==="quizSelect") return <><QuizSetSelector scores={scores} onSelect={handleQuizSelect} onGoFlash={goFlash} onGoConv={goConv}/><Footer/></>;
  if(screen==="quiz") return <><QuizMode key={`quiz-${JSON.stringify(activeQuizSpec)}-${Date.now()}`} quizSpec={activeQuizSpec} customCards={quizCards} onBack={goQuiz} onFinish={finishQuiz}/><Footer/></>;
  if(screen==="results") return <><ResultsScreen quizSpec={activeQuizSpec} score={quizResult.score} answers={quizResult.answers} questions={quizQuestions} onRetry={()=>setScreen("quiz")} onHome={goQuiz}/><Footer/></>;
}
