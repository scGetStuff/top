/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../styles/Buttons.css';

function Buttons(props) {
    const events = props.onClickHandlers;

    return (
        <div className="buttons">
            <button name="edit" onClick={events.edit}>
                Edit
            </button>
            <button name="save" onClick={events.save}>
                Save
            </button>
            <button name="default" onClick={events.defaultData}>
                Default data
            </button>
            <button name="clear" onClick={events.clearData}>
                Clear data
            </button>
        </div>
    );
}

export default Buttons;
