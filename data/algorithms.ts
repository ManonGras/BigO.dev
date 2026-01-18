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
    id: 'selection-sort',
    name: 'Selection Sort',
    category: 'Sorting',
    description: 'An in-place comparison sort that divides the input list into two parts: a sorted sublist of items which is built up from left to right at the front (left) of the list, and a sublist of the remaining unsorted items.',
    timeComplexity: {
      best: 'O(n²)',
      average: 'O(n²)',
      worst: 'O(n²)'
    },
    spaceComplexity: 'O(1)',
    advantages: [
      'Simple to implement',
      'Performs well on small lists',
      'In-place sorting'
    ],
    disadvantages: [
      'Inefficient O(n²) time complexity',
      'Unstable sort'
    ],
    useCases: [
      'Checking if everything is already sorted',
      'Memory writes are costly (minimizes swaps)'
    ],
    pseudoCode: [
      'for i from 0 to n-1',
      '  minIdx = i',
      '  for j from i+1 to n',
      '    if array[j] < array[minIdx]',
      '      minIdx = j',
      '  swap(array[i], array[minIdx])'
    ],
    implementation: `function selectionSort(arr) {
  let n = arr.length;
  for(let i = 0; i < n; i++) {
    let min = i;
    for(let j = i+1; j < n; j++){
      if(arr[j] < arr[min]) {
        min = j; 
      }
    }
    if (min != i) {
       let tmp = arr[i]; 
       arr[i] = arr[min];
       arr[min] = tmp;      
    }
  }
  return arr;
}`
  },
  {
    id: 'insertion-sort',
    name: 'Insertion Sort',
    category: 'Sorting',
    description: 'Builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.',
    timeComplexity: {
      best: 'O(n)',
      average: 'O(n²)',
      worst: 'O(n²)'
    },
    spaceComplexity: 'O(1)',
    advantages: [
      'Efficient for small data sets',
      'Adaptive (efficient for data sets that are already substantially sorted)',
      'Stable sort'
    ],
    disadvantages: [
      'Inefficient for large lists',
      'Performance degrades with reverse ordered data'
    ],
    useCases: [
      'Small datasets',
      'Partially sorted arrays'
    ],
    pseudoCode: [
      'for i from 1 to n-1',
      '  key = array[i]',
      '  j = i - 1',
      '  while j >= 0 and array[j] > key',
      '    array[j+1] = array[j]',
      '    j = j - 1',
      '  array[j+1] = key'
    ],
    implementation: `function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let current = arr[i];
    let j = i-1; 
    while ((j > -1) && (current < arr[j])) {
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1] = current;
  }
  return arr;
}`
  },
  {
    id: 'merge-sort',
    name: 'Merge Sort',
    category: 'Sorting',
    description: 'A divide and conquer algorithm that divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves.',
    timeComplexity: {
      best: 'O(n log n)',
      average: 'O(n log n)',
      worst: 'O(n log n)'
    },
    spaceComplexity: 'O(n)',
    advantages: [
      'Guaranteed O(n log n) performance',
      'Stable sort',
      'Good for linked lists'
    ],
    disadvantages: [
      'Requires O(n) extra space',
      'Slower for small tasks due to overhead'
    ],
    useCases: [
      'Sorting linked lists',
      'External sorting (large datasets)'
    ],
    pseudoCode: [
      'function mergeSort(arr)',
      '  if length <= 1 return',
      '  mid = length / 2',
      '  left = mergeSort(arr[0..mid])',
      '  right = mergeSort(arr[mid..end])',
      '  return merge(left, right)'
    ],
    implementation: `function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  let result = [], i = 0, j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) result.push(left[i++]);
    else result.push(right[j++]);
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}`
  },
  {
    id: 'quick-sort',
    name: 'Quick Sort',
    category: 'Sorting',
    description: 'A divide and conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot.',
    timeComplexity: {
      best: 'O(n log n)',
      average: 'O(n log n)',
      worst: 'O(n²)'
    },
    spaceComplexity: 'O(log n)',
    advantages: [
      'Very fast on average',
      'In-place sort (mostly)',
      'Cache friendly'
    ],
    disadvantages: [
      'Worst case O(n²)',
      'Unstable sort',
      'Performance depends on pivot choice'
    ],
    useCases: [
      'General purpose sorting',
      'Large datasets'
    ],
    pseudoCode: [
      'quickSort(arr, low, high)',
      '  if low < high',
      '    pi = partition(arr, low, high)',
      '    quickSort(arr, low, pi - 1)',
      '    quickSort(arr, pi + 1, high)'
    ],
    implementation: `function quickSort(arr, low, high) {
  if (low < high) {
    let pi = partition(arr, low, high);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
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
  },
  {
    id: 'heap-sort',
    name: 'Heap Sort',
    category: 'Sorting',
    description: 'A comparison-based sorting technique based on Binary Heap data structure. It is similar to selection sort where we first find the maximum element and place the maximum element at the end.',
    timeComplexity: {
      best: 'O(n log n)',
      average: 'O(n log n)',
      worst: 'O(n log n)'
    },
    spaceComplexity: 'O(1)',
    advantages: [
      'Efficient O(n log n) time complexity',
      'No recursion (can be iterative)',
      'Low memory usage'
    ],
    disadvantages: [
      'Unstable sort',
      'Poor cache locality'
    ],
    useCases: [
      'Systems concerned with security and embedded systems',
      'Sorting worst-case datasets'
    ],
    pseudoCode: [
      'heapSort(arr)',
      '  buildMaxHeap(arr)',
      '  for i = n-1 down to 0',
      '    swap(arr[0], arr[i])',
      '    heapify(arr, i, 0)'
    ],
    implementation: `function heapSort(arr) {
  let n = arr.length;
  // Build heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--)
    heapify(arr, n, i);
  // Extract
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }
}`
  },
  {
    id: 'bst-insert',
    name: 'BST Insertion',
    category: 'Trees',
    description: 'Inserting a new key into a Binary Search Tree (BST) while maintaining the BST property: left child < parent < right child.',
    timeComplexity: {
      best: 'O(log n)',
      average: 'O(log n)',
      worst: 'O(n)'
    },
    spaceComplexity: 'O(n)',
    advantages: [
      'Maintains sorted order',
      'Efficient average case'
    ],
    disadvantages: [
      'Can become unbalanced (skewed)',
      'Worst case O(n)'
    ],
    useCases: [
      'Dynamic sets',
      'Lookup tables'
    ],
    pseudoCode: [
      'insert(node, key)',
      '  if node is null return newNode(key)',
      '  if key < node.key',
      '    node.left = insert(node.left, key)',
      '  else if key > node.key',
      '    node.right = insert(node.right, key)',
      '  return node'
    ],
    implementation: `function insert(root, key) {
  if (root === null) return new Node(key);
  if (key < root.key)
    root.left = insert(root.left, key);
  else if (key > root.key)
    root.right = insert(root.right, key);
  return root;
}`
  },
  {
    id: 'linked-list-singly',
    name: 'Singly Linked List',
    category: 'LinkedLists',
    description: 'A linear data structure where each element is a separate object. Each element (we will call it a node) of a list is comprising of two items - the data and a reference to the next node.',
    timeComplexity: {
      best: 'O(1)', // Insertion at head
      average: 'O(n)', // Search/Deletion
      worst: 'O(n)'
    },
    spaceComplexity: 'O(n)',
    advantages: [
      'Dynamic size',
      'Ease of insertion/deletion'
    ],
    disadvantages: [
      'Random access is not allowed',
      'Extra memory for a pointer'
    ],
    useCases: [
      'Implementation of stacks and queues',
      'Symbol tables'
    ],
    pseudoCode: [
      'Structure Node { data, next }',
      'insert(head, key)',
      '  newNode = new Node(key)',
      '  newNode.next = head',
      '  head = newNode',
      '  return head'
    ],
    implementation: `class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function insertHead(head, val) {
  let newNode = new Node(val);
  newNode.next = head;
  return newNode;
}`
  },
  {
    id: 'linked-list-doubly',
    name: 'Doubly Linked List',
    category: 'LinkedLists',
    description: 'A linked data structure that consists of a set of sequentially linked records called nodes. Each node contains three fields: two link fields (references to the previous and to the next node) and one data field.',
    timeComplexity: {
      best: 'O(1)',
      average: 'O(n)',
      worst: 'O(n)'
    },
    spaceComplexity: 'O(n)',
    advantages: [
      'Traverse in both directions',
      'Insertion/Deletion is easier if node is known'
    ],
    disadvantages: [
      'Extra memory for two pointers',
      'More complex implementation'
    ],
    useCases: [
      'Navigation systems (forward/back)',
      'Undo/Redo functionality'
    ],
    pseudoCode: [
      'Structure Node { data, prev, next }',
      'insertHead(head, key)',
      '  newNode = new Node(key)',
      '  newNode.next = head',
      '  if head != null head.prev = newNode',
      '  head = newNode',
      '  return head'
    ],
    implementation: `class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

