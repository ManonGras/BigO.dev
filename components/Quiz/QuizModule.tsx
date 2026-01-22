
import React, { useState } from 'react';
import { QUIZ_QUESTIONS, QUIZ_QUESTIONS_FR } from '../../data/quizzes';
import {
  Trophy,
  Timer,
  ChevronRight,
  CheckCircle2,
  XCircle,
  RotateCcw,
  BarChart
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';

const QuizModule: React.FC = () => {
  const { t, language } = useLanguage();
  const { currentPalette } = useTheme();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const questions = language === 'en' ? QUIZ_QUESTIONS : QUIZ_QUESTIONS_FR;
  const currentQuestion = questions[currentIdx];

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
    if (currentIdx < questions.length - 1) {
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
        <div className="border rounded-[2.5rem] p-12 text-center shadow-2xl"
          style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>
          <div className="inline-flex p-6 rounded-full text-amber-500 mb-8 scale-125" style={{ backgroundColor: 'rgba(245, 158, 11, 0.2)' }}>
            <Trophy size={48} />
          </div>
          <h2 className="text-4xl font-black mb-4 tracking-tight" style={{ color: 'var(--text-primary)' }}>{t.quiz.completedTitle}</h2>
          <p className="text-lg mb-10" style={{ color: 'var(--text-secondary)' }}>{t.quiz.completedDesc}</p>

          <div className="grid grid-cols-2 gap-6 mb-12">
            <div className="p-6 rounded-3xl border" style={{ backgroundColor: 'rgba(0,0,0,0.2)', borderColor: 'var(--border)' }}>
              <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--text-secondary)' }}>{t.quiz.finalScore}</div>
              <div className="text-4xl font-black" style={{ color: 'var(--accent)' }}>{score} / {questions.length}</div>
            </div>
            <div className="p-6 rounded-3xl border" style={{ backgroundColor: 'rgba(0,0,0,0.2)', borderColor: 'var(--border)' }}>
              <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--text-secondary)' }}>{t.quiz.accuracy}</div>
              <div className="text-4xl font-black text-emerald-400">{Math.round((score / questions.length) * 100)}%</div>
            </div>
          </div>

          <button
            onClick={handleReset}
            className="w-full py-5 text-white rounded-2xl font-bold transition-all flex items-center justify-center gap-3 shadow-xl hover:opacity-90"
            style={{ backgroundColor: 'var(--accent)', boxShadow: `0 10px 20px -5px ${currentPalette.colors.accent}44` }}
          >
            <RotateCcw size={20} /> {t.quiz.tryAgain}
          </button>
        </div>
      </div>
    );
  }

  const progress = ((currentIdx) / questions.length) * 100;

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      {/* Quiz Header Info */}
      <div className="flex items-center justify-between mb-8">
        <div className="space-y-1">
          <div className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
            {t.quiz.category}: {t.categories[currentQuestion.category === 'Dynamic Programming' ? 'dynamicProgramming' : currentQuestion.category.toLowerCase() as keyof typeof t.categories]}
          </div>
          <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
            {t.quiz.questionProgress.replace('{0}', (currentIdx + 1).toString()).replace('{1}', questions.length.toString())}
          </h2>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl border"
            style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)', color: 'var(--text-secondary)' }}>
            <Timer size={18} />
            <span className="font-mono font-bold">--:--</span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 rounded-full mb-12 overflow-hidden border" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>
        <div className="h-full transition-all duration-500 ease-out" style={{ width: `${progress}%`, backgroundColor: 'var(--accent)' }} />
      </div>

      {/* Question Card */}
      <div className="border rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden"
        style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <BarChart style={{ color: 'var(--text-primary)' }} size={80} />
        </div>

        <p className="text-xl md:text-2xl font-medium mb-12 relative z-10 leading-relaxed" style={{ color: 'var(--text-primary)' }}>
          {currentQuestion.question}
        </p>

        <div className="space-y-4 mb-12">
          {currentQuestion.options.map((option, idx) => {
            const isSelected = selectedOption === idx;
            const isCorrect = idx === currentQuestion.correctAnswer;

            let customStyles: any = {
              backgroundColor: 'rgba(0,0,0,0.1)',
              borderColor: 'var(--border)',
              color: 'var(--text-secondary)'
            };

            if (isSelected) {
              customStyles = {
                backgroundColor: 'var(--accent)',
                borderColor: 'var(--accent)',
                color: '#fff',
                boxShadow: `0 10px 15px -3px ${currentPalette.colors.accent}44`
              };
            }
            if (showFeedback && isCorrect) {
              customStyles = {
                backgroundColor: '#10b981',
                borderColor: '#10b981',
                color: '#fff',
                boxShadow: '0 10px 15px -3px rgba(16, 185, 129, 0.4)'
              };
            }
            if (showFeedback && isSelected && !isCorrect) {
              customStyles = {
                backgroundColor: '#f43f5e',
                borderColor: '#f43f5e',
                color: '#fff',
                boxShadow: '0 10px 15px -3px rgba(244, 63, 94, 0.4)'
              };
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                disabled={showFeedback}
                className={`
                  w-full text-left p-6 rounded-2xl border-2 transition-all flex items-center justify-between group
                `}
                style={customStyles}
              >
                <span className="font-semibold text-lg">{option}</span>
                {showFeedback && isCorrect && <CheckCircle2 size={24} />}
                {showFeedback && isSelected && !isCorrect && <XCircle size={24} />}
                {!showFeedback && <div className="w-6 h-6 rounded-full border-2 transition-colors"
                  style={{ borderColor: isSelected ? '#fff' : 'var(--border)', backgroundColor: isSelected ? 'rgba(255,255,255,0.2)' : 'transparent' }} />}
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
              ${selectedOption !== null ? 'text-white shadow-xl hover:opacity-90' : 'cursor-not-allowed opacity-50'}
            `}
            style={{
              backgroundColor: selectedOption !== null ? 'var(--accent)' : 'rgba(0,0,0,0.2)',
              color: selectedOption !== null ? '#fff' : 'var(--text-secondary)'
            }}
          >
            {t.quiz.checkAnswer}
          </button>
        ) : (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl border animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ backgroundColor: 'rgba(0,0,0,0.2)', borderColor: 'var(--border)' }}>
              <h4 className="font-bold mb-2 uppercase tracking-widest text-xs" style={{ color: 'var(--text-secondary)' }}>{t.quiz.explanation}</h4>
              <p style={{ color: 'var(--text-primary)' }} className="leading-relaxed">{currentQuestion.explanation}</p>
            </div>
            <button
              onClick={handleNext}
              className="w-full py-5 text-slate-950 hover:bg-white/90 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2 group"
              style={{ backgroundColor: 'var(--text-primary)' }}
            >
              {t.quiz.nextQuestion} <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizModule;
