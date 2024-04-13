/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState, useContext } from 'react';
import '../styles/App.css';
import { WriteContext } from '../context/WriteContext';
import * as DATA from '../data';
import Section from './Section';
import InputText from './InputText';
import Buttons from './Buttons';

function App() {
    // eslint-disable-next-line no-unused-vars
    const [write, setWrite] = useState(useContext(WriteContext));
    // TODO: there is no reason for useState(), nothing needs to change as data is entered
    const [fields, setFields] = useState(DATA.load());

    // console.log('APP');

    function edit() {
        setWrite(true);
    }

    function save() {
        DATA.saveLocal(fields);
        setWrite(false);
    }

    function defaultData() {
        setFields(DATA.clone());
    }

    function clearData() {
        DATA.removeLocal();
        setFields(DATA.clear(DATA.clone()));
    }

    // TODO: feels like there must be a better approach
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

            <WriteContext.Provider value={write}>
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

                <Section label="Educational Experience">
                    <InputText
                        name="education.school"
                        value={fields.education.school}
                        label="School"
                        onChange={handleChange}
                    />
                    <InputText
                        name="education.major"
                        value={fields.education.major}
                        label="Major"
                        onChange={handleChange}
                    />
                    <InputText
                        name="education.year"
                        value={fields.education.year}
                        label="Year"
                        onChange={handleChange}
                    />
                </Section>

                <Section label="Practical Experience">
                    <InputText
                        name="experience.company"
                        value={fields.experience.company}
                        label="Company"
                        onChange={handleChange}
                    />
                    <InputText
                        name="experience.title"
                        value={fields.experience.title}
                        label="Title"
                        onChange={handleChange}
                    />
                    <InputText
                        name="experience.description"
                        value={fields.experience.description}
                        label="Description"
                        onChange={handleChange}
                    />
                    <InputText
                        name="experience.start"
                        value={fields.experience.start}
                        label="Start"
                        onChange={handleChange}
                    />
                    <InputText
                        name="experience.end"
                        value={fields.experience.end}
                        label="End"
                        onChange={handleChange}
                    />
                </Section>
            </WriteContext.Provider>

            <Buttons onClickHandlers={{ edit, save, defaultData, clearData }} />
        </>
    );
}

export default App;
