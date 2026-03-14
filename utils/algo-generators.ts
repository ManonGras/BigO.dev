import { VizStep } from '../types';
import { Translations } from '../locales/types';

export const generateBubbleSortSteps = (initialArray: number[], t: Translations): VizStep[] => {
    const steps: VizStep[] = [];
    const arr = [...initialArray];
    const n = arr.length;
    let comparisons = 0;
    let swaps = 0;

    // Initial step
    steps.push({
        array: [...arr],
        comparing: [],
        swapping: [],
        sorted: [],
        currentLine: 0,
        message: t.visualizer.startBubbleSort,
        stats: { comparisons, swaps }
    });

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            comparisons++;
            steps.push({
                array: [...arr],
                comparing: [j, j + 1],
                swapping: [],
                sorted: steps[steps.length - 1].sorted,
                currentLine: 3,
                message: t.visualizer.comparing.replace('{0}', arr[j].toString()).replace('{1}', arr[j + 1].toString()),
                stats: { comparisons, swaps }
            });

            if (arr[j] > arr[j + 1]) {
                swaps++;
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                steps.push({
                    array: [...arr],
                    comparing: [],
                    swapping: [j, j + 1],
                    sorted: steps[steps.length - 1].sorted,
                    currentLine: 4,
                    message: t.visualizer.swapping.replace('{0}', arr[j + 1].toString()).replace('{1}', arr[j].toString()),
                    stats: { comparisons, swaps }
                });
            }
        }
        const currentlySorted = steps[steps.length - 1].sorted;
        steps.push({
            array: [...arr],
            comparing: [],
            swapping: [],
            sorted: [...currentlySorted, n - i - 1],
            currentLine: 2,
            message: t.visualizer.sorted.replace('{0}', (n - i - 1).toString()),
            stats: { comparisons, swaps }
        });
    }
    // Mark all as sorted explicitly at the end
    steps.push({
        array: [...arr],
        comparing: [],
        swapping: [],
        sorted: Array.from({ length: n }, (_, i) => i),
        currentLine: 0,
        message: "Done",
        stats: { comparisons, swaps }
    });

    return steps;
};

export const generateSelectionSortSteps = (initialArray: number[], t: Translations): VizStep[] => {
    const steps: VizStep[] = [];
    const arr = [...initialArray];
    const n = arr.length;
    let comparisons = 0;
    let swaps = 0;

    steps.push({
        array: [...arr],
        comparing: [],
        swapping: [],
        sorted: [],
        currentLine: 0,
        message: t.visualizer.startSelectionSort,
        stats: { comparisons, swaps }
    });

    for (let i = 0; i < n; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            comparisons++;
            steps.push({
                array: [...arr],
                comparing: [minIdx, j],
                swapping: [],
                sorted: Array.from({ length: i }, (_, k) => k),
                currentLine: 4,
                message: t.visualizer.comparing.replace('{0}', arr[minIdx].toString()).replace('{1}', arr[j].toString()),
                stats: { comparisons, swaps }
            });

            if (arr[j] < arr[minIdx]) {
                minIdx = j;
                steps.push({
                    array: [...arr],
                    comparing: [minIdx],
                    swapping: [],
                    sorted: Array.from({ length: i }, (_, k) => k),
                    currentLine: 5, // Assuming pseudocode line for new min
                    message: t.visualizer.minFound.replace('{0}', arr[minIdx].toString()),
                    stats: { comparisons, swaps }
                });
            }
        }

        if (minIdx !== i) {
            swaps++;
            [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
            steps.push({
                array: [...arr],
                comparing: [],
                swapping: [i, minIdx],
                sorted: Array.from({ length: i }, (_, k) => k),
                currentLine: 7,
                message: t.visualizer.swapping.replace('{0}', arr[i].toString()).replace('{1}', arr[minIdx].toString()),
                stats: { comparisons, swaps }
            });
        }

        steps.push({
            array: [...arr],
            comparing: [],
            swapping: [],
            sorted: Array.from({ length: i + 1 }, (_, k) => k),
            currentLine: 2,
            message: t.visualizer.sorted.replace('{0}', i.toString()),
            stats: { comparisons, swaps }
        });
    }

    return steps;
};

