import { Course } from '../types';

export const COURSES: Course[] = [
    {
        id: 'algorithmic-fundamentals',
        title: 'Algorithmic Fundamentals (EA4 Module)',
        description: 'Comprehensive course on algorithm design, correctness proofs, and complexity analysis',
        sections: [
            {
                id: 'introduction',
                title: 'Introduction to Algorithmics: Epistemology and Definitions',
                content: [
                    'Algorithmics cannot be reduced to a mere technical programming skill; it constitutes a true science of method, a fundamental intellectual discipline that predates computing tools. Within the framework of the Computer Science degree at Université Paris Cité, the EA4 module aims to forge your analytical rigor. Learning algorithmics means learning to transform an abstract problem into a sequence of systematic operations whose validity and efficiency can be proven before even considering their implementation.',
                ],
                subsections: [
                    {
                        title: 'Thematic Analysis and Definitions',
                        content: [
                            'Algorithmics is defined as the design and analysis of algorithms. An algorithm is a systematic method for solving a problem. It is a finite process, composed of precise instructions that transform input data into an expected result.',
                        ],
                    },
                    {
                        title: 'Historical Perspective: The Legacy of Al-Khwārizmī',
                        content: [
                            'The term "algorithm" is a Latin deformation of the name Muhammad Ibn Mūsā al-Khwārizmī, a 9th-century Persian mathematician, probably from present-day Uzbekistan, who worked in Baghdad. His contributions form the foundation of modern calculation:',
                            '• Foundation of Algebra: His major work, Kitābu \'l-mukhtasar fī hisābi \'l-jabr wa\'l-muqābalah (Compendious Book on Calculation by Completion and Balancing), is considered the first algebra manual, formalizing the resolution of second-degree equations.',
                            '• Positional Notation: His writings enabled the spread of decimal positional notation from India to the West.',
                            '• Calculation Revolution: Historically, the term designated calculation methods using digits, as opposed to traditional calculation on abacuses (from Latin calculus, the small pebble).',
                        ],
                    },
                    {
                        title: 'Evolution of the Concept',
                        content: [
                            'Although central to computer science, the concept of algorithm is ancient. It can be found in arithmetic calculations (approximations of π or √2), geometric constructions (drawing a regular pentagon, finding the center of a circle), or everyday processes (recipes, construction manuals).',
                            'However, the advent of programmable machines has transfigured the discipline: the computer\'s ability to faithfully execute a predefined sequence of operations at very high speed now requires absolute precision in design.',
                            'This systematic nature and the complexity of modern systems impose a rigorous organizational framework, essential for learning proof and efficiency.',
                        ],
                    },
                ],
            },
            {
                id: 'module-organization',
                title: 'Operational Framework and Module Modalities',
                content: [
                    'Success in this module relies on unwavering attendance. The hourly volume and pedagogical progression are designed so that each Lecture, Tutorial, and Lab session builds upon the previous one.',
                ],
                subsections: [
                    {
                        title: 'Structural Organization',
                        content: [
                            'Tutorial and Lab sessions begin the week of January 26. Respecting your assigned group is imperative for managing lab rooms.',
                        ],
                    },
                    {
                        title: 'Teaching Team and Communication',
                        content: [
                            'The module is coordinated by Dominique Poulalhon.',
                            'Communication protocols:',
                            '1. Email: Mandatory mention of the [EA4] tag in your message subjects.',
                            '2. Moodle: Central platform for announcements, assignments, lab submissions, and self-assessments.',
                            '3. Discord / Matrix: An interactive server is provided. You must configure your nickname according to the format: "FirstName LastName (group)".',
                        ],
                    },
                    {
                        title: 'Knowledge Assessment (Continuous Assessment)',
                        content: [
                            'The module is governed by Continuous Assessment:',
                            '• Attendance: Sign-in during sessions and systematic lab submission.',
                            '• Quizzes: Regular short tests during tutorial sessions.',
                            '• Mid-semester: A common written test.',
                            '• Final: A terminal exam counting for 50% of the final grade.',
                            'This administrative structure has no other purpose than to allow you to focus on the three pillars of algorithmic analysis.',
                        ],
                    },
                ],
                table: {
                    headers: ['Session Type', 'Frequency / Volume', 'Schedule and Location'],
                    rows: [
                        ['Lecture', '2 x 1.5h / week', 'Wed. 2:30pm-4pm & Fri. 9am-10:30am (Amphi 8C)'],
                        ['Tutorial (TD)', '2h or 4h (alternating)', 'According to group schedule'],
                        ['Lab (TP)', '2h per fortnight', 'Subgroups of 20 students'],
                    ],
                },
            },
            {
                id: 'methodology',
                title: 'Analysis Methodology: Correctness, Termination, and Efficiency',
                content: [
                    'In theoretical computer science, mathematical proof takes precedence over empirical observation. Running a program on a few datasets never guarantees its universal validity.',
                ],
                subsections: [
                    {
                        title: 'The Three Axes of Study',
                        content: [
                            '1. Design: Identification of general techniques (divide and conquer, dynamic programming, etc.) to develop a solution.',
                            '2. Correctness Proof: Demonstration that an algorithm produces the expected output for any valid input. We distinguish:',
                            '   • Termination: Proof that the algorithm stops in finite time.',
                            '   • Partial Correctness: Proof that if the algorithm stops, the result is correct.',
                            '3. Efficiency Study (Complexity): Evaluation of consumed resources (time and memory).',
                        ],
                    },
                    {
                        title: 'Proof Tools: The Loop Invariant',
                        content: [
                            'The loop invariant is a logical property that remains true before and after each iteration. It is the preferred tool for proving the correctness of an iterative algorithm.',
                            'For example, for addition, we show that after i loop iterations, the partial result res satisfies the property: res ≡ n₁ + n₂ (mod 10ⁱ)',
                        ],
                    },
                    {
                        title: 'Complexity Analysis',
                        content: [
                            'We measure efficiency as a function of the size ℓ of input data. For integers n₁ and n₂, the size ℓ corresponds to the number of digits in their representation:',
                            'ℓ = 1 + ⌊max(log₁₀ n₁, log₁₀ n₂)⌋',
                            '• Linear Complexity O(ℓ): Execution time is proportional to input size.',
                            '• Quadratic Complexity O(ℓ²): Execution time grows as the square of input size.',
                            'Let us now apply these concepts to the study of fundamental arithmetic operations.',
                        ],
                    },
                ],
            },
            {
                id: 'case-studies',
                title: 'Case Study: Arithmetic Algorithms and Performance',
                content: [
                    'Comparing different algorithms for the same operation (such as multiplication) illustrates abysmal performance differences.',
                ],
                subsections: [
                    {
                        title: 'Addition of Two Integers',
                        content: [
                            'The "school" algorithm processes digits one by one, propagating a carry. Its complexity is linear O(ℓ).',
                        ],
                    },
                    {
                        title: 'Multiplication: From Naive to Quadratic',
                        content: [
                            '1. Naive Multiplication: Perform n₁ × n₂ by n₂ additions of n₁.',
                            '   Analysis: The cost is n₂ additions of cost O(ℓ). Its complexity is O(ℓ × 10ℓ), which is impractical for large numbers.',
                            '2. Multiplication by a Single Digit: A single traversal of nb1, linear complexity O(ℓ).',
                            '3. "School" Multiplication: By combining the previous functions, we obtain an algorithm with quadratic complexity O(ℓ²), much more efficient than the naive method.',
                            'These logical structures must be carefully implemented using appropriate programming tools.',
                        ],
                    },
                ],
                codeExample: {
                    language: 'python',
                    code: `def addition(nb1, nb2):
    # nb1, nb2: arrays of decimal digits representing integers n1 and n2,
    # assumed to be of the same length, starting with units
    res = []
    carry = 0
    for (digit1, digit2) in zip(nb1, nb2):
        # parallel traversal of both arrays
        tmp = digit1 + digit2 + carry
        carry = tmp // 10  # integer division
        res.append(tmp % 10)  # append to end of array
    return res + [carry]  # concatenation of 2 arrays`,
                    caption: 'Addition Algorithm Implementation',
                },
                table: {
                    headers: ['Operation', 'Algorithm', 'Invariant (step i)', 'Complexity O'],
                    rows: [
                        ['Addition', 'School', 'res ≡ n₁ + n₂ (mod 10ⁱ)', 'O(ℓ)'],
                        ['Multiplication', 'Naive', 'res = n₁ × i', 'O(ℓ · 10ℓ)'],
                        ['Multiplication', 'By one digit', 'res ≡ n₁ × digit (mod 10ⁱ)', 'O(ℓ)'],
                        ['Multiplication', 'School', 'res ≡ n₁ × n₂ (mod 10ⁱ)', 'O(ℓ²)'],
                    ],
                },
            },
            {
                id: 'python-implementation',
                title: 'Technical Implementation: Python Micro-Course',
                content: [
                    'Python is a multi-paradigm language (imperative, object-oriented, functional) favored for its readability and prototyping capability.',
                ],
                subsections: [
                    {
                        title: 'Philosophy and Typing',
                        content: [
                            'Python is an interpreted language where indentation is not aesthetic but syntactic: it defines instruction blocks.',
                            '• Dynamic Typing: A variable\'s type can change during execution.',
                            '• Strong Typing: Python prohibits inconsistent operations.',
                            '• "Magical" Polymorphism: Consider the function def truc(x): return x + x',
                            '  - truc(3) returns 6 (integer addition).',
                            '  - truc(\'cou\') returns \'coucou\' (string concatenation).',
                            'This "magic" illustrates the language\'s flexibility with types.',
                        ],
                    },
                    {
                        title: 'Data Structures',
                        content: [
                            '• Immutable: int (arbitrary precision), float (64 bits), bool, str, tuple. A string or tuple cannot be modified after creation.',
                            '• Mutable: list (dynamic arrays), set (sets), dict (association tables).',
                        ],
                    },
                    {
                        title: 'Control Flow and Functions',
                        content: [
                            'Blocks are delimited by colons (:) and indentation. Functions are defined by the def keyword. To iterate over a range, use for i in range(start, end_excluded).',
                        ],
                    },
                    {
                        title: 'Self-Documentation',
                        content: [
                            'Students must develop autonomy through two essential functions:',
                            '• dir(object): Lists available methods and attributes for a given type.',
                            '• help(object): Displays interactive help, including docstrings written by developers.',
                            'To deepen your mastery of Python within the EA4 module framework, consult the official documentation.',
                        ],
                    },
                ],
            },
            {
                id: 'success-checklist',
                title: 'Synthesis and Practical Directives for Students',
                content: [
                    'Success in EA4 requires constant intellectual discipline. The elegance of an algorithm is worthless without rigorous implementation and proof of its validity.',
                ],
                subsections: [
                    {
                        title: 'Success Checklist',
                        content: [
                            '• Attendance: Lecture hall 8C, tutorials, and labs are inseparable.',
                            '• Lab Rigor: Strictly respect your assigned group and systematically submit your work on Moodle at the end of each session.',
                            '• Clean Coding: Systematically use docstrings to document your functions.',
                            '• Autonomy: Before contacting the team, use the introspection functions dir() and help().',
                            'Designing an algorithm that is both mathematically exact and numerically efficient constitutes the very essence of our discipline. I invite you to approach this semester with the curiosity and rigor that this challenge demands.',
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 'complexity-optimization',
        title: 'In-Depth Study of Algorithmic Complexity: From Theory to Fibonacci Optimization',
        description: 'Advanced analysis of space and time complexity, asymptotic notations, and optimization techniques',
        sections: [
            {
                id: 'space-complexity',
                title: 'Foundations of Space Complexity',
                content: [
                    'As computer scientists, we must design algorithms not as simple sequences of instructions, but as mathematical structures whose efficiency is dictated by physical resources: space and time. Mastery of complexity is not optional; it is the very foundation of a software solution\'s viability. This study analyzes the rigor necessary for evaluating these performances, from theoretical abstraction to the concrete realities of exact arithmetic.',
                    'Memory management constitutes a critical issue that goes beyond simple code execution. An algorithm, however brilliant it may be logically, can prove physically unrealizable if it saturates the machine\'s resources. It is imperative to distinguish incompressible memory from auxiliary memory.',
                ],
                subsections: [
                    {
                        title: 'Types of Memory',
                        content: [
                            '• Incompressible Memory: This space is strictly reserved for storing input data and the final result. Since it is inherent to the problem posed, it is identical for any resolution algorithm.',
                            '• Auxiliary Memory: It encompasses the space required for intermediate calculations (temporary variables, call stacks, transient data structures). This indicator, and this one alone, allows us to compare the elegance and efficiency of two algorithms solving the same problem.',
                        ],
                    },
                    {
                        title: 'Case Study: Multiplication',
                        content: [
                            'Consider the multiplication of two integers of size ℓ (represented by digit arrays).',
                            '1. In multiplication by a single digit, auxiliary space is negligible (constant cost O(1)).',
                            '2. In standard "school" multiplication, auxiliary space is proportional to the size of the numbers, i.e., Θ(ℓ).',
                        ],
                    },
                    {
                        title: 'The "So What?" Evaluation',
                        content: [
                            'The importance of auxiliary memory becomes glaring when comparing the standard algorithm with a naive variant that would store all intermediate products in an aux array. For integers of size ℓ = 10⁶, auxiliary memory would go from linear cost to quadratic cost Θ(ℓ²).',
                            'The required space would reach approximately 10¹² digits, or roughly 30 GB of RAM (counting 4 bits per decimal digit). Such poor management transforms an elementary operation into an unattainable solution for a standard machine.',
                        ],
                    },
                ],
            },
            {
                id: 'time-measurement',
                title: 'Time Measurement and Elementary Operations',
                content: [
                    'Measuring execution time in absolute terms is a methodological error: the performance of the same code fluctuates according to processor frequency, cache architecture, or system load. To characterize the algorithm independently of the machine, we introduce the notion of elementary operation.',
                    'An elementary operation (assignment, comparison, arithmetic on bounded numbers) is a unit of calculation whose execution time is considered constant.',
                ],
                subsections: [
                    {
                        title: 'Orders of Magnitude Analysis',
                        content: [
                            'The following table illustrates the progression of the number of elementary operations. It demonstrates that algorithmic efficiency always prevails over raw material power for large values of n.',
                        ],
                    },
                    {
                        title: 'Material Perspective',
                        content: [
                            'To put these figures in perspective, a single-core processor at 3.2 GHz performs approximately 10¹⁷ cycles per year. An exponential algorithm in 2ⁿ with n=100 requires 10³⁰ operations, which would require billions of years of calculation.',
                            'Algorithmic inefficiency cannot be compensated by any material progress.',
                        ],
                    },
                ],
                table: {
                    headers: ['Complexity', 'n=10', 'n=100', 'n=10³', 'n=10⁶', 'n=10¹²'],
                    rows: [
                        ['log₂ n', '4', '7', '10', '20', '40'],
                        ['n', '10', '100', '10³', '10⁶', '10¹²'],
                        ['n log₂ n', '34', '665', '10⁴', '2·10⁷', '4·10¹³'],
                        ['n²', '100', '10⁴', '10⁶', '10¹²', '10²⁴'],
                        ['n³', '10³', '10⁶', '10⁹', '10¹⁸', '10³⁶'],
                        ['2ⁿ', '10³', '10³⁰', '10³⁰¹', '∞', '∞'],
                    ],
                },
            },
            {
                id: 'asymptotic-notations',
                title: 'Formalism of Asymptotic Notations (O, Ω, Θ)',
                content: [
                    'Asymptotic notations constitute the universal alphabet for classifying algorithms according to their growth rate. Let f and g be two functions from ℕ to ℕ:',
                ],
                subsections: [
                    {
                        title: 'Big O (Upper Bound)',
                        content: [
                            'f ∈ O(g): ∃c > 0, ∃n₀, ∀n ≥ n₀, f(n) ≤ c·g(n)',
                            'f does not grow faster than g.',
                        ],
                    },
                    {
                        title: 'Big Omega (Lower Bound)',
                        content: [
                            'f ∈ Ω(g): ∃c > 0, ∃n₀, ∀n ≥ n₀, f(n) ≥ c·g(n)',
                            'f grows at least as fast as g.',
                        ],
                    },
                    {
                        title: 'Big Theta (Tight Bound: Lower AND Upper)',
                        content: [
                            'f ∈ Θ(g): f ∈ O(g) and f ∈ Ω(g)',
                            'Formally: ∃c₁ > 0, ∃c₂ > 0, ∃n₀, ∀n ≥ n₀, c₁·g(n) ≤ f(n) ≤ c₂·g(n)',
                            'Θ simultaneously provides a lower bound (like Ω) and an upper bound (like O): it both minorizes and majorizes f. It characterizes the exact order of growth.',
                            'Visually, if f ∈ Θ(n), its curve will be, for n ≥ n₀, sandwiched between two lines c₁·n and c₂·n. A complexity of Θ(n²) exhibits parabolic growth regardless of constants.',
                        ],
                    },
                    {
                        title: 'Application: Russian Peasant Multiplication',
                        content: [
                            'The Russian peasant method perfectly illustrates this formalism. It relies on the invariant: the value of res + m × n is constant.',
                            'By performing divisions by 2 (n // 2) and bit shifts (m × 2), the algorithm requires ℓ steps, where ℓ is the number of bits of n. At each step, additions and shifts operate on numbers of size ℓ.',
                            'The total cost is therefore ℓ × ℓ, i.e., complexity O(ℓ²). It is mathematically equivalent to school multiplication in base 2.',
                        ],
                    },
                ],
            },
            {
                id: 'power-optimization',
                title: 'Power Calculation Optimization: Binary Exponentiation',
                content: [
                    'Calculating aⁿ is strategic in cryptography and matrix computation.',
                ],
                subsections: [
                    {
                        title: 'Naive Method',
                        content: [
                            'The iterative approach performs n multiplications. If a and n are of size ℓ (n ≈ 10ℓ), the cost becomes prohibitive.',
                            'The result aⁿ has approximately n log a ≈ 10ℓ · ℓ digits. By the school method, the last multiplications reach a complexity of O(ℓ² · 10²ℓ).',
                            'The exponential factor 10²ℓ comes from the value of the exponent n itself.',
                        ],
                    },
                    {
                        title: 'Fast Exponentiation',
                        content: [
                            'Using aⁿ = (aⁿ/²)², we reduce the number of multiplications to Θ(log₂ n).',
                        ],
                    },
                    {
                        title: 'Correctness Proof (Recursive Algorithm)',
                        content: [
                            'Let us prove by strong induction on n that power(a, n) returns aⁿ:',
                            '1. Initialization: For n=0, the algorithm returns 1. But a⁰=1. The base is verified.',
                            '2. Heredity: Suppose the algorithm is correct for all k < n. The call for n uses n // 2. Since n // 2 < n, the recursive call returns aⁿ/² by hypothesis.',
                            '   • If n is even: the result is (aⁿ/²)² = aⁿ.',
                            '   • If n is odd: the result is a · (a⁽ⁿ⁻¹⁾/²)² = a¹ · aⁿ⁻¹ = aⁿ.',
                            '3. Conclusion: The algorithm is correct for all n ∈ ℕ.',
                        ],
                    },
                    {
                        title: 'Impact Evaluation',
                        content: [
                            'In modular arithmetic (bounded size), the cost is Θ(log₂ n).',
                            'In exact arithmetic, the cost increases at each step because the size of operands grows, a phenomenon we will observe with the Fibonacci sequence.',
                        ],
                    },
                ],
            },
            {
                id: 'fibonacci-case-study',
                title: 'Case Study: The Fibonacci Sequence',
                content: [
                    'The challenge is to calculate Fₙ for large values like n = 10⁶.',
                ],
                subsections: [
                    {
                        title: 'Growth Analysis',
                        content: [
                            'Let us prove that the size of Fₙ is Θ(n). By definition, Fₙ = Fₙ₋₁ + Fₙ₋₂. Since the sequence is increasing, Fₙ ≥ 2Fₙ₋₂.',
                            'By recurrence, Fₙ ≥ 2ⁿ/² (verified for n ≥ 6 since F₆ = 8 = 2³). Conversely, Fₙ ≤ 2ⁿ.',
                            'Thus, Fₙ has between n/2 and n bits. Its size is therefore indeed Θ(n). F₁,₀₀₀,₀₀₀ has approximately 300,000 decimal digits.',
                        ],
                    },
                    {
                        title: 'Critical Evaluation of Four Methods',
                        content: [
                            '1. Naive Recursion: Aberrant. It performs A(n) ≈ φⁿ additions. For n=100, φ¹⁰⁰ ≈ 3.5 × 10²⁰. Even at 3.2 GHz, this calculation would take several centuries.',
                            '2. Dynamic Programming (Array): We store n terms. The sum of sizes of stored integers is Σᵢ₌₁ⁿ i = n(n+1)/2 bits, i.e., space complexity Θ(n²). For n=10⁶, this requires approximately 30 GB of RAM.',
                            '3. Iterative Method (Two Variables): Space optimization in Θ(n). However, since each addition of numbers of size n costs Θ(n), the actual time complexity is Θ(n²).',
                            '4. Matrix Method: Using binary exponentiation on the Fibonacci matrix allows obtaining the result in Θ(log₂ n) matrix multiplications.',
                        ],
                    },
                    {
                        title: 'The Final "So What?"',
                        content: [
                            'For F₁,₀₀₀,₀₀₀, the unit cost of operations changes everything:',
                            '• Addition is no longer constant but Θ(n).',
                            '• School multiplication is O(n²). Even if the matrix method reduces the number of operations to O(log n), the cost of multiplications on integers of size Θ(n) means that time complexity remains dominated by the size of numbers.',
                            'Python, with its unbounded int type, facilitates implementation but cannot subtract execution from the laws of complexity.',
                        ],
                    },
                ],
            },
            {
                id: 'conclusion',
                title: 'Conclusion',
                content: [
                    'The efficiency hierarchy is absolute: the naive approach is a physical impossibility, dynamic programming by array is a spatial dead end, and the matrix method coupled with fast exponentiation represents the theoretical optimum.',
                    'In computer science, algorithmic structure takes precedence over machine power.',
                ],
            },
        ],
    },
    {
        id: 'search-and-sorting',
        title: 'Search Algorithms and Comparison-Based Sorting',
        description: 'Sequential and binary search, then the four fundamental sorting algorithms with correctness proofs and complexity analysis',
        sections: [
            {
                id: 'sequential-search',
                title: 'Sequential Search',
                content: [
                    'In an unsorted list, finding an element requires examining each entry one by one. This is the most general but least efficient search strategy.',
                ],
                subsections: [
                    {
                        title: 'Algorithm and Complexity',
                        content: [
                            'We scan the array from index 0 to n-1 and return the index as soon as the target value is found, or -1 if exhausted.',
                            '• Best case: Ω(1) — the element is at position 0.',
                            '• Worst and average case: Θ(n) — element absent or at the end.',
                            'No preprocessing of the data is required, making it universally applicable.',
                        ],
                    },
                ],
            },
            {
                id: 'binary-search',
                title: 'Binary Search (Dichotomy)',
                content: [
                    'If the array is sorted, we can exploit the order to eliminate half the candidates at each step — the "divide and conquer" strategy applied to search.',
                ],
                subsections: [
                    {
                        title: 'Algorithm',
                        content: [
                            'Maintain two pointers lo and hi. At each step, compute mid = (lo + hi) // 2 and compare array[mid] to the target.',
                            '• If array[mid] == target: found, return mid.',
                            '• If array[mid] < target: search in the right half (lo = mid + 1).',
                            '• If array[mid] > target: search in the left half (hi = mid - 1).',
                            'Stop when lo > hi (element absent).',
                        ],
                    },
                    {
                        title: 'Complexity and Correctness',
                        content: [
                            'At each step the search space is halved. After k steps, the remaining space has size n/2ᵏ. When n/2ᵏ < 1, i.e. k > log₂ n, the search terminates.',
                            'Termination invariant: hi - lo strictly decreases at each iteration.',
                            'Complexity: Θ(log n) — exponentially faster than sequential search on large sorted datasets.',
                            'Critical implementation note: avoid copying sub-arrays (which would add O(n) space cost); work with indices on the original array.',
                        ],
                    },
                    {
                        title: 'Impact of Sorting on Other Operations',
                        content: [
                            'A sorted array enables much more than fast search:',
                            '• Finding the maximum: O(1) — it is the last element.',
                            '• Removing duplicates: a linear scan Θ(n) suffices instead of O(n²).',
                            '• Counting occurrences of a value: binary search + linear scan = O(log n + k).',
                            'The upfront cost of sorting (Θ(n log n)) is quickly amortised when multiple queries are needed.',
                        ],
                    },
                ],
                codeExample: {
                    language: 'python',
                    caption: 'Binary Search Implementation',
                    code: `def binary_search(arr, target):
    lo, hi = 0, len(arr) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            lo = mid + 1
        else:
            hi = mid - 1
    return -1  # not found`,
                },
            },
            {
                id: 'selection-sort',
                title: 'Selection Sort',
                content: [
                    'At each pass i, find the minimum of the unsorted suffix A[i..n-1] and swap it into position i.',
                ],
                subsections: [
                    {
                        title: 'Algorithm and Invariant',
                        content: [
                            'Loop invariant: after i iterations, A[0..i-1] contains the i smallest elements in sorted order.',
                            'The algorithm always performs exactly n(n-1)/2 comparisons regardless of the input — even on an already-sorted array.',
                        ],
                    },
                    {
                        title: 'Complexity',
                        content: [
                            '• Time: Θ(n²) in all cases (best, average, worst). The inner loop always runs fully.',
                            '• Space: Θ(1) auxiliary — fully in-place.',
                            '• Swaps: at most n-1 (better than Bubble Sort).',
                            'Simple to implement but dominated by Insertion Sort on nearly-sorted data.',
                        ],
                    },
                ],
                codeExample: {
                    language: 'python',
                    caption: 'Selection Sort',
                    code: `def selection_sort(A):
    n = len(A)
    for i in range(n - 1):
        min_idx = i
        for j in range(i + 1, n):
            if A[j] < A[min_idx]:
                min_idx = j
        A[i], A[min_idx] = A[min_idx], A[i]`,
                },
            },
            {
                id: 'insertion-sort',
                title: 'Insertion Sort',
                content: [
                    'Build the sorted array one element at a time by inserting each new element into its correct position among those already sorted.',
                ],
                subsections: [
                    {
                        title: 'Algorithm and Invariant',
                        content: [
                            'Loop invariant: after i iterations, A[0..i] is sorted.',
                            'Each element is shifted left until it finds its correct position.',
                        ],
                    },
                    {
                        title: 'Complexity',
                        content: [
                            '• Best case: Ω(n) — already sorted, only n-1 comparisons.',
                            '• Worst case: O(n²) — reverse-sorted, every element shifts all the way.',
                            '• Average case: Θ(n²).',
                            '• Space: Θ(1) auxiliary.',
                            'Excellent for small arrays or nearly-sorted data. Used as a subroutine in hybrid sorts (TimSort, IntroSort).',
                        ],
                    },
                ],
                table: {
                    headers: ['Algorithm', 'Best', 'Average', 'Worst', 'Space', 'Stable'],
                    rows: [
                        ['Selection Sort', 'Θ(n²)', 'Θ(n²)', 'Θ(n²)', 'Θ(1)', 'No'],
                        ['Insertion Sort', 'Θ(n)', 'Θ(n²)', 'Θ(n²)', 'Θ(1)', 'Yes'],
                        ['Merge Sort', 'Θ(n log n)', 'Θ(n log n)', 'Θ(n log n)', 'Θ(n)', 'Yes'],
                        ['Quick Sort', 'Θ(n log n)', 'Θ(n log n)', 'Θ(n²)', 'Θ(log n)', 'No'],
                    ],
                },
            },
            {
                id: 'merge-sort',
                title: 'Merge Sort',
                content: [
                    'Merge Sort applies the divide-and-conquer paradigm: split the array in two halves, recursively sort each half, then merge the two sorted halves.',
                ],
                subsections: [
                    {
                        title: 'Merge Procedure',
                        content: [
                            'Given two sorted arrays L and R, produce a single sorted array by repeatedly picking the smaller front element.',
                            'This merge costs Θ(n) time and Θ(n) auxiliary space — the main drawback of the algorithm.',
                        ],
                    },
                    {
                        title: 'Complexity via Recurrence',
                        content: [
                            'T(n) = 2·T(n/2) + Θ(n). By the Master Theorem (case 2): T(n) = Θ(n log n).',
                            'This complexity holds in all cases — Merge Sort is asymptotically optimal for comparison-based sorting.',
                            'It is stable (equal elements preserve their relative order) but not in-place: Θ(n) extra memory is needed for the merge step.',
                        ],
                    },
                ],
                codeExample: {
                    language: 'python',
                    caption: 'Merge Sort',
                    code: `def merge_sort(A):
    if len(A) <= 1:
        return A
    mid = len(A) // 2
    L = merge_sort(A[:mid])
    R = merge_sort(A[mid:])
    return merge(L, R)

def merge(L, R):
    result, i, j = [], 0, 0
    while i < len(L) and j < len(R):
        if L[i] <= R[j]:
            result.append(L[i]); i += 1
        else:
            result.append(R[j]); j += 1
    return result + L[i:] + R[j:]`,
                },
            },
            {
                id: 'quick-sort',
                title: 'Quick Sort',
                content: [
                    'Quick Sort partitions the array around a pivot element, placing smaller elements to its left and larger to its right, then recursively sorts both partitions.',
                ],
                subsections: [
                    {
                        title: 'Pivot Choice and Partitioning',
                        content: [
                            'The key step is partitioning: rearrange A[lo..hi] so that all elements ≤ pivot come first, then pivot, then elements > pivot.',
                            'Pivot choice critically affects performance:',
                            '• Fixed pivot (first or last): Θ(n²) on sorted/reverse-sorted input.',
                            '• Random pivot: Expected Θ(n log n) — eliminates systematic worst cases.',
                            '• Median-of-three: Good heuristic in practice.',
                        ],
                    },
                    {
                        title: 'Complexity',
                        content: [
                            '• Best / average: Θ(n log n) — balanced partitions.',
                            '• Worst case: Θ(n²) — one partition always empty (pivot is the minimum or maximum).',
                            '• Space: Θ(log n) average (call stack depth); Θ(n) worst.',
                            'Despite the worst-case, Quick Sort is often faster in practice than Merge Sort due to better cache performance and smaller constants.',
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 'advanced-sorting',
        title: 'Advanced Sorting: Selection, Radix Sort, and Hybrid Algorithms',
        description: 'QuickSelect for order statistics, non-comparison radix sort, and the theoretical lower bound Ω(n log n)',
        sections: [
            {
                id: 'lower-bound',
                title: 'Theoretical Lower Bound: Ω(n log n)',
                content: [
                    'Can we do better than Θ(n log n) for sorting? The answer is no — for comparison-based algorithms.',
                ],
                subsections: [
                    {
                        title: 'Decision Tree Argument',
                        content: [
                            'Any comparison-based sorting algorithm can be modelled as a binary decision tree: each internal node is a comparison (A[i] ≤ A[j]?), each leaf is a permutation.',
                            'There are n! possible orderings of n elements, so the tree must have at least n! leaves.',
                            'A binary tree of height h has at most 2ʰ leaves, so h ≥ log₂(n!).',
                            'By Stirling\'s approximation: log₂(n!) ≈ n log₂ n - n log₂ e = Θ(n log n).',
                            'Therefore any comparison-based sorting algorithm requires Ω(n log n) comparisons in the worst case. Merge Sort achieves this bound — it is optimal.',
                        ],
                    },
                ],
            },
            {
                id: 'quickselect',
                title: 'QuickSelect: Finding the k-th Smallest Element',
                content: [
                    'Finding the median or k-th order statistic does not require full sorting. QuickSelect, a variant of Quick Sort, achieves expected Θ(n).',
                ],
                subsections: [
                    {
                        title: 'Algorithm',
                        content: [
                            'After partitioning around a pivot p that lands at position q:',
                            '• If k == q: the pivot is the k-th smallest — return it.',
                            '• If k < q: recurse only on the left partition.',
                            '• If k > q: recurse only on the right partition.',
                            'Unlike Quick Sort, only ONE recursive call is made per step.',
                        ],
                    },
                    {
                        title: 'Complexity',
                        content: [
                            '• Average: Θ(n) with a random pivot — the recurrence T(n) = T(n/2) + Θ(n) solves to Θ(n).',
                            '• Worst case: Θ(n²) — same as Quick Sort with bad pivot.',
                            'The deterministic Median-of-Medians algorithm guarantees Θ(n) worst case, but with a large constant that makes it impractical.',
                        ],
                    },
                ],
            },
            {
                id: 'radix-sort',
                title: 'Radix Sort: Sorting Without Comparisons',
                content: [
                    'Radix Sort bypasses the Ω(n log n) lower bound by not performing comparisons. Instead, it sorts digit by digit using a stable counting sort as subroutine.',
                ],
                subsections: [
                    {
                        title: 'Algorithm',
                        content: [
                            'For n words of length k over an alphabet of size σ:',
                            '1. Sort by the least significant digit (LSD) using a stable sort.',
                            '2. Sort by the next digit, preserving the previous order for equal digits.',
                            '3. Repeat for all k digits.',
                            'Stability of the inner sort is crucial: it ensures that the previous ordering is preserved for equal values of the current digit.',
                        ],
                    },
                    {
                        title: 'Complexity',
                        content: [
                            '• Time: Θ(k·(n + σ)) — k passes, each costing Θ(n + σ) with counting sort.',
                            '• Space: Θ(n + σ) auxiliary.',
                            'When k is constant (fixed-length strings, integers of bounded value), complexity becomes Θ(n) — linear!',
                            'Radix Sort is extremely efficient for integers, IP addresses, or fixed-length strings, but inapplicable to arbitrary comparison-based problems.',
                        ],
                    },
                ],
            },
            {
                id: 'hybrid-sorts',
                title: 'Hybrid Sorting Algorithms',
                content: [
                    'Real-world sort implementations combine multiple algorithms to exploit the strengths of each.',
                ],
                subsections: [
                    {
                        title: 'Common Hybrids',
                        content: [
                            '• IntroSort: starts with Quick Sort, switches to Heap Sort if recursion depth exceeds 2·log₂(n) (avoiding Quick Sort\'s worst case), and uses Insertion Sort for small partitions (n ≤ 16). Used in C++ std::sort.',
                            '• TimSort: merges naturally occurring sorted "runs", using Insertion Sort to extend short runs. Achieves Θ(n) on nearly-sorted data, Θ(n log n) in general. Used in Python and Java.',
                            '• SedgeSort: Quick Sort + Insertion Sort for small sub-arrays.',
                            'The key insight: no single algorithm dominates in all regimes. Hybrid approaches combine theoretical guarantees with practical efficiency.',
                        ],
                    },
                ],
                table: {
                    headers: ['Algorithm', 'Worst case', 'Average', 'Space', 'Notes'],
                    rows: [
                        ['IntroSort', 'Θ(n log n)', 'Θ(n log n)', 'Θ(log n)', 'C++ std::sort'],
                        ['TimSort', 'Θ(n log n)', 'Θ(n log n)', 'Θ(n)', 'Python, Java'],
                        ['Radix Sort', 'Θ(kn)', 'Θ(kn)', 'Θ(n+σ)', 'Not comparison-based'],
                        ['Heap Sort', 'Θ(n log n)', 'Θ(n log n)', 'Θ(1)', 'In-place, not stable'],
                    ],
                },
            },
        ],
    },
    {
        id: 'permutations-geometry',
        title: 'Permutations, Random Generation, and Geometric Applications',
        description: 'Structure of permutations, Knuth shuffle, convex hull algorithms, and how sorting unlocks efficient geometry',
        sections: [
            {
                id: 'permutations',
                title: 'Structure of Permutations',
                content: [
                    'A permutation of {1, …, n} is a bijection from this set to itself. Sorting is fundamentally about finding the permutation that maps the input to its sorted order.',
                ],
                subsections: [
                    {
                        title: 'Transpositions',
                        content: [
                            'Any permutation can be decomposed into a product of transpositions (swaps of exactly two elements).',
                            'This decomposition is the atomic operation behind every swap-based sorting algorithm: each "swap" in Bubble Sort or Selection Sort is a transposition.',
                            'The parity of the number of transpositions (even or odd) is an invariant of the permutation.',
                        ],
                    },
                    {
                        title: 'Counting and the Lower Bound Revisited',
                        content: [
                            'There are n! permutations of n elements (n choices for position 1, n-1 for position 2, etc.).',
                            'n! grows super-exponentially: 10! ≈ 3.6 × 10⁶, 20! ≈ 2.4 × 10¹⁸.',
                            'This counting argument underpins the Ω(n log n) lower bound for sorting.',
                        ],
                    },
                ],
            },
            {
                id: 'knuth-shuffle',
                title: 'Knuth Shuffle: Uniform Random Permutation',
                content: [
                    'Given an array of n elements, how do we generate a uniformly random permutation — each of the n! orderings with equal probability — in linear time?',
                ],
                subsections: [
                    {
                        title: 'Fisher-Yates / Knuth Algorithm',
                        content: [
                            'For i from n-1 down to 1: pick j uniformly at random in {0, …, i}, then swap A[i] and A[j].',
                            'This simulates a selection sort in reverse: at step i, we choose which element occupies position i among the remaining unsorted ones.',
                            'Complexity: Θ(n) — exactly n-1 swaps and n-1 random number generations.',
                        ],
                    },
                    {
                        title: 'Correctness Proof',
                        content: [
                            'We prove that every permutation is equally likely. Consider element e ending at position k.',
                            'At step n-1: probability 1/n that e is placed in position n-1.',
                            'At step n-2: probability 1/(n-1) that e is placed in position n-2 (given it was not placed at n-1).',
                            'The probability that e ends at any specific position k is: (product of survival probabilities) × (1/(k+1)) = 1/n.',
                            'By symmetry, every permutation has probability 1/n!.',
                        ],
                    },
                ],
                codeExample: {
                    language: 'python',
                    caption: 'Knuth Shuffle',
                    code: `import random

def knuth_shuffle(A):
    n = len(A)
    for i in range(n - 1, 0, -1):
        j = random.randint(0, i)   # j in {0, ..., i}
        A[i], A[j] = A[j], A[i]
    return A`,
                },
            },
            {
                id: 'convex-hull',
                title: 'Convex Hull: Geometry Meets Sorting',
                content: [
                    'The convex hull of a set of points P in the plane is the smallest convex polygon containing all points — the shape you get by stretching a rubber band around all points.',
                ],
                subsections: [
                    {
                        title: 'Naive Algorithm: O(n³)',
                        content: [
                            'An edge (P, Q) belongs to the convex hull if and only if all other points lie on the same side of the directed line PQ.',
                            'For each of the O(n²) pairs (P, Q), check all n other points: total cost Θ(n³).',
                            'This is impractical for large point sets.',
                        ],
                    },
                    {
                        title: 'Graham Scan: Θ(n log n)',
                        content: [
                            '1. Find the lowest point p₀ (y-coordinate, break ties by x). Cost: Θ(n).',
                            '2. Sort the remaining n-1 points by polar angle around p₀. Cost: Θ(n log n) — the dominant step.',
                            '3. Process points in sorted order, maintaining a stack of hull candidates:',
                            '   • Push each point; while the last three points make a non-left turn (clockwise or collinear), pop the middle one.',
                            '4. The stack at the end is the convex hull.',
                            'The linear sweep (step 3) costs Θ(n) since each point is pushed and popped at most once.',
                            'Total: Θ(n log n), dominated by the sort.',
                        ],
                    },
                    {
                        title: 'Why Sorting Unlocks Geometry',
                        content: [
                            'The Graham scan illustrates a powerful pattern: a hard geometric problem (O(n³) naïve) becomes tractable (Θ(n log n)) by sorting the data first.',
                            'Other examples of this pattern:',
                            '• Closest pair of points: Θ(n log n) with a divide-and-conquer after sorting by x.',
                            '• Line sweep algorithms for segment intersection: sort events by x-coordinate.',
                            '• Voronoi diagrams and Delaunay triangulations.',
                            'Sorting is not just a utility — it is a fundamental algorithmic transformation that reveals structure hidden in disordered data.',
                        ],
                    },
                ],
                table: {
                    headers: ['Algorithm', 'Time Complexity', 'Key Step'],
                    rows: [
                        ['Naïve Convex Hull', 'Θ(n³)', 'Check all pairs of points'],
                        ['Graham Scan', 'Θ(n log n)', 'Sort by polar angle + stack sweep'],
                        ['Jarvis March', 'Θ(nh) — h = hull size', 'Gift-wrapping, output-sensitive'],
                    ],
                },
            },
        ],
    },
];

export const COURSES_FR: Course[] = [
    {
        id: 'algorithmic-fundamentals',
        title: 'Éléments d\'Algorithmique (Module EA4)',
        description: 'Cours magistral sur la conception, la preuve de correction et l\'analyse de complexité des algorithmes',
        sections: [
            {
                id: 'introduction',
                title: 'Introduction à l\'Algorithmique : Épistémologie et Définitions',
                content: [
                    'L\'algorithmique ne saurait être réduite à une simple compétence technique de programmation ; elle constitue une véritable science de la méthode, une discipline intellectuelle fondamentale qui préexiste à l\'outil informatique. Dans le cadre de la Licence d\'Informatique à l\'Université Paris Cité, le module EA4 a pour vocation de forger votre rigueur analytique. Apprendre l\'algorithmique, c\'est apprendre à transformer un problème abstrait en une suite d\'opérations systématiques dont on peut prouver la validité et l\'efficacité avant même d\'envisager leur implémentation.',
                ],
                subsections: [
                    {
                        title: 'Analyse Thématique et Définitions',
                        content: [
                            'L\'algorithmique se définit comme la conception et l\'analyse des algorithmes. Un algorithme est une méthode systématique de résolution d\'un problème. Il s\'agit d\'un processus fini, composé d\'instructions précises qui transforment des données d\'entrée en un résultat attendu.',
                        ],
                    },
                    {
                        title: 'Perspective Historique : L\'Héritage d\'Al-Khwārizmī',
                        content: [
                            'Le terme « algorithme » est une déformation latine du nom de Muhammad Ibn Mūsā al-Khwārizmī, mathématicien perse du IXe siècle, probablement originaire de l\'actuel Ouzbékistan, ayant œuvré à Bagdad. Ses contributions constituent le socle du calcul moderne :',
                            '• Fondation de l\'Algèbre : Son ouvrage majeur, Kitābu \'l-mukhtasar fī hisābi \'l-jabr wa\'l-muqābalah (Abrégé du calcul par la restauration et la comparaison), est considéré comme le premier manuel d\'algèbre, formalisant la résolution des équations du second degré.',
                            '• Notation Positionnelle : Ses écrits ont permis la diffusion en Occident de la notation positionnelle décimale venue d\'Inde.',
                            '• Révolution du Calcul : Historiquement, le terme désignait les méthodes de calcul utilisant des chiffres, s\'opposant au calcul traditionnel sur abaques (du latin calculus, le petit caillou).',
                        ],
                    },
                    {
                        title: 'Évolution du Concept',
                        content: [
                            'Bien que central en informatique, le concept d\'algorithme est ancestral. On en retrouve l\'application dans les calculs arithmétiques (approximations de π ou de √2), les constructions géométriques (tracé d\'un pentagone régulier, recherche du centre d\'un cercle) ou les processus de la vie courante (recettes de cuisine, manuels de construction).',
                            'Cependant, l\'avènement des machines programmables a transfiguré la discipline : la capacité de l\'ordinateur à exécuter fidèlement et à très haute vitesse une suite d\'opérations prédéfinies exige désormais une précision absolue dans la conception.',
                            'Cette nature systématique et la complexité des systèmes modernes imposent un cadre organisationnel rigoureux, indispensable à l\'apprentissage de la preuve et de l\'efficacité.',
                        ],
                    },
                ],
            },
            {
                id: 'module-organization',
                title: 'Cadre Opérationnel et Modalités du Module EA4',
                content: [
                    'La réussite dans ce module repose sur une assiduité sans faille. Le volume horaire et la progression pédagogique sont conçus pour que chaque séance de Cours, TD et TP s\'appuie sur la précédente.',
                ],
                subsections: [
                    {
                        title: 'Organisation Structurelle',
                        content: [
                            'Les séances de TD et TP débutent la semaine du 26 janvier. Le respect de votre groupe d\'affectation est impératif pour la gestion des salles de TP.',
                        ],
                    },
                    {
                        title: 'Équipe Pédagogique et Communication',
                        content: [
                            'Le module est coordonné par Dominique Poulalhon.',
                            'Protocoles de communication :',
                            '1. Email : Mentionnez obligatoirement la balise [EA4] dans l\'objet de vos messages.',
                            '2. Moodle : Plateforme centrale pour les annonces, les énoncés, les rendus de TP et les auto-évaluations.',
                            '3. Discord / Matrix : Un serveur interactif est mis à disposition. Vous devez impérativement configurer votre pseudo selon le format : « Prénom Nom (groupe) ».',
                        ],
                    },
                    {
                        title: 'Évaluation des Connaissances (CCI)',
                        content: [
                            'Le module est régi par le Contrôle Continu Intégral :',
                            '• Assiduité : Émargement en séance et rendu systématique des TP.',
                            '• Interrogations : Tests courts réguliers en séance de TD.',
                            '• Mi-semestre : Un contrôle commun sur table.',
                            '• Final : Un examen terminal comptant pour 50% de la note finale.',
                            'Cette organisation administrative n\'a d\'autre but que de vous permettre de vous concentrer sur les trois piliers de l\'analyse algorithmique.',
                        ],
                    },
                ],
                table: {
                    headers: ['Type de séance', 'Fréquence / Volume', 'Créneaux et Lieux'],
                    rows: [
                        ['Cours Magistral', '2 x 1h30 / semaine', 'Mer. 14h30-16h & Ven. 9h-10h30 (Amphi 8C)'],
                        ['Travaux Dirigés (TD)', '2h ou 4h (alternance)', 'Selon emploi du temps du groupe'],
                        ['Travaux Pratiques (TP)', '2h par quinzaine', 'Sous-groupes de 20 étudiants'],
                    ],
                },
            },
            {
                id: 'methodology',
                title: 'Méthodologie d\'Analyse : Correction, Terminaison et Efficacité',
                content: [
                    'En informatique théorique, la démonstration mathématique prime sur l\'observation empirique. L\'exécution d\'un programme sur quelques jeux de données ne garantit jamais sa validité universelle.',
                ],
                subsections: [
                    {
                        title: 'Les Trois Axes d\'Étude',
                        content: [
                            '1. Conception : Identification des techniques générales (diviser pour régner, programmation dynamique, etc.) permettant d\'élaborer une solution.',
                            '2. Preuve de correction : Démonstration qu\'un algorithme produit la sortie attendue pour toute entrée valide. On distingue :',
                            '   • La Terminaison : Preuve que l\'algorithme s\'arrête en un temps fini.',
                            '   • La Correction Partielle : Preuve que si l\'algorithme s\'arrête, le résultat est correct.',
                            '3. Étude de l\'efficacité (Complexité) : Évaluation des ressources consommées (temps et mémoire).',
                        ],
                    },
                    {
                        title: 'Outils de Preuve : L\'Invariant de Boucle',
                        content: [
                            'L\'invariant de boucle est une propriété logique qui reste vraie avant et après chaque itération. C\'est l\'outil privilégié pour prouver la correction d\'un algorithme itératif.',
                            'Par exemple, pour l\'addition, nous montrons qu\'après i tours de boucle, le résultat partiel res satisfait la propriété : res ≡ n₁ + n₂ (mod 10ⁱ)',
                        ],
                    },
                    {
                        title: 'Analyse de la Complexité',
                        content: [
                            'Nous mesurons l\'efficacité en fonction de la taille ℓ des données d\'entrée. Pour des entiers n₁ et n₂, la taille ℓ correspond au nombre de chiffres de leur représentation :',
                            'ℓ = 1 + ⌊max(log₁₀ n₁, log₁₀ n₂)⌋',
                            '• Complexité Linéaire O(ℓ) : Le temps d\'exécution est proportionnel à la taille de l\'entrée.',
                            '• Complexité Quadratique O(ℓ²) : Le temps d\'exécution croît comme le carré de la taille de l\'entrée.',
                            'Appliquons maintenant ces concepts à l\'étude des opérations arithmétiques fondamentales.',
                        ],
                    },
                ],
            },
            {
                id: 'case-studies',
                title: 'Étude de Cas : Algorithmes Arithmétiques et Performance',
                content: [
                    'Comparer différents algorithmes pour une même opération (comme la multiplication) permet d\'illustrer des écarts de performance abyssaux.',
                ],
                subsections: [
                    {
                        title: 'L\'Addition de deux Entiers',
                        content: [
                            'L\'algorithme "scolaire" traite les chiffres un à un en propageant une retenue. Sa complexité est linéaire O(ℓ).',
                        ],
                    },
                    {
                        title: 'La Multiplication : Du Naïf au Quadratique',
                        content: [
                            '1. Multiplication Naïve : Réaliser n₁ × n₂ par n₂ additions répétées.',
                            '   Analyse : Le coût est de n₂ additions. Puisque n₂ ≈ 10ℓ, la complexité totale est O(ℓ × 10ℓ), ce qui est catastrophique (exponentiel par rapport au nombre de chiffres).',
                            '2. Multiplication par un chiffre : Un seul parcours de nb1, complexité linéaire O(ℓ).',
                            '3. Multiplication de deux entiers (Méthode Scolaire) : En utilisant une boucle imbriquée parcourant les chiffres de nb₂ et appelant les fonctions précédentes, on obtient une complexité quadratique O(ℓ²).',
                            'Ces structures logiques doivent être implémentées avec soin, en utilisant les outils de programmation appropriés.',
                        ],
                    },
                ],
                codeExample: {
                    language: 'python',
                    code: `def addition(nb1, nb2):
    # nb1, nb2 : tableaux de chiffres décimaux représentant des entiers n1 et n2,
    # supposés de même longueur, en commençant par les unités
    res = []
    retenue = 0
    for (chiffre1, chiffre2) in zip(nb1, nb2):
        # parcours parallèle des deux tableaux
        tmp = chiffre1 + chiffre2 + retenue
        retenue = tmp // 10  # division euclidienne
        res.append(tmp % 10) # ajout à la fin du tableau
    return res + [retenue]   # concaténation de 2 tableaux`,
                    caption: 'Implémentation de l\'algorithme d\'addition',
                },
                table: {
                    headers: ['Opération', 'Algorithme', 'Invariant (étape i)', 'Complexité O'],
                    rows: [
                        ['Addition', 'Scolaire', 'res ≡ n₁ + n₂ (mod 10ⁱ)', 'O(ℓ)'],
                        ['Multiplication', 'Naïve', 'res = n₁ × i', 'O(ℓ · 10ℓ)'],
                        ['Multiplication', 'Par un chiffre', 'res ≡ n₁ × chiffre (mod 10ⁱ)', 'O(ℓ)'],
                        ['Multiplication', 'Scolaire', 'res ≡ n₁ × n₂ (mod 10ⁱ)', 'O(ℓ²)'],
                    ],
                },
            },
            {
                id: 'python-implementation',
                title: 'Implémentation Technique : Micro-cours Python',
                content: [
                    'Python est un langage multiparadigme (impératif, objet, fonctionnel) privilégié pour sa lisibilité et sa capacité de prototypage rapide.',
                ],
                subsections: [
                    {
                        title: 'Philosophie et Typage',
                        content: [
                            'Python est un langage interprété où l\'indentation n\'est pas esthétique mais syntaxique : elle définit les blocs d\'instructions.',
                            '• Typage Dynamique : Le type d\'une variable peut évoluer lors de l\'exécution.',
                            '• Typage Fort : Python interdit les opérations incohérentes (ex: concaténer un str et un int sans conversion).',
                            '• Polymorphisme : Considérez la fonction def truc(x): return x + x',
                            '  - L\'exécution de truc(3) produit 6, tandis que truc(\'cou\') produit \'coucou\'.',
                            'Cette "magie" illustre la flexibilité du langage vis-à-vis des types.',
                        ],
                    },
                    {
                        title: 'Structures de Données',
                        content: [
                            '• Immutables : int (précision arbitraire), float (64 bits), bool, str, tuple. Une chaîne de caractères ne peut être modifiée in situ.',
                            '• Mutables : list (tableaux dynamiques), set (ensembles), dict (tables d\'association).',
                        ],
                    },
                    {
                        title: 'Contrôle de Flux et Fonctions',
                        content: [
                            'Les blocs sont délimités par les deux-points (:) et l\'indentation. Les fonctions sont définies par le mot-clé def. Pour itérer sur une plage, on utilise for i in range(début, fin_exclue).',
                        ],
                    },
                    {
                        title: 'Auto-documentation',
                        content: [
                            'L\'étudiant doit développer son autonomie via les fonctions système :',
                            '• dir(objet) : Liste les méthodes disponibles pour un type donné.',
                            '• help(objet) : Affiche l\'aide interactive, incluant les "docstrings" rédigées par les développeurs.',
                            'Pour approfondir votre maîtrise de l\'outil Python dans le cadre du module EA4, consultez la documentation officielle.',
                        ],
                    },
                ],
            },
            {
                id: 'success-checklist',
                title: 'Synthèse et Directives Pratiques pour l\'Étudiant',
                content: [
                    'La réussite en EA4 exige une discipline intellectuelle constante. L\'élégance d\'un algorithme ne vaut rien sans une implémentation rigoureuse et une preuve de sa validité.',
                ],
                subsections: [
                    {
                        title: 'Checklist de Réussite',
                        content: [
                            '• Présence : Amphi 8C, TD et TP sont indissociables.',
                            '• Rigueur des TP : Respectez impérativement votre groupe assigné et rendez votre travail systématiquement sur Moodle en fin de séance.',
                            '• Codage Propre : Utilisez systématiquement des docstrings pour documenter vos fonctions.',
                            '• Autonomie : Avant de solliciter l\'équipe, exploitez les fonctions d\'introspection dir() et help().',
                            'Concevoir un algorithme à la fois mathématiquement exact et numériquement performant constitue l\'essence même de notre discipline. Je vous invite à aborder ce semestre avec la curiosité et la rigueur que ce défi impose.',
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 'complexity-optimization',
        title: 'Étude Approfondie de la Complexité Algorithmique : De la Théorie à l\'Optimisation des Suites de Fibonacci',
        description: 'Analyse avancée de la complexité spatiale et temporelle, notations asymptotiques et techniques d\'optimisation',
        sections: [
            {
                id: 'space-complexity',
                title: 'Fondements de la Complexité Spatiale',
                content: [
                    'En tant qu\'informaticiens, nous devons concevoir des algorithmes non comme de simples suites d\'instructions, mais comme des structures mathématiques dont l\'efficacité est dictée par les ressources physiques : l\'espace et le temps. La maîtrise de la complexité n\'est pas une option, c\'est le fondement même de la viabilité d\'une solution logicielle. Cette étude analyse la rigueur nécessaire à l\'évaluation de ces performances, de l\'abstraction théorique aux réalités concrètes de l\'arithmétique exacte.',
                    'La gestion de la mémoire constitue un enjeu critique qui dépasse la simple exécution du code. Un algorithme, aussi brillant soit-il sur le plan logique, peut s\'avérer physiquement irréalisable s\'il sature les ressources de la machine. Il est impératif de distinguer la mémoire incompressible de la mémoire auxiliaire.',
                ],
                subsections: [
                    {
                        title: 'Types de Mémoire',
                        content: [
                            '• Mémoire incompressible : Cet espace est strictement réservé au stockage des données d\'entrée et du résultat final. Puisqu\'elle est inhérente au problème posé, elle est identique pour tout algorithme de résolution.',
                            '• Mémoire auxiliaire : Elle englobe l\'espace requis pour les calculs intermédiaires (variables temporaires, piles d\'appels, structures de données transitoires). C\'est cet indicateur, et lui seul, qui permet de comparer l\'élégance et l\'efficacité de deux algorithmes résolvant le même problème.',
                        ],
                    },
                    {
                        title: 'Étude de Cas : La Multiplication',
                        content: [
                            'Considérons la multiplication de deux entiers de taille ℓ (représentés par des tableaux de chiffres).',
                            '1. Dans une multiplication par un chiffre, l\'espace auxiliaire est négligeable (coût constant O(1)).',
                            '2. Dans une multiplication « scolaire » standard, l\'espace auxiliaire est proportionnel à la taille des nombres, soit Θ(ℓ).',
                        ],
                    },
                    {
                        title: 'Évaluation du "So What?"',
                        content: [
                            'L\'importance de la mémoire auxiliaire devient flagrante si l\'on compare l\'algorithme standard avec une variante naïve qui stockerait tous les produits intermédiaires dans un tableau aux. Pour des entiers de taille ℓ = 10⁶, la mémoire auxiliaire passerait d\'un coût linéaire à un coût quadratique Θ(ℓ²).',
                            'L\'espace requis atteindrait environ 10¹² chiffres, soit approximativement 30 Go de RAM (en comptant 4 bits par chiffre décimal). Une telle mauvaise gestion transforme une opération élémentaire en une solution inatteignable pour une machine standard.',
                        ],
                    },
                ],
            },
            {
                id: 'time-measurement',
                title: 'Mesure du Temps et Opérations Élémentaires',
                content: [
                    'Mesurer le temps d\'exécution de manière absolue est une erreur méthodologique : la performance d\'un même code fluctue selon la fréquence du processeur, l\'architecture du cache ou la charge système. Pour caractériser l\'algorithme indépendamment de la machine, nous introduisons la notion d\'opération élémentaire.',
                    'Une opération élémentaire (affectation, comparaison, arithmétique sur des nombres bornés) est une unité de calcul dont le temps d\'exécution est considéré comme constant.',
                ],
                subsections: [
                    {
                        title: 'Analyse des Ordres de Grandeur',
                        content: [
                            'Le tableau suivant illustre la progression du nombre d\'opérations élémentaires. Il démontre que l\'efficacité algorithmique l\'emporte toujours sur la puissance matérielle brute pour de grandes valeurs de n.',
                        ],
                    },
                    {
                        title: 'Perspective Matérielle',
                        content: [
                            'Pour mettre ces chiffres en perspective, un processeur monocœur à 3,2 GHz effectue environ 10¹⁷ cycles par an. Un algorithme exponentiel en 2ⁿ avec n=100 requiert 10³⁰ opérations, ce qui nécessiterait des milliards d\'années de calcul.',
                            'L\'inefficacité algorithmique ne peut être compensée par aucun progrès matériel.',
                        ],
                    },
                ],
                table: {
                    headers: ['Complexité', 'n=10', 'n=100', 'n=10³', 'n=10⁶', 'n=10¹²'],
                    rows: [
                        ['log₂ n', '4', '7', '10', '20', '40'],
                        ['n', '10', '100', '10³', '10⁶', '10¹²'],
                        ['n log₂ n', '34', '665', '10⁴', '2·10⁷', '4·10¹³'],
                        ['n²', '100', '10⁴', '10⁶', '10¹²', '10²⁴'],
                        ['n³', '10³', '10⁶', '10⁹', '10¹⁸', '10³⁶'],
                        ['2ⁿ', '10³', '10³⁰', '10³⁰¹', '∞', '∞'],
                    ],
                },
            },
            {
                id: 'asymptotic-notations',
                title: 'Formalisme des Notations Asymptotiques (O, Ω, Θ)',
                content: [
                    'Les notations asymptotiques constituent l\'alphabet universel pour classer les algorithmes selon leur taux de croissance. Soient f et g deux fonctions de ℕ dans ℕ :',
                ],
                subsections: [
                    {
                        title: 'Grand O (Limite supérieure)',
                        content: [
                            'f ∈ O(g) : ∃c > 0, ∃n₀, ∀n ≥ n₀, f(n) ≤ c·g(n)',
                            'f ne croît pas plus vite que g.',
                        ],
                    },
                    {
                        title: 'Grand Omega (Limite inférieure)',
                        content: [
                            'f ∈ Ω(g) : ∃c > 0, ∃n₀, ∀n ≥ n₀, f(n) ≥ c·g(n)',
                            'f croît au moins aussi vite que g.',
                        ],
                    },
                    {
                        title: 'Grand Theta (Borne exacte : minoration ET majoration)',
                        content: [
                            'f ∈ Θ(g) : f ∈ O(g) et f ∈ Ω(g)',
                            'Formellement : ∃c₁ > 0, ∃c₂ > 0, ∃n₀, ∀n ≥ n₀, c₁·g(n) ≤ f(n) ≤ c₂·g(n)',
                            'Θ fournit simultanément une minoration (comme Ω) et une majoration (comme O) : il encadre f entre deux multiples constants de g. C\'est une borne exacte qui caractérise l\'ordre de grandeur précis de f.',
                            'Visuellement, si f ∈ Θ(n), sa courbe sera, pour n ≥ n₀, emprisonnée entre deux droites c₁·n et c₂·n. Une complexité en Θ(n²) suivra une croissance parabolique, quelles que soient les constantes.',
                        ],
                    },
                    {
                        title: 'Application : La Multiplication Russe',
                        content: [
                            'La méthode du paysan russe illustre parfaitement ce formalisme. Elle repose sur l\'invariant : la valeur de res + m × n est constante.',
                            'En effectuant des divisions par 2 (n // 2) et des décalages de bits (m × 2), l\'algorithme nécessite ℓ étapes, où ℓ est le nombre de bits de n. À chaque étape, les additions et décalages s\'opèrent sur des nombres de taille ℓ.',
                            'Le coût total est donc ℓ × ℓ, soit une complexité en O(ℓ²). Elle est mathématiquement équivalente à la multiplication scolaire en base 2.',
                        ],
                    },
                ],
            },
            {
                id: 'power-optimization',
                title: 'Optimisation du Calcul de Puissance : Exponentiation Binaire',
                content: [
                    'Le calcul de aⁿ est stratégique en cryptographie et en calcul matriciel.',
                ],
                subsections: [
                    {
                        title: 'Méthode Naïve',
                        content: [
                            'L\'approche itérative effectue n multiplications. Si a et n sont de taille ℓ (n ≈ 10ℓ), le coût devient prohibitif.',
                            'Le résultat aⁿ possède environ n log a ≈ 10ℓ · ℓ chiffres. Par la méthode scolaire, les dernières multiplications atteignent une complexité de O(ℓ² · 10²ℓ).',
                            'Le facteur exponentiel 10²ℓ provient de la valeur même de l\'exposant n.',
                        ],
                    },
                    {
                        title: 'Exponentiation Rapide',
                        content: [
                            'En utilisant aⁿ = (aⁿ/²)², on réduit le nombre de multiplications à Θ(log₂ n).',
                        ],
                    },
                    {
                        title: 'Preuve de Correction (Algorithme Récursif)',
                        content: [
                            'Démontrons par récurrence forte sur n que puissance(a, n) retourne aⁿ :',
                            '1. Initialisation : Pour n=0, l\'algorithme retourne 1. Or a⁰=1. La base est vérifiée.',
                            '2. Hérédité : Supposons l\'algorithme correct pour tout k < n. L\'appel pour n utilise n // 2. Comme n // 2 < n, l\'appel récursif retourne aⁿ/² par hypothèse.',
                            '   • Si n est pair : le résultat est (aⁿ/²)² = aⁿ.',
                            '   • Si n est impair : le résultat est a · (a⁽ⁿ⁻¹⁾/²)² = a¹ · aⁿ⁻¹ = aⁿ.',
                            '3. Conclusion : L\'algorithme est correct pour tout n ∈ ℕ.',
                        ],
                    },
                    {
                        title: 'Évaluation de l\'Impact',
                        content: [
                            'En arithmétique modulaire (taille bornée), le coût est de Θ(log₂ n).',
                            'En arithmétique exacte, le coût augmente à chaque étape car la taille des opérandes croît, un phénomène que nous allons observer avec la suite de Fibonacci.',
                        ],
                    },
                ],
            },
            {
                id: 'fibonacci-case-study',
                title: 'Étude de Cas : La Suite de Fibonacci',
                content: [
                    'Le défi consiste à calculer Fₙ pour de grandes valeurs comme n = 10⁶.',
                ],
                subsections: [
                    {
                        title: 'Analyse de Croissance',
                        content: [
                            'Démontrons que la taille de Fₙ est en Θ(n). Par définition, Fₙ = Fₙ₋₁ + Fₙ₋₂. Comme la suite est croissante, Fₙ ≥ 2Fₙ₋₂.',
                            'Par récurrence, Fₙ ≥ 2ⁿ/² (vérifié pour n ≥ 6 car F₆ = 8 = 2³). Inversement, Fₙ ≤ 2ⁿ.',
                            'Ainsi, Fₙ possède entre n/2 et n bits. Sa taille est donc bien Θ(n). F₁,₀₀₀,₀₀₀ possède environ 300 000 chiffres décimaux.',
                        ],
                    },
                    {
                        title: 'Évaluation Critique de quatre Méthodes',
                        content: [
                            '1. Récurrence Naïve : Aberrante. Elle effectue A(n) ≈ φⁿ additions. Pour n=100, φ¹⁰⁰ ≈ 3,5 × 10²⁰. Même à 3,2 GHz, ce calcul prendrait plusieurs siècles.',
                            '2. Programmation Dynamique (Tableau) : On stocke n termes. La somme des tailles des entiers stockés est Σᵢ₌₁ⁿ i = n(n+1)/2 bits, soit une complexité spatiale en Θ(n²). Pour n=10⁶, cela requiert environ 30 Go de RAM.',
                            '3. Méthode Itérative (Deux variables) : Optimisation spatiale en Θ(n). En revanche, comme chaque addition de nombres de taille n coûte Θ(n), la complexité temporelle réelle est Θ(n²).',
                            '4. Méthode Matricielle : L\'utilisation de l\'exponentiation binaire sur la matrice de Fibonacci permet d\'obtenir le résultat en Θ(log₂ n) multiplications de matrices.',
                        ],
                    },
                    {
                        title: 'Le "So What?" Final',
                        content: [
                            'Pour F₁,₀₀₀,₀₀₀, le coût unitaire des opérations change la donne :',
                            '• L\'addition n\'est plus constante mais en Θ(n).',
                            '• La multiplication scolaire est en O(n²). Même si la méthode matricielle réduit le nombre d\'opérations à O(log n), le coût des multiplications sur des entiers de taille Θ(n) fait que la complexité temporelle reste dominée par la taille des nombres.',
                            'Python, avec son type int à longueur non bornée, facilite l\'implémentation mais ne peut soustraire l\'exécution aux lois de la complexité.',
                        ],
                    },
                ],
            },
            {
                id: 'conclusion',
                title: 'Conclusion',
                content: [
                    'La hiérarchie de l\'efficacité est absolue : l\'approche naïve est une impossibilité physique, la programmation dynamique par tableau une impasse spatiale, et la méthode matricielle couplée à l\'exponentiation rapide représente l\'optimum théorique.',
                    'En informatique, la structure algorithmique prime sur la puissance de la machine.',
                ],
            },
        ],
    },
    {
        id: 'search-and-sorting',
        title: 'Algorithmes de Recherche et Tris par Comparaison',
        description: 'Recherche séquentielle et dichotomique, puis les quatre algorithmes de tri fondamentaux avec preuves de correction et analyse de complexité',
        sections: [
            {
                id: 'sequential-search',
                title: 'Recherche Séquentielle',
                content: [
                    'Dans une liste non triée, la recherche d\'un élément nécessite d\'examiner chaque entrée une par une. C\'est la stratégie la plus générale mais la moins efficace.',
                ],
                subsections: [
                    {
                        title: 'Algorithme et Complexité',
                        content: [
                            'On parcourt le tableau de l\'indice 0 à n-1 et on retourne l\'indice dès que la valeur cible est trouvée, ou -1 si elle est absente.',
                            '• Meilleur cas : Ω(1) — l\'élément est à la position 0.',
                            '• Pire cas et cas moyen : Θ(n) — l\'élément est absent ou à la fin.',
                            'Aucun prétraitement des données n\'est requis, ce qui la rend universellement applicable.',
                        ],
                    },
                ],
            },
            {
                id: 'binary-search',
                title: 'Recherche Dichotomique',
                content: [
                    'Si le tableau est trié, on peut exploiter l\'ordre pour éliminer la moitié des candidats à chaque étape — la stratégie "diviser pour régner" appliquée à la recherche.',
                ],
                subsections: [
                    {
                        title: 'Algorithme',
                        content: [
                            'On maintient deux pointeurs lo et hi. À chaque étape, on calcule mid = (lo + hi) // 2 et on compare array[mid] à la cible.',
                            '• Si array[mid] == cible : on retourne mid.',
                            '• Si array[mid] < cible : on cherche dans la moitié droite (lo = mid + 1).',
                            '• Si array[mid] > cible : on cherche dans la moitié gauche (hi = mid - 1).',
                            'On s\'arrête quand lo > hi (élément absent).',
                        ],
                    },
                    {
                        title: 'Complexité et Correction',
                        content: [
                            'À chaque étape l\'espace de recherche est divisé par deux. Après k étapes, l\'espace restant est de taille n/2ᵏ. Quand n/2ᵏ < 1, soit k > log₂ n, la recherche se termine.',
                            'Invariant de terminaison : hi - lo décroît strictement à chaque itération.',
                            'Complexité : Θ(log n) — exponentiellement plus rapide que la recherche séquentielle sur de grands ensembles de données triés.',
                            'Note d\'implémentation critique : évitez les copies de sous-tableaux (qui ajouteraient un coût spatial en O(n)) ; travaillez avec des indices sur le tableau d\'origine.',
                        ],
                    },
                    {
                        title: 'Impact du Tri sur d\'autres Opérations',
                        content: [
                            'Un tableau trié permet bien plus qu\'une recherche rapide :',
                            '• Trouver le maximum : O(1) — c\'est le dernier élément.',
                            '• Éliminer les doublons : un parcours linéaire Θ(n) suffit au lieu de O(n²).',
                            '• Compter les occurrences d\'une valeur : dichotomie + parcours linéaire = O(log n + k).',
                            'Le coût initial du tri (Θ(n log n)) est rapidement amorti lorsque de multiples requêtes sont nécessaires.',
                        ],
                    },
                ],
                codeExample: {
                    language: 'python',
                    caption: 'Implémentation de la Recherche Dichotomique',
                    code: `def recherche_dichotomique(arr, cible):
    lo, hi = 0, len(arr) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if arr[mid] == cible:
            return mid
        elif arr[mid] < cible:
            lo = mid + 1
        else:
            hi = mid - 1
    return -1  # non trouvé`,
                },
            },
            {
                id: 'selection-sort',
                title: 'Tri par Sélection',
                content: [
                    'À chaque passage i, on trouve le minimum du suffixe non trié A[i..n-1] et on l\'échange à la position i.',
                ],
                subsections: [
                    {
                        title: 'Algorithme et Invariant',
                        content: [
                            'Invariant de boucle : après i itérations, A[0..i-1] contient les i plus petits éléments dans l\'ordre.',
                            'L\'algorithme effectue toujours exactement n(n-1)/2 comparaisons indépendamment de l\'entrée — même sur un tableau déjà trié.',
                        ],
                    },
                    {
                        title: 'Complexité',
                        content: [
                            '• Temps : Θ(n²) dans tous les cas (meilleur, moyen, pire). La boucle interne s\'exécute toujours complètement.',
                            '• Espace : Θ(1) auxiliaire — tri en place.',
                            '• Échanges : au plus n-1 (meilleur que le tri à bulles).',
                            'Simple à implémenter mais dominé par le tri par insertion sur les données presque triées.',
                        ],
                    },
                ],
                codeExample: {
                    language: 'python',
                    caption: 'Tri par Sélection',
                    code: `def tri_selection(A):
    n = len(A)
    for i in range(n - 1):
        min_idx = i
        for j in range(i + 1, n):
            if A[j] < A[min_idx]:
                min_idx = j
        A[i], A[min_idx] = A[min_idx], A[i]`,
                },
            },
            {
                id: 'insertion-sort',
                title: 'Tri par Insertion',
                content: [
                    'Construit le tableau trié un élément à la fois en insérant chaque nouvel élément à sa position correcte parmi ceux déjà triés.',
                ],
                subsections: [
                    {
                        title: 'Algorithme et Invariant',
                        content: [
                            'Invariant de boucle : après i itérations, A[0..i] est trié.',
                            'Chaque élément est décalé vers la gauche jusqu\'à trouver sa position correcte.',
                        ],
                    },
                    {
                        title: 'Complexité',
                        content: [
                            '• Meilleur cas : Ω(n) — déjà trié, seulement n-1 comparaisons.',
                            '• Pire cas : O(n²) — trié à l\'envers, chaque élément est décalé jusqu\'au bout.',
                            '• Cas moyen : Θ(n²).',
                            '• Espace : Θ(1) auxiliaire.',
                            'Excellent pour les petits tableaux ou les données presque triées. Utilisé comme sous-routine dans les tris hybrides (TimSort, IntroSort).',
                        ],
                    },
                ],
                table: {
                    headers: ['Algorithme', 'Meilleur', 'Moyen', 'Pire', 'Espace', 'Stable'],
                    rows: [
                        ['Tri Sélection', 'Θ(n²)', 'Θ(n²)', 'Θ(n²)', 'Θ(1)', 'Non'],
                        ['Tri Insertion', 'Θ(n)', 'Θ(n²)', 'Θ(n²)', 'Θ(1)', 'Oui'],
                        ['Tri Fusion', 'Θ(n log n)', 'Θ(n log n)', 'Θ(n log n)', 'Θ(n)', 'Oui'],
                        ['Tri Rapide', 'Θ(n log n)', 'Θ(n log n)', 'Θ(n²)', 'Θ(log n)', 'Non'],
                    ],
                },
            },
            {
                id: 'merge-sort',
                title: 'Tri Fusion (Merge Sort)',
                content: [
                    'Le Tri Fusion applique le paradigme "diviser pour régner" : on sépare le tableau en deux, on trie chaque moitié récursivement, puis on fusionne les deux moitiés triées.',
                ],
                subsections: [
                    {
                        title: 'Procédure de Fusion',
                        content: [
                            'Étant donné deux tableaux triés L et R, on produit un unique tableau trié en choisissant répétitivement le plus petit élément en tête.',
                            'Cette fusion coûte Θ(n) en temps et Θ(n) en espace auxiliaire — l\'inconvénient majeur de l\'algorithme.',
                        ],
                    },
                    {
                        title: 'Complexité par Récurrence',
                        content: [
                            'T(n) = 2·T(n/2) + Θ(n). D\'après le théorème maître (cas 2) : T(n) = Θ(n log n).',
                            'Cette complexité est valable dans tous les cas — le Tri Fusion est asymptotiquement optimal pour le tri par comparaison.',
                            'Il est stable (les éléments égaux conservent leur ordre relatif) mais pas en place : Θ(n) de mémoire supplémentaire est nécessaire pour l\'étape de fusion.',
                        ],
                    },
                ],
                codeExample: {
                    language: 'python',
                    caption: 'Tri Fusion',
                    code: `def tri_fusion(A):
    if len(A) <= 1:
        return A
    mid = len(A) // 2
    L = tri_fusion(A[:mid])
    R = tri_fusion(A[mid:])
    return fusion(L, R)

def fusion(L, R):
    resultat, i, j = [], 0, 0
    while i < len(L) and j < len(R):
        if L[i] <= R[j]:
            resultat.append(L[i]); i += 1
        else:
            resultat.append(R[j]); j += 1
    return resultat + L[i:] + R[j:]`,
                },
            },
            {
                id: 'quick-sort',
                title: 'Tri Rapide (Quick Sort)',
                content: [
                    'Le Tri Rapide partitionne le tableau autour d\'un pivot, en plaçant les éléments plus petits à sa gauche et les plus grands à sa droite, puis trie récursivement les deux sous-listes.',
                ],
                subsections: [
                    {
                        title: 'Choix du Pivot et Partitionnement',
                        content: [
                            'L\'étape clé est le partitionnement : réarranger A[lo..hi] de sorte que tous les éléments ≤ pivot viennent en premier, puis le pivot, puis les éléments > pivot.',
                            'Le choix du pivot affecte de manière critique les performances :',
                            '• Pivot fixe (premier ou dernier) : Θ(n²) sur des données triées/inversées.',
                            '• Pivot aléatoire : Espérance Θ(n log n) — élimine systématiquement les pires cas.',
                            '• Médiane de trois : Bonne heuristique en pratique.',
                        ],
                    },
                    {
                        title: 'Complexité',
                        content: [
                            '• Meilleur / moyen : Θ(n log n) — partitions équilibrées.',
                            '• Pire cas : Θ(n²) — une partition toujours vide (le pivot est le minimum ou maximum).',
                            '• Espace : Θ(log n) en moyenne (profondeur de la pile d\'appels) ; Θ(n) au pire.',
                            'Malgré son pire cas, le Tri Rapide est souvent plus rapide en pratique que le Tri Fusion grâce à une meilleure localité de cache et de plus petites constantes.',
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 'advanced-sorting',
        title: 'Tris Spécialisés : Sélection, Tri par Base et Algorithmes Hybrides',
        description: 'QuickSelect pour la recherche de rang, tri non-comparatif (Radix) et la borne théorique inférieure Ω(n log n)',
        sections: [
            {
                id: 'lower-bound',
                title: 'Borne Inférieure Théorique : Ω(n log n)',
                content: [
                    'Peut-on faire mieux que Θ(n log n) pour trier ? La réponse est non — pour les algorithmes basés sur des comparaisons.',
                ],
                subsections: [
                    {
                        title: 'Argument de l\'Arbre de Décision',
                        content: [
                            'Tout algorithme de tri par comparaison peut être modélisé comme un arbre de décision binaire : chaque nœud interne est une comparaison (A[i] ≤ A[j] ?), chaque feuille est une permutation.',
                            'Il y a n! ordres possibles pour n éléments, l\'arbre doit donc posséder au moins n! feuilles.',
                            'Un arbre binaire de hauteur h possède au plus 2ʰ feuilles, donc h ≥ log₂(n!).',
                            'Par l\'approximation de Stirling : log₂(n!) ≈ n log₂ n - n log₂ e = Θ(n log n).',
                            'Par conséquent, tout algorithme de tri par comparaison requiert au moins Ω(n log n) comparaisons dans le pire cas. Le tri fusion l\'atteint — il est donc optimal.',
                        ],
                    },
                ],
            },
            {
                id: 'quickselect',
                title: 'QuickSelect : Médiane et Élément de rang k',
                content: [
                    'Trouver la médiane (ou l\'élément de rang k) ne nécessite pas de trier tout le tableau. QuickSelect, une variante du Tri Rapide, permet d\'y parvenir en espérance de Θ(n).',
                ],
                subsections: [
                    {
                        title: 'Algorithme',
                        content: [
                            'Après avoir partitionné autour d\'un pivot p qui tombe à la position q :',
                            '• Si k == q : le pivot est le k-ième plus petit — on le retourne.',
                            '• Si k < q : on relance récursivement uniquement sur la partie gauche.',
                            '• Si k > q : on relance récursivement uniquement sur la partie droite.',
                            'Contrairement au Tri Rapide, UN SEUL appel récursif est effectué par étape.',
                        ],
                    },
                    {
                        title: 'Complexité',
                        content: [
                            '• Moyenne : Θ(n) avec un pivot aléatoire — la récurrence T(n) = T(n/2) + Θ(n) donne Θ(n).',
                            '• Pire cas : Θ(n²) — comme le Tri Rapide avec un très mauvais pivot.',
                            'Il existe un algorithme déterministe (médiane des médianes) garantissant Θ(n) dans le pire cas, mais avec des constantes trop lourdes en pratique.',
                        ],
                    },
                ],
            },
            {
                id: 'radix-sort',
                title: 'Tri par Base (Radix Sort) : Trier sans Comparer',
                content: [
                    'Le Tri par Base contourne la borne Ω(n log n) car ce n\'est pas un tri par comparaison. Il trie symbole par symbole en utilisant un tri comptage stable.',
                ],
                subsections: [
                    {
                        title: 'Algorithme',
                        content: [
                            'Pour n mots de longueur k sur un alphabet de taille σ :',
                            '1. Trier selon le symbole du poids faible au poids fort (LSD) avec un tri stable.',
                            '2. Trier par le chiffre suivant, en préservant l\'ordre précédent pour les éléments égaux.',
                            '3. Répéter pour les k symboles.',
                            'La stabilité du sous-tri est vitale : elle garantit que les égalités sur le chiffre actuel sont départagées selon l\'ordre des chiffres inférieurs.',
                        ],
                    },
                    {
                        title: 'Complexité',
                        content: [
                            '• Temps : Θ(k·(n + σ)) — k passes de coût Θ(n + σ) chacune.',
                            '• Espace : Θ(n + σ) auxiliaire.',
                            'Si k est constant (ex: entiers 32-bits = 4 octets), la complexité tombe à Θ(n) — l\'algorithme est linéaire !',
                            'Très efficace pour les adresses IP ou les chaînes de taille fixe, mais inutilisable sur des objets génériques ne pouvant être décomposés en base.',
                        ],
                    },
                ],
            },
            {
                id: 'hybrid-sorts',
                title: 'Généralisation : Tris Hybrides',
                content: [
                    'Les implémentations réelles des langages de programmation combinent plusieurs algorithmes pour tirer parti des forces de chacun.',
                ],
                subsections: [
                    {
                        title: 'Exemples Concrets',
                        content: [
                            '• IntroSort : Démarrage avec Quick Sort, bascule vers Heap Sort si la récursion dépasse 2·log₂(n) (pour esquiver le pire cas du QS), et utilise le Tri par Insertion pour les tous petits tableaux (n ≤ 16). Utilisé dans std::sort en C++.',
                            '• TimSort : Repère les séquences déjà triées ("runs") et les fusionne (inspiré du Tri Fusion), tout en utilisant l\'Insertion pour lisser de courtes séquences non-triées. Atteint Θ(n) sur des données semi-triées, et Θ(n log n) au pire. Utilisé en Python et Java.',
                            'L\'idée maîtresse : Aucun algorithme n\'est parfait partout. L\'hybridation concilie garanties théoriques et efficacité empirique.',
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 'permutations-geometry',
        title: 'Permutations, Génération Aléatoire et Géométrie',
        description: 'Structure des permutations, mélange de Knuth et applications des tris à des problèmes de géométrie algorithmique',
        sections: [
            {
                id: 'permutations',
                title: 'La Structure des Permutations',
                content: [
                    'Une permutation sur {1, …, n} est une bijection de cet ensemble vers lui-même. Trier revient fondamentalement à trouver la permutation inverse qui remet les éléments dans l\'ordre.',
                ],
                subsections: [
                    {
                        title: 'Transpositions',
                        content: [
                            'Toute permutation se décompose en un produit de transpositions (échanges de deux éléments).',
                            'C\'est l\'opération atomique au cœur de tous les tris sur place (Bulle, Sélection) : chaque "swap" dans le code correspond à une transposition.',
                        ],
                    },
                    {
                        title: 'Dénombrement et Borne Inférieure',
                        content: [
                            'Il existe n! permutations possibles sur un ensemble de n éléments.',
                            'Cette factorielle explose extrêmement vite (super-exponentiel). C\'est l\'existence de ces n! trajectoires possibles qui justifie la borne de complexité Ω(n log n) pour retrouver une unique solution ciblée par dichotomies successives.',
                        ],
                    },
                ],
            },
            {
                id: 'knuth-shuffle',
                title: 'Mélange de Knuth : Génération Aléatoire Uniforme',
                content: [
                    'Étant donné un tableau ordonné, comment générer une permutation aléatoire uniforme (chacune des n! possibilités étant équiprobable) en un temps linéaire ?',
                ],
                subsections: [
                    {
                        title: 'Algorithme de Fisher-Yates (Knuth)',
                        content: [
                            'Pour i allant de n-1 jusqu\'à 1 : choisir un entier j aléatoire dans {0, …, i}, et échanger A[i] avec A[j].',
                            'Cet algorithme "mime" à l\'envers un tri par sélection : on fixe aléatoirement qui se trouve tout à droite parmi les candidats restants, et ainsi de suite.',
                            'Complexité : Θ(n) — exactement n-1 échanges et appels au générateur aléatoire.',
                        ],
                    },
                    {
                        title: 'Preuve d\'Équiprobabilité',
                        content: [
                            'Démontrons que tout élément a 1/n chance de finir à n\'importe quelle position k.',
                            'À l\'étape n-1 : l\'élément A[x] a 1/n chance d\'être placé en dernière position.',
                            'À l\'étape n-2 : il lui restait (n-1)/n chance de survivre au premier tour, et 1/(n-1) chance d\'être pioché au second : (n-1)/n × 1/(n-1) = 1/n.',
                            'L\'équité se maintient de proche en proche : chaque trajectoire possède la probabilité exacte 1/n!.',
                        ],
                    },
                ],
                codeExample: {
                    language: 'python',
                    caption: 'Mélange de Knuth',
                    code: `import random

def knuth_shuffle(A):
    n = len(A)
    for i in range(n - 1, 0, -1):
        j = random.randint(0, i)   # j dans {0, ..., i}
        A[i], A[j] = A[j], A[i]
    return A`,
                },
            },
            {
                id: 'convex-hull',
                title: 'Enveloppe Convexe : Géométrie et Tri',
                content: [
                    'L\'enveloppe convexe d\'un nuage de points correspond au plus petit contour convexe englobant tous les points.',
                ],
                subsections: [
                    {
                        title: 'Algorithme Naïf : O(n³)',
                        content: [
                            'Pour vérifier qu\'un segment composé de deux points (A, B) appartient à l\'enveloppe, il faut s\'assurer que les n-2 autres points se trouvent tous du même côté de la droite (AB).',
                            'Il y a O(n²) paires de points, chacune nécessitant de tester O(n) points. Le coût total est Θ(n³). Impensable pour un grand dataset.',
                        ],
                    },
                    {
                        title: 'Parcours de Graham (Graham Scan) : Θ(n log n)',
                        content: [
                            '1. Trouver le point le plus bas p₀ (coordonnée Y minimum).',
                            '2. Trier les n-1 autres points selon l\'angle polaire par rapport à p₀. (L\'étape de tri coûte Θ(n log n)).',
                            '3. Empiler (push) les points un par un. Si les 3 derniers points empilés font un "virage à droite" (concavité), on dépile (pop) le pointeur du milieu, car il ne fait pas partie de l\'enveloppe.',
                            '4. La pile finale contient l\'enveloppe convexe.',
                            'L\'étape d\'empilement coûte Θ(n) : un point est empilé une fois, dépilé au plus une fois.',
                            'Le coût total de ce "balayage" est Θ(n log n).',
                        ],
                    },
                    {
                        title: 'Pourquoi le Tri débloque la Géométrie',
                        content: [
                            'Le parcours de Graham illustre un secret fondamental de l\'algorithmique : un problème difficile (O(n³)) devient facile à traiter (balayage linéaire) EN TRIANT préalablement les éléments.',
                            'Le tri exploite l\'ordre imposé par les coordonnées ou les angles pour ne traiter des interactions qu\'avec le strict voisinage local, réduisant considérablement l\'espace de recherche.',
                        ],
                    },
                ],
                table: {
                    headers: ['Algorithme', 'Complexité', 'Description / Goulot d\'étranglement'],
                    rows: [
                        ['Naïf', 'Θ(n³)', 'Vérification de toutes les paires contre tous les autres points'],
                        ['Parcours de Graham', 'Θ(n log n)', 'Tri d\'angle polaire (goulot direct) puis balayage avec pile en Θ(n)'],
                        ['Marche de Jarvis', 'Θ(h·n) où h = taille d\'env.', 'Emballage de cadeaux (pseudo-tri sélection angulaire)'],
                    ],
                },
            },
        ],
    },
];
