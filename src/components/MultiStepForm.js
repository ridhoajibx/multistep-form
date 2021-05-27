import React, { useState } from 'react';
import { useStep } from "react-hooks-helper";
import './form.css'
import { Music } from './stepForm/Music';
import { People } from './stepForm/People';
import { Speaker } from './stepForm/Speaker';
import { Submit } from './stepForm/Submit';
import { Value } from './stepForm/Value';
import { Weekend } from './stepForm/Weekend';

const defaultData = {
    value: "",
    music: "",
    weekend: "",
    speaker: "",
    people: ""
}

const steps = [
    { id: "value" },
    { id: "music" },
    { id: "weekend" },
    { id: "speaker" },
    { id: "people" },
    { id: "submit" },
];

function MultiStepForm() {
    const [formData, setFormData] = useState(defaultData);
    const { step, navigation } = useStep({
        steps,
        initialStep: 0,
    });

    const props = { formData, setFormData, navigation };
    // eslint-disable-next-line
    switch (step.id) {
        case "value":
            return <Value {...props} />;
        case "music":
            return <Music {...props} />;
        case "weekend":
            return <Weekend {...props} />;
        case "speaker":
            return <Speaker {...props} />;
        case "people":
            return <People {...props} />;
        case "submit":
            return <Submit {...props} />;
    }
    console.log("Data", formData)
    return (
        <div>
            <h1>Multi step form</h1>
        </div>
    )
}

export default MultiStepForm
