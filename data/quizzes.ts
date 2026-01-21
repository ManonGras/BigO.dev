
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
  },
  {
    id: 'q4',
    category: 'LinkedLists',
    question: 'What is the time complexity to access an element at the kth position in a Singly Linked List?',
    options: ['O(1)', 'O(n) - Linear', 'O(n²)', 'O(log n)'],
    correctAnswer: 1,
    explanation: 'You must traverse from the head node to the kth node, which takes linear time proportional to the position (worst case O(n)).'
  },
  {
    id: 'q5',
    category: 'LinkedLists',
    question: 'Which of these is an advantage of a Doubly Linked List over a Singly Linked List?',
    options: ['Less memory usage', 'Constant time insertion at head', 'Can be traversed in both directions', 'Faster access to random elements'],
    correctAnswer: 2,
    explanation: 'Doubly linked lists have pointers to both next and previous nodes, allowing bidirectional traversal.'
  },
  {
    id: 'q6',
    category: 'Trees',
    question: 'In a Binary Search Tree (BST), what is the worst-case time complexity for insertion?',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
    correctAnswer: 2,
    explanation: 'In the worst case, a BST can become completely unbalanced (like a linked list), requiring O(n) time to traverse to the insertion point.'
  },
  {
    id: 'q7',
    category: 'Sorting',
    question: 'Which sorting algorithm guarantees O(n log n) time complexity in all cases?',
    options: ['Quick Sort', 'Merge Sort', 'Bubble Sort', 'Insertion Sort'],
    correctAnswer: 1,
    explanation: 'Merge Sort always divides the array in half and merges in linear time, guaranteeing O(n log n) performance regardless of input.'
  },
  {
    id: 'q8',
    category: 'Sorting',
    question: 'What is the main advantage of Quick Sort over Merge Sort?',
    options: ['Better worst-case complexity', 'Stable sorting', 'In-place sorting (less memory)', 'Always faster'],
    correctAnswer: 2,
    explanation: 'Quick Sort is typically in-place with O(log n) space complexity, while Merge Sort requires O(n) additional space for merging.'
  },
  {
    id: 'q9',
    category: 'Sorting',
    question: 'Heap Sort is based on which data structure?',
    options: ['Binary Search Tree', 'Binary Heap', 'Linked List', 'Hash Table'],
    correctAnswer: 1,
    explanation: 'Heap Sort uses a Binary Heap (max-heap or min-heap) to efficiently find and extract the maximum/minimum element repeatedly.'
  },
  {
    id: 'q10',
    category: 'LinkedLists',
    question: 'What is the time complexity to delete a node from the middle of a Singly Linked List if you have a pointer to the previous node?',
    options: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'],
    correctAnswer: 0,
    explanation: 'If you have a pointer to the previous node, you can simply update prev.next = curr.next in constant time O(1).'
  },
  {
    id: 'q11',
    category: 'Trees',
    question: 'What property must a Binary Search Tree maintain?',
    options: ['All nodes have exactly 2 children', 'Left child < Parent < Right child', 'Tree must be balanced', 'All leaves at same level'],
    correctAnswer: 1,
    explanation: 'A BST must maintain the property that for any node, all values in the left subtree are less than the node, and all values in the right subtree are greater.'
  },
  {
    id: 'q12',
    category: 'Complexity',
    question: 'Which statement about space complexity is TRUE?',
    options: ['Recursive algorithms always use O(1) space', 'In-place algorithms use O(n) extra space', 'Merge Sort uses O(n) extra space', 'Binary Search uses O(n) space'],
    correctAnswer: 2,
    explanation: 'Merge Sort requires O(n) additional space to store the temporary arrays during the merge process.'
  },
  {
    id: 'q13',
    category: 'Complexity',
    question: 'Which notation represents the tight bound of an algorithm\'s growth?',
    options: ['Big O (O)', 'Big Omega (Ω)', 'Big Theta (Θ)', 'Big Delta (Δ)'],
    correctAnswer: 2,
    explanation: 'Big Theta (Θ) represents the tight bound, used when the best and worst cases have the same growth rate.'
  }
];

