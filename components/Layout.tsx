
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
  TableProperties
} from 'lucide-react';

import { useLanguage } from '../contexts/LanguageContext';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: 'visualizer' | 'sheets' | 'quiz' | 'complexity';
  onTabChange: (tab: 'visualizer' | 'sheets' | 'quiz' | 'complexity') => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeTab, onTabChange }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const { t, language, setLanguage } = useLanguage();

  const menuItems = [
    { id: 'visualizer', label: t.menu.visualizer, icon: Activity },
    { id: 'sheets', label: t.menu.sheets, icon: BookOpen },
    { id: 'quiz', label: t.menu.quiz, icon: BrainCircuit },
    { id: 'complexity', label: t.menu.complexity, icon: TableProperties },
  ];

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 overflow-hidden">
      {/* Sidebar */}
      <aside className={`
        ${isSidebarOpen ? 'w-64' : 'w-20'} 
        bg-slate-900 border-r border-slate-800 flex flex-col transition-all duration-300 ease-in-out z-50
      `}>
        <div className="p-6 flex items-center gap-3 border-b border-slate-800">
          <div className="bg-indigo-600 p-2 rounded-lg">
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
                w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all
                ${activeTab === item.id
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'}
              `}
            >
              <item.icon size={20} />
              {isSidebarOpen && <span className="font-medium">{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800 space-y-2">
          <button className="w-full flex items-center gap-4 px-4 py-2 text-slate-400 hover:text-white transition-colors">
            <Settings size={20} />
            {isSidebarOpen && <span>{t.common.settings}</span>}
          </button>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="w-full flex items-center gap-4 px-4 py-2 text-slate-400 hover:text-white transition-colors"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            {isSidebarOpen && <span>{t.common.collapse}</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full relative overflow-hidden">
        {/* Header */}
        <header className="h-16 border-b border-slate-800 bg-slate-900/50 backdrop-blur-md flex items-center justify-between px-8 z-10">
          <h2 className="text-lg font-semibold text-slate-200">
            {menuItems.find(i => i.id === activeTab)?.label}
          </h2>
          <div className="flex items-center gap-4">
            <img
              className="w-9 h-9 rounded-full border-2 border-indigo-500/50 shadow-lg shadow-indigo-500/20"
              src="https://avatars.githubusercontent.com/u/193535234?v=4"
              alt="User Avatar"
            />
            <button
              onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
              className="text-slate-400 hover:text-white flex items-center gap-2 px-2 py-1 rounded hover:bg-slate-800 transition-colors"
              title={language === 'en' ? 'Switch to French' : 'Passer en Anglais'}
            >
              <Languages size={20} />
              <span className="text-sm font-bold">{language.toUpperCase()}</span>
            </button>
            <a
              href="https://github.com/ManonGras/BigO.dev/tree/main"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto bg-slate-950 p-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
