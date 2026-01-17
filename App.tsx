
import React, { useState } from 'react';
import Layout from './components/Layout';
import AlgorithmVisualizer from './components/Visualizer/AlgorithmVisualizer';
import TechnicalSheets from './components/Sheets/TechnicalSheets';
import QuizModule from './components/Quiz/QuizModule';

type Tab = 'visualizer' | 'sheets' | 'quiz';

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
      default:
        return <AlgorithmVisualizer />;
    }
  };

  return (
    <Layout activeTab={activeTab} onTabChange={setActiveTab}>
      <div className="h-full">
        {renderContent()}
      </div>
    </Layout>
  );
};

export default App;
