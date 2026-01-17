
import { Algorithm } from '../types';

export const ALGORITHMS: Algorithm[] = [
  {
    id: 'bubble-sort',
    name: 'Bubble Sort',
    category: 'Sorting',
    description: 'A simple comparison-based sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.',
    timeComplexity: {
      best: 'O(n)',
      average: 'O(n²)',
      worst: 'O(n²)'
    },
    spaceComplexity: 'O(1)',
    advantages: [
      'Easy to understand and implement',
      'Stable sorting algorithm',
      'In-place sorting (no extra space needed)'
    ],
    disadvantages: [
      'Very inefficient for large datasets',
      'High number of swaps'
    ],
    useCases: [
      'Educational purposes to introduce sorting',
      'Extremely small datasets'
    ],
    pseudoCode: [
      'do',
      '  swapped = false',
      '  for i from 1 to n-1',
      '    if leftElement > rightElement',
      '      swap(leftElement, rightElement)',
      '      swapped = true',
      'while swapped'
    ],
    implementation: `function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}`
  },
  {
    id: 'binary-search',
    name: 'Binary Search',
    category: 'Searching',
    description: 'A fast search algorithm that finds the position of a target value within a sorted array by repeatedly dividing the search interval in half.',
    timeComplexity: {
      best: 'O(1)',
      average: 'O(log n)',
      worst: 'O(log n)'
    },
    spaceComplexity: 'O(1)',
    advantages: [
      'Much faster than linear search for large datasets',
      'Predictable performance'
    ],
    disadvantages: [
      'Requires the data to be sorted beforehand',
      'Only works on contiguous memory (arrays)'
    ],
    useCases: [
      'Searching in large sorted databases',
      'Dictionary lookups'
    ],
    pseudoCode: [
      'low = 0, high = n-1',
      'while low <= high',
      '  mid = (low + high) / 2',
      '  if target == array[mid] return mid',
      '  else if target < array[mid] high = mid - 1',
      '  else low = mid + 1',
      'return -1'
    ],
    implementation: `function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}`
  }
];
