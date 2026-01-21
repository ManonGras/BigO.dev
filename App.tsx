
import React, { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Layout from './components/Layout';
import AlgorithmVisualizer from './components/Visualizer/AlgorithmVisualizer';
import TechnicalSheets from './components/Sheets/TechnicalSheets';
import QuizModule from './components/Quiz/QuizModule';
import ComplexityOverview from './components/Complexity/ComplexityOverview';

type Tab = 'visualizer' | 'sheets' | 'quiz' | 'complexity';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('visualizer');

  const renderContent = () => {
    switch (activeTab) {
      case 'visualizer':
        return <AlgorithmVisualizer />;
      case 'sheets':
        return <TechnicalSheets />;
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
      <Layout activeTab={activeTab} onTabChange={setActiveTab}>
        <div className="h-full">
          {renderContent()}
        </div>
      </Layout>
    </LanguageProvider>
  );
};

export default App;
