/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './App.css';

const App = () => <h1>Our First Test</h1>;

// eslint-disable-next-line no-unused-vars
function OldApp({ title = 'default' }) {
    // const [count, setCount] = useState(0);

    return (
        <>
            <h1>{title}</h1>
            {/* <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div> */}
        </>
    );
}

export default App;
