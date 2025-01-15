import React from 'react';
import Image from './Image';
import Profile from './Profile';
import './styles.css';

function App() {
    return (
        <div className="App">
            <Image />
            <Profile delay={1000} />
        </div>
    );
}

export default App;
