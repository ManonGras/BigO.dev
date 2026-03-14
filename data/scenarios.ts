
export interface ArrayScenario {
    id: string;
    title: string;
    description: string;
    naiveAlgo: string;
    naiveComplexity: string;
    optimalAlgo: string;
    optimalComplexity: string;
    keyPoints: string[];
    visualId?: string; // If we want to link to a visualizer
}

export const SCENARIOS_FR: ArrayScenario[] = [
    {
        id: 'sorted',
        title: 'Tableau Trié',
        description: 'Les éléments sont déjà rangés dans l\'ordre croissant.',
        naiveAlgo: 'Recherche Linéaire',
        naiveComplexity: 'O(n)',
        optimalAlgo: 'Recherche Binaire (Dichotomie)',
        optimalComplexity: 'O(log n)',
        keyPoints: [
            'Toujours vérifier si le tableau est trié avant de choisir un algorithme.',
            'L\'accès direct à l\'index i est O(1).',
            'L\'insertion reste O(n) car il faut décaler les éléments.'
        ]
    },
    {
        id: 'mountain',
        title: 'Tableau Montagne (Bitonique)',
        description: 'Le tableau croît jusqu\'à un sommet (peak) puis décroît.',
        naiveAlgo: 'Recherche Linéaire du sommet',
        naiveComplexity: 'O(n)',
        optimalAlgo: 'Recherche Binaire modifiée',
        optimalComplexity: 'O(log n)',
        keyPoints: [
            'On peut trouver le sommet en O(log n) en comparant arr[mid] avec arr[mid+1].',
            'Une fois le sommet trouvé, on peut faire deux recherches binaires (une sur chaque flanc).',
            'Attention aux cas où le sommet est au début ou à la fin.'
        ]
    },
    {
        id: 'circular',
        title: 'Tableau Circulaire (Trié avec décalage)',
        description: 'Un tableau trié qui a subi une rotation circulaire (ex: [4, 5, 6, 7, 0, 1, 2]).',
        naiveAlgo: 'Recherche Linéaire',
        naiveComplexity: 'O(n)',
        optimalAlgo: 'Recherche Binaire adaptative',
        optimalComplexity: 'O(log n)',
        keyPoints: [
            'Au moins une des deux moitiés (gauche ou droite) est toujours triée.',
            'On compare la cible avec les bornes de la moitié triée pour décider où chercher.',
            'Très fréquent en entretien technique.'
        ]
    },
    {
        id: 'consecutive-sorted',
        title: 'Deux Tableaux Triés consécutifs',
        description: 'Deux segments adjacents du tableau sont triés, mais pas l\'ensemble (ex: [1, 5, 8, 2, 4, 7]).',
        naiveAlgo: 'Tri complet du tableau (QuickSort/MergeSort)',
        naiveComplexity: 'O(n log n)',
        optimalAlgo: 'Fusion (Merge step)',
        optimalComplexity: 'O(n)',
        keyPoints: [
            'Utiliser deux pointeurs pour comparer les éléments des deux segments.',
            'Nécessite généralement un tableau temporaire pour stocker le résultat.',
            'C\'est l\'opération de base du Tri Fusion.'
        ]
    },
    {
        id: 'nearly-sorted',
        title: 'Tableau Presque Trié (K-sorted)',
        description: 'Chaque élément est à au plus K positions de sa place finale.',
        naiveAlgo: 'Tri Standard',
        naiveComplexity: 'O(n log n)',
        optimalAlgo: 'Tri par Tas (Min-Heap) de taille K+1',
        optimalComplexity: 'O(n log k)',
        keyPoints: [
            'On maintient un tas avec les K+1 premiers éléments.',
            'Le plus petit du tas est forcément le prochain élément trié.',
            'Très efficace si K est petit devant n.'
        ]
    },
    {
        id: 'duplicates',
        title: 'Tableau avec beaucoup de Doublons',
        description: 'Le tableau contient peu de valeurs distinctes mais répétées de nombreuses fois.',
        naiveAlgo: 'QuickSort standard',
        naiveComplexity: 'O(n log n)',
        optimalAlgo: 'QuickSort avec partitionnement en 3 (Drapeau Hollandais)',
        optimalComplexity: 'O(n)',
        keyPoints: [
            'Le partitionnement en 3 divise le tableau en : < pivot, == pivot, > pivot.',
            'Évite de retrier les éléments identiques au pivot.',
            'Performance optimale même si toutes les clés sont identiques.'
        ]
    },
    {
        id: 'range-queries',
        title: 'Requêtes de Somme sur Plage (Static)',
        description: 'On doit calculer la somme des éléments entre les indices L et R de nombreuses fois sans modifier le tableau.',
        naiveAlgo: 'Boucle For de L à R pour chaque requête',
        naiveComplexity: 'O(n) par requête',
        optimalAlgo: 'Sommes précalculées (Prefix Sum)',
        optimalComplexity: 'O(1) par requête',
        keyPoints: [
            'On crée P[i] = somme des i premiers éléments en O(n).',
            'La somme entre L et R est simplement P[R+1] - P[L].',
            'Inutilisable si le tableau change souvent (mise à jour en O(n)).'
        ]
    },
    {
        id: 'sorted-matrix',
        title: 'Matrice Triée (2D)',
        description: 'Une grille où chaque ligne et chaque colonne est triée séparément.',
        naiveAlgo: 'Recherche Linéaire ou Binaire sur chaque ligne',
        naiveComplexity: 'O(n log m) ou O(n*m)',
        optimalAlgo: 'Recherche par paliers (Step Search)',
        optimalComplexity: 'O(n + m)',
        keyPoints: [
            'On commence en haut à droite ou en bas à gauche.',
            'Si valeur > cible, on déplace vers la gauche. Si valeur < cible, on descend.',
            'Évite d\'explorer toute la matrice grâce à la double contrainte de tri.'
        ]
    }
];

