
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ALGORITHMS, ALGORITHMS_FR } from '../../data/algorithms';
import { VizStep } from '../../types';
import VisualizerControls from './VisualizerControls';
// Added Activity and Settings2 to the import list
import { BarChart2, Hash, Zap, Code2, Activity, Settings2 } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Translations } from '../../locales/types';
import { useTheme } from '../../contexts/ThemeContext';


import {
  generateBubbleSortSteps,
  generateSelectionSortSteps,
  generateInsertionSortSteps,
  generateMergeSortSteps,
  generateQuickSortSteps,
  generateBinarySearchSteps,
  generateHeapSortSteps,
  generateBSTInsertionSteps,
  generateSinglyLinkedListSteps,
  generateDoublyLinkedListSteps,
  generateSinglyLinkedListSearchSteps,
  generateSinglyLinkedListDeleteSteps
} from '../../utils/algo-generators';
import { ChevronDown, Edit3, Check, X, TrendingUp, Layout as LayoutIcon, Plus, Minus, RefreshCw, Search } from 'lucide-react';
import ComplexityChart from '../Complexity/ComplexityChart';
import VisualDataEditor from './VisualDataEditor';
import { TreeNode, LinkedListNode } from '../../types';

const LinkedListRenderer: React.FC<{ head: LinkedListNode }> = ({ head }) => {
  const nodes: LinkedListNode[] = [];
  let curr: LinkedListNode | undefined = head;
  while (curr) {
    nodes.push(curr);
    curr = curr.next;
  }

  return (
    <div className="w-full h-full relative">
      <svg className="absolute w-full h-full pointer-events-none">
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="28" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#64748b" />
          </marker>
          <marker id="arrowhead-prev" markerWidth="10" markerHeight="7" refX="28" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
          </marker>
        </defs>
        {nodes.map((node, idx) => (
          <React.Fragment key={`link-${node.id}`}>
            {node.next && (
              <line
                x1={`${node.x}%`} y1={`${node.y! + 2}%`}
                x2={`${(node.next as any).x}%`} y2={`${(node.next as any).y! + 2}%`}
                stroke="#64748b"
                strokeWidth="2"
                markerEnd="url(#arrowhead)"
              />
            )}
            {/* Visualizing Prev for Doubly as dashed line below */}
            {node.prev && (
              <line
                x1={`${node.x}%`} y1={`${node.y! + 4}%`}
                x2={`${(node.prev as any).x}%`} y2={`${(node.prev as any).y! + 4}%`}
                stroke="#94a3b8"
                strokeWidth="1.5"
                strokeDasharray="4"
                opacity="0.6"
                markerEnd="url(#arrowhead-prev)"
              />
            )}
          </React.Fragment>
        ))}
      </svg>
      {nodes.map((node, idx) => {
        // Determine node color based on state
        let bgColor = 'bg-slate-800';
        let borderColor = 'border-indigo-400';
        let textColor = 'text-white';

        if (node.isTarget) {
          bgColor = 'bg-emerald-600';
          borderColor = 'border-emerald-400';
        } else if (node.isCurrent) {
          bgColor = 'bg-amber-600';
          borderColor = 'border-amber-400';
        } else if (node.isHead) {
          bgColor = 'bg-indigo-700';
          borderColor = 'border-indigo-300';
        } else if (node.isTail) {
          bgColor = 'bg-purple-700';
          borderColor = 'border-purple-300';
        }

        return (
          <div key={node.id} className="absolute" style={{ left: `${node.x}%`, top: `${node.y}%` }}>
            <div
              className={`w-12 h-12 -ml-6 -mt-6 rounded-full border-2 ${borderColor} ${bgColor} flex items-center justify-center font-bold ${textColor} z-10 transition-all duration-500 shadow-xl`}
            >
              {node.value}
            </div>
            {/* Label for special nodes */}
            {(node.isHead || node.isTail || node.label) && (
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-400 whitespace-nowrap">
                {node.label || (node.isHead ? 'Head' : node.isTail ? 'Tail' : '')}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

// Better Tree Renderer with Links
const RecursiveTree: React.FC<{ node: TreeNode; parentX?: number; parentY?: number }> = ({ node, parentX, parentY }) => {
  return (
    <>
      {/* Line to Left Child */}
      {node.left && (
        <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
          <line
            x1={`${node.x}%`} y1={`${node.y! + 5}%`} // +5 to start from bottom of node (approx)
            x2={`${node.left.x}%`} y2={`${node.left.y}%`}
            stroke="#475569" strokeWidth="2"
          />
        </svg>
      )}
      {/* Line to Right Child */}
      {node.right && (
        <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
          <line
            x1={`${node.x}%`} y1={`${node.y! + 5}%`}
            x2={`${node.right.x}%`} y2={`${node.right.y}%`}
            stroke="#475569" strokeWidth="2"
          />
        </svg>
      )}

      {/* The Node Itself */}
      <div
        className="absolute w-10 h-10 -ml-5 -mt-5 rounded-full flex items-center justify-center font-bold shadow-xl border-2 z-10 bg-indigo-600 border-indigo-400 text-white transition-all duration-500"
        style={{ left: `${node.x}%`, top: `${node.y}%` }}
      >
        {node.value}
      </div>

      {node.left && <RecursiveTree node={node.left} />}
      {node.right && <RecursiveTree node={node.right} />}
    </>
  );
};

const AlgorithmVisualizer: React.FC = () => {
  const { t, language } = useLanguage();
  const { currentPalette } = useTheme();
  const [currentAlgoId, setCurrentAlgoId] = useState('bubble-sort');
  const [arraySize, setArraySize] = useState(12);
  const [customInput, setCustomInput] = useState('');
  const [isCustomMode, setIsCustomMode] = useState(false);
  const [steps, setSteps] = useState<VizStep[]>([]);
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(400);
  const [complexityHistory, setComplexityHistory] = useState<Record<string, Array<{ n: number, ops: number }>>>({});
  const [showEditor, setShowEditor] = useState(false);
  const [currentData, setCurrentData] = useState<number[]>(Array.from({ length: 12 }, () => Math.floor(Math.random() * 90) + 10));
  const [targetValue, setTargetValue] = useState<number>(42);
  const timerRef = useRef<number | null>(null);

  const algorithms = language === 'en' ? ALGORITHMS : ALGORITHMS_FR;
  const currentAlgo = algorithms.find(a => a.id === currentAlgoId)!;

  const generateRandomArray = useCallback((size: number) => {
    const newArr = Array.from({ length: size }, () => Math.floor(Math.random() * 90) + 10);
    setCurrentData(newArr);
    setIsCustomMode(false);
    return newArr;
  }, []);

  const initArray = useCallback((customArr?: number[]) => {
    const dataToUse = customArr || currentData;
    let newSteps: VizStep[] = [];

    switch (currentAlgoId) {
      case 'bubble-sort':
        newSteps = generateBubbleSortSteps(dataToUse, t);
        break;
      case 'selection-sort':
        newSteps = generateSelectionSortSteps(dataToUse, t);
        break;
      case 'insertion-sort':
        newSteps = generateInsertionSortSteps(dataToUse, t);
        break;
      case 'merge-sort':
        newSteps = generateMergeSortSteps(dataToUse, t);
        break;
      case 'quick-sort':
        newSteps = generateQuickSortSteps(dataToUse, t);
        break;
      case 'binary-search':
        newSteps = generateBinarySearchSteps(dataToUse, t, targetValue);
        break;
      case 'heap-sort':
        newSteps = generateHeapSortSteps(dataToUse, t);
        break;
      case 'bst-insert':
        newSteps = generateBSTInsertionSteps(dataToUse, t);
        break;
      case 'linked-list-singly':
        newSteps = generateSinglyLinkedListSteps(dataToUse, t);
        break;
      case 'linked-list-doubly':
        newSteps = generateDoublyLinkedListSteps(dataToUse, t);
        break;
      case 'linked-list-singly-search':
        newSteps = generateSinglyLinkedListSearchSteps(dataToUse, t, targetValue);
        break;
      case 'linked-list-singly-delete':
        newSteps = generateSinglyLinkedListDeleteSteps(dataToUse, t, targetValue);
        break;
      default:
        newSteps = generateBubbleSortSteps(dataToUse, t);
    }

    setSteps(newSteps);
    setCurrentStepIdx(0);
    setIsPlaying(false);
  }, [t, currentAlgoId, currentData, targetValue]);

  // Handle side effects of changing algorithm or data
  useEffect(() => {
    initArray();
  }, [currentAlgoId, currentData, t]);

  // Handle array size changes explicitly
  useEffect(() => {
    if (!isCustomMode) {
      generateRandomArray(arraySize);
    }
  }, [arraySize, generateRandomArray]); // Removed isCustomMode from deps to avoid re-triggering when toggling mode

  // Track complexity history
  useEffect(() => {
    if (steps.length > 0) {
      const finalStep = steps[steps.length - 1];
      const n = isCustomMode ? finalStep.array.length : arraySize;
      const ops = finalStep.stats.comparisons + finalStep.stats.swaps;

      if (ops > 0) {
        setComplexityHistory(prev => {
          const algoHistory = prev[currentAlgoId] || [];
          if (!algoHistory.find(h => h.n === n && h.ops === ops)) {
            return {
              ...prev,
              [currentAlgoId]: [...algoHistory, { n, ops }].sort((a, b) => a.n - b.n)
            };
          }
          return prev;
        });
      }
    }
  }, [steps, currentAlgoId, isCustomMode, arraySize]);

  useEffect(() => {
    if (isPlaying && currentStepIdx < steps.length - 1) {
      timerRef.current = window.setTimeout(() => {
        setCurrentStepIdx(prev => prev + 1);
      }, speed);
    } else if (currentStepIdx >= steps.length - 1) {
      setIsPlaying(false);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isPlaying, currentStepIdx, steps.length, speed]);

  const currentStep = steps[currentStepIdx] || steps[0];

  return (
    <div className="flex flex-col gap-8">
      {/* Top Section: Visualization & Code Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* Left Pane: Visualizer & Controls */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Viz Area */}
          <div className="min-h-[550px] border rounded-3xl p-8 relative flex flex-col shadow-2xl overflow-hidden"
            style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>

            {/* Toolbar */}
            <div className="flex flex-col gap-6 mb-8">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-4" style={{ borderColor: 'var(--border)' }}>
                {/* Category Selection */}
                <div className="flex items-center gap-1 p-1 bg-black/20 rounded-xl overflow-x-auto scrollbar-none">
                  {(['Sorting', 'Searching', 'Trees', 'LinkedLists'] as const).map(cat => {
                    const isActive = currentAlgo.category === cat;
                    const keyMap: Record<string, keyof typeof t.categories> = {
                      'Sorting': 'sorting',
                      'Searching': 'searching',
                      'Trees': 'trees',
                      'LinkedLists': 'linkedLists'
                    };
                    return (
                      <button
                        key={cat}
                        onClick={() => {
                          const firstAlgo = algorithms.find(a => a.category === cat);
                          if (firstAlgo) setCurrentAlgoId(firstAlgo.id);
                        }}
                        className={`
                          px-4 py-2 rounded-lg text-[10px] md:text-xs font-bold transition-all whitespace-nowrap
                          ${isActive ? 'bg-[var(--accent)] text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}
                        `}
                      >
                        {t.categories[keyMap[cat]]}
                      </button>
                    );
                  })}
                </div>

                {/* Algo Pills */}
                <div className="flex items-center gap-2 overflow-x-auto scrollbar-none max-w-full">
                  {algorithms.filter(a => a.category === currentAlgo.category).map(algo => (
                    <button
                      key={algo.id}
                      onClick={() => setCurrentAlgoId(algo.id)}
                      className={`
                        px-3 py-1.5 rounded-full text-[10px] font-bold whitespace-nowrap border transition-all
                        ${currentAlgoId === algo.id
                          ? 'bg-slate-800 border-[var(--accent)] text-[var(--accent)] shadow-sm'
                          : 'border-transparent text-slate-500 hover:text-slate-300'}
                      `}
                    >
                      {algo.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Data & Structure Controls */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center p-1 bg-black/20 rounded-xl border border-[var(--border)] overflow-hidden">
                    <button
                      onClick={() => setArraySize(Math.max(5, arraySize - 1))}
                      className="p-2 hover:bg-white/5 text-slate-400 hover:text-white transition-colors"
                    >
                      <Minus size={14} />
                    </button>
                    <div className="px-3 border-x border-[var(--border)] text-xs font-bold text-slate-300">
                      n = {arraySize}
                    </div>
                    <button
                      onClick={() => setArraySize(Math.min(30, arraySize + 1))}
                      className="p-2 hover:bg-white/5 text-slate-400 hover:text-white transition-colors"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  {['binary-search', 'linked-list-singly-search', 'linked-list-singly-delete'].includes(currentAlgoId) && (
                    <div className="flex items-center gap-3 px-4 py-1.5 bg-white/[0.03] backdrop-blur-md rounded-xl border border-white/10 group focus-within:border-indigo-500/50 focus-within:bg-white/[0.06] transition-all duration-300">
                      <div className="flex items-center gap-2">
                        <Search size={12} className="text-indigo-400 group-focus-within:scale-110 transition-transform" />
                        <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest select-none">Target</span>
                      </div>
                      <div className="h-4 w-[1px] bg-white/10" />
                      <input
                        type="number"
                        value={targetValue}
                        onChange={(e) => setTargetValue(parseInt(e.target.value) || 0)}
                        className="w-8 bg-transparent text-xs font-black text-white focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      />
                    </div>
                  )}
                  <button
                    onClick={() => generateRandomArray(arraySize)}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white transition-all shadow-lg hover:scale-[1.02] active:scale-95"
                    style={{ backgroundColor: 'var(--accent)', boxShadow: `0 8px 15px -3px ${currentPalette.colors.accent}44` }}
                  >
                    <RefreshCw size={14} /> {t.visualizer.newArray}
                  </button>
                </div>

                <button
                  onClick={() => setShowEditor(true)}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold border transition-all hover:bg-white/5 text-slate-300 hover:text-white"
                  style={{ borderColor: 'var(--border)' }}
                >
                  <LayoutIcon size={14} className="text-[var(--accent)]" />
                  Structure Editor
                </button>
              </div>
            </div>

            {/* Rendering Area */}
            <div className="flex-1 min-h-[300px] flex items-end justify-start md:justify-center gap-2 mb-12 relative w-full overflow-x-auto pb-6 scrollbar-thin">
              {currentStep?.tree ? (
                <div className="w-full h-full relative">
                  <RecursiveTree node={currentStep.tree} />
                </div>
              ) : currentStep?.linkedList ? (
                <LinkedListRenderer head={currentStep.linkedList} />
              ) : (
                currentStep?.array.map((value, idx) => {
                  const isComparing = currentStep.comparing.includes(idx);
                  const isSwapping = currentStep.swapping.includes(idx);
                  const isSorted = currentStep.sorted.includes(idx);

                  let colorClass = 'bg-slate-700';
                  if (isComparing) colorClass = 'bg-amber-400 shadow-lg shadow-amber-400/20';
                  if (isSwapping) colorClass = 'bg-emerald-400 shadow-lg shadow-emerald-400/20';
                  if (isSorted) colorClass = 'bg-indigo-500';

                  return (
                    <div key={idx} className="flex flex-col items-center gap-2 group w-full max-w-[40px]">
                      <div className={`text-[10px] font-mono font-bold ${isComparing || isSwapping ? 'text-white' : 'text-slate-500'}`}>
                        {value}
                      </div>
                      <div
                        className={`w-full rounded-t-lg transition-all duration-300 ${colorClass}`}
                        style={{ height: `${(value / 100) * 200}px` }}
                      />
                      <div className="text-[10px] text-slate-600 font-mono">{idx}</div>
                    </div>
                  );
                })
              )}
            </div>

            <VisualizerControls
              isPlaying={isPlaying}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onReset={() => { setIsPlaying(false); setCurrentStepIdx(0); }}
              onStepForward={() => setCurrentStepIdx(prev => Math.min(steps.length - 1, prev + 1))}
              onStepBackward={() => setCurrentStepIdx(prev => Math.max(0, prev - 1))}
              speed={speed}
              onSpeedChange={setSpeed}
              progress={(currentStepIdx / (steps.length - 1 || 1)) * 100}
            />
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {(() => {
              const isExact = currentAlgo.timeComplexity.best === currentAlgo.timeComplexity.worst;
              const symbol = isExact ? 'Θ' : 'O';
              const label = isExact ? t.sheets.exactComplexity : t.visualizer.timeComplexity;
              return [
                { label: t.visualizer.comparisons, val: currentStep?.stats.comparisons || 0, icon: Hash, color: 'text-amber-400' },
                { label: t.visualizer.swaps, val: currentStep?.stats.swaps || 0, icon: Zap, color: 'text-emerald-400' },
                { label: `${symbol} - ${label}`, val: currentAlgo.timeComplexity.average.replace(/^O/, symbol), icon: Activity, color: 'text-indigo-400' },
                { label: t.visualizer.spaceComplexity, val: currentAlgo.spaceComplexity, icon: Activity, color: 'text-slate-400' },
              ].map((stat, i) => (
                <div key={i} className="border p-4 rounded-2xl flex items-center gap-4 shadow-lg transition-transform hover:scale-[1.02]"
                  style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>
                  <div className={`p-2 rounded-lg bg-slate-800 ${stat.color}`}>
                    <stat.icon size={18} />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[8px] uppercase font-black text-slate-500 tracking-widest truncate">{stat.label}</p>
                    <p className="text-sm font-mono font-bold truncate" style={{ color: 'var(--text-primary)' }}>{stat.val}</p>
                  </div>
                </div>
              ));
            })()}
          </div>
        </div>

        {/* Right Pane: Code & Variables - Sticky */}
        <div className="flex flex-col gap-6 lg:sticky lg:top-4 h-fit">
          {/* Code Panel */}
          <div className="h-[450px] border rounded-3xl overflow-hidden flex flex-col shadow-2xl"
            style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>
            <div className="px-6 py-4 flex items-center gap-2 border-b"
              style={{ backgroundColor: 'rgba(0,0,0,0.2)', borderColor: 'var(--border)' }}>
              <Code2 size={18} className="text-[var(--accent)]" />
              <h4 className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>{t.visualizer.implementation}</h4>
            </div>
            <div className="flex-1 overflow-y-auto p-4 font-mono text-[11px] leading-relaxed">
              {currentAlgo.pseudoCode.map((line, idx) => (
                <div
                  key={idx}
                  className={`
                    px-4 py-1.5 rounded-lg transition-colors flex gap-4
                    ${currentStep?.currentLine === idx ? 'border-l-4 text-white' : ''}
                   `}
                  style={{
                    backgroundColor: currentStep?.currentLine === idx ? `${currentPalette.colors.accent}33` : 'transparent',
                    borderColor: currentStep?.currentLine === idx ? 'var(--accent)' : 'transparent',
                    color: currentStep?.currentLine === idx ? 'var(--text-primary)' : 'var(--text-secondary)'
                  }}
                >
                  <span className="text-[10px] w-4 select-none opacity-40">{idx + 1}</span>
                  <pre className="whitespace-pre-wrap">{line}</pre>
                </div>
              ))}
            </div>
          </div>

          {/* Variables State */}
          <div className="border rounded-3xl p-6 shadow-2xl overflow-hidden"
            style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>
            <h4 className="font-bold mb-4 flex items-center gap-2 text-sm" style={{ color: 'var(--text-primary)' }}>
              <Settings2 size={16} className="text-[var(--accent)]" /> {t.visualizer.memoryState}
            </h4>
            <div className="space-y-3 font-mono text-[11px]">
              <div className="flex justify-between items-center py-2 border-b" style={{ borderColor: 'var(--border)' }}>
                <span className="text-slate-500 uppercase text-[9px] font-black tracking-widest">{t.visualizer.size}</span>
                <span className="font-bold" style={{ color: 'var(--accent)' }}>{arraySize}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b" style={{ borderColor: 'var(--border)' }}>
                <span className="text-slate-500 uppercase text-[9px] font-black tracking-widest">comparisons</span>
                <span className="font-bold" style={{ color: 'var(--accent)' }}>{currentStep?.stats.comparisons}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-slate-500 uppercase text-[9px] font-black tracking-widest">{t.visualizer.lastSwapped}</span>
                <span className="font-bold" style={{ color: 'var(--accent)' }}>{currentStep?.swapping.length > 0 ? 'True' : 'False'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Performance Section */}
      <div className="w-full animate-in slide-in-from-bottom duration-700">
        <ComplexityChart
          history={complexityHistory[currentAlgoId] || []}
          currentN={arraySize}
          complexity={currentAlgo.timeComplexity.average}
        />
      </div>

      {/* Visual Data Editor Modal */}
      {showEditor && (
        <VisualDataEditor
          initialData={currentData}
          onSave={(newData) => {
            setShowEditor(false);
            setIsCustomMode(true);
            setCurrentData(newData);
            setArraySize(newData.length);
          }}
          onCancel={() => setShowEditor(false)}
          type={currentAlgo.category === 'Trees' ? 'tree' : currentAlgo.category === 'LinkedLists' ? 'list' : 'array'}
        />
      )}
    </div>
  );
};

export default AlgorithmVisualizer;
