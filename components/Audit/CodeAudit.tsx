
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';
import { auditExercises, AuditExercise } from '../../data/auditData';
import { Check, RotateCcw, ChevronRight, Info, BookOpen } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeAudit: React.FC = () => {
    const { t } = useLanguage();
    const { currentPalette } = useTheme();

    const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
    const [selectedLines, setSelectedLines] = useState<number[]>([]);
    const [hasChecked, setHasChecked] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    const currentExercise = auditExercises[currentExerciseIndex];

    // Reset state when exercise changes
    useEffect(() => {
        setSelectedLines([]);
        setHasChecked(false);
        setIsCorrect(false);
    }, [currentExerciseIndex]);

    const toggleLine = (lineNumber: number) => {
        if (hasChecked && isCorrect) return; // Prevent changes after success

        setSelectedLines(prev => {
            if (prev.includes(lineNumber)) {
                return prev.filter(line => line !== lineNumber);
            } else {
                return [...prev, lineNumber];
            }
        });
        // Reset check status if user modifies selection after a failure
        if (hasChecked && !isCorrect) {
            setHasChecked(false);
        }
    };

    const checkSolution = () => {
        const sortedSelected = [...selectedLines].sort();
        const sortedCorrect = [...currentExercise.correctLines].sort();

        // Check if arrays match (simple string comparison for arrays of primitives works)
        const isMatch = JSON.stringify(sortedSelected) === JSON.stringify(sortedCorrect);

        setIsCorrect(isMatch);
        setHasChecked(true);
    };

    const nextExercise = () => {
        setCurrentExerciseIndex((prev) => (prev + 1) % auditExercises.length);
    };

    const codeStyle = currentPalette.id === 'latte' ? oneLight : atomDark;

    return (
        <div className="flex flex-col h-full max-w-6xl mx-auto gap-6 pb-6">
            {/* Header */}
            <div
                className="p-6 rounded-2xl shadow-lg border"
                style={{
                    backgroundColor: 'var(--bg-secondary)',
                    borderColor: 'var(--border)'
                }}
            >
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: 'var(--accent)', color: '#fff' }}>
                        <BookOpen size={24} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold">{t.audit.title}</h2>
                        <p style={{ color: 'var(--text-secondary)' }}>
                            {t.audit.description}
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1 min-h-0">
                {/* Code View */}
                <div
                    className="rounded-2xl shadow-lg overflow-hidden border flex flex-col"
                    style={{
                        backgroundColor: 'var(--bg-secondary)',
                        borderColor: 'var(--border)'
                    }}
                >
                    <div
                        className="p-4 border-b flex justify-between items-center"
                        style={{ borderColor: 'var(--border)' }}
                    >
                        <h3 className="font-bold text-lg">{currentExercise.title}</h3>
                        <span
                            className="px-3 py-1 rounded-full text-sm font-mono font-bold"
                            style={{
                                backgroundColor: 'var(--bg-primary)',
                                color: 'var(--text-secondary)'
                            }}
                        >
                            {t.audit.linesSelected.replace('{0}', selectedLines.length.toString())}
                        </span>
                    </div>

                    <div className="flex-1 overflow-auto relative bg-[#1e1e1e]">
                        {/* We overlay transparent clickable divs over the syntax highlighter */}
                        <div className="absolute inset-0 z-10">
                            {currentExercise.code.split('\n').map((_, index) => (
                                <div
                                    key={index}
                                    onClick={() => toggleLine(index + 1)} // 1-based index matching for logic if desired, but let's stick to 0-based from data? 
                                    // Actually data uses 0-based for logic compatibility with split, 
                                    // but let's check our data. AuditData uses: correctLines: [2, 3].
                                    // In the Bubble Sort example:
                                    // 0: function...
                                    // 1:   const n...
                                    // 2:   for (let i...
                                    // 3:     for (let j...
                                    // So yes, 0-based.
                                    className={`
                            w-full h-[1.5em] cursor-pointer transition-colors duration-100
                            ${selectedLines.includes(index) ? 'bg-indigo-500/30 border-l-4 border-indigo-500' : 'hover:bg-white/5 border-l-4 border-transparent'}
                        `}
                                    style={{
                                        // Match line height of syntax highlighter usually ~1.5em or similar. 
                                        // We might need to adjust this to match perfectly.
                                        height: '1.5em'
                                    }}
                                />
                            ))}
                        </div>

                        <SyntaxHighlighter
                            language="javascript"
                            style={codeStyle}
                            customStyle={{
                                margin: 0,
                                padding: 0,
                                background: 'transparent',
                                fontSize: '1rem',
                                lineHeight: '1.5em',
                            }}
                            showLineNumbers={true}
                            // This is a hack to make sure lines align; padding in highlighter must match
                            containerProps={{
                                style: {
                                    pointerEvents: 'none', // Click pass-through to our loop above
                                }
                            }}
                            lineProps={{ style: { height: '1.5em' } }}
                            wrapLines={true}
                        >
                            {currentExercise.code}
                        </SyntaxHighlighter>
                    </div>
                </div>

                {/* Controls & Feedback */}
                <div className="flex flex-col gap-6">
                    {/* Status Card */}
                    <div
                        className="p-6 rounded-2xl shadow-lg border flex-1 flex flex-col justify-center items-center text-center gap-4 transition-all duration-500"
                        style={{
                            backgroundColor: hasChecked
                                ? (isCorrect ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)')
                                : 'var(--bg-secondary)',
                            borderColor: hasChecked
                                ? (isCorrect ? '#22c55e' : '#ef4444')
                                : 'var(--border)'
                        }}
                    >
                        {hasChecked ? (
                            <>
                                <div
                                    className="p-4 rounded-full mb-2"
                                    style={{
                                        backgroundColor: isCorrect ? '#22c55e' : '#ef4444',
                                        color: 'white'
                                    }}
                                >
                                    {isCorrect ? <Check size={48} /> : <Info size={48} />}
                                </div>
                                <h3
                                    className="text-2xl font-bold"
                                    style={{ color: isCorrect ? '#22c55e' : '#ef4444' }}
                                >
                                    {isCorrect ? t.audit.correct : t.audit.incorrect}
                                </h3>
                                {isCorrect && (
                                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                                        <p className="text-xl font-bold mb-2">Complexity: <span className="font-mono text-2xl">{currentExercise.complexity}</span></p>
                                        <p className="opacity-80 max-w-md">{currentExercise.explanation}</p>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="opacity-50">
                                <Info size={48} className="mx-auto mb-4" />
                                <p>{t.audit.description}</p>
                            </div>
                        )}
                    </div>

                    {/* Actions */}
                    <div className="grid grid-cols-2 gap-4">
                        {!hasChecked || !isCorrect ? (
                            <button
                                onClick={checkSolution}
                                disabled={selectedLines.length === 0}
                                className="col-span-2 p-4 rounded-xl font-bold text-white shadow-lg transition-transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                                style={{ backgroundColor: 'var(--accent)' }}
                            >
                                {t.audit.checkAudit}
                            </button>
                        ) : (
                            <button
                                onClick={nextExercise}
                                className="col-span-2 p-4 rounded-xl font-bold text-white shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2"
                                style={{ backgroundColor: '#22c55e' }}
                            >
                                {t.audit.nextAudit} <ChevronRight size={20} />
                            </button>
                        )}

                        <button
                            onClick={() => { setSelectedLines([]); setHasChecked(false); setIsCorrect(false); }}
                            className="p-4 rounded-xl font-bold border transition-colors hover:bg-black/5"
                            style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}
                        >
                            {t.audit.resetAudit}
                        </button>
                        <button
                            onClick={nextExercise}
                            className="p-4 rounded-xl font-bold border transition-colors hover:bg-black/5"
                            style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}
                        >
                            Skip
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CodeAudit;
