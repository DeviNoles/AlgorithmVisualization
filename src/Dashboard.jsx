import Node from './Node';
import { useState, useRef } from 'react';

function Dashboard({ bars }) {
    const [algorithm, setAlgorithm] = useState("Bubble Sort");
    const nodeRef = useRef(null);

    // Handle dropdown selection change
    function handleAlgorithmChange(e) {
        setAlgorithm(e.target.value);
    }

    // Trigger sorting in Node component when the button is clicked
    function sortBars() {
        if (nodeRef.current) {
            nodeRef.current.sortBars(algorithm); // Call Node's sortBars function with selected algorithm
        }
    }

    function randomizeBars() {
        if (nodeRef.current) {
            nodeRef.current.randomizeBars(); // Call Node's randomizeBars function
        }
    }

    return (
        <div className="holder">
            <div className="title">ALGORITHM VISUALIZER</div>
            <div className="menu">
            <div className="menu-left">
                <div className="dropdown">
                    <label htmlFor="algorithmSelect">Choose Algorithm:</label>
                    <select id="algorithmSelect" onChange={handleAlgorithmChange} value={algorithm}>
                        <option value="Bubble Sort">Bubble Sort</option>
                        <option value="Merge Sort">Merge Sort</option>
                        <option value="Heap Sort">Heap Sort</option>
                        <option value="Quick Sort">Quick Sort</option>
                        <option value="Counting Sort">Counting Sort</option>
                        <option value="Radix Sort">Radix Sort</option>
                        <option value="Bucket Sort">Bucket Sort</option>
                    </select>
                </div>
               </div>
               <div className="menu-right">

                <button onClick={sortBars}>Sort</button>
                <button onClick={randomizeBars}>Randomize</button>
                </div>
            </div>
            <div className="algos">
                <Node ref={nodeRef} count={45} background="navy" height="25%" />
                <div className="baseline"></div>
            </div>
        </div>
    );
}

export default Dashboard;
