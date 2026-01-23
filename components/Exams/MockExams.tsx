import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';
import { GraduationCap, BookText, Lightbulb, ChevronRight, CheckCircle2, AlertCircle, Eye, EyeOff, Code, Terminal } from 'lucide-react';

const PythonIDE: React.FC<{ code: string }> = ({ code }) => {
    // Basic syntax highlighting logic for Python
    const highlight = (text: string) => {
        const keywords = ['def', 'if', 'else', 'elif', 'return', 'assert', 'None', 'for', 'in', 'range'];
        const builtins = ['print', 'len', 'log', 'range', 'None'];
        const operators = ['==', '>', '<', '=', '+', '-', '//', '*', '%'];

        return text.split('\n').map((line, lineIdx) => {
            // Preservation of leading spaces for indentation
            const leadingSpaces = line.match(/^\s*/)?.[0] || '';
            const content = line.trim();

            if (!content) return <div key={lineIdx} className="h-4" />;
            if (content.startsWith('#')) return <div key={lineIdx} className="pl-4 font-mono text-slate-500 italic">{leadingSpaces}{content}</div>;

            const tokens = content.split(/(\s+|[().,\[\]:!/])/);

            return (
                <div key={lineIdx} className="flex font-mono text-sm group min-h-[1.25rem]">
                    <div className="w-8 text-right pr-4 text-slate-600 select-none border-r border-white/5 mr-4 group-hover:text-slate-400 transition-colors flex-shrink-0">{lineIdx + 1}</div>
                    <div className="flex whitespace-pre">
                        <span>{leadingSpaces}</span>
                        {tokens.map((token, tokenIdx) => {
                            if (!token) return null;
                            if (keywords.includes(token)) return <span key={tokenIdx} className="text-pink-400 font-bold">{token}</span>;
                            if (builtins.includes(token)) return <span key={tokenIdx} className="text-blue-400">{token}</span>;
                            if (operators.includes(token)) return <span key={tokenIdx} className="text-amber-400">{token}</span>;
                            if (token.match(/^\d+$/)) return <span key={tokenIdx} className="text-orange-400">{token}</span>;
                            if (token.match(/^[A-Z][a-z0-9_]*$/)) return <span key={tokenIdx} className="text-purple-400">{token}</span>;
                            if (token.match(/^[a-z_][a-z0-0_]*$/)) return <span key={tokenIdx} className="text-indigo-300">{token}</span>;
                            return <span key={tokenIdx} className="text-slate-300">{token}</span>;
                        })}
                    </div>
                </div>
            );
        });
    };

    return (
        <div className="relative group my-8">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 rounded-[2rem] blur group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative rounded-[1.5rem] bg-[#0d1117] border border-white/10 overflow-hidden shadow-2xl">
                <div className="bg-[#161b22] px-6 py-3 border-b border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="flex gap-1.5 mr-4">
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                            <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                        </div>
                        <Terminal size={14} className="text-slate-500" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">algorithm_analysis.py</span>
                    </div>
                    <div className="text-[10px] font-bold text-slate-600 px-2 py-0.5 rounded-md border border-white/5 bg-black/20">UTF-8</div>
                </div>
                <div className="p-6 overflow-x-auto whitespace-nowrap bg-[#0d1117] min-h-[100px]">
                    {highlight(code)}
                </div>
            </div>
        </div>
    );
};

const MockExams: React.FC = () => {
    const { t, language } = useLanguage();
    const { currentPalette } = useTheme();
    const [activeExoId, setActiveExoId] = useState('exo-01');
    const [visibleSolutions, setVisibleSolutions] = useState<Record<string, boolean>>({});

    const toggleSolution = (qId: string) => {
        setVisibleSolutions(prev => ({
            ...prev,
            [qId]: !prev[qId]
        }));
    };

    const exercises = [
        {
            id: 'exo-01',
            title: language === 'fr' ? 'Élément le plus original' : 'Most Original Element',
            statement: language === 'fr'
                ? 'Étant donné une liste L de nombres de longueur n ⩾ 2, déterminer l’élément le plus original de L, i.e. celui qui y apparaît le moins de fois (ou l’un quelconque d’entre eux, en cas d’égalité).'
                : 'Given a list L of numbers of length n ⩾ 2, determine the most original element of L, i.e., the one that appears the least number of times (or any one of them in case of a tie).',
            questions: [
                {
                    id: 'q1',
                    label: language === 'fr' ? 'Approche Naïve' : 'Naive Approach',
                    text: language === 'fr'
                        ? 'Décrire un algorithme naïf permettant de résoudre ce problème sans modifier la liste L, et avec une mémoire auxiliaire constante.'
                        : 'Describe a naive algorithm to solve this problem without modifying the list L, and with constant auxiliary memory.',
                    solution: language === 'fr'
                        ? 'On parcourt chaque élément L[i] de la liste. Pour chaque L[i], on reparcourt toute la liste pour compter combien de fois il apparaît. On stocke le minimum de ces comptes rencontrés ainsi que l’élément correspondant.'
                        : 'Iterate through each element L[i] of the list. For each L[i], iterate through the entire list again to count how many times it appears. Store the minimum count found so far and the corresponding element.',
                    complexity: 'O(n²)',
                    justification: language === 'fr'
                        ? 'On utilise deux boucles imbriquées, chacune allant de 1 à n. Il y a donc environ n * n opérations de comparaison.'
                        : 'Two nested loops are used, each from 1 to n. Thus, there are approximately n * n comparison operations.'
                },
                {
                    id: 'q2',
                    label: language === 'fr' ? 'Optimisation Temporelle' : 'Time Optimization',
                    text: language === 'fr'
                        ? 'Quelles stratégies permettent d\'améliorer la complexité temporelle du problème ?'
                        : 'What strategies can improve the time complexity of the problem?',
                    solution: language === 'fr'
                        ? 'On peut trier la liste (ex: tri fusion) en temps O(n log n) dans une copie de L, puis compter les occurrences en un seul parcours O(n). Ou utiliser une table de hachage pour compter les fréquences en temps O(n) mais avec O(n) d’espace mémoire.'
                        : 'You can sort the list (e.g., Merge Sort) in O(n log n) time in a copy of L, then count occurrences in a single O(n) pass. Alternatively, use a Hash Map to count frequencies in O(n) time but with O(n) space complexity.',
                    complexity: 'O(n log n) / O(n)',
                }
            ],
            footer: language === 'fr'
                ? 'La complexité temporelle est cruciale ici : l\'algorithme naïf en O(n²) devient impraticable pour de grandes listes (ex: n = 100 000).'
                : 'Time complexity is crucial here: the O(n²) naive algorithm becomes impractical for large lists (e.g., n = 100,000).'
        },
        {
            id: 'exo-02',
            title: language === 'fr' ? 'Tableaux Montagnes' : 'Mountain Arrays',
            statement: language === 'fr'
                ? 'Un tableau T de n entiers est une montagne s’il est constitué d’une première partie strictement croissante, suivie d’une deuxième strictement décroissante, chacune pouvant éventuellement être vide.'
                : 'A mountain array T of n integers has a strictly increasing first part followed by a strictly decreasing second part.',
            questions: [
                {
                    id: 'q1',
                    label: language === 'fr' ? 'Test de Structure' : 'Structure Test',
                    text: language === 'fr'
                        ? 'Proposer un algorithme est_une_montagne(T) de complexité optimale qui teste si T respecte la définition.'
                        : 'Propose an optimal est_une_montagne(T) algorithm that tests if T follows the definition.',
                    solution: language === 'fr'
                        ? 'On parcourt le tableau tant que T[i] < T[i+1]. Si on arrive à la fin, c\'est une montagne (croissante). Sinon, dès que T[i] > T[i+1], on continue le parcours en vérifiant que T[k] > T[k+1] jusqu\'à la fin. Si T[i] == T[i+1] à n\'importe quel moment, ce n\'est pas une montagne.'
                        : 'Iterate as long as T[i] < T[i+1]. If you reach the end, it\'s a mountain (increasing). Otherwise, as soon as T[mid] > T[mid+1], continue and verify that T[k] > T[k+1] until the end. If T[i] == T[i+1] at any point, it\'s not a mountain.',
                    complexity: 'O(n)',
                    justification: language === 'fr' ? 'Un seul parcours complet du tableau est nécessaire.' : 'A single full pass of the array is required.'
                },
                {
                    id: 'q2',
                    label: language === 'fr' ? 'Recherche du Minimum' : 'Minimum Search',
                    text: language === 'fr'
                        ? 'Proposer un algorithme pied(T) optimal qui renvoie le plus petit élément du tableau.'
                        : 'Propose an optimal pied(T) algorithm that returns the smallest element of the array.',
                    solution: language === 'fr'
                        ? 'Le minimum d\'une montagne ne peut se trouver qu\'aux extrémités (indice 0 ou n-1) car toutes les autres valeurs sont entourées de valeurs plus petites ou plus grandes selon la pente locale.'
                        : 'The minimum of a mountain can only be at the extremities (index 0 or n-1) because all other values are surrounded by smaller or larger values depending on the local slope.',
                    complexity: 'O(1)',
                    justification: language === 'fr' ? 'On ne compare que deux éléments.' : 'Only two elements are compared.'
                },
                {
                    id: 'q3',
                    label: language === 'fr' ? 'Prédicat de Position' : 'Position Predicate',
                    text: language === 'fr'
                        ? 'Étant donné un indice i, comment tester en temps constant si i est avant le sommet (i < m) ?'
                        : 'Given an index i, how can you test in constant time if i is before the peak (i < m)?',
                    solution: language === 'fr'
                        ? 'Il suffit de comparer T[i] et T[i+1]. Si T[i] < T[i+1], alors nous sommes dans la phase croissante, donc i < m.'
                        : 'Simply compare T[i] and T[i+1]. If T[i] < T[i+1], we are in the increasing phase, so i < m.',
                    complexity: 'O(1)'
                },
                {
                    id: 'q4',
                    label: language === 'fr' ? 'Recherche du Maximum' : 'Peak Search',
                    text: language === 'fr'
                        ? 'Proposer un algorithme sommet(T) optimal qui renvoie le plus grand élément de T.'
                        : 'Propose an optimal sommet(T) algorithm that returns the largest element of T.',
                    solution: language === 'fr'
                        ? 'On utilise une recherche dichotomique. À chaque étape, si T[mid] < T[mid+1], le sommet est à droite. Sinon, il est à gauche (incluant mid).'
                        : 'Use a binary search. At each step, if T[mid] < T[mid+1], the peak is to the right. Otherwise, it is to the left (including mid).',
                    complexity: 'O(log n)',
                    justification: language === 'fr' ? 'Recherche dichotomique classique sur une structure unimodale.' : 'Classic binary search on a unimodal structure.'
                },
                {
                    id: 'q5',
                    label: language === 'fr' ? 'Nivellement (Tri)' : 'Leveling (Sort)',
                    text: language === 'fr'
                        ? 'Proposer un algorithme nivelle(T) optimal qui renvoie le tableau trié contenant les mêmes éléments.'
                        : 'Propose an optimal nivelle(T) algorithm that returns a sorted array containing the same elements.',
                    solution: language === 'fr'
                        ? 'Il s\'agit de fusionner deux sous-tableaux triés : la partie croissante T[0..m] et la partie décroissante T[m+1..n-1] (une fois renversée). On utilise l\'algorithme classique de fusion (merge) de deux listes triées.'
                        : 'Merge two sorted sub-arrays: the increasing part T[0..m] and the decreasing part T[m+1..n-1] (once reversed). Use the classic merge algorithm for two sorted lists.',
                    complexity: 'O(n)',
                    justification: language === 'fr'
                        ? 'La fusion de deux listes de taille totale n prend un temps linéaire.'
                        : 'Merging two lists of total size n takes linear time.'
                }
            ],
            footer: language === 'fr'
                ? 'Une structure de montagne est un cas particulier de fonction unimodale, permettant des optimisations logarithmiques.'
                : 'A mountain structure is a special case of a unimodal function, allowing logarithmic optimizations.'
        },
        {
            id: 'exo-03',
            title: language === 'fr' ? 'Algorithmes de Tri Récursifs' : 'Recursive Sorting Algorithms',
            statement: language === 'fr'
                ? 'On considère deux fonctions, foo et bar, conçues pour opérer sur des tableaux de taille $2^k$ :'
                : 'Consider two functions, foo and bar, designed to operate on arrays of size $2^k$:',
            code: `def foo(T, deb=0, fin=None):
    if fin == None:
        # len(T) doit être une puissance de 2
        assert log(len(T), 2) % 1 == 0
        fin = len(T)
    if fin-deb == 2:
        bar(T, deb, fin)
    elif fin-deb > 2:
        mil = (deb+fin)//2
        foo(T, deb, mil)
        foo(T, mil, fin)
        bar(T, deb, fin)

def bar(T, deb, fin):
    q0, q4 = deb, fin
    if q4-q0 == 2:
        if T[q0] > T[q0+1]:
            T[q0], T[q0+1] = T[q0+1], T[q0]
    else:
        m = (q4-q0)//4
        q1, q2, q3 = q0+m, q0+2*m, q0+3*m
        # échange du 2e et du 3e quart
        for i in range(m):
            T[q1+i], T[q2+i] = T[q2+i], T[q1+i]
        bar(T, q0, q2)
        bar(T, q2, q4)
        bar(T, q1, q3)`,
            questions: [
                {
                    id: 'q1',
                    label: language === 'fr' ? 'Trace d\'Exécution' : 'Execution Trace',
                    text: language === 'fr'
                        ? 'Compléter le déroulement de l’appel foo([8,7,6,5,1,2,3,4]) en indiquant l’état du tableau localement.'
                        : 'Complete the trace of foo([8,7,6,5,1,2,3,4]) by indicating the local state of the array.',
                    solution: language === 'fr'
                        ? '1. foo([8,7,6,5,1,2,3,4]) appelle foo(0,4) et foo(4,8).\\n2. foo(0,4) trie la première moitié : [5,6,7,8,1,2,3,4].\\n3. foo(4,8) trie la seconde moitié : [5,6,7,8,1,2,3,4] (déjà triée ici).\\n4. bar(0,8) fusionne les deux moitiés triées : [1,2,3,4,5,6,7,8].'
                        : '1. foo([8,7,6,5,1,2,3,4]) calls foo(0,4) and foo(4,8).\\n2. foo(0,4) sorts first half: [5,6,7,8,1,2,3,4].\\n3. foo(4,8) sorts second half: [5,6,7,8,1,2,3,4] (already sorted here).\\n4. bar(0,8) merges the sorted halves: [1,2,3,4,5,6,7,8].',
                    complexity: '-'
                },
                {
                    id: 'q2',
                    label: language === 'fr' ? 'Invariants de foo' : 'foo Invariants',
                    text: language === 'fr'
                        ? 'Que peut-on dire de l\'état de T après exécution des lignes 2 à 11 de foo ?'
                        : 'What can be said about the state of T after executing lines 2 to 11 of foo?',
                    solution: language === 'fr'
                        ? 'Les deux sous-tableaux T[deb:mil] et T[mil:fin] sont triés séparément d\'après l\'hypothèse de récurrence.'
                        : 'Both sub-arrays T[deb:mil] and T[mil:fin] are sorted separately according to the induction hypothesis.',
                    complexity: '-'
                },
                {
                    id: 'q3',
                    label: language === 'fr' ? 'Rôle de bar' : 'Role of bar',
                    text: language === 'fr'
                        ? 'Quelle opération abstraite O doit donc réaliser la fonction bar ?'
                        : 'What abstract operation O must the bar function perform?',
                    solution: language === 'fr'
                        ? 'La fonction bar doit réaliser la fusion (merge) de deux tableaux triés adjacents pour produire un unique tableau trié.'
                        : 'The bar function must perform the merge of two adjacent sorted arrays to produce a single sorted array.',
                    complexity: '-'
                },
                {
                    id: 'q4',
                    label: language === 'fr' ? 'Logique de Fusion' : 'Merge Logic',
                    text: language === 'fr'
                        ? 'Expliquer l\'évolution du contenu des quatre quartiers (T0, T1, T2, T3) lors de l\'exécution de bar.'
                        : 'Explain the evolution of the four quarters (T0, T1, T2, T3) during the execution of bar.',
                    solution: language === 'fr'
                        ? '1. Initialement : T0<T1 et T2<T3.\\n2. Après échange (L23-24) : On mélange T1 et T2 pour mettre en contact les éléments "moyens".\\n3. Appels récursifs croisés : Permettent de propager les plus petits éléments vers T0 et les plus grands vers T3.\\n4. Dernier appel : Finalise le tri du milieu.'
                        : '1. Initially: T0<T1 and T2<T3.\\n2. After swap (L23-24): Mix T1 and T2 to bring "middle" elements into contact.\\n3. Crossed recursive calls: Propagate smallest elements toward T0 and largest toward T3.\\n4. Final call: Completes middle sorting.',
                    complexity: '-'
                },
                {
                    id: 'q5',
                    label: language === 'fr' ? 'Analyse de Complexité' : 'Complexity Analysis',
                    text: language === 'fr'
                        ? 'Établir les relations de récurrence pour B(n) et F(n) et en déduire la complexité temporelle.'
                        : 'Establish recurrence relations for B(n) and F(n) and deduce the time complexity.',
                    solution: language === 'fr'
                        ? '• B(n) = 3B(n/2) + O(n) (3 appels récursifs et une boucle linéaire). Master Theorem : log2(3) > 1, donc B(n) = O(n^{1.58}).\\n• F(n) = 2F(n/2) + B(n). Le terme B(n) domine, donc F(n) = O(n^{1.58}).'
                        : '• B(n) = 3B(n/2) + O(n) (3 recursive calls and one linear loop). Master Theorem: log2(3) > 1, so B(n) = O(n^{1.58}).\\n• F(n) = 2F(n/2) + B(n). The B(n) term dominates, so F(n) = O(n^{1.58}).',
                    complexity: 'O(n^{1.58})',
                    justification: 'Master Theorem'
                },
                {
                    id: 'q6',
                    label: language === 'fr' ? 'Propriétés du Tri' : 'Sorting Properties',
                    text: language === 'fr'
                        ? 'L\'algorithme foo est-il optimal, adaptatif, en place et stable ? Justifier.'
                        : 'Is the foo algorithm optimal, adaptive, in-place, and stable? Justify.',
                    solution: language === 'fr'
                        ? '• Optimal : Non (O(n^1.58) > O(n log n)).\\n• Adaptatif : Non (complexité fixe).\\n• En place : Oui (uniquement des swaps).\\n• Stable : Non (échanges de blocs distants).'
                        : '• Optimal: No (O(n^1.58) > O(n log n)).\\n• Adaptive: No (fixed complexity).\\n• In-place: Yes (swaps only).\\n• Stable: No (distant block swaps).',
                    complexity: '-'
                }
            ],
            footer: language === 'fr'
                ? 'Cet algorithme est un cas d\'école de tri par comparaison in-place mais de complexité sous-optimale.'
                : 'This algorithm is a textbook case of an in-place comparison sort but with sub-optimal complexity.'
        }
    ];

    const activeExo = exercises.find(e => e.id === activeExoId) || exercises[0];

    const handleExoChange = (id: string) => {
        setActiveExoId(id);
        setVisibleSolutions({});
    };

    return (
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Sidebar / List */}
            <div className="lg:w-80 space-y-4">
                <div className="rounded-3xl p-6 border shadow-xl sticky top-8"
                    style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-xl" style={{ backgroundColor: 'var(--accent)' }}>
                            <GraduationCap size={20} className="text-white" />
                        </div>
                        <h3 className="font-black text-sm uppercase tracking-wider" style={{ color: 'var(--text-primary)' }}>
                            {language === 'fr' ? 'Sujets d\'Examen' : 'Exam Topics'}
                        </h3>
                    </div>

                    <div className="space-y-2">
                        {exercises.map((exo, idx) => (
                            <button
                                key={exo.id}
                                onClick={() => handleExoChange(exo.id)}
                                className={`w-full text-left p-4 rounded-2xl transition-all group border ${activeExoId === exo.id ? 'shadow-lg' : 'hover:bg-white/5 border-transparent'}`}
                                style={{
                                    backgroundColor: activeExoId === exo.id ? `${currentPalette.colors.accent}15` : 'transparent',
                                    borderColor: activeExoId === exo.id ? 'var(--accent)' : 'transparent',
                                    boxShadow: activeExoId === exo.id ? `0 10px 20px -5px ${currentPalette.colors.accent}22` : 'none'
                                }}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-black transition-colors ${activeExoId === exo.id ? 'bg-white text-indigo-600' : 'bg-white/5 text-slate-500'}`}
                                        style={activeExoId === exo.id ? { color: 'var(--accent)' } : {}}>
                                        {idx + 1}
                                    </div>
                                    <span className={`text-sm font-black truncate ${activeExoId === exo.id ? '' : 'text-slate-400 group-hover:text-slate-200'}`}
                                        style={{ color: activeExoId === exo.id ? 'var(--text-primary)' : undefined }}>
                                        {exo.title}
                                    </span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 space-y-8 pb-12">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden"
                    style={{
                        background: `linear-gradient(135deg, var(--accent), ${currentPalette.colors.accent}dd)`,
                        boxShadow: `0 20px 40px -10px ${currentPalette.colors.accent}55`
                    }}>
                    <div className="relative z-10 flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                            <div className="p-2.5 bg-white/20 rounded-2xl backdrop-blur-xl border border-white/10">
                                <GraduationCap size={32} />
                            </div>
                            <h1 className="text-4xl font-black tracking-tighter">{t.mockExams.title}</h1>
                        </div>
                        <p className="text-white font-medium opacity-80 mt-2 text-lg">
                            {language === 'fr' ? 'Préparez vos concours avec des sujets corrigés détaillés.' : 'Prepare for exams with detailed corrected topics.'}
                        </p>
                    </div>
                    <div className="absolute top-0 right-0 p-10 opacity-10 scale-[2] rotate-12 pointer-events-none">
                        <GraduationCap size={160} />
                    </div>
                </div>

                {/* Exercise Body */}
                <div className="rounded-[2.5rem] border overflow-hidden shadow-2xl"
                    style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>
                    {/* Exercise Label */}
                    <div className="p-8 border-b bg-white/[0.02] flex items-center gap-4" style={{ borderColor: 'var(--border)' }}>
                        <div className="p-3 rounded-2xl" style={{ backgroundColor: `${currentPalette.colors.accent}15` }}>
                            <BookText size={24} style={{ color: 'var(--accent)' }} />
                        </div>
                        <div>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                                {t.mockExams.exercise.replace('{0}', (exercises.indexOf(activeExo) + 1).toString())}
                            </span>
                            <h2 className="text-2xl font-black" style={{ color: 'var(--text-primary)' }}>{activeExo.title}</h2>
                        </div>
                    </div>

                    <div className="p-8 md:p-12 space-y-12">
                        {/* Statement Section */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-2xl flex items-center justify-center bg-white/5 border border-white/5">
                                    <Terminal size={18} style={{ color: 'var(--accent)' }} />
                                </div>
                                <h3 className="text-xs font-black uppercase tracking-widest" style={{ color: 'var(--text-secondary)' }}>
                                    {t.mockExams.statement}
                                </h3>
                            </div>

                            <div className="text-xl leading-relaxed font-semibold text-slate-300">
                                {activeExo.statement}
                            </div>

                            {activeExo.code && <PythonIDE code={activeExo.code} />}
                        </div>

                        {/* Questions List */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 rounded-2xl flex items-center justify-center bg-white/5 border border-white/5">
                                    <Lightbulb size={18} className="text-amber-400" />
                                </div>
                                <h3 className="text-xs font-black uppercase tracking-widest" style={{ color: 'var(--text-secondary)' }}>
                                    {language === 'fr' ? 'Questions de réflexion' : 'Reflection Questions'}
                                </h3>
                            </div>

                            <div className="grid grid-cols-1 gap-6">
                                {activeExo.questions.map((q, idx) => (
                                    <div key={q.id} className="group relative">
                                        <div className="p-8 rounded-[2rem] border transition-all duration-300 relative z-10"
                                            style={{
                                                backgroundColor: visibleSolutions[q.id] ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.01)',
                                                borderColor: visibleSolutions[q.id] ? 'var(--accent)' : 'var(--border)'
                                            }}>
                                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                                                <div className="space-y-3 flex-1">
                                                    <div className="flex items-center gap-3">
                                                        <span className="px-2 py-0.5 rounded-md text-[10px] font-black font-mono border"
                                                            style={{ borderColor: `${currentPalette.colors.accent}44`, color: 'var(--accent)', backgroundColor: `${currentPalette.colors.accent}11` }}>
                                                            Q{idx + 1}
                                                        </span>
                                                        <h4 className="text-sm font-black uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
                                                            {q.label}
                                                        </h4>
                                                    </div>
                                                    <p className="text-lg font-bold leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                                                        {q.text}
                                                    </p>
                                                </div>
                                                <button
                                                    onClick={() => toggleSolution(q.id)}
                                                    className="flex-shrink-0 flex items-center gap-2 px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all shadow-xl self-start"
                                                    style={{
                                                        backgroundColor: visibleSolutions[q.id] ? 'var(--bg-primary)' : 'var(--accent)',
                                                        color: visibleSolutions[q.id] ? 'var(--text-secondary)' : '#fff',
                                                        boxShadow: visibleSolutions[q.id] ? 'none' : `0 10px 20px -5px ${currentPalette.colors.accent}55`
                                                    }}
                                                >
                                                    {visibleSolutions[q.id] ? (
                                                        <><EyeOff size={16} /> {t.mockExams.hideSolution}</>
                                                    ) : (
                                                        <><Eye size={16} /> {t.mockExams.showSolution}</>
                                                    )}
                                                </button>
                                            </div>

                                            {/* Solution Content */}
                                            {visibleSolutions[q.id] && (
                                                <div className="mt-8 pt-8 border-t border-white/5 animate-in slide-in-from-top-4 duration-500">
                                                    <div className="flex items-start gap-4">
                                                        <div className="mt-1 p-2 bg-emerald-500/10 rounded-xl">
                                                            <CheckCircle2 className="text-emerald-400" size={20} />
                                                        </div>
                                                        <div className="space-y-6 flex-1">
                                                            <div>
                                                                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 block mb-3">Correction Détaillée</span>
                                                                <p className="leading-relaxed text-slate-300 font-medium whitespace-pre-line text-base">
                                                                    {q.solution}
                                                                </p>
                                                            </div>

                                                            <div className="flex flex-wrap gap-4">
                                                                <div className="bg-black/30 rounded-2xl px-5 py-3 border border-white/5 flex items-center gap-4">
                                                                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 leading-none">Complexité</div>
                                                                    <div className="text-base font-black font-mono text-emerald-400 leading-none">{q.complexity}</div>
                                                                </div>
                                                                {q.justification && (
                                                                    <div className="bg-black/30 rounded-2xl px-5 py-3 border border-white/5 flex items-center gap-4">
                                                                        <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 leading-none">Justification</div>
                                                                        <div className="text-xs font-bold text-slate-400 leading-tight">{q.justification}</div>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Info */}
                <div className="p-10 border rounded-[2.5rem] flex items-center gap-8 relative overflow-hidden group"
                    style={{ backgroundColor: 'rgba(255,255,255,0.02)', borderColor: 'var(--border)' }}>
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                    <div className="p-5 rounded-[1.5rem] shadow-xl flex-shrink-0 relative z-10"
                        style={{ background: `linear-gradient(135deg, var(--accent), ${currentPalette.colors.accent}dd)` }}>
                        <ChevronRight className="text-white" size={28} />
                    </div>
                    <div className="relative z-10">
                        <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2">Conseil de Révision</h5>
                        <p className="leading-relaxed text-lg font-bold text-slate-400">
                            {activeExo.footer}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MockExams;
