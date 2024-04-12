/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import '../styles/App.css';
import { setWriteFlag } from '../global';
import * as DATA from '../data';
import Section from './Section';
import InputText from './InputText';
import Buttons from './Buttons';

function App() {
    // eslint-disable-next-line no-unused-vars
    const [write, setWrite] = useState(false);
    const [fields, setFields] = useState(DATA.loadData());

    // console.log('APP');

    function edit() {
        setWriteFlag(true);
        setWrite(true);
    }

    function save() {
        DATA.saveData(fields);
        setWriteFlag(false);
        setWrite(false);
    }

    function defaultData() {
        setFields(DATA.DEFAULT);
    }

    function clearData() {
        DATA.saveData();
        setFields(DATA.EMPTY);
    }

    // TODO: feels like there must be a better approach
    // name & value need to match so I can find the correct field to update
    // the nested objects complicate stuff
    function handleChange(target) {
        // console.log(`${target.name}  ${target.value}`);
        const path = target.name.split('.');
        if (path.length != 2) throw new Error('Something is fucked up!');

        const copy = DATA.clone(fields);
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

            <Buttons onClickHandlers={{ edit, save, defaultData, clearData }} />
        </>
    );
}

export default App;