export const generateInsertionSortSteps = (initialArray: number[], t: Translations): VizStep[] => {
    const steps: VizStep[] = [];
    const arr = [...initialArray];
    const n = arr.length;
    let comparisons = 0;
    let swaps = 0; // Using swaps to count shifts/writes

    steps.push({
        array: [...arr],
        comparing: [],
        swapping: [],
        sorted: [],
        currentLine: 0,
        message: t.visualizer.startInsertionSort,
        stats: { comparisons, swaps }
    });

    // First element is implicitly sorted
    steps.push({
        array: [...arr],
        comparing: [],
        swapping: [],
        sorted: [0],
        currentLine: 2,
        message: "Element at index 0 is trivially sorted",
        stats: { comparisons, swaps }
    });

    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;

        steps.push({
            array: [...arr],
            comparing: [i],
            swapping: [],
            sorted: Array.from({ length: i }, (_, k) => k),
            currentLine: 3,
            message: t.visualizer.inserting.replace('{0}', key.toString()).replace('{1}', i.toString()),
            stats: { comparisons, swaps }
        });

        while (j >= 0 && arr[j] > key) {
            comparisons++;
            steps.push({
                array: [...arr],
                comparing: [j, j + 1],
                swapping: [],
                sorted: Array.from({ length: i }, (_, k) => k),
                currentLine: 5,
                message: t.visualizer.comparing.replace('{0}', arr[j].toString()).replace('{1}', key.toString()),
                stats: { comparisons, swaps }
            });

            arr[j + 1] = arr[j];
            swaps++; // Shifts count as writes

            steps.push({
                array: [...arr],
                comparing: [],
                swapping: [j, j + 1], // visualize shift as swap/highlight
                sorted: Array.from({ length: i }, (_, k) => k),
                currentLine: 6,
                message: t.visualizer.shifting.replace('{0}', arr[j].toString()),
                stats: { comparisons, swaps }
            });

            j--;
        }
        // Final check failed (j < 0 or arr[j] <= key), still counts as comparison logically if j >= 0
        if (j >= 0) comparisons++;

        arr[j + 1] = key;
        steps.push({
            array: [...arr],
            comparing: [],
            swapping: [j + 1],
            sorted: Array.from({ length: i + 1 }, (_, k) => k),
            currentLine: 8,
            message: "Inserted " + key + " at position " + (j + 1),
            stats: { comparisons, swaps }
        });
    }

    // Final done step
    steps.push({
        array: [...arr],
        comparing: [],
        swapping: [],
        sorted: Array.from({ length: n }, (_, k) => k),
        currentLine: 0,
        message: "Done",
        stats: { comparisons, swaps }
    });

    return steps;
};

export const generateMergeSortSteps = (initialArray: number[], t: Translations): VizStep[] => {
    const steps: VizStep[] = [];
    let arr = [...initialArray];
    const n = arr.length;
    let comparisons = 0;
    let swaps = 0;

    steps.push({
        array: [...arr],
        comparing: [],
        swapping: [],
        sorted: [],
        currentLine: 0,
        message: t.visualizer.startMergeSort,
        stats: { comparisons, swaps }
    });

    const merge = (start: number, mid: number, end: number) => {
        const leftArr = arr.slice(start, mid + 1);
        const rightArr = arr.slice(mid + 1, end + 1);
        let i = 0, j = 0, k = start;

        steps.push({
            array: [...arr],
            comparing: Array.from({ length: end - start + 1 }, (_, idx) => start + idx), // Highlight range
            swapping: [],
            sorted: [],
            currentLine: 0,
            message: t.visualizer.merging.replace('{0}', start.toString())
                .replace('{1}', mid.toString())
                .replace('{2}', (mid + 1).toString())
                .replace('{3}', end.toString()),
            stats: { comparisons, swaps }
        });

        while (i < leftArr.length && j < rightArr.length) {
            comparisons++;
            // Visualize comparison
            // Hard to visualize distinct indices in AUX array. 
            // We just highlight the range in main array being worked on.

            if (leftArr[i] <= rightArr[j]) {
                arr[k] = leftArr[i];
                i++;
            } else {
                arr[k] = rightArr[j];
                j++;
            }
            swaps++; // Write

            steps.push({
                array: [...arr],
                comparing: [k],
                swapping: [k],
                sorted: [],
                currentLine: 0,
                message: "Overwrite index " + k,
                stats: { comparisons, swaps }
            });
            k++;
        }

        while (i < leftArr.length) {
            arr[k] = leftArr[i];
            i++; k++; swaps++;
            steps.push({
                array: [...arr],
                comparing: [],
                swapping: [k - 1],
                sorted: [],
                currentLine: 0,
                message: "Flushing remaining left",
                stats: { comparisons, swaps }
            });
        }
        while (j < rightArr.length) {
            arr[k] = rightArr[j];
            j++; k++; swaps++;
            steps.push({
                array: [...arr],
                comparing: [],
                swapping: [k - 1],
                sorted: [],
                currentLine: 0,
                message: "Flushing remaining right",
                stats: { comparisons, swaps }
            });
        }
    };

    const mergeSort = (start: number, end: number) => {
        if (start >= end) return;
        const mid = Math.floor((start + end) / 2);
        mergeSort(start, mid);
        mergeSort(mid + 1, end);
        merge(start, mid, end);
    };

    mergeSort(0, n - 1);

    steps.push({
        array: [...arr],
        comparing: [],
        swapping: [],
        sorted: Array.from({ length: n }, (_, k) => k),
        currentLine: 0,
        message: "Done",
        stats: { comparisons, swaps }
    });

    return steps;
};

