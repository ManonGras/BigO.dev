
import React from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Settings2
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface ControlsProps {
  isPlaying: boolean;
  onPlay: () => void;
  onPause: () => void;
  onReset: () => void;
  onStepForward: () => void;
  onStepBackward: () => void;
  speed: number;
  onSpeedChange: (val: number) => void;
  progress: number;
}

const VisualizerControls: React.FC<ControlsProps> = ({
  isPlaying,
  onPlay,
  onPause,
  onReset,
  onStepForward,
  onStepBackward,
  speed,
  onSpeedChange,
  progress
}) => {
  const { t } = useLanguage();

  return (
    <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl flex flex-wrap items-center justify-between gap-6 shadow-xl">
      <div className="flex items-center gap-2">
        <button
          onClick={onReset}
          className="p-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-all"
          title={t.visualizer.controls.reset}
        >
          <RotateCcw size={20} />
        </button>
        <div className="h-8 w-px bg-slate-800 mx-2" />
        <button
          onClick={onStepBackward}
          className="p-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-all"
          title={t.visualizer.controls.stepBackward}
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={isPlaying ? onPause : onPlay}
          className={`
            p-4 rounded-xl transition-all transform active:scale-95
            ${isPlaying ? 'bg-amber-500 hover:bg-amber-400 text-white' : 'bg-indigo-600 hover:bg-indigo-500 text-white'}
          `}
          title={isPlaying ? t.visualizer.controls.pause : t.visualizer.controls.play}
        >
          {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" className="ml-0.5" />}
        </button>

        <button
          onClick={onStepForward}
          className="p-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-all"
          title={t.visualizer.controls.stepForward}
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="flex-1 max-w-xs space-y-1">
        <div className="flex justify-between text-xs text-slate-500 font-medium px-1">
          <span>{t.visualizer.controls.speed}</span>
          <span>{speed}ms</span>
        </div>
        <input
          type="range"
          min="50"
          max="1000"
          step="50"
          value={speed}
          onChange={(e) => onSpeedChange(Number(e.target.value))}
          className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
        />
      </div>

      <div className="flex items-center gap-3">
        <div className="text-right">
          <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">{t.visualizer.controls.progress}</div>
          <div className="text-sm font-mono text-indigo-400">{Math.round(progress)}%</div>
        </div>
        <div className="w-12 h-12 rounded-full border-4 border-slate-800 flex items-center justify-center relative overflow-hidden">
          <div
            className="absolute bottom-0 left-0 w-full bg-indigo-600/30 transition-all duration-300"
            style={{ height: `${progress}%` }}
          />
          <Settings2 size={18} className="text-slate-400" />
        </div>
      </div>
    </div>
  );
};

export default VisualizerControls;
