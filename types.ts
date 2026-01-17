
export type Complexity = 'O(1)' | 'O(log n)' | 'O(n)' | 'O(n log n)' | 'O(n²)' | 'O(2ⁿ)' | 'O(n!)';

export interface Algorithm {
  id: string;
  name: string;
  category: 'Sorting' | 'Searching' | 'Graphs' | 'Dynamic Programming';
  description: string;
  timeComplexity: {
    best: Complexity;
    average: Complexity;
    worst: Complexity;
  };
  spaceComplexity: Complexity;
  advantages: string[];
  disadvantages: string[];
  useCases: string[];
  pseudoCode: string[];
  implementation: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
}

export interface VizStep {
  array: number[];
  comparing: number[];
  swapping: number[];
  sorted: number[];
  currentLine: number;
  message: string;
  stats: {
    comparisons: number;
    swaps: number;
  };
}
