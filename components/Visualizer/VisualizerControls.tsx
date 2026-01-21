
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
import { useTheme } from '../../contexts/ThemeContext';

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
  const { currentPalette } = useTheme();

  return (
    <div className="border p-4 rounded-2xl flex flex-wrap items-center justify-between gap-6 shadow-xl"
      style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border)' }}>
      <div className="flex items-center gap-2">
        <button
          onClick={onReset}
          className="p-3 rounded-xl transition-all hover:bg-black/20"
          style={{ color: 'var(--text-secondary)' }}
          title={t.visualizer.controls.reset}
        >
          <RotateCcw size={20} />
        </button>
        <div className="h-8 w-px mx-2" style={{ backgroundColor: 'var(--border)' }} />
        <button
          onClick={onStepBackward}
          className="p-3 rounded-xl transition-all hover:bg-black/20"
          style={{ color: 'var(--text-secondary)' }}
          title={t.visualizer.controls.stepBackward}
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={isPlaying ? onPause : onPlay}
          className={`
            p-4 rounded-xl transition-all transform active:scale-95 text-white shadow-lg
          `}
          style={{
            backgroundColor: isPlaying ? '#f59e0b' : 'var(--accent)',
            boxShadow: `0 10px 15px -3px ${isPlaying ? '#f59e0b44' : currentPalette.colors.accent + '44'}`
          }}
          title={isPlaying ? t.visualizer.controls.pause : t.visualizer.controls.play}
        >
          {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" className="ml-0.5" />}
        </button>

        <button
          onClick={onStepForward}
          className="p-3 rounded-xl transition-all hover:bg-black/20"
          style={{ color: 'var(--text-secondary)' }}
          title={t.visualizer.controls.stepForward}
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="flex-1 max-w-xs space-y-1">
        <div className="flex justify-between text-xs font-medium px-1">
          <span style={{ color: 'var(--text-secondary)' }}>{t.visualizer.controls.speed}</span>
          <span style={{ color: 'var(--accent)' }}>{speed}ms</span>
        </div>
        <input
          type="range"
          min="50"
          max="1000"
          step="50"
          value={speed}
          onChange={(e) => onSpeedChange(Number(e.target.value))}
          className="w-full h-1.5 rounded-lg appearance-none cursor-pointer"
          style={{
            backgroundColor: 'var(--bg-secondary)',
            accentColor: 'var(--accent)'
          }}
        />
      </div>

      <div className="flex items-center gap-3">
        <div className="text-right">
          <div className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>{t.visualizer.controls.progress}</div>
          <div className="text-sm font-mono font-bold" style={{ color: 'var(--accent)' }}>{Math.round(progress)}%</div>
        </div>
        <div className="w-12 h-12 rounded-full border-4 flex items-center justify-center relative overflow-hidden"
          style={{ borderColor: 'var(--border)' }}>
          <div
            className="absolute bottom-0 left-0 w-full transition-all duration-300 opacity-20"
            style={{ height: `${progress}%`, backgroundColor: 'var(--accent)' }}
          />
          <Settings2 size={18} style={{ color: 'var(--text-secondary)' }} />
        </div>
      </div>
    </div>
  );
};

export default VisualizerControls;
