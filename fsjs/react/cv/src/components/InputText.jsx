/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../styles/InputText.css';
import { getWriteFlag } from '../global';

function InputText(props) {
    const write = getWriteFlag();

    let item;
    if (write) {
        item = (
            <input
                type="text"
                name={props.name}
                value={props.value}
                onChange={(event) => props.onChange(event.target)}
            />
        );
    } else {
        item = (
            <input
                disabled={true}
                type="text"
                name={props.name}
                value={props.value}
            />
        );
    }

    return (
        <div className="field">
            {/* can not imbed the input in the label
                they need to be siblings in flex container to control alignment the way I want */}
            <label htmlFor={props.name}>{props.label}</label>
            {item}
        </div>
    );
}

export default InputText;