export const generateQuickSortSteps = (initialArray: number[], t: Translations): VizStep[] => {
    const steps: VizStep[] = [];
    let arr = [...initialArray];
    const n = arr.length;
    let comparisons = 0;
    let swaps = 0;

    steps.push({
        array: [...arr],
        comparing: [],
        swapping: [],
        sorted: [],
        currentLine: 0,
        message: t.visualizer.startQuickSort,
        stats: { comparisons, swaps }
    });

    const partition = (low: number, high: number): number => {
        let pivot = arr[high];
        let i = low - 1;

        steps.push({
            array: [...arr],
            comparing: [high],
            swapping: [],
            sorted: [],
            currentLine: 0,
            message: t.visualizer.pivotPicked.replace('{0}', pivot.toString()),
            stats: { comparisons, swaps }
        });

        for (let j = low; j < high; j++) {
            comparisons++;
            steps.push({
                array: [...arr],
                comparing: [j, high],
                swapping: [],
                sorted: [],
                currentLine: 0,
                message: t.visualizer.comparing.replace('{0}', arr[j].toString()).replace('{1}', pivot.toString()),
                stats: { comparisons, swaps }
            });

            if (arr[j] < pivot) {
                i++;
                swaps++;
                [arr[i], arr[j]] = [arr[j], arr[i]];
                steps.push({
                    array: [...arr],
                    comparing: [],
                    swapping: [i, j],
                    sorted: [],
                    currentLine: 0,
                    message: t.visualizer.swapping.replace('{0}', arr[i].toString()).replace('{1}', arr[j].toString()),
                    stats: { comparisons, swaps }
                });
            }
        }
        swaps++;
        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
        steps.push({
            array: [...arr],
            comparing: [],
            swapping: [i + 1, high],
            sorted: [],
            currentLine: 0,
            message: "Placing pivot in correct position",
            stats: { comparisons, swaps }
        });

        return i + 1;
    };

    const quickSort = (low: number, high: number) => {
        if (low < high) {
            let pi = partition(low, high);

            steps.push({
                array: [...arr],
                comparing: [],
                swapping: [],
                sorted: [pi], // At least pivot is sorted
                currentLine: 0,
                message: t.visualizer.sorted.replace('{0}', pi.toString()),
                stats: { comparisons, swaps }
            });

            quickSort(low, pi - 1);
            quickSort(pi + 1, high);
        }
    };

    quickSort(0, n - 1);

    steps.push({
        array: [...arr],
        comparing: [],
        swapping: [],
        sorted: Array.from({ length: n }, (_, k) => k),
        currentLine: 0,
        message: "Done",
        stats: { comparisons, swaps }
    });

    return steps;
};

export const generateBinarySearchSteps = (initialArray: number[], t: Translations, targetValue?: number): VizStep[] => {
    const steps: VizStep[] = [];
    // Binary Search requires sorted array
    const arr = [...initialArray].sort((a, b) => a - b);
    const n = arr.length;
    let comparisons = 0;
    let swaps = 0;

    // Pick target: use provided value or random from array
    const target = targetValue !== undefined
        ? targetValue
        : (Math.random() > 0.3 ? arr[Math.floor(Math.random() * n)] : Math.floor(Math.random() * 100));

    steps.push({
        array: [...arr],
        comparing: [],
        swapping: [], // Use swapping to indicate mid
        sorted: [], // Use sorted to indicate found
        currentLine: 0,
        message: t.visualizer.startBinarySearch + " " + t.visualizer.binarySearchTarget.replace('{0}', target.toString()),
        stats: { comparisons, swaps }
    });

    let left = 0;
    let right = n - 1;
    let found = false;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        comparisons++;

        steps.push({
            array: [...arr],
            comparing: [left, right], // Highlight Range
            swapping: [mid], // Highlight Mid
            sorted: [],
            currentLine: 3,
            message: t.visualizer.checkingRange
                .replace('{0}', left.toString())
                .replace('{1}', right.toString())
                .replace('{2}', mid.toString()) +
                ` (Val: ${arr[mid]}, Target: ${target})`,
            stats: { comparisons, swaps }
        });

        if (arr[mid] === target) {
            steps.push({
                array: [...arr],
                comparing: [],
                swapping: [],
                sorted: [mid],
                currentLine: 4,
                message: t.visualizer.binarySearchFound.replace('{0}', target.toString()).replace('{1}', mid.toString()),
                stats: { comparisons, swaps }
            });
            found = true;
            break;
        }

        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    if (!found) {
        steps.push({
            array: [...arr],
            comparing: [],
            swapping: [],
            sorted: [],
            currentLine: 7,
            message: t.visualizer.binarySearchNotFound.replace('{0}', target.toString()),
            stats: { comparisons, swaps }
        });
    }

    return steps;
};

