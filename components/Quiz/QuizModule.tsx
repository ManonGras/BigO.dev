
import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../../data/quizzes';
import { 
  Trophy, 
  Timer, 
  ChevronRight, 
  CheckCircle2, 
  XCircle, 
  RotateCcw,
  BarChart
} from 'lucide-react';

const QuizModule: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = QUIZ_QUESTIONS[currentIdx];

  const handleSelect = (idx: number) => {
    if (showFeedback) return;
    setSelectedOption(idx);
  };

  const handleValidate = () => {
    if (selectedOption === null) return;
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
    }
    setShowFeedback(true);
  };

  const handleNext = () => {
    if (currentIdx < QUIZ_QUESTIONS.length - 1) {
      setCurrentIdx(prev => prev + 1);
      setSelectedOption(null);
      setShowFeedback(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleReset = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setShowFeedback(false);
    setScore(0);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <div className="max-w-2xl mx-auto py-12">
        <div className="bg-slate-900 border border-slate-800 rounded-[2.5rem] p-12 text-center shadow-2xl">
          <div className="inline-flex p-6 bg-amber-500/20 rounded-full text-amber-500 mb-8 scale-125">
            <Trophy size={48} />
          </div>
          <h2 className="text-4xl font-black mb-4 tracking-tight">Quiz Completed!</h2>
          <p className="text-slate-400 text-lg mb-10">You have completed all questions in the current pool.</p>
          
          <div className="grid grid-cols-2 gap-6 mb-12">
            <div className="bg-slate-800/50 p-6 rounded-3xl border border-slate-700">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Final Score</div>
              <div className="text-4xl font-black text-indigo-400">{score} / {QUIZ_QUESTIONS.length}</div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-3xl border border-slate-700">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Accuracy</div>
              <div className="text-4xl font-black text-emerald-400">{Math.round((score / QUIZ_QUESTIONS.length) * 100)}%</div>
            </div>
          </div>

          <button 
            onClick={handleReset}
            className="w-full py-5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-bold transition-all flex items-center justify-center gap-3"
          >
            <RotateCcw size={20} /> Try Again
          </button>
        </div>
      </div>
    );
  }

  const progress = ((currentIdx) / QUIZ_QUESTIONS.length) * 100;

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      {/* Quiz Header Info */}
      <div className="flex items-center justify-between mb-8">
        <div className="space-y-1">
          <div className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Category: {currentQuestion.category}</div>
          <h2 className="text-2xl font-bold">Question {currentIdx + 1} of {QUIZ_QUESTIONS.length}</h2>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-slate-400 bg-slate-900 px-4 py-2 rounded-xl border border-slate-800">
            <Timer size={18} />
            <span className="font-mono font-bold">--:--</span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-slate-900 rounded-full mb-12 overflow-hidden border border-slate-800">
        <div className="h-full bg-indigo-600 transition-all duration-500 ease-out" style={{ width: `${progress}%` }} />
      </div>

      {/* Question Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4">
          <BarChart className="text-slate-800" size={80} />
        </div>
        
        <p className="text-xl md:text-2xl font-medium mb-12 relative z-10 leading-relaxed">
          {currentQuestion.question}
        </p>

        <div className="space-y-4 mb-12">
          {currentQuestion.options.map((option, idx) => {
            const isSelected = selectedOption === idx;
            const isCorrect = idx === currentQuestion.correctAnswer;
            
            let btnClass = 'bg-slate-800/50 border-slate-700/50 hover:bg-slate-800 hover:border-slate-600 text-slate-300';
            if (isSelected) btnClass = 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/20';
            if (showFeedback && isCorrect) btnClass = 'bg-emerald-600 border-emerald-500 text-white shadow-lg shadow-emerald-600/20';
            if (showFeedback && isSelected && !isCorrect) btnClass = 'bg-rose-600 border-rose-500 text-white shadow-lg shadow-rose-600/20';

            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                disabled={showFeedback}
                className={`
                  w-full text-left p-6 rounded-2xl border-2 transition-all flex items-center justify-between group
                  ${btnClass}
                `}
              >
                <span className="font-semibold text-lg">{option}</span>
                {showFeedback && isCorrect && <CheckCircle2 size={24} />}
                {showFeedback && isSelected && !isCorrect && <XCircle size={24} />}
                {!showFeedback && <div className={`w-6 h-6 rounded-full border-2 transition-colors ${isSelected ? 'border-white bg-indigo-500' : 'border-slate-600'}`} />}
              </button>
            );
          })}
        </div>

        {!showFeedback ? (
          <button
            onClick={handleValidate}
            disabled={selectedOption === null}
            className={`
              w-full py-5 rounded-2xl font-bold text-lg transition-all
              ${selectedOption !== null ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-xl shadow-indigo-600/20' : 'bg-slate-800 text-slate-500 cursor-not-allowed'}
            `}
          >
            Check Answer
          </button>
        ) : (
          <div className="space-y-6">
             <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 animate-in fade-in slide-in-from-bottom-4 duration-500">
               <h4 className="font-bold text-slate-300 mb-2 uppercase tracking-widest text-xs">Explanation</h4>
               <p className="text-slate-400 leading-relaxed">{currentQuestion.explanation}</p>
             </div>
             <button
              onClick={handleNext}
              className="w-full py-5 bg-white text-slate-950 hover:bg-slate-200 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2 group"
            >
              Next Question <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizModule;
