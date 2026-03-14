
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
  FileText,
  ScanSearch,
  ChevronRight,
  Layers
} from 'lucide-react';

import { useLanguage } from '../contexts/LanguageContext';
import { useTheme, PALETTES } from '../contexts/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: 'visualizer' | 'sheets' | 'courses' | 'quiz' | 'complexity' | 'mockExams' | 'audit' | 'scenarios';
  onTabChange: (tab: 'visualizer' | 'sheets' | 'courses' | 'quiz' | 'complexity' | 'mockExams' | 'audit' | 'scenarios') => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeTab, onTabChange }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const [isSettingsOpen, setIsSettingsOpen] = React.useState(false);
  const { t, language, setLanguage } = useLanguage();
  const { currentPalette, setPalette } = useTheme();

  const menuItems = [
    { id: 'visualizer', label: t.menu.visualizer, icon: Activity, description: language === 'fr' ? 'Visualiser les algorithmes' : 'Watch algorithms run' },
    { id: 'sheets', label: t.menu.sheets, icon: FileText, description: language === 'fr' ? 'Fiches de révision' : 'Quick reference cards' },
    { id: 'courses', label: t.menu.courses, icon: BookOpen, description: language === 'fr' ? 'Cours et théorie' : 'Lessons and theory' },
    { id: 'quiz', label: t.menu.quiz, icon: BrainCircuit, description: language === 'fr' ? 'Quiz interactifs' : 'Test your knowledge' },
    { id: 'complexity', label: t.menu.complexity, icon: TableProperties, description: language === 'fr' ? 'Tableaux de complexités' : 'Complexity cheat sheet' },
    { id: 'mockExams', label: t.menu.mockExams, icon: GraduationCap, description: language === 'fr' ? 'Préparer l\'examen' : 'Exam preparation' },
    { id: 'audit', label: t.menu.audit, icon: ScanSearch, description: language === 'fr' ? 'Analyser du code' : 'Analyze code complexity' },
    { id: 'scenarios', label: t.menu.scenarios, icon: Layers, description: language === 'fr' ? 'Types de tableaux et optimisations' : 'Array types and optimizations' },
  ];

  const activeItem = menuItems.find(i => i.id === activeTab);

  return (
    <div
      className="flex h-screen overflow-hidden transition-colors duration-500"
      style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
    >
      {/* Sidebar */}
      <aside className={`
        ${isSidebarOpen ? 'w-60' : 'w-[72px]'} 
        flex flex-col transition-all duration-300 ease-in-out z-50 border-r shrink-0
      `}
        style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}
      >
        {/* Logo + Toggle on same line */}
        <div className="h-16 px-4 flex items-center justify-between border-b shrink-0" style={{ borderColor: 'var(--border)' }}>
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 shadow-lg" style={{ backgroundColor: 'var(--accent)' }}>
              <LayoutDashboard size={16} className="text-white" />
            </div>
            {isSidebarOpen && (
              <span className="font-bold text-base tracking-tight whitespace-nowrap" style={{ color: 'var(--text-primary)' }}>
                BigO.dev
              </span>
            )}
          </div>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-1.5 rounded-lg transition-colors hover:bg-black/20 shrink-0"
            style={{ color: 'var(--text-secondary)' }}
            title={isSidebarOpen ? t.common.collapse : 'Ouvrir le menu'}
          >
            <Menu size={18} />
          </button>
        </div>

        {/* Nav Items */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto overflow-x-hidden">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id as any)}
              title={!isSidebarOpen ? item.label : undefined}
              className={`
                w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all text-sm font-medium group relative
                ${activeTab === item.id
                  ? 'text-white shadow-md'
                  : 'hover:bg-white/5'}
              `}
              style={{
                backgroundColor: activeTab === item.id ? 'var(--accent)' : 'transparent',
                color: activeTab === item.id ? '#fff' : 'var(--text-secondary)',
              }}
            >
              <item.icon size={18} className="shrink-0" />
              {isSidebarOpen && (
                <span className="truncate">{item.label}</span>
              )}
              {/* Active indicator */}
              {activeTab === item.id && !isSidebarOpen && (
                <span
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-l-full"
                  style={{ backgroundColor: 'var(--accent)' }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Bottom actions */}
        <div className="px-3 py-4 border-t space-y-1 shrink-0" style={{ borderColor: 'var(--border)' }}>
          <button
            onClick={() => setIsSettingsOpen(true)}
            title={!isSidebarOpen ? t.common.settings : undefined}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors hover:bg-white/5 text-sm font-medium"
            style={{ color: 'var(--text-secondary)' }}
          >
            <Settings size={18} className="shrink-0" />
            {isSidebarOpen && <span className="truncate">{t.common.settings}</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full relative overflow-hidden min-w-0">
        {/* Header */}
        <header
          className="h-16 border-b backdrop-blur-md flex items-center justify-between px-6 z-10 shrink-0"
          style={{ backgroundColor: `${currentPalette.colors.bgSecondary}cc`, borderColor: 'var(--border)' }}
        >
          {/* Page title + breadcrumb */}
          <div className="flex items-center gap-3 min-w-0">
            {activeItem && (
              <>
                <div className="p-1.5 rounded-lg" style={{ backgroundColor: `${currentPalette.colors.accent}20` }}>
                  <activeItem.icon size={16} style={{ color: 'var(--accent)' }} />
                </div>
                <div className="min-w-0">
                  <h1 className="text-sm font-bold leading-none truncate" style={{ color: 'var(--text-primary)' }}>
                    {activeItem.label}
                  </h1>
                  <p className="text-xs mt-0.5 truncate hidden sm:block" style={{ color: 'var(--text-secondary)' }}>
                    {activeItem.description}
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all hover:bg-white/5"
              style={{ color: 'var(--text-secondary)', backgroundColor: `${currentPalette.colors.bgPrimary}88` }}
              title={language === 'en' ? 'Switch to French' : 'Passer en Anglais'}
            >
              <Languages size={15} />
              <span>{language.toUpperCase()}</span>
            </button>

            <a
              href="https://github.com/ManonGras/BigO.dev/tree/main"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg transition-colors hover:bg-white/5"
              style={{ color: 'var(--text-secondary)' }}
              title="GitHub"
            >
              <Github size={18} />
            </a>

            <button
              onClick={() => setIsSettingsOpen(true)}
              className="p-1 rounded-full overflow-hidden border-2 transition-colors"
              style={{ borderColor: `${currentPalette.colors.accent}66` }}
              title={t.common.settings}
            >
              <img
                className="w-6 h-6 rounded-full block"
                src="https://avatars.githubusercontent.com/u/193535234?v=4"
                alt="User Avatar"
              />
            </button>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6" style={{ backgroundColor: 'var(--bg-primary)' }}>
          {children}
        </div>
      </main>

      {/* Settings Modal */}
      {isSettingsOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div
            className="w-full max-w-sm rounded-2xl shadow-2xl border overflow-hidden"
            style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}
          >
            {/* Modal Header */}
            <div className="p-5 border-b flex items-center justify-between" style={{ borderColor: 'var(--border)' }}>
              <div className="flex items-center gap-2.5">
                <PaletteIcon size={18} style={{ color: 'var(--accent)' }} />
                <h3 className="text-base font-bold">{t.common.settings}</h3>
              </div>
              <button
                onClick={() => setIsSettingsOpen(false)}
                className="p-1.5 rounded-lg hover:bg-black/20 transition-colors"
                style={{ color: 'var(--text-secondary)' }}
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-5 space-y-4">
              {/* Language Toggle */}
              <div>
                <label className="flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
                  <Languages size={13} />
                  {language === 'fr' ? 'Langue' : 'Language'}
                </label>
                <div className="flex gap-2">
                  {(['fr', 'en'] as const).map(lang => (
                    <button
                      key={lang}
                      onClick={() => setLanguage(lang)}
                      className="flex-1 py-2.5 rounded-xl text-sm font-bold border-2 transition-all"
                      style={{
                        backgroundColor: language === lang ? 'var(--accent)' : 'transparent',
                        borderColor: language === lang ? 'var(--accent)' : 'var(--border)',
                        color: language === lang ? '#fff' : 'var(--text-secondary)',
                      }}
                    >
                      {lang === 'fr' ? '🇫🇷 Français' : '🇬🇧 English'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Palettes */}
              <div>
                <label className="flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
                  <PaletteIcon size={13} />
                  {language === 'fr' ? 'Thème' : 'Theme'}
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {PALETTES.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setPalette(p.id)}
                      className="w-full flex items-center justify-between p-3 rounded-xl border-2 transition-all"
                      style={{
                        backgroundColor: currentPalette.id === p.id ? `${p.colors.accent}15` : 'var(--bg-primary)',
                        borderColor: currentPalette.id === p.id ? p.colors.accent : 'var(--border)',
                        color: currentPalette.id === p.id ? 'var(--text-primary)' : 'var(--text-secondary)'
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex gap-1">
                          <div className="w-4 h-4 rounded-full border border-white/10" style={{ backgroundColor: p.colors.bgPrimary }} />
                          <div className="w-4 h-4 rounded-full border border-white/10" style={{ backgroundColor: p.colors.bgSecondary }} />
                          <div className="w-4 h-4 rounded-full border border-white/10" style={{ backgroundColor: p.colors.accent }} />
                        </div>
                        <span className="text-sm font-semibold">{p.name}</span>
                      </div>
                      {currentPalette.id === p.id && (
                        <ChevronRight size={14} style={{ color: p.colors.accent }} />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-5 border-t" style={{ borderColor: 'var(--border)' }}>
              <button
                onClick={() => setIsSettingsOpen(false)}
                className="w-full py-2.5 rounded-xl font-bold text-sm text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: 'var(--accent)' }}
              >
                {language === 'fr' ? 'Fermer' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