export const generateHeapSortSteps = (initialArray: number[], t: Translations): VizStep[] => {
    const steps: VizStep[] = [];
    const arr = [...initialArray];
    const n = arr.length;
    let comparisons = 0;
    let swaps = 0;

    steps.push({
        array: [...arr],
        comparing: [],
        swapping: [],
        sorted: [],
        currentLine: 0,
        message: t.visualizer.startHeapSort,
        stats: { comparisons, swaps }
    });

    const heapify = (n: number, i: number) => {
        let largest = i;
        let l = 2 * i + 1;
        let r = 2 * i + 2;

        steps.push({
            array: [...arr],
            comparing: [i], // highlight root
            swapping: [],
            sorted: steps.length > 0 ? steps[steps.length - 1].sorted : [],
            currentLine: 2, // assume calling heapify line
            message: t.visualizer.heapifying.replace('{0}', i.toString()),
            stats: { comparisons, swaps }
        });

        if (l < n) {
            comparisons++;
            if (arr[l] > arr[largest]) largest = l;
        }

        if (r < n) {
            comparisons++;
            if (arr[r] > arr[largest]) largest = r;
        }

        if (largest !== i) {
            swaps++;
            [arr[i], arr[largest]] = [arr[largest], arr[i]];

            steps.push({
                array: [...arr],
                comparing: [],
                swapping: [i, largest],
                sorted: steps.length > 0 ? steps[steps.length - 1].sorted : [],
                currentLine: 0,
                message: t.visualizer.swapping.replace('{0}', arr[i].toString()).replace('{1}', arr[largest].toString()),
                stats: { comparisons, swaps }
            });

            heapify(n, largest);
        }
    };

    // Build heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(n, i);
    }

    steps.push({
        array: [...arr],
        comparing: [],
        swapping: [],
        sorted: [],
        currentLine: 0,
        message: t.visualizer.heapBuilt,
        stats: { comparisons, swaps }
    });

    // Extract
    for (let i = n - 1; i > 0; i--) {
        steps.push({
            array: [...arr],
            comparing: [0],
            swapping: [],
            sorted: Array.from({ length: n - i - 1 }, (_, k) => n - 1 - k),
            currentLine: 4,
            message: t.visualizer.extractingMax.replace('{0}', arr[0].toString()),
            stats: { comparisons, swaps }
        });

        swaps++;
        [arr[0], arr[i]] = [arr[i], arr[0]];

        steps.push({
            array: [...arr],
            comparing: [],
            swapping: [0, i],
            sorted: Array.from({ length: n - i }, (_, k) => n - 1 - k), // i is now sorted
            currentLine: 5,
            message: t.visualizer.sorted.replace('{0}', i.toString()),
            stats: { comparisons, swaps }
        });

        heapify(i, 0);
    }

    steps.push({
        array: [...arr],
        comparing: [],
        swapping: [],
        sorted: Array.from({ length: n }, (_, k) => k),
        currentLine: 0,
        message: "Done",
        stats: { comparisons, swaps }
    });

    return steps;
};

// Simple BST Node class for visualization logic only
import { TreeNode, LinkedListNode } from '../types';

export const generateBSTInsertionSteps = (inputArray: number[], t: Translations): VizStep[] => {
    const steps: VizStep[] = [];

    let currentTree: TreeNode | undefined = undefined;
    let comparisons = 0;

    // Helper to clone tree (deep copy) for immutability in steps
    const cloneTree = (node?: TreeNode): TreeNode | undefined => {
        if (!node) return undefined;
        return {
            ...node,
            left: cloneTree(node.left),
            right: cloneTree(node.right)
        };
    };

    const insertVal = (val: number) => {
        if (!currentTree) {
            currentTree = { id: 'root', value: val, x: 50, y: 10 };
            steps.push({
                array: [], // Not used for tree
                tree: cloneTree(currentTree),
                comparing: [],
                swapping: [],
                sorted: [],
                currentLine: 1,
                message: t.visualizer.nodeInserted.replace('{0}', val.toString()),
                stats: { comparisons, swaps: 0 }
            });
            return;
        }

        let curr: TreeNode = currentTree;
        // We need to traverse to find spot
        let level = 0;
        let x = 50;
        let dx = 25; // initial delta X

        while (true) {

            steps.push({
                array: [],
                tree: cloneTree(currentTree),
                comparing: [],
                swapping: [],
                sorted: [],
                currentLine: 3,
                message: t.visualizer.comparing.replace('{0}', val.toString()).replace('{1}', curr.value.toString()),
                stats: { comparisons, swaps: 0 }
            });

            comparisons++;

            if (val < curr.value) {
                if (!curr.left) {
                    curr.left = { id: Math.random().toString(), value: val, x: x - dx, y: 10 + (level + 1) * 15 };
                    steps.push({
                        array: [],
                        tree: cloneTree(currentTree),
                        comparing: [],
                        swapping: [],
                        sorted: [],
                        currentLine: 4,
                        message: t.visualizer.nodeInserted.replace('{0}', val.toString()),
                        stats: { comparisons, swaps: 0 }
                    });
                    break;
                }
                curr = curr.left;
                x -= dx;
            } else {
                if (!curr.right) {
                    curr.right = { id: Math.random().toString(), value: val, x: x + dx, y: 10 + (level + 1) * 15 };
                    steps.push({
                        array: [],
                        tree: cloneTree(currentTree),
                        comparing: [],
                        swapping: [],
                        sorted: [],
                        currentLine: 6,
                        message: t.visualizer.nodeInserted.replace('{0}', val.toString()),
                        stats: { comparisons, swaps: 0 }
                    });
                    break;
                }
                curr = curr.right;
                x += dx;
            }
            level++;
            dx /= 2;
        }
    };

    steps.push({
        array: [],
        tree: undefined,
        comparing: [],
        swapping: [],
        sorted: [],
        currentLine: 0,
        message: t.visualizer.startBSTInsert,
        stats: { comparisons, swaps: 0 }
    });

    inputArray.forEach(val => {
        insertVal(val);
    });

    return steps;
}

