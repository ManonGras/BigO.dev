
import React from 'react';
import { ALGORITHMS, ALGORITHMS_FR } from '../../data/algorithms';
import {
  Clock,
  Database,
  CheckCircle2,
  XCircle,
  Target,
  ArrowRight,
  Search
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const TechnicalSheets: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedAlgoId, setSelectedAlgoId] = React.useState(ALGORITHMS[0].id);

  const algorithms = language === 'en' ? ALGORITHMS : ALGORITHMS_FR;
  const selectedAlgo = algorithms.find(a => a.id === selectedAlgoId) || algorithms[0];

  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-8">
      {/* Search & Selector */}
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
          <input
            type="text"
            placeholder={t.sheets.searchPlaceholder}
            className="w-full bg-slate-900 border border-slate-800 rounded-2xl py-4 pl-12 pr-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all shadow-xl"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
          {algorithms.map((algo) => (
            <button
              key={algo.id}
              onClick={() => setSelectedAlgoId(algo.id)}
              className={`
                px-6 py-4 rounded-2xl whitespace-nowrap font-semibold transition-all shadow-lg
                ${selectedAlgoId === algo.id ? 'bg-indigo-600 text-white shadow-indigo-500/20' : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'}
              `}
            >
              {algo.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Info */}
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center gap-3 text-indigo-400 font-bold tracking-widest text-xs uppercase mb-4">
              <span className="w-8 h-0.5 bg-indigo-500" />
              {t.categories[selectedAlgo.category === 'Dynamic Programming' ? 'dynamicProgramming' : selectedAlgo.category.toLowerCase() as keyof typeof t.categories]}
            </div>
            <h1 className="text-4xl font-black mb-6 tracking-tight">{selectedAlgo.name}</h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              {selectedAlgo.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
                <h4 className="flex items-center gap-2 font-bold mb-4 text-emerald-400">
                  <CheckCircle2 size={18} /> {t.sheets.advantages}
                </h4>
                <ul className="space-y-3">
                  {selectedAlgo.advantages.map((adv, i) => (
                    <li key={i} className="flex gap-3 text-sm text-slate-300">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-600 shrink-0" />
                      {adv}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
                <h4 className="flex items-center gap-2 font-bold mb-4 text-rose-400">
                  <XCircle size={18} /> {t.sheets.disadvantages}
                </h4>
                <ul className="space-y-3">
                  {selectedAlgo.disadvantages.map((dis, i) => (
                    <li key={i} className="flex gap-3 text-sm text-slate-300">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-600 shrink-0" />
                      {dis}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Target size={20} className="text-indigo-400" /> {t.sheets.recommendation}
            </h3>
            <div className="flex flex-wrap gap-3">
              {selectedAlgo.useCases.map((use, i) => (
                <div key={i} className="bg-indigo-600/10 text-indigo-400 px-4 py-2 rounded-xl text-sm font-medium border border-indigo-600/20">
                  {use}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Complexity Sidebar */}
        <div className="space-y-8">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
              <Clock size={20} className="text-amber-400" /> {t.visualizer.timeComplexity}
            </h3>
            <div className="space-y-6">
              {[
                { label: t.sheets.bestCase, val: selectedAlgo.timeComplexity.best, color: 'text-emerald-400' },
                { label: t.sheets.averageCase, val: selectedAlgo.timeComplexity.average, color: 'text-amber-400' },
                { label: t.sheets.worstCase, val: selectedAlgo.timeComplexity.worst, color: 'text-rose-400' },
              ].map((c, i) => (
                <div key={i} className="flex justify-between items-center group">
                  <span className="text-slate-500 font-medium">{c.label}</span>
                  <span className={`font-mono text-xl font-black ${c.color} group-hover:scale-110 transition-transform`}>
                    {c.val}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
              <Database size={20} className="text-blue-400" /> {t.visualizer.spaceComplexity}
            </h3>
            <div className="flex justify-between items-center">
              <span className="text-slate-500 font-medium">{t.sheets.extraSpace}</span>
              <span className="font-mono text-xl font-black text-blue-400">
                {selectedAlgo.spaceComplexity}
              </span>
            </div>
          </div>

          <button className="w-full py-5 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white rounded-3xl font-bold shadow-xl shadow-indigo-600/20 transition-all flex items-center justify-center gap-3 group">
            {t.sheets.goToViz} <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSheets;