export const QUIZ_QUESTIONS_FR: QuizQuestion[] = [
  {
    id: 'q1',
    category: 'Sorting',
    question: 'Quelle est la complexité temporelle dans le pire des cas du Tri à Bulles ?',
    options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(1)'],
    correctAnswer: 2,
    explanation: 'Dans le pire des cas (tableau inversé), le Tri à Bulles doit effectuer des comparaisons et des échanges pour chaque paire, ce qui résulte en n*(n-1)/2 opérations, soit O(n²).'
  },
  {
    id: 'q2',
    category: 'Searching',
    question: 'La Recherche Binaire nécessite que le tableau d\'entrée soit :',
    options: ['Non trié', 'Trié', 'Vide', 'Inversé'],
    correctAnswer: 1,
    explanation: 'La Recherche Binaire repose sur la propriété que les éléments sont ordonnés pour décider quelle moitié de l\'intervalle éliminer.'
  },
  {
    id: 'q3',
    category: 'Complexity',
    question: 'Laquelle des complexités suivantes est la plus efficace pour les grands jeux de données ?',
    options: ['O(n²)', 'O(n log n)', 'O(n)', 'O(log n)'],
    correctAnswer: 3,
    explanation: 'Le temps logarithmique O(log n) croît beaucoup plus lentement que le temps linéaire ou quadratique à mesure que la taille de l\'entrée augmente.'
  },
  {
    id: 'q4',
    category: 'LinkedLists',
    question: 'Quelle est la complexité temporelle pour accéder à un élément à la k-ième position dans une Liste Chaînée Simple ?',
    options: ['O(1)', 'O(k)', 'O(n)', 'O(log n)'],
    correctAnswer: 1,
    explanation: 'Vous devez parcourir depuis le nœud de tête jusqu\'au k-ième nœud, ce qui prend un temps linéaire proportionnel à la position.'
  },
  {
    id: 'q5',
    category: 'LinkedLists',
    question: 'Lequel de ces éléments est un avantage d\'une Liste Doublement Chaînée par rapport à une Liste Chaînée Simple ?',
    options: ['Moins d\'utilisation de mémoire', 'Insertion en temps constant en tête', 'Peut être parcourue dans les deux sens', 'Accès plus rapide aux éléments aléatoires'],
    correctAnswer: 2,
    explanation: 'Les listes doublement chaînées ont des pointeurs vers les nœuds suivants et précédents, permettant un parcours bidirectionnel.'
  },
  {
    id: 'q6',
    category: 'Trees',
    question: 'Dans un Arbre Binaire de Recherche (BST), quelle est la complexité temporelle dans le pire des cas pour l\'insertion ?',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
    correctAnswer: 2,
    explanation: 'Dans le pire des cas, un BST peut devenir complètement déséquilibré (comme une liste chaînée), nécessitant O(n) pour parcourir jusqu\'au point d\'insertion.'
  },
  {
    id: 'q7',
    category: 'Sorting',
    question: 'Quel algorithme de tri garantit une complexité temporelle O(n log n) dans tous les cas ?',
    options: ['Tri Rapide', 'Tri Fusion', 'Tri à Bulles', 'Tri par Insertion'],
    correctAnswer: 1,
    explanation: 'Le Tri Fusion divise toujours le tableau en deux et fusionne en temps linéaire, garantissant O(n log n) quelle que soit l\'entrée.'
  },
  {
    id: 'q8',
    category: 'Sorting',
    question: 'Quel est l\'avantage principal du Tri Rapide par rapport au Tri Fusion ?',
    options: ['Meilleure complexité dans le pire cas', 'Tri stable', 'Tri en place (moins de mémoire)', 'Toujours plus rapide'],
    correctAnswer: 2,
    explanation: 'Le Tri Rapide est généralement en place avec une complexité spatiale O(log n), tandis que le Tri Fusion nécessite O(n) d\'espace supplémentaire.'
  },
  {
    id: 'q9',
    category: 'Sorting',
    question: 'Le Tri par Tas est basé sur quelle structure de données ?',
    options: ['Arbre Binaire de Recherche', 'Tas Binaire', 'Liste Chaînée', 'Table de Hachage'],
    correctAnswer: 1,
    explanation: 'Le Tri par Tas utilise un Tas Binaire (max-heap ou min-heap) pour trouver et extraire efficacement l\'élément maximum/minimum de manière répétée.'
  },
  {
    id: 'q10',
    category: 'LinkedLists',
    question: 'Quelle est la complexité temporelle pour supprimer un nœud du milieu d\'une Liste Chaînée Simple si vous avez un pointeur vers le nœud précédent ?',
    options: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'],
    correctAnswer: 0,
    explanation: 'Si vous avez un pointeur vers le nœud précédent, vous pouvez simplement mettre à jour prev.next = curr.next en temps constant O(1).'
  },
  {
    id: 'q11',
    category: 'Trees',
    question: 'Quelle propriété un Arbre Binaire de Recherche doit-il maintenir ?',
    options: ['Tous les nœuds ont exactement 2 enfants', 'Enfant gauche < Parent < Enfant droit', 'L\'arbre doit être équilibré', 'Toutes les feuilles au même niveau'],
    correctAnswer: 1,
    explanation: 'Un BST doit maintenir la propriété que pour tout nœud, toutes les valeurs du sous-arbre gauche sont inférieures au nœud, et toutes les valeurs du sous-arbre droit sont supérieures.'
  },
  {
    id: 'q12',
    category: 'Complexity',
    question: 'Quelle affirmation sur la complexité spatiale est VRAIE ?',
    options: ['Les algorithmes récursifs utilisent toujours O(1) d\'espace', 'Les algorithmes en place utilisent O(n) d\'espace supplémentaire', 'Le Tri Fusion utilise O(n) d\'espace supplémentaire', 'La Recherche Binaire utilise O(n) d\'espace'],
    correctAnswer: 2,
    explanation: 'Le Tri Fusion nécessite O(n) d\'espace supplémentaire pour stocker les tableaux temporaires pendant le processus de fusion.'
  },
  {
    id: 'q13',
    category: 'Complexity',
    question: 'Quelle notation représente la borne exacte (tight bound) de la croissance d\'un algorithme ?',
    options: ['Grand O (O)', 'Grand Omega (Ω)', 'Grand Theta (Θ)', 'Grand Delta (Δ)'],
    correctAnswer: 2,
    explanation: 'Le Grand Theta (Θ) représente la borne exacte, utilisée lorsque le meilleur et le pire cas ont le même taux de croissance.'
  }
];