export const generateSinglyLinkedListSteps = (inputArray: number[], t: Translations): VizStep[] => {
    const steps: VizStep[] = [];
    let head: LinkedListNode | undefined = undefined;

    // Helper to clone list (Singly)
    const cloneList = (node?: LinkedListNode): LinkedListNode | undefined => {
        if (!node) return undefined;
        const newNode: LinkedListNode = { ...node };
        if (node.next) newNode.next = cloneList(node.next);
        return newNode;
    };

    const updatePositions = (node?: LinkedListNode) => {
        let curr = node;
        let idx = 0;
        while (curr) {
            curr.x = 10 + idx * 13;
            curr.y = 50;
            curr = curr.next;
            idx++;
        }
    };

    steps.push({
        array: [],
        linkedList: undefined,
        comparing: [],
        swapping: [],
        sorted: [],
        currentLine: 0,
        message: t.visualizer.startLinkedList,
        stats: { comparisons: 0, swaps: 0 }
    });

    inputArray.forEach((val) => {
        // Create
        steps.push({
            array: [],
            linkedList: cloneList(head),
            comparing: [],
            swapping: [],
            sorted: [],
            currentLine: 2,
            message: `Creating Node(${val})`,
            stats: { comparisons: 0, swaps: 0 }
        });

        // Insert Head
        const newNode: LinkedListNode = { id: Math.random().toString(), value: val };
        newNode.next = head;
        head = newNode;

        updatePositions(head);

        steps.push({
            array: [],
            linkedList: cloneList(head),
            comparing: [],
            swapping: [],
            sorted: [],
            currentLine: 3,
            message: t.visualizer.linkedListInsert.replace('{0}', val.toString()),
            stats: { comparisons: 0, swaps: 0 }
        });
    });

    return steps;
};

export const generateDoublyLinkedListSteps = (inputArray: number[], t: Translations): VizStep[] => {
    const steps: VizStep[] = [];
    let head: LinkedListNode | undefined = undefined;

    // Helper to clone list (Doubly)
    const cloneList = (node?: LinkedListNode): LinkedListNode | undefined => {
        if (!node) return undefined;
        const headCopy: LinkedListNode = { ...node, prev: undefined, next: undefined };
        let currSrc = node.next;
        let currDest = headCopy;

        while (currSrc) {
            const newNext: LinkedListNode = { ...currSrc, prev: currDest.id as any, next: undefined }; // Store ID or circular ref? Types say LinkedListNode.
            // Avoid circular JSON structure if we strictly follow deep clone, but for React rendering we pass object.    
            // Actually, we can just link object references.
            newNext.prev = currDest;
            currDest.next = newNext;

            currDest = newNext;
            currSrc = currSrc.next;
        }
        return headCopy;
    };

    const updatePositions = (node?: LinkedListNode) => {
        let curr = node;
        let idx = 0;
        while (curr) {
            curr.x = 10 + idx * 13;
            curr.y = 50;
            curr = curr.next;
            idx++;
        }
    };

    steps.push({
        array: [],
        linkedList: undefined,
        comparing: [],
        swapping: [],
        sorted: [],
        currentLine: 0,
        message: t.visualizer.startLinkedList,
        stats: { comparisons: 0, swaps: 0 }
    });

    inputArray.forEach((val) => {
        const newNode: LinkedListNode = { id: Math.random().toString(), value: val };

        steps.push({
            array: [],
            linkedList: cloneList(head),
            comparing: [],
            swapping: [],
            sorted: [],
            currentLine: 2,
            message: `Creating Node(${val})`,
            stats: { comparisons: 0, swaps: 0 }
        });

        newNode.next = head;
        if (head) head.prev = newNode;
        head = newNode;

        updatePositions(head);

        steps.push({
            array: [],
            linkedList: cloneList(head),
            comparing: [],
            swapping: [],
            sorted: [],
            currentLine: 3,
            message: t.visualizer.linkedListInsert.replace('{0}', val.toString()),
            stats: { comparisons: 0, swaps: 0 }
        });
    });

    return steps;
};

export const generateSinglyLinkedListSearchSteps = (inputArray: number[], t: Translations, targetValue?: number): VizStep[] => {
    const steps: VizStep[] = [];
    let head: LinkedListNode | undefined = undefined;

    // Helper to clone list
    const cloneList = (node?: LinkedListNode): LinkedListNode | undefined => {
        if (!node) return undefined;
        const newNode: LinkedListNode = { ...node };
        if (node.next) newNode.next = cloneList(node.next);
        return newNode;
    };

    const updatePositions = (node?: LinkedListNode) => {
        let curr = node;
        let idx = 0;
        while (curr) {
            curr.x = 10 + idx * 13;
            curr.y = 50;
            curr = curr.next;
            idx++;
        }
    };

    // Construct List
    inputArray.forEach(val => {
        const newNode: LinkedListNode = { id: Math.random().toString(), value: val };
        newNode.next = head;
        head = newNode;
    });
    updatePositions(head);

    // Pick Target 
    const target = targetValue !== undefined ? targetValue : inputArray[Math.floor(Math.random() * inputArray.length)];

    steps.push({
        array: [],
        linkedList: cloneList(head),
        comparing: [],
        swapping: [],
        sorted: [],
        currentLine: 0,
        message: t.visualizer.startLinkedList + ` (${t.visualizer.linkedListSearch.replace('{0}', target.toString())})`,
        stats: { comparisons: 0, swaps: 0 }
    });

    let found = false;
    let stepCurr = head;
    while (stepCurr) {
        stepCurr.isCurrent = true;

        steps.push({
            array: [],
            linkedList: cloneList(head),
            comparing: [],
            swapping: [],
            sorted: [],
            currentLine: 0,
            message: t.visualizer.currNode.replace('{0}', stepCurr.value.toString()),
            stats: { comparisons: 0, swaps: 0 }
        });

        if (stepCurr.value === target) {
            stepCurr.isTarget = true;
            stepCurr.isCurrent = false;
            found = true;
            steps.push({
                array: [],
                linkedList: cloneList(head),
                comparing: [],
                swapping: [],
                sorted: [],
                currentLine: 0,
                message: t.visualizer.nodeFound.replace('{0}', target.toString()),
                stats: { comparisons: 0, swaps: 0 }
            });
            break;
        }

        stepCurr.isCurrent = false; // Reset
        stepCurr = stepCurr.next;
    }

    if (!found) {
        steps.push({
            array: [],
            linkedList: cloneList(head),
            comparing: [],
            swapping: [],
            sorted: [],
            currentLine: 0,
            message: t.visualizer.nodeNotFound.replace('{0}', target.toString()),
            stats: { comparisons: 0, swaps: 0 }
        });
    }

    return steps;
};

