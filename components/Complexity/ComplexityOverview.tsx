
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { ALGORITHMS, ALGORITHMS_FR } from '../../data/algorithms';
import { Timer, Maximize2, Layers } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';


const ComplexityOverview: React.FC = () => {
    const { language, t } = useLanguage();
    const { currentPalette } = useTheme();
    const algos = language === 'en' ? ALGORITHMS : ALGORITHMS_FR;

    const getTimeColor = (complexity: string) => {
        if (complexity.includes('n²')) return 'text-rose-400 font-semibold';
        if (complexity.includes('n log n')) return 'text-amber-400 font-medium';
        if (complexity.includes('log n')) return 'text-emerald-400 font-medium';
        if (complexity === 'O(n)') return 'text-indigo-400';
        if (complexity === 'O(1)') return 'text-sky-400 font-bold';
        return 'text-slate-300';
    };

    const getSpaceColor = (complexity: string) => {
        if (complexity === 'O(1)') return 'text-sky-400 font-bold';
        if (complexity === 'O(n)') return 'text-rose-400 font-medium';
        if (complexity.includes('log n')) return 'text-amber-400 font-medium';
        return 'text-slate-300';
    };

    return (
        <div className="space-y-12 pb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Time Complexity Table */}
            <section>
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-amber-500/10 p-2 rounded-lg">
                        <Timer className="text-amber-500" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>{t.complexity.timeTable}</h3>
                </div>

                <div
                    className="backdrop-blur-xl border rounded-2xl overflow-hidden shadow-2xl"
                    style={{ backgroundColor: `${currentPalette.colors.bgSecondary}88`, borderColor: 'var(--border)' }}
                >
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b" style={{ backgroundColor: `${currentPalette.colors.bgSecondary}cc`, borderColor: 'var(--border)' }}>
                                <th className="px-6 py-4 font-semibold" style={{ color: 'var(--text-secondary)' }}>{t.complexity.algorithm}</th>
                                <th className="px-6 py-4 font-semibold text-emerald-400">{t.sheets.bestCase}</th>
                                <th className="px-6 py-4 font-semibold text-amber-400">{t.sheets.averageCase}</th>
                                <th className="px-6 py-4 font-semibold text-rose-400">{t.sheets.worstCase}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {algos.map((algo, idx) => (
                                <tr
                                    key={algo.id}
                                    className="group transition-colors border-b hover:opacity-80"
                                    style={{
                                        backgroundColor: idx % 2 === 0 ? 'transparent' : `${currentPalette.colors.bgSecondary}44`,
                                        borderColor: `${currentPalette.colors.border}44`
                                    }}
                                >
                                    <td className="px-6 py-5">
                                        <div className="flex flex-col">
                                            <span className="font-bold uppercase tracking-wider text-sm transition-colors group-hover:text-indigo-400"
                                                style={{ color: 'var(--text-primary)' }}>
                                                {algo.name}
                                            </span>
                                            <span className="text-xs font-medium opacity-60" style={{ color: 'var(--text-secondary)' }}>{algo.category}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5 font-mono">
                                        <span className={getTimeColor(algo.timeComplexity.best)}>
                                            {algo.timeComplexity.best}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5 font-mono">
                                        <span className={getTimeColor(algo.timeComplexity.average)}>
                                            {algo.timeComplexity.average}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5 font-mono">
                                        <span className={getTimeColor(algo.timeComplexity.worst)}>
                                            {algo.timeComplexity.worst}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Space Complexity Table */}
            <section>
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-indigo-500/10 p-2 rounded-lg">
                        <Layers className="text-indigo-500" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>{t.complexity.spaceTable}</h3>
                </div>

                <div
                    className="backdrop-blur-xl border rounded-2xl overflow-hidden shadow-2xl overflow-x-auto"
                    style={{ backgroundColor: `${currentPalette.colors.bgSecondary}88`, borderColor: 'var(--border)' }}
                >
                    <table className="w-full text-left border-collapse min-w-[600px]">
                        <thead>
                            <tr className="border-b" style={{ backgroundColor: `${currentPalette.colors.bgSecondary}cc`, borderColor: 'var(--border)' }}>
                                <th className="px-6 py-4 font-semibold" style={{ color: 'var(--text-secondary)' }}>{t.complexity.algorithm}</th>
                                <th className="px-6 py-4 font-semibold" style={{ color: 'var(--accent)' }}>{t.sheets.extraSpace}</th>
                                <th className="px-6 py-4 font-semibold opacity-60" style={{ color: 'var(--text-secondary)' }}>{t.complexity.algorithm} {language === 'en' ? 'Category' : 'Catégorie'}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {algos.map((algo, idx) => (
                                <tr
                                    key={algo.id}
                                    className="group transition-colors border-b hover:opacity-80"
                                    style={{
                                        backgroundColor: idx % 2 === 0 ? 'transparent' : `${currentPalette.colors.bgSecondary}44`,
                                        borderColor: `${currentPalette.colors.border}44`
                                    }}
                                >
                                    <td className="px-6 py-5">
                                        <span className="font-bold uppercase tracking-wider text-sm transition-colors group-hover:text-indigo-400"
                                            style={{ color: 'var(--text-primary)' }}>
                                            {algo.name}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5 font-mono">
                                        <span className={getSpaceColor(algo.spaceComplexity)}>
                                            {algo.spaceComplexity}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5 text-sm italic font-medium opacity-60" style={{ color: 'var(--text-secondary)' }}>
                                        {algo.category}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default ComplexityOverview;
