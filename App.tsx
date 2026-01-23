
import React, { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout';
import AlgorithmVisualizer from './components/Visualizer/AlgorithmVisualizer';
import TechnicalSheets from './components/Sheets/TechnicalSheets';
import Lessons from './components/Lessons';
import QuizModule from './components/Quiz/QuizModule';
import ComplexityOverview from './components/Complexity/ComplexityOverview';
import MockExams from './components/Exams/MockExams';

type Tab = 'visualizer' | 'sheets' | 'lessons' | 'quiz' | 'complexity' | 'mockExams';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('visualizer');

  const renderContent = () => {
    switch (activeTab) {
      case 'visualizer':
        return <AlgorithmVisualizer />;
      case 'sheets':
        return <TechnicalSheets />;
      case 'lessons':
        return <Lessons />;
      case 'quiz':
        return <QuizModule />;
      case 'complexity':
        return <ComplexityOverview />;
      case 'mockExams':
        return <MockExams />;
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