export const generateSinglyLinkedListDeleteSteps = (inputArray: number[], t: Translations, targetValue?: number): VizStep[] => {
    const steps: VizStep[] = [];
    let head: LinkedListNode | undefined = undefined;

    // Construct List
    inputArray.forEach(val => {
        const newNode: LinkedListNode = { id: Math.random().toString(), value: val };
        newNode.next = head;
        head = newNode;
    });

    const updatePositions = (node?: LinkedListNode) => {
        let curr = node;
        let idx = 0;
        while (curr) {
            curr.x = 10 + idx * 13;
            curr.y = 50;
            curr = curr.next;
            idx++;
        }
    };
    updatePositions(head);

    const cloneList = (node?: LinkedListNode): LinkedListNode | undefined => {
        if (!node) return undefined;
        const newNode: LinkedListNode = { ...node };
        if (node.next) newNode.next = cloneList(node.next);
        return newNode;
    };

    // Pick Target to Delete
    const target = targetValue !== undefined ? targetValue : inputArray[Math.floor(Math.random() * inputArray.length)];

    steps.push({
        array: [],
        linkedList: cloneList(head),
        comparing: [],
        swapping: [],
        sorted: [],
        currentLine: 0,
        message: t.visualizer.startLinkedList + ` (${t.visualizer.linkedListDelete.replace('{0}', target.toString())})`,
        stats: { comparisons: 0, swaps: 0 }
    });

    if (!head) return steps;

    // Case: Head is target
    if (head.value === target) {
        head.isTarget = true;
        steps.push({
            array: [],
            linkedList: cloneList(head),
            comparing: [],
            swapping: [],
            sorted: [],
            currentLine: 0,
            message: t.visualizer.nodeFound.replace('{0}', target.toString()) + ". Deleting Head.",
            stats: { comparisons: 1, swaps: 0 }
        });

        head = head.next;
        updatePositions(head);

        steps.push({
            array: [],
            linkedList: cloneList(head),
            comparing: [],
            swapping: [],
            sorted: [],
            currentLine: 0,
            message: "Head Deleted.",
            stats: { comparisons: 1, swaps: 1 }
        });
        return steps;
    }

    let curr: LinkedListNode | undefined = head;
    let prev: LinkedListNode | undefined = undefined;

    while (curr && curr.value !== target) {
        curr.isCurrent = true;

        steps.push({
            array: [],
            linkedList: cloneList(head),
            comparing: [],
            swapping: [],
            sorted: [],
            currentLine: 0,
            message: t.visualizer.currNode.replace('{0}', curr.value.toString()),
            stats: { comparisons: 0, swaps: 0 }
        });

        curr.isCurrent = false;
        prev = curr;
        curr = curr.next;
    }

    if (curr && curr.value === target) {
        curr.isTarget = true;
        steps.push({
            array: [],
            linkedList: cloneList(head),
            comparing: [],
            swapping: [],
            sorted: [],
            currentLine: 0,
            message: t.visualizer.nodeFound.replace('{0}', target.toString()),
            stats: { comparisons: 0, swaps: 0 }
        });

        // Delete
        if (prev) {
            prev.next = curr.next;
            updatePositions(head);
            steps.push({
                array: [],
                linkedList: cloneList(head),
                comparing: [],
                swapping: [],
                sorted: [],
                currentLine: 0,
                message: "Node Deleted. Links updated.",
                stats: { comparisons: 0, swaps: 1 }
            });
        }
    } else {
        steps.push({
            array: [],
            linkedList: cloneList(head),
            comparing: [],
            swapping: [],
            sorted: [],
            currentLine: 0,
            message: t.visualizer.nodeNotFound.replace('{0}', target.toString()),
            stats: { comparisons: 0, swaps: 0 }
        });
    }

    return steps;
};

