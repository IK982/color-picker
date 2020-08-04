import React, {useState} from 'react';
import { ColourSwab } from './colourSwab';
import {ColourSliders} from './Sliders';




export const App = () => {
    const[selectedHue, setHue] = useState(0);
    const[selectedSaturation, setSaturation] = useState(100);
    const[selectedBrightness, setBrightness] = useState(50);

    return (
        <main>
            <h1>Color Picker</h1>

            <ColourSwab hue={selectedHue}/>
            <ColourSliders hue ={selectedHue} setHue = {setHue}/>

           

        </main>
    );
};