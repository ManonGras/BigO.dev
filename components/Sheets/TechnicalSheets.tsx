
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
  ShieldCheck,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';

const TechnicalSheets: React.FC = () => {
  const { t, language } = useLanguage();
  const { currentPalette } = useTheme();

  const [selectedAlgoId, setSelectedAlgoId] = React.useState(ALGORITHMS[0].id);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [collapsedCategories, setCollapsedCategories] = React.useState<Set<string>>(new Set());

  const algorithms = language === 'en' ? ALGORITHMS : ALGORITHMS_FR;
  const selectedAlgo = algorithms.find(a => a.id === selectedAlgoId) || algorithms[0];

  // Group by category
  const categoryLabels: Record<string, string> = {
    Sorting: language === 'fr' ? 'Tri' : 'Sorting',
    Searching: language === 'fr' ? 'Recherche' : 'Searching',
    Trees: language === 'fr' ? 'Arbres' : 'Trees',
    LinkedLists: language === 'fr' ? 'Listes Chaînées' : 'Linked Lists',
  };

  const grouped = algorithms.reduce((acc, algo) => {
    const cat = algo.category;
    if (!acc[cat]) acc[cat] = [];
    const matchesSearch = searchQuery.trim() === '' ||
      algo.name.toLowerCase().includes(searchQuery.toLowerCase());
    if (matchesSearch) acc[cat].push(algo);
    return acc;
  }, {} as Record<string, typeof algorithms>);

  const toggleCategory = (cat: string) => {
    setCollapsedCategories(prev => {
      const next = new Set(prev);
      next.has(cat) ? next.delete(cat) : next.add(cat);
      return next;
    });
  };

  return (
    <div className="max-w-7xl mx-auto flex gap-6 h-full">
      {/* Left: Algorithm Selector */}
      <div
        className="w-56 shrink-0 flex flex-col gap-3 rounded-2xl border p-3 h-fit sticky top-0"
        style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}
      >
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--text-secondary)' }} size={14} />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder={t.sheets.searchPlaceholder}
            className="w-full rounded-xl pl-8 pr-3 py-2 text-xs focus:outline-none focus:ring-1 transition-all"
            style={{
              backgroundColor: 'var(--bg-primary)',
              borderColor: 'var(--border)',
              color: 'var(--text-primary)',
              border: '1px solid var(--border)',
            }}
          />
        </div>

        {/* Grouped list */}
        <div className="space-y-1">
          {Object.entries(grouped).map(([cat, algos]) => {
            if (algos.length === 0) return null;
            const isCollapsed = collapsedCategories.has(cat);
            return (
              <div key={cat}>
                <button
                  onClick={() => toggleCategory(cat)}
                  className="w-full flex items-center justify-between px-2 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-colors hover:bg-white/5"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <span>{categoryLabels[cat] || cat}</span>
                  {isCollapsed ? <ChevronRight size={12} /> : <ChevronDown size={12} />}
                </button>
                {!isCollapsed && (
                  <div className="mt-0.5 space-y-0.5">
                    {algos.map(algo => (
                      <button
                        key={algo.id}
                        onClick={() => setSelectedAlgoId(algo.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all truncate`}
                        style={{
                          backgroundColor: selectedAlgoId === algo.id ? `${currentPalette.colors.accent}20` : 'transparent',
                          color: selectedAlgoId === algo.id ? 'var(--accent)' : 'var(--text-secondary)',
                          fontWeight: selectedAlgoId === algo.id ? 700 : 500,
                          borderLeft: selectedAlgoId === algo.id ? `2px solid var(--accent)` : '2px solid transparent',
                          paddingLeft: selectedAlgoId === algo.id ? '10px' : '12px',
                        }}
                      >
                        {algo.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Right: Content */}
      <div className="flex-1 min-w-0 grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* Main Info */}
        <div className="lg:col-span-2 space-y-6">
          <section
            className="border rounded-2xl p-6 shadow-xl"
            style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}
          >
            <div className="flex items-center gap-2 font-bold tracking-widest text-[10px] uppercase mb-3" style={{ color: 'var(--accent)' }}>
              <span className="w-6 h-0.5 rounded-full" style={{ backgroundColor: 'var(--accent)' }} />
              {selectedAlgo.category}
            </div>
            <h1 className="text-3xl font-black mb-4 tracking-tight" style={{ color: 'var(--text-primary)' }}>
              {selectedAlgo.name}
            </h1>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
              {selectedAlgo.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl border" style={{ backgroundColor: 'rgba(0,0,0,0.2)', borderColor: 'var(--border)' }}>
                <h4 className="flex items-center gap-2 font-bold mb-3 text-sm text-emerald-400">
                  <CheckCircle2 size={16} /> {t.sheets.advantages}
                </h4>
                <ul className="space-y-2">
                  {selectedAlgo.advantages.map((adv, i) => (
                    <li key={i} className="flex gap-2.5 text-sm" style={{ color: 'var(--text-secondary)' }}>
                      <div className="mt-1.5 w-1 h-1 rounded-full bg-emerald-500/50 shrink-0" />
                      {adv}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-5 rounded-xl border" style={{ backgroundColor: 'rgba(0,0,0,0.2)', borderColor: 'var(--border)' }}>
                <h4 className="flex items-center gap-2 font-bold mb-3 text-sm text-rose-400">
                  <XCircle size={16} /> {t.sheets.disadvantages}
                </h4>
                <ul className="space-y-2">
                  {selectedAlgo.disadvantages.map((dis, i) => (
                    <li key={i} className="flex gap-2.5 text-sm" style={{ color: 'var(--text-secondary)' }}>
                      <div className="mt-1.5 w-1 h-1 rounded-full bg-rose-500/50 shrink-0" />
                      {dis}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section
            className="border rounded-2xl p-6 shadow-xl"
            style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}
          >
            <h3 className="text-base font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
              <Target size={16} style={{ color: 'var(--accent)' }} /> {t.sheets.recommendation}
            </h3>
            <div className="flex flex-wrap gap-2">
              {selectedAlgo.useCases.map((use, i) => (
                <div key={i} className="px-3 py-1.5 rounded-lg text-xs font-medium border"
                  style={{ backgroundColor: `${currentPalette.colors.accent}15`, color: 'var(--accent)', borderColor: `${currentPalette.colors.accent}33` }}>
                  {use}
                </div>
              ))}
            </div>
          </section>

          {(selectedAlgo.terminationProof || selectedAlgo.correctnessProof) && (
            <section
              className="border rounded-2xl p-6 shadow-xl space-y-6"
              style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}
            >
              {selectedAlgo.terminationProof && (
                <div>
                  <h3 className="text-base font-bold mb-3 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                    <ShieldCheck size={16} style={{ color: 'var(--accent)' }} />
                    {t.sheets.terminationProof}
                  </h3>
                  <div className="space-y-2">
                    {selectedAlgo.terminationProof.map((line, i) => (
                      <p key={i} className="leading-relaxed text-sm" style={{ color: 'var(--text-secondary)' }}>{line}</p>
                    ))}
                  </div>
                </div>
              )}
              {selectedAlgo.correctnessProof && (
                <div>
                  <h3 className="text-base font-bold mb-3 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                    <ShieldCheck size={16} className="text-emerald-400" />
                    {t.sheets.correctnessProof}
                  </h3>
                  <div className="space-y-2">
                    {selectedAlgo.correctnessProof.map((line, i) => (
                      <p key={i} className="leading-relaxed text-sm" style={{ color: 'var(--text-secondary)' }}>{line}</p>
                    ))}
                  </div>
                </div>
              )}
            </section>
          )}
        </div>

        {/* Complexity Sidebar */}
        <div className="space-y-4 lg:sticky lg:top-4">
          <div className="border rounded-2xl p-5 shadow-xl" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>
            <h3 className="text-sm font-bold mb-5 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
              <Clock size={16} className="text-amber-400" /> {t.visualizer.timeComplexity}
            </h3>
            <div className="space-y-4">
              {(() => {
                const isExact = selectedAlgo.timeComplexity.best === selectedAlgo.timeComplexity.worst;
                return [
                  { label: t.sheets.bestCase, symbol: 'Ω', val: selectedAlgo.timeComplexity.best, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
                  {
                    label: isExact ? t.sheets.exactComplexity : t.sheets.averageCase,
                    symbol: isExact ? 'Θ' : 'O',
                    val: selectedAlgo.timeComplexity.average,
                    color: 'text-amber-400',
                    bg: 'bg-amber-500/10'
                  },
                  { label: t.sheets.worstCase, symbol: 'O', val: selectedAlgo.timeComplexity.worst, color: 'text-rose-400', bg: 'bg-rose-500/10' },
                ].map((c, i) => (
                  <div key={i} className={`flex justify-between items-center p-3 rounded-xl ${c.bg}`}>
                    <span className="text-xs font-semibold" style={{ color: 'var(--text-secondary)' }}>{c.label}</span>
                    <span className={`font-mono text-lg font-black ${c.color}`}>
                      {c.val.replace(/^O/, c.symbol)}
                    </span>
                  </div>
                ));
              })()}
            </div>
          </div>

          <div className="border rounded-2xl p-5 shadow-xl" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>
            <h3 className="text-sm font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
              <Database size={16} className="text-blue-400" /> {t.visualizer.spaceComplexity}
            </h3>
            <div className="flex justify-between items-center p-3 rounded-xl bg-blue-500/10">
              <span className="text-xs font-semibold" style={{ color: 'var(--text-secondary)' }}>{t.sheets.extraSpace}</span>
              <span className="font-mono text-lg font-black text-blue-400">
                {selectedAlgo.spaceComplexity}
              </span>
            </div>
          </div>

          <button
            className="w-full py-3 text-white rounded-xl font-bold shadow-lg transition-all flex items-center justify-center gap-2 group hover:opacity-90 text-sm"
            style={{
              backgroundColor: 'var(--accent)',
              boxShadow: `0 8px 20px -5px ${currentPalette.colors.accent}55`
            }}
          >
            {t.sheets.goToViz} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSheets;