export const SCENARIOS_EN: ArrayScenario[] = [
     {
        id: 'sorted',
        title: 'Sorted Array',
        description: 'Elements are already in non-decreasing order.',
        naiveAlgo: 'Linear Search',
        naiveComplexity: 'O(n)',
        optimalAlgo: 'Binary Search',
        optimalComplexity: 'O(log n)',
        keyPoints: [
            'Always check if the array is sorted before choosing an algorithm.',
            'Direct access by index is O(1).',
            'Insertion is still O(n) due to shifting elements.'
        ]
    },
    {
        id: 'mountain',
        title: 'Mountain Array (Bitonic)',
        description: 'The array increases to a peak and then decreases.',
        naiveAlgo: 'Linear Peak Search',
        naiveComplexity: 'O(n)',
        optimalAlgo: 'Modified Binary Search',
        optimalComplexity: 'O(log n)',
        keyPoints: [
            'Peak can be found in O(log n) by comparing arr[mid] and arr[mid+1].',
            'Once peak is found, perform two binary searches (one on each flank).',
            'Watch for edge cases where the peak is at the start or end.'
        ]
    },
    {
        id: 'circular',
        title: 'Circular Array (Rotated Sorted)',
        description: 'A sorted array that has been rotated (e.g., [4, 5, 6, 7, 0, 1, 2]).',
        naiveAlgo: 'Linear Search',
        naiveComplexity: 'O(n)',
        optimalAlgo: 'Adaptive Binary Search',
        optimalComplexity: 'O(log n)',
        keyPoints: [
            'At least one half (left or right) is always sorted.',
            'Compare target with boundaries of the sorted half to decide where to search.',
            'Very common in coding interviews.'
        ]
    },
    {
        id: 'consecutive-sorted',
        title: 'Two Consecutive Sorted Arrays',
        description: 'Two adjacent segments are sorted individually (e.g., [1, 5, 8, 2, 4, 7]).',
        naiveAlgo: 'Full Sort (QuickSort/MergeSort)',
        naiveComplexity: 'O(n log n)',
        optimalAlgo: 'Two-Pointer Merge',
        optimalComplexity: 'O(n)',
        keyPoints: [
            'Use two pointers to compare elements from both segments.',
            'Requires extra space (O(n)) for result storage.',
            'The fundamental step of Merge Sort.'
        ]
    },
    {
        id: 'nearly-sorted',
        title: 'Nearly Sorted (K-sorted)',
        description: 'Each element is at most K positions away from its target position.',
        naiveAlgo: 'Standard Sort',
        naiveComplexity: 'O(n log n)',
        optimalAlgo: 'Heapsort using a window of size K+1',
        optimalComplexity: 'O(n log k)',
        keyPoints: [
            'Maintain a min-heap of the first K+1 elements.',
            'The minimum element in the heap is guaranteed to be the next sorted element.',
            'Very efficient when K is small compared to n.'
        ]
    },
    {
        id: 'duplicates',
        title: 'Array with Many Duplicates',
        description: 'Few distinct values repeated many times (e.g., [0, 1, 2, 0, 2, 1, 1]).',
        naiveAlgo: 'Standard QuickSort',
        naiveComplexity: 'O(n log n)',
        optimalAlgo: '3-Way Partitioning (Dutch National Flag)',
        optimalComplexity: 'O(n)',
        keyPoints: [
            '3-way partition splits array into: < pivot, == pivot, and > pivot.',
            'Identical elements are grouped together and not re-sorted.',
            'Ensures linear time when the number of distinct elements is constant.'
        ]
    },
    {
        id: 'range-queries',
        title: 'Static Range Sum Queries',
        description: 'Calculating the sum of elements between indices L and R multiple times.',
        naiveAlgo: 'Iterating from L to R for each query',
        naiveComplexity: 'O(n) per query',
        optimalAlgo: 'Prefix Sum Array',
        optimalComplexity: 'O(1) per query',
        keyPoints: [
            'Precompute an array P where P[i] is the sum of the first i elements.',
            'Range sum for [L, R] is P[R+1] - P[L].',
            'O(n) preprocessing time, but near-instant query time.'
        ]
    },
    {
        id: 'sorted-matrix',
        title: 'Sorted Matrix (2D)',
        description: 'A grid where each row and each column is sorted independently.',
        naiveAlgo: 'Search in each row',
        naiveComplexity: 'O(n log m)',
        optimalAlgo: 'Step Search (Staircase Search)',
        optimalComplexity: 'O(n + m)',
        keyPoints: [
            'Start from the top-right or bottom-left corner.',
            'Move left if current > target, move down if current < target.',
            'Eliminates a row or column at each step.'
        ]
    }
];
