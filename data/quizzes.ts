
import { QuizQuestion } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    category: 'Sorting',
    question: 'What is the worst-case time complexity of Bubble Sort?',
    options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(1)'],
    correctAnswer: 2,
    explanation: 'In the worst case (reverse sorted array), Bubble Sort must perform comparisons and swaps for every pair, resulting in n*(n-1)/2 operations, which is O(n²).'
  },
  {
    id: 'q2',
    category: 'Searching',
    question: 'Binary Search requires the input array to be:',
    options: ['Unsorted', 'Sorted', 'Empty', 'Reversed'],
    correctAnswer: 1,
    explanation: 'Binary Search relies on the property that elements are ordered to decide which half of the range to eliminate.'
  },
  {
    id: 'q3',
    category: 'Complexity',
    question: 'Which of the following complexities is the most efficient for large datasets?',
    options: ['O(n²)', 'O(n log n)', 'O(n)', 'O(log n)'],
    correctAnswer: 3,
    explanation: 'Logarithmic time O(log n) grows much slower than linear or quadratic time as input size increases.'
  }
];