export const generateBinaryExponentiationSteps = (data: number[], t: Translations, targetValue?: number): VizStep[] => {
    const steps: VizStep[] = [];
    const base = Math.floor(Math.random() * 5) + 2; 
    const expValue = data.length > 5 ? data.length : 13; // use data length as exponent or default 13
    
    let exp = expValue;
    let b = base;
    let res = 1;

    let comparisons = 0;
    let swaps = 0; // represent multiplications

    steps.push({
        array: [],
        comparing: [],
        swapping: [],
        sorted: [],
        currentLine: 0,
        message: `Calculating ${base}^${expValue}`,
        stats: { comparisons, swaps },
        mathState: { base: b, exp, result: res, binaryExp: exp.toString(2) }
    });

    while (exp > 0) {
        comparisons++;
        steps.push({
            array: [],
            comparing: [],
            swapping: [],
            sorted: [],
            currentLine: 3,
            message: `Checking if exp (${exp}) is odd...`,
            stats: { comparisons, swaps },
            mathState: { base: b, exp, result: res, binaryExp: exp.toString(2) }
        });

        if (exp % 2 === 1) {
            swaps++;
            res = res * b;
            steps.push({
                array: [],
                comparing: [],
                swapping: [],
                sorted: [],
                currentLine: 5,
                message: `exp is odd! Multiplying result by ${b}. New result: ${res}`,
                stats: { comparisons, swaps },
                mathState: { base: b, exp, result: res, binaryExp: exp.toString(2) }
            });
        }

        swaps++;
        b = b * b;
        steps.push({
            array: [],
            comparing: [],
            swapping: [],
            sorted: [],
            currentLine: 6,
            message: `Squaring base. New base: ${b}`,
            stats: { comparisons, swaps },
            mathState: { base: b, exp, result: res, binaryExp: exp.toString(2) }
        });

        exp = Math.floor(exp / 2);
        steps.push({
            array: [],
            comparing: [],
            swapping: [],
            sorted: [],
            currentLine: 7,
            message: `Dividing exp by 2. New exp: ${exp}`,
            stats: { comparisons, swaps },
            mathState: { base: b, exp, result: res, binaryExp: exp.toString(2) }
        });
    }

    steps.push({
        array: [],
        comparing: [],
        swapping: [],
        sorted: [],
        currentLine: 8,
        message: `Done! Final result: ${res}`,
        stats: { comparisons, swaps },
        mathState: { base: b, exp, result: res, binaryExp: exp.toString(2) }
    });

    return steps;
};

export const generateGrahamScanSteps = (data: number[], t: Translations): VizStep[] => {
    const steps: VizStep[] = [];
    const n = Math.max(5, data.length);
    
    // Generate random points somewhat around center
    let points = Array.from({ length: n }, (_, i) => ({
        id: i.toString(),
        x: Math.floor(Math.random() * 80) + 10,
        y: Math.floor(Math.random() * 80) + 10
    }));

    let comparisons = 0;
    let swaps = 0;

    steps.push({
        array: [], comparing: [], swapping: [], sorted: [], currentLine: 0,
        message: "Generated random points",
        stats: { comparisons, swaps },
        points: [...points],
        hull: []
    });

    // Find lowest y
    let p0 = points.reduce((min, p) => p.y < min.y || (p.y === min.y && p.x < min.x) ? p : min, points[0]);
    comparisons += n;

    steps.push({
        array: [], comparing: [], swapping: [], sorted: [], currentLine: 1,
        message: `Found lowest point p0 = (${p0.x}, ${p0.y})`,
        stats: { comparisons, swaps },
        points: points.map(p => p.id === p0.id ? { ...p, isPivot: true } : p),
        hull: []
    });

    const polarAngle = (p1: typeof p0, p2: typeof p0) => Math.atan2(p2.y - p1.y, p2.x - p1.x);
    const ccw = (p1: typeof p0, p2: typeof p0, p3: typeof p0) => 
        (p2.x - p1.x) * (p3.y - p1.y) - (p2.y - p1.y) * (p3.x - p1.x);

    points.sort((a, b) => {
        if (a.id === p0.id) return -1;
        if (b.id === p0.id) return 1;
        let diff = polarAngle(p0, a) - polarAngle(p0, b);
        // if collinear, closest first
        if (Math.abs(diff) < 0.0001) {
            const d1 = (a.x - p0.x)**2 + (a.y - p0.y)**2;
            const d2 = (b.x - p0.x)**2 + (b.y - p0.y)**2;
            return d1 <= d2 ? -1 : 1;
        }
        return diff;
    });

    // remove collinear points from sorted array if needed (simplified)
    const sortedPoints = [...points];

    steps.push({
        array: [], comparing: [], swapping: [], sorted: [], currentLine: 2,
        message: "Sorted points by polar angle with p0",
        stats: { comparisons, swaps },
        points: sortedPoints.map(p => p.id === p0.id ? { ...p, isPivot: true } : p),
        hull: []
    });

    let stack = [sortedPoints[0], sortedPoints[1], sortedPoints[2]];

    steps.push({
        array: [], comparing: [], swapping: [], sorted: [], currentLine: 4,
        message: "Push first 3 points to stack",
        stats: { comparisons, swaps },
        points: sortedPoints.map(p => p.id === p0.id ? { ...p, isPivot: true } : p),
        hull: [...stack]
    });

    for (let i = 3; i < sortedPoints.length; i++) {
        let p = sortedPoints[i];

        steps.push({
            array: [], comparing: [], swapping: [], sorted: [], currentLine: 6,
            message: "Checking point next",
            stats: { comparisons, swaps },
            points: sortedPoints.map(pt => pt.id === p0.id ? { ...pt, isPivot: true } : (pt.id === p.id ? {...pt, isChecking: true} : pt)),
            hull: [...stack, p] // visualize attempt
        });
        
        comparisons++;
        while (stack.length > 1 && ccw(stack[stack.length - 2], stack[stack.length - 1], p) <= 0) {
            swaps++;
            stack.pop();
            
            steps.push({
                array: [], comparing: [], swapping: [], sorted: [], currentLine: 7,
                message: "Not counter-clockwise. Popping from stack.",
                stats: { comparisons, swaps },
                points: sortedPoints.map(pt => pt.id === p0.id ? { ...pt, isPivot: true } : (pt.id === p.id ? {...pt, isChecking: true} : pt)),
                hull: [...stack, p] // visualize current stack with attempt
            });
            comparisons++;
        }
        stack.push(p);
        
        steps.push({
            array: [], comparing: [], swapping: [], sorted: [], currentLine: 8,
            message: "Counter-clockwise turn. Pushed to stack.",
            stats: { comparisons, swaps },
            points: sortedPoints.map(pt => pt.id === p0.id ? { ...pt, isPivot: true } : pt),
            hull: [...stack]
        });
    }

    steps.push({
        array: [], comparing: [], swapping: [], sorted: [], currentLine: 9,
        message: "Convex Hull Completed!",
        stats: { comparisons, swaps },
        points: sortedPoints.map(p => {
            const inHull = stack.find(hp => hp.id === p.id);
            return inHull ? { ...p, isHull: true } : p;
        }),
        hull: [...stack, stack[0]] // close the hull visually
    });

    return steps;
};

