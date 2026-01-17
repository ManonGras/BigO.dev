
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ALGORITHMS } from '../../data/algorithms';
import { VizStep } from '../../types';
import VisualizerControls from './VisualizerControls';
// Added Activity and Settings2 to the import list
import { BarChart2, Hash, Zap, Code2, Activity, Settings2 } from 'lucide-react';

const generateBubbleSortSteps = (initialArray: number[]): VizStep[] => {
  const steps: VizStep[] = [];
  const arr = [...initialArray];
  const n = arr.length;
  let comparisons = 0;
  let swaps = 0;

  // Initial step
  steps.push({
    array: [...arr],
    comparing: [],
    swapping: [],
    sorted: [],
    currentLine: 0,
    message: "Starting Bubble Sort...",
    stats: { comparisons, swaps }
  });

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      comparisons++;
      steps.push({
        array: [...arr],
        comparing: [j, j + 1],
        swapping: [],
        sorted: steps[steps.length - 1].sorted,
        currentLine: 3,
        message: `Comparing ${arr[j]} and ${arr[j + 1]}`,
        stats: { comparisons, swaps }
      });

      if (arr[j] > arr[j + 1]) {
        swaps++;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        steps.push({
          array: [...arr],
          comparing: [],
          swapping: [j, j + 1],
          sorted: steps[steps.length - 1].sorted,
          currentLine: 4,
          message: `Swapping ${arr[j + 1]} and ${arr[j]}`,
          stats: { comparisons, swaps }
        });
      }
    }
    const currentlySorted = steps[steps.length - 1].sorted;
    steps.push({
      array: [...arr],
      comparing: [],
      swapping: [],
      sorted: [...currentlySorted, n - i - 1],
      currentLine: 2,
      message: `Element at index ${n - i - 1} is now sorted`,
      stats: { comparisons, swaps }
    });
  }

  return steps;
};

const AlgorithmVisualizer: React.FC = () => {
  const [currentAlgoId] = useState('bubble-sort');
  const [arraySize, setArraySize] = useState(12);
  const [steps, setSteps] = useState<VizStep[]>([]);
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(400);
  const timerRef = useRef<number | null>(null);

  const currentAlgo = ALGORITHMS.find(a => a.id === currentAlgoId)!;

  const initArray = useCallback(() => {
    const newArr = Array.from({ length: arraySize }, () => Math.floor(Math.random() * 90) + 10);
    const newSteps = generateBubbleSortSteps(newArr);
    setSteps(newSteps);
    setCurrentStepIdx(0);
    setIsPlaying(false);
  }, [arraySize]);

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
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                <BarChart2 size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold">{currentAlgo.name}</h3>
                <p className="text-slate-400 text-sm">{currentStep?.message || 'Ready to start'}</p>
              </div>
            </div>
            
            <div className="flex gap-2">
               <button 
                onClick={() => {
                  const size = Math.max(5, arraySize - 1);
                  setArraySize(size);
                }}
                className="px-3 py-1 bg-slate-800 hover:bg-slate-700 rounded-md text-xs font-medium"
               >Decrease Size</button>
               <button 
                onClick={() => {
                  const size = Math.min(30, arraySize + 1);
                  setArraySize(size);
                }}
                className="px-3 py-1 bg-slate-800 hover:bg-slate-700 rounded-md text-xs font-medium"
               >Increase Size</button>
               <button 
                onClick={initArray}
                className="px-3 py-1 bg-indigo-600 hover:bg-indigo-500 rounded-md text-xs font-medium"
               >New Array</button>
            </div>
          </div>

          <div className="flex-1 flex items-end justify-center gap-2 mb-12">
            {currentStep?.array.map((value, idx) => {
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
            })}
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
            { label: 'Comparisons', val: currentStep?.stats.comparisons || 0, icon: Hash, color: 'text-amber-400' },
            { label: 'Swaps', val: currentStep?.stats.swaps || 0, icon: Zap, color: 'text-emerald-400' },
            { label: 'Time Complexity', val: currentAlgo.timeComplexity.average, icon: Activity, color: 'text-indigo-400' },
            { label: 'Space Complexity', val: currentAlgo.spaceComplexity, icon: Activity, color: 'text-slate-400' },
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
            <h4 className="font-semibold">Implementation</h4>
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
            <Settings2 size={16} /> Memory State
          </h4>
          <div className="space-y-3 font-mono text-sm">
            <div className="flex justify-between items-center py-2 border-b border-slate-800">
              <span className="text-slate-500">n (size)</span>
              <span className="text-indigo-400">{arraySize}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-800">
              <span className="text-slate-500">current_array</span>
              <span className="text-xs text-slate-300">[{currentStep?.array.slice(0, 5).join(', ')}...]</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-800">
              <span className="text-slate-500">comparisons</span>
              <span className="text-amber-400 font-bold">{currentStep?.stats.comparisons}</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-slate-500">last_swapped</span>
              <span className="text-emerald-400">{currentStep?.swapping.length > 0 ? 'True' : 'False'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlgorithmVisualizer;
