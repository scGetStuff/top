/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import '../styles/App.css';
import { DEFAULT, clone, setWriteFlag } from '../global';
import Section from './Section';
import InputText from './InputText';
import Buttons from './Buttons';

function App() {
    // eslint-disable-next-line no-unused-vars
    const [write, setWrite] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [fields, setFields] = useState(DEFAULT);

    function edit() {
        setWriteFlag(true);
        setWrite(true);
    }

    function save() {
        setWriteFlag(false);
        setWrite(false);
    }

    function fillDefault() {
        setFields(DEFAULT);
    }

    function clearData() {
        const copy = clone(fields);
        clear(copy);
        setFields(copy);

        function clear(obj) {
            for (let key in obj) {
                if (typeof obj[key] === 'object') {
                    clear(obj[key]);
                } else {
                    obj[key] = '';
                }
            }
        }
    }

    // TODO: kind of hate the lack of a Form framework
    // using name & value convention, they need to match
    // so I can use a generic handler function
    // TODO: does it trigger a re-render for each key press?
    function handleChange(target) {
        // console.log(`${target.name}  ${target.value}`);
        const path = target.name.split('.');
        if (path.length != 2) throw new Error('Something is fucked up!');

        const copy = clone(fields);
        copy[path[0]][path[1]] = target.value;
        setFields(copy);
    }

    return (
        <>
            <h1>CV</h1>

            <Section label="General Information">
                <InputText
                    name="general.name"
                    value={fields.general.name}
                    label="Name"
                    onChange={handleChange}
                />
                <InputText
                    name="general.email"
                    value={fields.general.email}
                    label="E-mail"
                    onChange={handleChange}
                />
                <InputText
                    name="general.phone"
                    value={fields.general.phone}
                    label="Phone number"
                    onChange={handleChange}
                />
            </Section>
            {/* <Section label='Educational Experience'>
                <InputText name='one' value='stuff' label='' />
                <InputText name='two' value='stuff' label='' />
                <InputText name='three' value='stuff' label='' />
            </Section>
            <Section label='Practical Experience'>
                <InputText name='one' value='stuff' label='' />
                <InputText name='two' value='stuff' label='' />
                <InputText name='three' value='stuff' label='' />
            </Section> */}

            <Buttons onClickHandlers={{ edit, save, fillDefault, clearData }} />
        </>
    );
}

export default App;
