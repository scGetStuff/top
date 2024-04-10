/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import '../styles/Section.css';

function Section(props) {
    return (
        <div className="section">
            <h3>{props.label}</h3>
            <div className="fields">
                {
                    // eslint-disable-next-line react/prop-types
                    props.children
                }
            </div>
        </div>
    );
}

export default Section;
