/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Head.css';

// TODO: the prop-types linter shit gets on my nerve
// I don't want a props array, I like explicit signatures
function Head({ current, best }) {
    // console.log('Render Head');

    return (
        <div className="head-container">
            <div className="head-left">
                <h1>Memory Card</h1>
                <a
                    target="_blank"
                    href="https://www.theodinproject.com/lessons/node-path-react-new-memory-card"
                >
                    project link
                </a>
            </div>
            <div className="head-score">
                <div>Current Score : {current}</div>
                <div>Best Score : {best}</div>
            </div>
            <div className="head-right">
                <a target="_blank" href="https://giphy.com/rickandmorty">
                    <img
                        src="../../img/Poweredby_100px-Black_VertLogo.png"
                        alt="Powered By GIPHY"
                    />
                </a>
            </div>
        </div>
    );
}

export default Head;
