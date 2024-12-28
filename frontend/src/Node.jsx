import './Node.css';
import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';

const Node = forwardRef(({ background, height, count }, ref) => {
    const [nodeHeights, setNodeHeights] = useState([]);
    const [blinkingIndices, setBlinkingIndices] = useState([]);

    useImperativeHandle(ref, () => ({
        sortBars(sortMode) {
            if (sortMode === "Bubble Sort") bubbleSort();
            else if (sortMode === "Merge Sort") mergeSort(0, nodeHeights.length - 1);
            else if (sortMode === "Heap Sort") heapSort();
            else if (sortMode === "Quick Sort") quickSort(0, nodeHeights.length - 1);
            else if (sortMode === "Counting Sort") countingSort();
            else if (sortMode === "Radix Sort") radixSort();
            else if (sortMode === "Bucket Sort") bucketSort();
        },
        randomizeBars() {
            generateRandomHeights();
        }
    }));

    // Function to introduce a delay
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Bubble Sort
    async function bubbleSort() {
        const heights = [...nodeHeights];
        for (let i = 0; i < heights.length - 1; i++) {
            for (let j = 0; j < heights.length - i - 1; j++) {
                if (parseInt(heights[j]) > parseInt(heights[j + 1])) {
                    setBlinkingIndices([j, j + 1]);
                    await delay(100);

                    // Swap
                    [heights[j], heights[j + 1]] = [heights[j + 1], heights[j]];
                    setNodeHeights([...heights]);

                    await delay(100);
                    setBlinkingIndices([]);
                }
            }
        }
    }

    // Merge Sort
    async function mergeSort(start, end) {
        if (start >= end) return;
        const mid = Math.floor((start + end) / 2);
        await mergeSort(start, mid);
        await mergeSort(mid + 1, end);
        await merge(start, mid, end);
    }

    async function merge(start, mid, end) {
        let left = nodeHeights.slice(start, mid + 1);
        let right = nodeHeights.slice(mid + 1, end + 1);
        let i = start;

        while (left.length && right.length) {
            nodeHeights[i] = parseInt(left[0]) <= parseInt(right[0]) ? left.shift() : right.shift();
            setNodeHeights([...nodeHeights]);
            setBlinkingIndices([i]);
            await delay(100);
            setBlinkingIndices([]);
            i++;
        }
        while (left.length) {
            nodeHeights[i++] = left.shift();
            setNodeHeights([...nodeHeights]);
            await delay(100);
        }
        while (right.length) {
            nodeHeights[i++] = right.shift();
            setNodeHeights([...nodeHeights]);
            await delay(100);
        }
    }

    // Heap Sort
    async function heapSort() {
        const n = nodeHeights.length;
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) await heapify(n, i);
        for (let i = n - 1; i > 0; i--) {
            [nodeHeights[0], nodeHeights[i]] = [nodeHeights[i], nodeHeights[0]];
            setNodeHeights([...nodeHeights]);
            setBlinkingIndices([0, i]);
            await delay(100);
            setBlinkingIndices([]);
            await heapify(i, 0);
        }
    }

    async function heapify(n, i) {
        let largest = i;
        const left = 2 * i + 1;
        const right = 2 * i + 2;

        if (left < n && parseInt(nodeHeights[left]) > parseInt(nodeHeights[largest])) largest = left;
        if (right < n && parseInt(nodeHeights[right]) > parseInt(nodeHeights[largest])) largest = right;

        if (largest !== i) {
            [nodeHeights[i], nodeHeights[largest]] = [nodeHeights[largest], nodeHeights[i]];
            setNodeHeights([...nodeHeights]);
            setBlinkingIndices([i, largest]);
            await delay(100);
            setBlinkingIndices([]);
            await heapify(n, largest);
        }
    }

    // Quick Sort
    async function quickSort(start, end) {
        if (start >= end) return;
        const pivotIndex = await partition(start, end);
        await quickSort(start, pivotIndex - 1);
        await quickSort(pivotIndex + 1, end);
    }

    async function partition(start, end) {
        const pivot = nodeHeights[end];
        let i = start;
        for (let j = start; j < end; j++) {
            if (parseInt(nodeHeights[j]) < parseInt(pivot)) {
                [nodeHeights[i], nodeHeights[j]] = [nodeHeights[j], nodeHeights[i]];
                setNodeHeights([...nodeHeights]);
                setBlinkingIndices([i, j]);
                await delay(100);
                setBlinkingIndices([]);
                i++;
            }
        }
        [nodeHeights[i], nodeHeights[end]] = [nodeHeights[end], nodeHeights[i]];
        setNodeHeights([...nodeHeights]);
        return i;
    }

    // Counting Sort
    async function countingSort() {
        const max = Math.max(...nodeHeights.map(h => parseInt(h)));
        const countArray = Array(max + 1).fill(0);
        for (let height of nodeHeights) countArray[parseInt(height)]++;
        let index = 0;
        for (let i = 0; i <= max; i++) {
            while (countArray[i] > 0) {
                nodeHeights[index] = `${i}%`;
                setNodeHeights([...nodeHeights]);
                setBlinkingIndices([index]);
                await delay(100);
                setBlinkingIndices([]);
                countArray[i]--;
                index++;
            }
        }
    }

    // Radix Sort
    async function radixSort() {
        let max = Math.max(...nodeHeights.map(h => parseInt(h)));
        let exp = 1;
        while (Math.floor(max / exp) > 0) {
            await countingSortForRadix(exp);
            exp *= 10;
        }
    }

    async function countingSortForRadix(exp) {
        const output = Array(nodeHeights.length).fill(0);
        const count = Array(10).fill(0);

        for (let i = 0; i < nodeHeights.length; i++) {
            const digit = Math.floor(parseInt(nodeHeights[i]) / exp) % 10;
            count[digit]++;
        }
        for (let i = 1; i < 10; i++) count[i] += count[i - 1];
        for (let i = nodeHeights.length - 1; i >= 0; i--) {
            const digit = Math.floor(parseInt(nodeHeights[i]) / exp) % 10;
            output[--count[digit]] = nodeHeights[i];
        }
        for (let i = 0; i < nodeHeights.length; i++) {
            nodeHeights[i] = output[i];
            setNodeHeights([...nodeHeights]);
            setBlinkingIndices([i]);
            await delay(100);
            setBlinkingIndices([]);
        }
    }

    // Bucket Sort
    async function bucketSort() {
        const numBuckets = 10;
        const buckets = Array.from({ length: numBuckets }, () => []);
        const max = Math.max(...nodeHeights.map(h => parseInt(h)));

        for (let height of nodeHeights) {
            const bucketIndex = Math.floor((parseInt(height) / (max + 1)) * numBuckets);
            buckets[bucketIndex].push(height);
        }

        let index = 0;
        for (let bucket of buckets) {
            bucket.sort((a, b) => parseInt(a) - parseInt(b));
            for (let value of bucket) {
                nodeHeights[index] = value;
                setNodeHeights([...nodeHeights]);
                setBlinkingIndices([index]);
                await delay(100);
                setBlinkingIndices([]);
                index++;
            }
        }
    }

    // Generate random heights for nodes
    function generateRandomHeights() {
        const heights = Array.from({ length: count }, () => `${Math.floor(Math.random() * 101)}%`);
        setNodeHeights(heights);
    }

    useEffect(() => {
        generateRandomHeights();
    }, [count]);

    return (
        <div id="barHolder" style={{ display: 'flex', alignItems: 'flex-end', gap: '5px' }}>
            {nodeHeights.map((nodeHeight, index) => (
                <div
                    key={index}
                    className={`node ${blinkingIndices.includes(index) ? 'blink' : ''}`}
                    style={{
                        background,
                        height: nodeHeight,
                        width: '20px'
                    }}
                ></div>
            ))}
        </div>
    );
});

export default Node;
