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
];
