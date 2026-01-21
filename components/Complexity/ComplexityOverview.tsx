
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { ALGORITHMS, ALGORITHMS_FR } from '../../data/algorithms';
import { Timer, Maximize2, Layers } from 'lucide-react';

const ComplexityOverview: React.FC = () => {
    const { language, t } = useLanguage();
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
                    <h3 className="text-2xl font-bold text-slate-100">{t.complexity.timeTable}</h3>
                </div>

                <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-800/50 border-b border-slate-700">
                                <th className="px-6 py-4 text-slate-300 font-semibold">{t.complexity.algorithm}</th>
                                <th className="px-6 py-4 text-emerald-400 font-semibold">{t.sheets.bestCase}</th>
                                <th className="px-6 py-4 text-amber-400 font-semibold">{t.sheets.averageCase}</th>
                                <th className="px-6 py-4 text-rose-400 font-semibold">{t.sheets.worstCase}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {algos.map((algo, idx) => (
                                <tr
                                    key={algo.id}
                                    className={`
                    group transition-colors border-b border-slate-800/50 hover:bg-slate-800/30
                    ${idx % 2 === 0 ? 'bg-transparent' : 'bg-slate-800/10'}
                  `}
                                >
                                    <td className="px-6 py-5">
                                        <div className="flex flex-col">
                                            <span className="font-bold text-slate-100 group-hover:text-indigo-400 transition-colors uppercase tracking-wider text-sm">
                                                {algo.name}
                                            </span>
                                            <span className="text-xs text-slate-500 font-medium">{algo.category}</span>
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
                    <h3 className="text-2xl font-bold text-slate-100">{t.complexity.spaceTable}</h3>
                </div>

                <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl overflow-hidden shadow-2xl overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[600px]">
                        <thead>
                            <tr className="bg-slate-800/50 border-b border-slate-700">
                                <th className="px-6 py-4 text-slate-300 font-semibold">{t.complexity.algorithm}</th>
                                <th className="px-6 py-4 text-indigo-400 font-semibold">{t.sheets.extraSpace}</th>
                                <th className="px-6 py-4 text-slate-400 font-semibold">{t.complexity.algorithm} {language === 'en' ? 'Category' : 'Catégorie'}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {algos.map((algo, idx) => (
                                <tr
                                    key={algo.id}
                                    className={`
                    group transition-colors border-b border-slate-800/50 hover:bg-slate-800/30
                    ${idx % 2 === 0 ? 'bg-transparent' : 'bg-slate-800/10'}
                  `}
                                >
                                    <td className="px-6 py-5">
                                        <span className="font-bold text-slate-100 group-hover:text-indigo-400 transition-colors uppercase tracking-wider text-sm">
                                            {algo.name}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5 font-mono">
                                        <span className={getSpaceColor(algo.spaceComplexity)}>
                                            {algo.spaceComplexity}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5 text-slate-400 text-sm italic font-medium">
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
