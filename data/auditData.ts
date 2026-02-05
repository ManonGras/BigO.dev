
export interface AuditExercise {
    id: string;
    title: string;
    code: string;
    correctLines: number[]; // 0-indexed line numbers
    complexity: string;
    explanation: string;
}

export const auditExercises: AuditExercise[] = [
    {
        id: 'bubble-sort',
        title: 'Bubble Sort',
        code: `function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}`,
        correctLines: [2, 3],
        complexity: 'O(n²)',
        explanation: "The outer loop runs 'n' times. The inner loop runs 'n - i' times. This nested structure confirms the quadratic time complexity O(n²)."
    },
    {
        id: 'binary-search',
        title: 'Binary Search',
        code: `function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) return mid;
    
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}`,
        correctLines: [4, 5],
        complexity: 'O(log n)',
        explanation: "The while loop continues as long as 'left <= right'. In each iteration, the search space is divided by 2 (mid calculation). This halving process gives the logarithmic complexity O(log n)."
    },
    {
        id: 'simple-loop',
        title: 'Simple Iteration',
        code: `function printAll(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}`,
        correctLines: [1],
        complexity: 'O(n)',
        explanation: "There is a single loop iterating from 0 to n. This is a linear time complexity O(n)."
    }
];
