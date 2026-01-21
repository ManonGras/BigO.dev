
import React from 'react';
import { ALGORITHMS, ALGORITHMS_FR } from '../../data/algorithms';
import {
  Clock,
  Database,
  CheckCircle2,
  XCircle,
  Target,
  ArrowRight,
  Search,
  ShieldCheck
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';

const TechnicalSheets: React.FC = () => {
  const { t, language } = useLanguage();
  const { currentPalette } = useTheme();

  const [selectedAlgoId, setSelectedAlgoId] = React.useState(ALGORITHMS[0].id);

  const algorithms = language === 'en' ? ALGORITHMS : ALGORITHMS_FR;
  const selectedAlgo = algorithms.find(a => a.id === selectedAlgoId) || algorithms[0];

  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-8">
      {/* Search & Selector */}
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: 'var(--text-secondary)' }} size={20} />
          <input
            type="text"
            placeholder={t.sheets.searchPlaceholder}
            className="w-full border rounded-2xl py-4 pl-12 pr-6 focus:outline-none focus:ring-2 transition-all shadow-xl"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderColor: 'var(--border)',
              color: 'var(--text-primary)',
              '--tw-ring-color': 'var(--accent)'
            } as any}
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto scrollbar-none">
          {algorithms.map((algo) => (
            <button
              key={algo.id}
              onClick={() => setSelectedAlgoId(algo.id)}
              className={`
                px-6 py-4 rounded-2xl whitespace-nowrap font-semibold transition-all shadow-lg border
                ${selectedAlgoId === algo.id ? 'text-white' : 'hover:text-white'}
              `}
              style={{
                backgroundColor: selectedAlgoId === algo.id ? 'var(--accent)' : 'var(--bg-secondary)',
                borderColor: selectedAlgoId === algo.id ? 'var(--accent)' : 'var(--border)',
                color: selectedAlgoId === algo.id ? '#fff' : 'var(--text-secondary)',
                boxShadow: selectedAlgoId === algo.id ? `0 10px 15px -3px ${currentPalette.colors.accent}44` : 'none'
              }}
            >
              {algo.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Info */}
        <div className="lg:col-span-2 space-y-8">
          <section className="border rounded-3xl p-8 shadow-2xl" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>
            <div className="flex items-center gap-3 font-bold tracking-widest text-xs uppercase mb-4" style={{ color: 'var(--accent)' }}>
              <span className="w-8 h-0.5" style={{ backgroundColor: 'var(--accent)' }} />
              {t.categories[selectedAlgo.category === 'Dynamic Programming' ? 'dynamicProgramming' : selectedAlgo.category.toLowerCase() as keyof typeof t.categories]}
            </div>
            <h1 className="text-4xl font-black mb-6 tracking-tight" style={{ color: 'var(--text-primary)' }}>{selectedAlgo.name}</h1>
            <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
              {selectedAlgo.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl border" style={{ backgroundColor: 'rgba(0,0,0,0.2)', borderColor: 'var(--border)' }}>
                <h4 className="flex items-center gap-2 font-bold mb-4 text-emerald-400">
                  <CheckCircle2 size={18} /> {t.sheets.advantages}
                </h4>
                <ul className="space-y-3">
                  {selectedAlgo.advantages.map((adv, i) => (
                    <li key={i} className="flex gap-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-600 shrink-0" />
                      {adv}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 rounded-2xl border" style={{ backgroundColor: 'rgba(0,0,0,0.2)', borderColor: 'var(--border)' }}>
                <h4 className="flex items-center gap-2 font-bold mb-4 text-rose-400">
                  <XCircle size={18} /> {t.sheets.disadvantages}
                </h4>
                <ul className="space-y-3">
                  {selectedAlgo.disadvantages.map((dis, i) => (
                    <li key={i} className="flex gap-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-600 shrink-0" />
                      {dis}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="border rounded-3xl p-8 shadow-2xl" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
              <Target size={20} style={{ color: 'var(--accent)' }} /> {t.sheets.recommendation}
            </h3>
            <div className="flex flex-wrap gap-3">
              {selectedAlgo.useCases.map((use, i) => (
                <div key={i} className="px-4 py-2 rounded-xl text-sm font-medium border"
                  style={{ backgroundColor: `${currentPalette.colors.accent}15`, color: 'var(--accent)', borderColor: `${currentPalette.colors.accent}33` }}>
                  {use}
                </div>
              ))}
            </div>
          </section>

          {(selectedAlgo.terminationProof || selectedAlgo.correctnessProof) && (
            <section className="border rounded-3xl p-8 shadow-2xl space-y-8" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>
              {selectedAlgo.terminationProof && (
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                    <ShieldCheck size={20} style={{ color: 'var(--accent)' }} />
                    {t.sheets.terminationProof}
                  </h3>
                  <div className="space-y-2">
                    {selectedAlgo.terminationProof.map((line, i) => (
                      <p key={i} className="leading-relaxed text-sm" style={{ color: 'var(--text-secondary)' }}>
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              )}
              {selectedAlgo.correctnessProof && (
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                    <ShieldCheck size={20} className="text-emerald-400" />
                    {t.sheets.correctnessProof}
                  </h3>
                  <div className="space-y-2">
                    {selectedAlgo.correctnessProof.map((line, i) => (
                      <p key={i} className="leading-relaxed text-sm" style={{ color: 'var(--text-secondary)' }}>
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </section>
          )}
        </div>

        {/* Complexity Sidebar */}
        <div className="space-y-8">
          <div className="border rounded-3xl p-8 shadow-2xl" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
              <Clock size={20} className="text-amber-400" /> {t.visualizer.timeComplexity}
            </h3>
            <div className="space-y-6">
              {[
                { label: t.sheets.bestCase, val: selectedAlgo.timeComplexity.best, color: 'text-emerald-400' },
                { label: t.sheets.averageCase, val: selectedAlgo.timeComplexity.average, color: 'text-amber-400' },
                { label: t.sheets.worstCase, val: selectedAlgo.timeComplexity.worst, color: 'text-rose-400' },
              ].map((c, i) => (
                <div key={i} className="flex justify-between items-center group">
                  <span className="font-medium" style={{ color: 'var(--text-secondary)' }}>{c.label}</span>
                  <span className={`font-mono text-xl font-black ${c.color} group-hover:scale-110 transition-transform`}>
                    {c.val}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="border rounded-3xl p-8 shadow-2xl" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
              <Database size={20} className="text-blue-400" /> {t.visualizer.spaceComplexity}
            </h3>
            <div className="flex justify-between items-center">
              <span className="font-medium" style={{ color: 'var(--text-secondary)' }}>{t.sheets.extraSpace}</span>
              <span className="font-mono text-xl font-black text-blue-400">
                {selectedAlgo.spaceComplexity}
              </span>
            </div>
          </div>

          <button
            className="w-full py-5 text-white rounded-3xl font-bold shadow-xl transition-all flex items-center justify-center gap-3 group hover:opacity-90"
            style={{
              backgroundColor: 'var(--accent)',
              boxShadow: `0 10px 25px -5px ${currentPalette.colors.accent}66`
            }}
          >
            {t.sheets.goToViz} <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSheets;
