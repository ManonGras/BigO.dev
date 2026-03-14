
import React from 'react';
import { SCENARIOS_FR, SCENARIOS_EN, ArrayScenario } from '../../data/scenarios';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
    Zap, 
    AlertCircle, 
    CheckCircle2, 
    ArrowRight, 
    Layers, 
    Trophy,
    Info,
    ChevronDown,
    ChevronUp
} from 'lucide-react';

const ArrayScenarios: React.FC = () => {
    const { language, t } = useLanguage();
    const scenarios = language === 'fr' ? SCENARIOS_FR : SCENARIOS_EN;
    const [expandedId, setExpandedId] = React.useState<string | null>(null);

    return (
        <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-700">
            {/* Header section */}
            <div className="relative p-8 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent backdrop-blur-md">
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                    <div className="w-20 h-20 bg-indigo-500 rounded-3xl flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.5)] transform -rotate-6">
                        <Layers size={40} className="text-white" />
                    </div>
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl font-black text-white tracking-tight mb-2">
                            {language === 'fr' ? 'Optimisation de Tableaux' : 'Array Pattern Optimization'}
                        </h1>
                        <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
                            {language === 'fr' 
                                ? 'Découvrez comment exploiter les propriétés spécifiques des tableaux pour passer d\'une complexité naïve à une performance optimale.' 
                                : 'Learn how to leverage specific array properties to move from naive complexity to optimal performance.'}
                        </p>
                    </div>
                </div>
                
                {/* Decorative blobs */}
                <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px]" />
                <div className="absolute bottom-[-20%] left-[-10%] w-48 h-48 bg-purple-500/10 rounded-full blur-[80px]" />
            </div>

            {/* Scenarios Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {scenarios.map((scenario) => (
                    <ScenarioCard 
                        key={scenario.id} 
                        scenario={scenario} 
                        isExpanded={expandedId === scenario.id}
                        onToggle={() => setExpandedId(expandedId === scenario.id ? null : scenario.id)}
                        language={language}
                    />
                ))}
            </div>

            {/* Quick Summary / Things to Remember */}
            <div className="bg-[#0f172a] border border-white/5 rounded-[2rem] p-8 shadow-2xl">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                    <Trophy className="text-amber-400" />
                    {language === 'fr' ? 'Points Clés à Retenir' : 'Key Things to Remember'}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        {
                            icon: Zap,
                            color: 'text-indigo-400',
                            title: language === 'fr' ? 'Prétraitement' : 'Pre-processing',
                            text: language === 'fr' 
                                ? 'Vérifiez toujours si le tableau est trié ou structuré avant de choisir votre approche.' 
                                : 'Always check if the array is sorted or structured before choosing your approach.'
                        },
                        {
                            icon: AlertCircle,
                            color: 'text-amber-400',
                            title: language === 'fr' ? 'Bornes' : 'Edge Cases',
                            text: language === 'fr' 
                                ? 'Faites attention aux tableaux de taille 0 ou 1 et aux indices de fin.' 
                                : 'Watch out for arrays of size 0 or 1 and boundary indices.'
                        },
                        {
                            icon: Trophy,
                            color: 'text-emerald-400',
                            title: language === 'fr' ? 'Invariants' : 'Invariants',
                            text: language === 'fr' 
                                ? 'Identifiez ce qui reste vrai à chaque étape (pivot, segment trié, sommet).' 
                                : 'Identify what stays true at each step (pivot, sorted segment, peak).'
                        }
                    ].map((item, i) => (
                        <div key={i} className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl flex flex-col gap-3">
                            <item.icon className={item.color} size={24} />
                            <h4 className="font-bold text-white uppercase text-[10px] tracking-widest">{item.title}</h4>
                            <p className="text-sm text-slate-400 leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

interface ScenarioCardProps {
    scenario: ArrayScenario;
    isExpanded: boolean;
    onToggle: () => void;
    language: string;
}

const ScenarioCard: React.FC<ScenarioCardProps> = ({ scenario, isExpanded, onToggle, language }) => {
    return (
        <div 
            className={`group transition-all duration-500 rounded-[2rem] border overflow-hidden ${
                isExpanded ? 'bg-[#0f172a] border-indigo-500/30' : 'bg-[#0f172a]/40 border-white/5 hover:border-white/10'
            }`}
        >
            <div 
                onClick={onToggle}
                className="p-6 cursor-pointer flex items-center justify-between"
            >
                <div>
                    <h2 className="text-xl font-black text-white mb-1 group-hover:text-indigo-400 transition-colors">
                        {scenario.title}
                    </h2>
                    <p className="text-sm text-slate-500 line-clamp-1">{scenario.description}</p>
                </div>
                <div className={`p-2 rounded-full transition-transform duration-300 ${isExpanded ? 'rotate-180 bg-indigo-500/20 text-indigo-400' : 'text-slate-600'}`}>
                    <ChevronDown size={20} />
                </div>
            </div>

            <div className={`transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[800px] opacity-100 p-6 pt-0' : 'max-h-0 opacity-0'}`}>
                <div className="space-y-6">
                    {/* Comparison Row */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-rose-500/5 border border-rose-500/10 p-4 rounded-2xl">
                            <span className="text-[9px] uppercase font-black text-rose-500 tracking-[0.2em] block mb-2 opacity-70">
                                {language === 'fr' ? 'Approche Naïve' : 'Naive Approach'}
                            </span>
                            <div className="font-bold text-white text-sm mb-1">{scenario.naiveAlgo}</div>
                            <div className="font-mono text-xs text-rose-400 font-bold tracking-wider">{scenario.naiveComplexity}</div>
                        </div>
                        <div className="bg-emerald-500/5 border border-emerald-500/10 p-4 rounded-2xl">
                            <span className="text-[9px] uppercase font-black text-emerald-500 tracking-[0.2em] block mb-2 opacity-70">
                                {language === 'fr' ? 'Approche Optimale' : 'Optimal Approach'}
                            </span>
                            <div className="font-bold text-white text-sm mb-1">{scenario.optimalAlgo}</div>
                            <div className="font-mono text-xs text-emerald-400 font-bold tracking-wider">{scenario.optimalComplexity}</div>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl">
                        <div className="flex items-start gap-3">
                            <Info size={16} className="text-indigo-400 mt-0.5 shrink-0" />
                            <p className="text-sm text-slate-400 leading-relaxed italic">
                                {scenario.description}
                            </p>
                        </div>
                    </div>

                    {/* Key points list */}
                    <div>
                        <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                             {language === 'fr' ? 'Points clés' : 'Key points'}
                        </h4>
                        <ul className="space-y-3">
                            {scenario.keyPoints.map((point, idx) => (
                                <li key={idx} className="flex gap-3 text-sm text-slate-400">
                                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Action */}
                    <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-black uppercase tracking-widest hover:bg-indigo-500 hover:text-white transition-all group/btn">
                        {language === 'fr' ? 'Voir la logique' : 'See Logic'}
                        <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ArrayScenarios;
