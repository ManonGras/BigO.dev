
import React from 'react';
import {
  Activity,
  BookOpen,
  LayoutDashboard,
  BrainCircuit,
  Github,
  Settings,
  Menu,
  X,
  Languages,
  TableProperties,
  Palette as PaletteIcon,
  GraduationCap,
  FileText
} from 'lucide-react';

import { useLanguage } from '../contexts/LanguageContext';
import { useTheme, PALETTES } from '../contexts/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: 'visualizer' | 'sheets' | 'lessons' | 'quiz' | 'complexity' | 'mockExams';
  onTabChange: (tab: 'visualizer' | 'sheets' | 'lessons' | 'quiz' | 'complexity' | 'mockExams') => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeTab, onTabChange }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const [isSettingsOpen, setIsSettingsOpen] = React.useState(false);
  const { t, language, setLanguage } = useLanguage();
  const { currentPalette, setPalette } = useTheme();

  const menuItems = [
    { id: 'visualizer', label: t.menu.visualizer, icon: Activity },
    { id: 'lessons', label: t.menu.lessons, icon: BookOpen },
    { id: 'sheets', label: t.menu.sheets, icon: FileText },
    { id: 'quiz', label: t.menu.quiz, icon: BrainCircuit },
    { id: 'complexity', label: t.menu.complexity, icon: TableProperties },
    { id: 'mockExams', label: t.menu.mockExams, icon: GraduationCap },
  ];

  return (
    <div
      className="flex h-screen overflow-hidden transition-colors duration-500"
      style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
    >
      {/* Sidebar */}
      <aside className={`
        ${isSidebarOpen ? 'w-64' : 'w-20'} 
        flex flex-col transition-all duration-300 ease-in-out z-50 border-r
      `}
        style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}
      >
        <div className="p-6 flex items-center gap-3 border-b" style={{ borderColor: 'var(--border)' }}>
          <div className="p-2 rounded-lg shadow-lg" style={{ backgroundColor: 'var(--accent)' }}>
            <LayoutDashboard size={24} className="text-white" />
          </div>
          {isSidebarOpen && <span className="font-bold text-xl tracking-tight">BigO.dev</span>}
        </div>

        <nav className="flex-1 px-3 py-4 space-y-2 overflow-y-auto">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id as any)}
              className={`
                w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all font-medium
                ${activeTab === item.id
                  ? 'text-white shadow-lg'
                  : 'hover:text-white'}
              `}
              style={{
                backgroundColor: activeTab === item.id ? 'var(--accent)' : 'transparent',
                color: activeTab === item.id ? '#fff' : 'var(--text-secondary)',
                boxShadow: activeTab === item.id ? `0 10px 15px -3px ${currentPalette.colors.accent}44` : 'none'
              }}
            >
              <item.icon size={20} />
              {isSidebarOpen && <span>{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t space-y-2" style={{ borderColor: 'var(--border)' }}>
          <button
            onClick={() => setIsSettingsOpen(true)}
            className="w-full flex items-center gap-4 px-4 py-2 transition-colors hover:text-white"
            style={{ color: 'var(--text-secondary)' }}
          >
            <Settings size={20} />
            {isSidebarOpen && <span>{t.common.settings}</span>}
          </button>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="w-full flex items-center gap-4 px-4 py-2 transition-colors hover:text-white"
            style={{ color: 'var(--text-secondary)' }}
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            {isSidebarOpen && <span>{t.common.collapse}</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full relative overflow-hidden">
        {/* Header */}
        <header
          className="h-16 border-b backdrop-blur-md flex items-center justify-between px-8 z-10"
          style={{ backgroundColor: `${currentPalette.colors.bgSecondary}cc`, borderColor: 'var(--border)' }}
        >
          <h2 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
            {menuItems.find(i => i.id === activeTab)?.label}
          </h2>
          <div className="flex items-center gap-4">
            <img
              className="w-9 h-9 rounded-full border-2"
              style={{ borderColor: `${currentPalette.colors.accent}88` }}
              src="https://avatars.githubusercontent.com/u/193535234?v=4"
              alt="User Avatar"
            />
            <button
              onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
              className="flex items-center gap-2 px-2 py-1 rounded hover:opacity-80 transition-opacity"
              style={{ color: 'var(--text-secondary)', backgroundColor: 'var(--bg-primary)' }}
              title={language === 'en' ? 'Switch to French' : 'Passer en Anglais'}
            >
              <Languages size={20} />
              <span className="text-sm font-bold">{language.toUpperCase()}</span>
            </button>
            <a
              href="https://github.com/ManonGras/BigO.dev/tree/main"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
              style={{ color: 'var(--text-secondary)' }}
            >
              <Github size={20} />
            </a>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6" style={{ backgroundColor: 'var(--bg-primary)' }}>
          {children}
        </div>
      </main>

      {/* Settings Modal */}
      {isSettingsOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div
            className="w-full max-w-md rounded-2xl shadow-2xl border animate-in zoom-in-95 duration-300 overflow-hidden"
            style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}
          >
            <div className="p-6 border-b flex items-center justify-between" style={{ borderColor: 'var(--border)' }}>
              <div className="flex items-center gap-3">
                <Settings className="text-indigo-500" />
                <h3 className="text-xl font-bold">{t.common.settings}</h3>
              </div>
              <button
                onClick={() => setIsSettingsOpen(false)}
                className="hover:rotate-90 transition-transform duration-300"
                style={{ color: 'var(--text-secondary)' }}
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <label className="flex items-center gap-2 mb-4 text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
                  <PaletteIcon size={16} />
                  Color Palettes
                </label>
                <div className="grid grid-cols-1 gap-3">
                  {PALETTES.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setPalette(p.id)}
                      className={`
                        w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all
                        ${currentPalette.id === p.id ? 'shadow-lg' : 'hover:scale-[1.02]'}
                      `}
                      style={{
                        backgroundColor: 'var(--bg-primary)',
                        borderColor: currentPalette.id === p.id ? 'var(--accent)' : 'var(--border)',
                        color: currentPalette.id === p.id ? 'var(--text-primary)' : 'var(--text-secondary)'
                      }}
                    >
                      <span className="font-medium">{p.name}</span>
                      <div className="flex gap-1.5">
                        <div className="w-5 h-5 rounded-full" style={{ backgroundColor: p.colors.bgPrimary }} />
                        <div className="w-5 h-5 rounded-full" style={{ backgroundColor: p.colors.bgSecondary }} />
                        <div className="w-5 h-5 rounded-full" style={{ backgroundColor: p.colors.accent }} />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 bg-black/20 flex justify-end">
              <button
                onClick={() => setIsSettingsOpen(false)}
                className="px-6 py-2 rounded-xl font-bold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: 'var(--accent)' }}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
