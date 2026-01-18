
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ALGORITHMS, ALGORITHMS_FR } from '../../data/algorithms';
import { VizStep } from '../../types';
import VisualizerControls from './VisualizerControls';
// Added Activity and Settings2 to the import list
import { BarChart2, Hash, Zap, Code2, Activity, Settings2 } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Translations } from '../../locales/types';

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
import { ChevronDown, Edit3, Check, X } from 'lucide-react';
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
  const [currentAlgoId, setCurrentAlgoId] = useState('bubble-sort');
  const [arraySize, setArraySize] = useState(12);
  const [customInput, setCustomInput] = useState('');
  const [isCustomMode, setIsCustomMode] = useState(false);
  const [steps, setSteps] = useState<VizStep[]>([]);
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(400);
  const timerRef = useRef<number | null>(null);

  const algorithms = language === 'en' ? ALGORITHMS : ALGORITHMS_FR;
  const currentAlgo = algorithms.find(a => a.id === currentAlgoId)!;

  const initArray = useCallback(() => {
    let newArr: number[];

    if (isCustomMode && customInput) {
      // Parse custom input
      const parsed = customInput.split(',')
        .map(s => parseInt(s.trim()))
        .filter(n => !isNaN(n));

      if (parsed.length > 0) {
        newArr = parsed;
        // No setArraySize call to avoid triggering useEffect loop
      } else {
        newArr = Array.from({ length: arraySize }, () => Math.floor(Math.random() * 90) + 10);
      }
    } else {
      newArr = Array.from({ length: arraySize }, () => Math.floor(Math.random() * 90) + 10);
    }

    let newSteps: VizStep[] = [];

    switch (currentAlgoId) {
      case 'bubble-sort':
        newSteps = generateBubbleSortSteps(newArr, t);
        break;
      case 'selection-sort':
        newSteps = generateSelectionSortSteps(newArr, t);
        break;
      case 'insertion-sort':
        newSteps = generateInsertionSortSteps(newArr, t);
        break;
      case 'merge-sort':
        newSteps = generateMergeSortSteps(newArr, t);
        break;
      case 'quick-sort':
        newSteps = generateQuickSortSteps(newArr, t);
        break;
      case 'binary-search':
        newSteps = generateBinarySearchSteps(newArr, t);
        break;
      case 'heap-sort':
        newSteps = generateHeapSortSteps(newArr, t);
        break;
      case 'bst-insert':
        // For BST, we use the random array as insertion sequence
        newSteps = generateBSTInsertionSteps(newArr, t);
        break;
      case 'linked-list-singly':
        newSteps = generateSinglyLinkedListSteps(newArr, t);
        break;
      case 'linked-list-doubly':
        newSteps = generateDoublyLinkedListSteps(newArr, t);
        break;
      case 'linked-list-singly-search':
        newSteps = generateSinglyLinkedListSearchSteps(newArr, t);
        break;
      case 'linked-list-singly-delete':
        newSteps = generateSinglyLinkedListDeleteSteps(newArr, t);
        break;
      default:
        newSteps = generateBubbleSortSteps(newArr, t);
    }

    setSteps(newSteps);
    setCurrentStepIdx(0);
    setIsPlaying(false);
  }, [arraySize, t, currentAlgoId, isCustomMode, customInput]);

  useEffect(() => {
    initArray();
  }, [initArray]);

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
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full max-h-[calc(100vh-160px)]">
      {/* Left Pane: Visualizer & Controls */}
      <div className="lg:col-span-2 flex flex-col gap-6 overflow-hidden">
        {/* Viz Area */}
        <div className="flex-1 bg-slate-900 border border-slate-800 rounded-3xl p-8 relative flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <div className="flex flex-col gap-4 w-full">
              {/* Category Tabs */}
              <div className="flex items-center gap-2 border-b border-slate-800 pb-2 overflow-x-auto scrollbar-none">
                <div className="p-1.5 bg-indigo-500/10 rounded-lg text-indigo-400 shrink-0">
                  <BarChart2 size={18} />
                </div>
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
                      // If clicking a category, select the first algo of that category
                      onClick={() => {
                        const firstAlgo = algorithms.find(a => a.category === cat);
                        if (firstAlgo) setCurrentAlgoId(firstAlgo.id);
                      }}
                      className={`
                             px-4 py-2 rounded-lg text-sm font-bold transition-all whitespace-nowrap
                             ${isActive ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}
                           `}
                    >
                      {t.categories[keyMap[cat]]}
                    </button>
                  );
                })}
              </div>

              {/* Algorithm Pills (Filtered by current category) */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
                {algorithms.filter(a => a.category === currentAlgo.category).map(algo => (
                  <button
                    key={algo.id}
                    onClick={() => setCurrentAlgoId(algo.id)}
                    className={`
                           px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap border transition-all
                           ${currentAlgoId === algo.id
                        ? 'bg-slate-800 border-indigo-500 text-indigo-400 shadow-sm'
                        : 'bg-slate-800/50 border-transparent text-slate-500 hover:border-slate-700 hover:text-slate-300'}
                        `}
                  >
                    {algo.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2 items-end shrink-0 ml-auto">
              <div className="flex gap-2">
                {!isCustomMode ? (
                  <>
                    <button
                      onClick={() => setIsCustomMode(true)}
                      className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/50 hover:bg-indigo-500/20 text-indigo-300 rounded-md text-xs font-bold flex items-center gap-2 transition-all"
                    >
                      <Edit3 size={12} /> {t.visualizer.customArray}
                    </button>
                    <button
                      onClick={() => {
                        const size = Math.max(5, arraySize - 1);
                        setArraySize(size);
                      }}
                      className="px-3 py-1 bg-slate-800 hover:bg-slate-700 rounded-md text-xs font-medium"
                    >{t.visualizer.decreaseSize}</button>
                    <button
                      onClick={() => {
                        const size = Math.min(30, arraySize + 1);
                        setArraySize(size);
                      }}
                      className="px-3 py-1 bg-slate-800 hover:bg-slate-700 rounded-md text-xs font-medium"
                    >{t.visualizer.increaseSize}</button>
                    <button
                      onClick={initArray}
                      className="px-3 py-1 bg-indigo-600 hover:bg-indigo-500 rounded-md text-xs font-medium"
                    >{t.visualizer.newArray}</button>
                  </>
                ) : (
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={customInput}
                      onChange={(e) => setCustomInput(e.target.value)}
                      placeholder={t.visualizer.enterArrayPlaceholder}
                      className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-md text-xs font-mono w-48 focus:outline-none focus:border-indigo-500"
                    />
                    <button
                      onClick={() => {
                        initArray();
                        setIsCustomMode(false);
                      }}
                      className="p-1 bg-emerald-600 hover:bg-emerald-500 rounded-md"
                      title={t.visualizer.generate}
                    ><Check size={14} /></button>
                    <button
                      onClick={() => setIsCustomMode(false)}
                      className="p-1 bg-slate-700 hover:bg-slate-600 rounded-md"
                    ><X size={14} /></button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex-1 flex items-end justify-center gap-2 mb-12 relative w-full">
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
        <div className="grid grid-cols-4 gap-4">
          {[
            { label: t.visualizer.comparisons, val: currentStep?.stats.comparisons || 0, icon: Hash, color: 'text-amber-400' },
            { label: t.visualizer.swaps, val: currentStep?.stats.swaps || 0, icon: Zap, color: 'text-emerald-400' },
            { label: t.visualizer.timeComplexity, val: currentAlgo.timeComplexity.average, icon: Activity, color: 'text-indigo-400' },
            { label: t.visualizer.spaceComplexity, val: currentAlgo.spaceComplexity, icon: Activity, color: 'text-slate-400' },
          ].map((stat, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 p-4 rounded-2xl flex items-center gap-4">
              <div className={`p-2 bg-slate-800 rounded-lg ${stat.color}`}>
                <stat.icon size={18} />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">{stat.label}</p>
                <p className="text-lg font-mono font-bold">{stat.val}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Pane: Code & Variables */}
      <div className="flex flex-col gap-6 h-full">
        {/* Code Panel */}
        <div className="flex-1 bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden flex flex-col shadow-2xl">
          <div className="bg-slate-800/50 px-6 py-4 flex items-center gap-2 border-b border-slate-700">
            <Code2 size={18} className="text-indigo-400" />
            <h4 className="font-semibold">{t.visualizer.implementation}</h4>
          </div>
          <div className="flex-1 overflow-y-auto p-4 font-mono text-sm leading-relaxed">
            {currentAlgo.pseudoCode.map((line, idx) => (
              <div
                key={idx}
                className={`
                  px-4 py-1.5 rounded-lg transition-colors flex gap-4
                  ${currentStep?.currentLine === idx ? 'bg-indigo-600/20 border-l-4 border-indigo-500 text-white' : 'text-slate-400'}
                 `}
              >
                <span className="text-slate-600 text-xs w-4 select-none">{idx + 1}</span>
                <pre className="whitespace-pre-wrap">{line}</pre>
              </div>
            ))}
          </div>
        </div>

        {/* Variables State */}
        <div className="h-64 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl overflow-hidden">
          <h4 className="font-semibold mb-4 text-slate-300 flex items-center gap-2">
            <Settings2 size={16} /> {t.visualizer.memoryState}
          </h4>
          <div className="space-y-3 font-mono text-sm">
            <div className="flex justify-between items-center py-2 border-b border-slate-800">
              <span className="text-slate-500">{t.visualizer.size}</span>
              <span className="text-indigo-400">{arraySize}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-800">
              <span className="text-slate-500">{t.visualizer.currentArray}</span>
              <span className="text-xs text-slate-300">
                {currentStep?.tree ? 'Tree Nodes...' : `[${currentStep?.array.slice(0, 5).join(', ')}...]`}
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-800">
              <span className="text-slate-500">comparisons</span>
              <span className="text-amber-400 font-bold">{currentStep?.stats.comparisons}</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-slate-500">{t.visualizer.lastSwapped}</span>
              <span className="text-emerald-400">{currentStep?.swapping.length > 0 ? 'True' : 'False'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlgorithmVisualizer;
