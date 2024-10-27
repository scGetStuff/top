// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
// import './App.css';
import Head from './components/Head';
import Images from './components/Images';

function App() {
    // console.log('Render App');

    const [current, setCurrent] = useState(0);
    const [best, setBest] = useState(0);

    function updateScore(id = 0) {
        if (id === 0) {
            setCurrent(() => 0);
            return;
        }

        // TODO:i need to use the new `current` value before the render actually happens
        // not sure this is ok
        if (current + 1 > best) setBest(() => current + 1);
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