function insertHead(head, val) {
  let newNode = new Node(val);
  newNode.next = head;
  if(head) head.prev = newNode; 
  return newNode;
}`
  }
];

export const ALGORITHMS_FR: Algorithm[] = [
  {
    id: 'bubble-sort',
    name: 'Tri à Bulles',
    category: 'Sorting',
    description: "Un algorithme de tri simple basé sur des comparaisons qui parcourt la liste à plusieurs reprises, compare les éléments adjacents et les échange s'ils sont dans le mauvais ordre.",
    timeComplexity: {
      best: 'O(n)',
      average: 'O(n²)',
      worst: 'O(n²)'
    },
    spaceComplexity: 'O(1)',
    advantages: [
      'Facile à comprendre et à implémenter',
      'Algorithme de tri stable',
      'Tri en place (pas besoin d\'espace supplémentaire)'
    ],
    disadvantages: [
      'Très inefficace pour les grands jeux de données',
      'Nombre élevé d\'échanges'
    ],
    useCases: [
      'À des fins éducatives pour introduire le tri',
      'Jeux de données extrêmement petits'
    ],
    pseudoCode: [
      'repeter',
      '  echange = faux',
      '  pour i de 1 à n-1',
      '    si elementGauche > elementDroit',
      '      echanger(elementGauche, elementDroit)',
      '      echange = vrai',
      'tant que echange est vrai'
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
    id: 'selection-sort',
    name: 'Tri par Sélection',
    category: 'Sorting',
    description: "Un tri par comparaison sur place qui divise la liste d'entrée en deux parties : une sous-liste triée construite de gauche à droite, et une sous-liste des éléments restants non triés.",
    timeComplexity: {
      best: 'O(n²)',
      average: 'O(n²)',
      worst: 'O(n²)'
    },
    spaceComplexity: 'O(1)',
    advantages: [
      'Simple à implémenter',
      'Performe bien sur les petites listes',
      'Tri en place'
    ],
    disadvantages: [
      'Complexité inefficace O(n²)',
      'Tri instable'
    ],
    useCases: [
      'Vérifier si tout est déjà trié',
      'Les écritures en mémoire sont coûteuses (minimise les échanges)'
    ],
    pseudoCode: [
      'pour i de 0 à n-1',
      '  minIdx = i',
      '  pour j de i+1 à n',
      '    si tableau[j] < tableau[minIdx]',
      '      minIdx = j',
      '  echanger(tableau[i], tableau[minIdx])'
    ],
    implementation: `function selectionSort(arr) {
  let n = arr.length;
  for(let i = 0; i < n; i++) {
    let min = i;
    for(let j = i+1; j < n; j++){
      if(arr[j] < arr[min]) {
        min = j; 
      }
    }
    if (min != i) {
       let tmp = arr[i]; 
       arr[i] = arr[min];
       arr[min] = tmp;      
    }
  }
  return arr;
}`
  },
  {
    id: 'insertion-sort',
    name: 'Tri par Insertion',
    category: 'Sorting',
    description: "Construit le tableau trié final un élément à la fois. Il est beaucoup moins efficace sur les grandes listes que des algorithmes plus avancés comme quicksort, heapsort ou merge sort.",
    timeComplexity: {
      best: 'O(n)',
      average: 'O(n²)',
      worst: 'O(n²)'
    },
    spaceComplexity: 'O(1)',
    advantages: [
      'Efficace pour les petits ensembles de données',
      'Adaptatif (efficace pour les données déjà substantiellement triées)',
      'Tri stable'
    ],
    disadvantages: [
      'Inefficace pour les grandes listes',
      'La performance se dégrade avec des données inversées'
    ],
    useCases: [
      'Petits ensembles de données',
      'Tableaux partiellement triés'
    ],
    pseudoCode: [
      'pour i de 1 à n-1',
      '  cle = tableau[i]',
      '  j = i - 1',
      '  tant que j >= 0 et tableau[j] > cle',
      '    tableau[j+1] = tableau[j]',
      '    j = j - 1',
      '  tableau[j+1] = cle'
    ],
    implementation: `function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let current = arr[i];
    let j = i-1; 
    while ((j > -1) && (current < arr[j])) {
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1] = current;
  }
  return arr;
}`
  },
  {
    id: 'merge-sort',
    name: 'Tri Fusion',
    category: 'Sorting',
    description: "Un algorithme diviser pour régner qui divise le tableau d'entrée en deux moitiés, s'appelle lui-même pour les deux moitiés, puis fusionne les deux moitiés triées.",
    timeComplexity: {
      best: 'O(n log n)',
      average: 'O(n log n)',
      worst: 'O(n log n)'
    },
    spaceComplexity: 'O(n)',
    advantages: [
      'Performance garantie O(n log n)',
      'Tri stable',
      'Bon pour les listes chaînées'
    ],
    disadvantages: [
      'Nécessite O(n) d\'espace supplémentaire',
      'Plus lent pour les petites tâches en raison du surcoût'
    ],
    useCases: [
      'Tri de listes chaînées',
      'Tri externe (grands ensembles de données)'
    ],
    pseudoCode: [
      'fonction triFusion(tab)',
      '  si longueur <= 1 retourner',
      '  milieu = longueur / 2',
      '  gauche = triFusion(tab[0..milieu])',
      '  droite = triFusion(tab[milieu..fin])',
      '  retourner fusion(gauche, droite)'
    ],
    implementation: `function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  let result = [], i = 0, j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) result.push(left[i++]);
    else result.push(right[j++]);
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}`
  },
  {
    id: 'quick-sort',
    name: 'Tri Rapide',
    category: 'Sorting',
    description: "Un algorithme diviser pour régner. Il choisit un élément comme pivot et partitionne le tableau donné autour du pivot choisi.",
    timeComplexity: {
      best: 'O(n log n)',
      average: 'O(n log n)',
      worst: 'O(n²)'
    },
    spaceComplexity: 'O(log n)',
    advantages: [
      'Très rapide en moyenne',
      'Tri en place (principalement)',
      'Compatible avec le cache'
    ],
    disadvantages: [
      'Pire cas O(n²)',
      'Tri instable',
      'La performance dépend du choix du pivot'
    ],
    useCases: [
      'Tri à usage général',
      'Grands ensembles de données'
    ],
    pseudoCode: [
      'triRapide(tab, bas, haut)',
      '  si bas < haut',
      '    pi = partition(tab, bas, haut)',
      '    triRapide(tab, bas, pi - 1)',
      '    triRapide(tab, pi + 1, haut)'
    ],
    implementation: `function quickSort(arr, low, high) {
  if (low < high) {
    let pi = partition(arr, low, high);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
}`
  },
  {
    id: 'binary-search',
    name: 'Recherche Binaire',
    category: 'Searching',
    description: "Un algorithme de recherche rapide qui trouve la position d'une valeur cible dans un tableau trié en divisant à plusieurs reprises l'intervalle de recherche en deux.",
    timeComplexity: {
      best: 'O(1)',
      average: 'O(log n)',
      worst: 'O(log n)'
    },
    spaceComplexity: 'O(1)',
    advantages: [
      'Beaucoup plus rapide que la recherche linéaire pour les grands jeux de données',
      'Performance prévisible'
    ],
    disadvantages: [
      'Nécessite que les données soient triées au préalable',
      'Ne fonctionne que sur la mémoire contiguë (tableaux)'
    ],
    useCases: [
      'Recherche dans de grandes bases de données triées',
      'Recherches dans un dictionnaire'
    ],
    pseudoCode: [
      'bas = 0, haut = n-1',
      'tant que bas <= haut',
      '  milieu = (bas + haut) / 2',
      '  si cible == tableau[milieu] retourner milieu',
      '  sinon si cible < tableau[milieu] haut = milieu - 1',
      '  sinon bas = milieu + 1',
      'retourner -1'
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
  },
  {
    id: 'heap-sort',
    name: 'Tri par Tas',
    category: 'Sorting',
    description: 'Une technique de tri par comparaison basée sur la structure de données Tas Binaire (Binary Heap). Similaire au tri par sélection, on cherche le maximum et on le place à la fin.',
    timeComplexity: {
      best: 'O(n log n)',
      average: 'O(n log n)',
      worst: 'O(n log n)'
    },
    spaceComplexity: 'O(1)',
    advantages: [
      'Complexité efficace O(n log n)',
      'Pas de récursion',
      'Faible utilisation mémoire'
    ],
    disadvantages: [
      'Tri instable',
      'Mauvaise localité de cache'
    ],
    useCases: [
      'Systèmes critiques (temps réel)',
      'Tri avec garantie O(n log n)'
    ],
    pseudoCode: [
      'triTas(tab)',
      '  construireTasMax(tab)',
      '  pour i de n-1 à 0',
      '    echanger(tab[0], tab[i])',
      '    entasser(tab, i, 0)'
    ],
    implementation: `function heapSort(arr) {
  let n = arr.length;
  // Build heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--)
    heapify(arr, n, i);
  // Extract
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }
}`
  },
  {
    id: 'bst-insert',
    name: 'Insertion BST',
    category: 'Trees',
    description: 'Insérer une nouvelle clé dans un Arbre Binaire de Recherche (BST) en maintenant la propriété : gauche < parent < droite.',
    timeComplexity: {
      best: 'O(log n)',
      average: 'O(log n)',
      worst: 'O(n)'
    },
    spaceComplexity: 'O(n)',
    advantages: [
      'Maintient l\'ordre trié',
      'Cas moyen efficace'
    ],
    disadvantages: [
      'Peut devenir déséquilibré',
      'Pire cas O(n)'
    ],
    useCases: [
      'Ensembles dynamiques',
      'Tables de recherche'
    ],
    pseudoCode: [
      'inserer(noeud, cle)',
      '  si noeud est null, retourner nouveauNoeud(cle)',
      '  si cle < noeud.cle',
      '    noeud.gauche = inserer(noeud.gauche, cle)',
      '  sinon si cle > noeud.cle',
      '    noeud.droite = inserer(noeud.droite, cle)',
      '  retourner noeud'
    ],
    implementation: `function insert(root, key) {
  if (root === null) return new Node(key);
  if (key < root.key)
    root.left = insert(root.left, key);
  else if (key > root.key)
    root.right = insert(root.right, key);
  return root;
}`
  },
  {
    id: 'linked-list-singly',
    name: 'Liste Chaînée Simple',
    category: 'LinkedLists',
    description: 'Une structure de données linéaire où chaque élément est un objet séparé. Chaque élément (nœud) de la liste comprend deux éléments : la donnée et une référence au nœud suivant.',
    timeComplexity: {
      best: 'O(1)',
      average: 'O(n)',
      worst: 'O(n)'
    },
    spaceComplexity: 'O(n)',
    advantages: [
      'Taille dynamique',
      'Facilité d\'insertion/suppression'
    ],
    disadvantages: [
      'Pas d\'accès aléatoire',
      'Mémoire supplémentaire pour le pointeur'
    ],
    useCases: [
      'Implémentation de piles et files',
      'Tables de symboles'
    ],
    pseudoCode: [
      'Structure Noeud { donnee, suivant }',
      'inserer(tete, cle)',
      '  nouveau = nouveau Noeud(cle)',
      '  nouveau.suivant = tete',
      '  tete = nouveau',
      '  retourner tete'
    ],
    implementation: `class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function insertHead(head, val) {
  let newNode = new Node(val);
  newNode.next = head;
  return newNode;
}`
  },
  {
    id: 'linked-list-doubly',
    name: 'Liste Doublement Chaînée',
    category: 'LinkedLists',
    description: 'Une structure de données chaînée constituée d\'un ensemble d\'enregistrements liés séquentiellement appelés nœuds. Chaque nœud contient trois champs : deux liens (précédent et suivant) et une donnée.',
    timeComplexity: {
      best: 'O(1)',
      average: 'O(n)',
      worst: 'O(n)'
    },
    spaceComplexity: 'O(n)',
    advantages: [
      'Parcours dans les deux sens',
      'Insertion/Suppression plus facile si le nœud est connu'
    ],
    disadvantages: [
      'Mémoire supplémentaire pour deux pointeurs',
      'Implémentation plus complexe'
    ],
    useCases: [
      'Systèmes de navigation (avant/arrière)',
      'Fonctionnalité Annuler/Rétablir'
    ],
    pseudoCode: [
      'Structure Noeud { donnee, prec, suiv }',
      'insererTete(tete, cle)',
      '  nouveau = nouveau Noeud(cle)',
      '  nouveau.suiv = tete',
      '  si tete != null tete.prec = nouveau',
      '  tete = nouveau',
      '  retourner tete'
    ],
    implementation: `class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