export const generateJarvisMarchSteps = (data: number[], t: Translations): VizStep[] => {
    const steps: VizStep[] = [];
    const n = Math.max(5, data.length);
    
    // Generate random points somewhat around center
    let points = Array.from({ length: n }, (_, i) => ({
        id: i.toString(),
        x: Math.floor(Math.random() * 80) + 10,
        y: Math.floor(Math.random() * 80) + 10
    }));

    let comparisons = 0;
    let swaps = 0; // Number of "wrapping" updates

    steps.push({
        array: [], comparing: [], swapping: [], sorted: [], currentLine: 0,
        message: "Generated random points",
        stats: { comparisons, swaps },
        points: [...points],
        hull: []
    });

    // Find leftmost point p0
    let p0 = points.reduce((min, p) => p.x < min.x ? p : min, points[0]);
    comparisons += n;

    steps.push({
        array: [], comparing: [], swapping: [], sorted: [], currentLine: 1,
        message: `Found leftmost point p0 = (${p0.x}, ${p0.y})`,
        stats: { comparisons, swaps },
        points: points.map(p => p.id === p0.id ? { ...p, isPivot: true } : p),
        hull: []
    });

    const ccw = (p1: typeof p0, p2: typeof p0, p3: typeof p0) => 
        (p2.x - p1.x) * (p3.y - p1.y) - (p2.y - p1.y) * (p3.x - p1.x);

    let hull: typeof points = [];
    let p = p0;
    let q: typeof p0;

    let stepCount = 0;

    do {
        hull.push(p);
        
        steps.push({
            array: [], comparing: [], swapping: [], sorted: [], currentLine: 4,
            message: `Added point (${p.x}, ${p.y}) to hull`,
            stats: { comparisons, swaps },
            points: points.map(pt => pt.id === p.id ? { ...pt, isPivot: true } : pt),
            hull: [...hull]
        });

        q = points[0];

        for (let i = 1; i < n; i++) {
            steps.push({
                array: [], comparing: [], swapping: [], sorted: [], currentLine: 7,
                message: "Checking orientation with next candidate",
                stats: { comparisons, swaps },
                points: points.map(pt => pt.id === p.id ? { ...pt, isPivot: true } : (pt.id === points[i].id ? {...pt, isChecking: true} : pt)),
                hull: [...hull, q, points[i]] // Show lines to q and candidate
            });
            
            comparisons++;
            if (q.id === p.id || ccw(p, points[i], q) > 0) {
                swaps++;
                q = points[i];
                steps.push({
                    array: [], comparing: [], swapping: [], sorted: [], currentLine: 8,
                    message: `Found a more counter-clockwise point: (${q.x}, ${q.y})`,
                    stats: { comparisons, swaps },
                    points: points.map(pt => pt.id === p.id ? { ...pt, isPivot: true } : pt),
                    hull: [...hull, q] // Show line to new q
                });
            }
        }
        p = q;
        stepCount++;
        if(stepCount > n) break; // safegaurd against collinear loops

    } while (p.id !== p0.id);

    steps.push({
        array: [], comparing: [], swapping: [], sorted: [], currentLine: 11,
        message: "Jarvis March Completed!",
        stats: { comparisons, swaps },
        points: points.map(pt => {
            const inHull = hull.find(hp => hp.id === pt.id);
            return inHull ? { ...pt, isHull: true } : pt;
        }),
        hull: [...hull, hull[0]] // close the hull visually
    });

    return steps;
};
