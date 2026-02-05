
export type Complexity = 'O(1)' | 'O(log n)' | 'O(n)' | 'O(n log n)' | 'O(n²)' | 'O(2ⁿ)' | 'O(n!)';

export interface Algorithm {
  id: string;
  name: string;
  category: 'Sorting' | 'Searching' | 'Graphs' | 'Dynamic Programming' | 'Trees' | 'LinkedLists';
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
  terminationProof?: string[];
  correctnessProof?: string[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
}



export interface TreeNode {
  value: number;
  left?: TreeNode;
  right?: TreeNode;
  x?: number; // For visualization positioning
  y?: number;
  isVisited?: boolean;
  isCurrent?: boolean;
  isTarget?: boolean;
  id: string; // unique ID for React keys
}

export interface LinkedListNode {
  id: string;
  value: number;
  next?: LinkedListNode;
  prev?: LinkedListNode;
  x?: number;
  y?: number;
  isHead?: boolean;
  isTail?: boolean;
  isCurrent?: boolean;
  isTarget?: boolean;
  label?: string; // e.g., "Head", "Tail", "Prev", "Next", "Curr"
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
  tree?: TreeNode; // For Tree algorithms
  linkedList?: LinkedListNode; // For Linked List algorithms (Head node)
}

export interface CourseSection {
  id: string;
  title: string;
  content: string[];
  subsections?: {
    title: string;
    content: string[];
  }[];
  codeExample?: {
    language: string;
    code: string;
    caption?: string;
  };
  table?: {
    headers: string[];
    rows: string[][];
  };
}

export interface Course {
  id: string;
  title: string;
  description: string;
  sections: CourseSection[];
}