function insertHead(head, val) {
  let newNode = new Node(val);
  newNode.next = head;
  if(head) head.prev = newNode; 
  return newNode;
}`
  },
  {
    id: 'linked-list-singly-search',
    name: 'LL Singly: Search',
    category: 'LinkedLists',
    description: 'Searching for a specific element in a Singly Linked List involved traversing from the head node until the element is found or the end of the list is reached.',
    timeComplexity: {
      best: 'O(1)', // Head
      average: 'O(n)',
      worst: 'O(n)'
    },
    spaceComplexity: 'O(1)',
    advantages: [
      'Simple implementation',
      'No extra memory beyond pointers'
    ],
    disadvantages: [
      'Linear time complexity',
      'No random access'
    ],
    useCases: [
      'Finding an item in a list',
      'Membership check'
    ],
    pseudoCode: [
      'search(head, key)',
      '  current = head',
      '  while current != null',
      '    if current.data == key return true',
      '    current = current.next',
      '  return false'
    ],
    implementation: `function search(head, val) {
  let curr = head;
  while(curr) {
    if(curr.val === val) return true;
    curr = curr.next;
  }
  return false;
}`
  },
  {
    id: 'linked-list-singly-delete',
    name: 'LL Singly: Delete',
    category: 'LinkedLists',
    description: 'Deleting a node from a Singly Linked List. Requires finding the previous node to update its next pointer.',
    timeComplexity: {
      best: 'O(1)', // Head
      average: 'O(n)',
      worst: 'O(n)'
    },
    spaceComplexity: 'O(1)',
    advantages: [
      'Dynamic size',
      'Efficient if node and prev are known'
    ],
    disadvantages: [
      'Requires traversal to find prev node (O(n))'
    ],
    useCases: [
      'Removing items from a collection'
    ],
    pseudoCode: [
      'delete(head, key)',
      '  if head.data == key return head.next',
      '  prev = null, curr = head',
      '  while curr != null && curr.data != key',
      '    prev = curr',
      '    curr = curr.next',
      '  if curr == null return head',
      '  prev.next = curr.next',
      '  return head'
    ],
    implementation: `function deleteNode(head, val) {
  if(!head) return null;
  if(head.val === val) return head.next;
  
  let curr = head;
  let prev = null;
  while(curr && curr.val !== val) {
    prev = curr;
    curr = curr.next;
  }
  
  if(curr) prev.next = curr.next;
  return head;
}`
  }
];
