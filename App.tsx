
import React, { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout';
import AlgorithmVisualizer from './components/Visualizer/AlgorithmVisualizer';
import TechnicalSheets from './components/Sheets/TechnicalSheets';
import Courses from './components/Courses/Courses';
import QuizModule from './components/Quiz/QuizModule';
import ComplexityOverview from './components/Complexity/ComplexityOverview';

type Tab = 'visualizer' | 'sheets' | 'courses' | 'quiz' | 'complexity';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('visualizer');

  const renderContent = () => {
    switch (activeTab) {
      case 'visualizer':
        return <AlgorithmVisualizer />;
      case 'sheets':
        return <TechnicalSheets />;
      case 'courses':
        return <Courses />;
      case 'quiz':
        return <QuizModule />;
      case 'complexity':
        return <ComplexityOverview />;
      default:
        return <AlgorithmVisualizer />;
    }
  };

  return (
    <LanguageProvider>
      <ThemeProvider>
        <Layout activeTab={activeTab} onTabChange={setActiveTab}>
          <div className="h-full">
            {renderContent()}
          </div>
        </Layout>
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default App;
