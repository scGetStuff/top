// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
// import './App.css';
import Head from './components/Head';
import Images from './components/Images';

function App() {
    // console.log('Render App');

    const [current, setCurrent] = useState(0);
    const [best, setBest] = useState(0);

    // conditionally update best
    useEffect(() => {
        if (current > best) setBest(current);
    }, [current]);

    function updateScore(id = 0) {
        if (id === 0) {
            setCurrent(() => 0);
            return;
        }
        setCurrent((current) => current + 1);
    }

    return (
        <>
            <Head current={current} best={best}></Head>
            <Images updateScore={updateScore}></Images>
        </>
    );
}

export default App;
