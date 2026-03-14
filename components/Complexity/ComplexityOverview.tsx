
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
        const lower = complexity.toLowerCase();
        if (lower.includes('n²')) return 'text-rose-400 font-semibold';
        if (lower.includes('n log n')) return 'text-amber-400 font-medium';
        if (lower.includes('n h') || lower.includes('nh')) return 'text-orange-400 font-medium';
        if (lower.includes('n log k')) return 'text-indigo-400 font-medium';
        if (lower.includes('log n')) return 'text-emerald-400 font-medium';
        if (complexity === 'O(n)') return 'text-sky-400';
        if (complexity === 'O(1)') return 'text-emerald-500 font-bold';
        return 'text-slate-300';
    };

    const getSpaceColor = (complexity: string) => {
        if (complexity === 'O(1)') return 'text-emerald-500 font-bold';
        if (complexity === 'O(n)') return 'text-rose-400 font-medium';
        if (complexity.includes('log n')) return 'text-amber-400 font-medium';
        if (complexity.includes('h')) return 'text-sky-400 font-medium';
        return 'text-slate-300';
    };

    return (
        <div className="space-y-12 pb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Notations Explanation */}
            <section className="bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-primary)] p-8 rounded-3xl border border-[var(--border)] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent)] opacity-5 blur-[100px] -mr-32 -mt-32" />
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="bg-[var(--accent)]/10 p-2 rounded-lg">
                            <Maximize2 className="text-[var(--accent)]" size={24} />
                        </div>
                        <h3 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>{t.complexity.notationsTitle}</h3>
                    </div>
                    <p className="text-[var(--text-secondary)] mb-8 leading-relaxed max-w-3xl">
                        {t.complexity.notationsDescription}
                    </p>
                    <div className="bg-amber-500/5 border border-amber-500/10 p-4 rounded-xl mb-8 text-xs italic" style={{ color: 'var(--text-secondary)' }}>
                        <strong>Note:</strong> {language === 'fr'
                            ? "Θ (Theta) est une borne exacte : elle minore ET majore simultanément f, c'est-à-dire ∃c₁,c₂>0, ∃n₀, ∀n≥n₀, c₁·g(n) ≤ f(n) ≤ c₂·g(n). On l'utilise quand le meilleur et le pire cas ont la même complexité asymptotique (ex: Tri Fusion, Tri par Sélection)."
                            : "Θ (Theta) is a tight bound: it simultaneously minorizes AND majorizes f, i.e. ∃c₁,c₂>0, ∃n₀, ∀n≥n₀, c₁·g(n) ≤ f(n) ≤ c₂·g(n). It is used when the best and worst cases share the same asymptotic complexity (e.g., Merge Sort, Selection Sort)."}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { name: t.complexity.bigO, desc: t.sheets.worstCase, color: 'text-rose-400', bg: 'bg-rose-400/10' },
                            { name: t.complexity.bigOmega, desc: t.sheets.bestCase, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
                            { name: t.complexity.bigTheta, desc: t.sheets.averageCase, color: 'text-amber-400', bg: 'bg-amber-400/10' }
                        ].map((n, i) => (
                            <div key={i} className="p-5 rounded-2xl border border-[var(--border)] bg-black/20 hover:border-[var(--accent)]/50 transition-all">
                                <span className={`text-lg font-bold ${n.color}`}>{n.name}</span>
                                <p className="text-xs text-[var(--text-secondary)] mt-1 uppercase tracking-wider font-bold">{n.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

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
                                <th className="px-6 py-4 font-semibold text-emerald-400">Ω - {t.sheets.bestCase}</th>
                                <th className="px-6 py-4 font-semibold text-amber-400">Θ - {t.sheets.averageCase}</th>
                                <th className="px-6 py-4 font-semibold text-rose-400">O - {t.sheets.worstCase}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {algos.map((algo, idx) => {
                                const isExact = algo.timeComplexity.best === algo.timeComplexity.worst;
                                return (
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
                                                {algo.timeComplexity.best.replace(/^O/, 'Ω')}
                                            </span>
                                        </td>
                                        <td className="px-6 py-5 font-mono">
                                            <div className="flex flex-col gap-1">
                                                <span className={getTimeColor(algo.timeComplexity.average)}>
                                                    {isExact ? algo.timeComplexity.average.replace(/^O/, 'Θ') : algo.timeComplexity.average}
                                                </span>
                                                {isExact && (
                                                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-500 border border-amber-500/20 w-fit font-bold uppercase tracking-tighter">
                                                        {t.sheets.exactComplexity}
                                                    </span>
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 font-mono">
                                            <span className={getTimeColor(algo.timeComplexity.worst)}>
                                                {algo.timeComplexity.worst}
                                            </span>
                                        </td>
                                    </tr>
                                );
                            })}
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
