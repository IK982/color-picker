import React, {useState} from "react";
import * as styles from "./colourSwab.module.scss";


export const ColourSwab = ({hue}) => {
    const swabStyle = {
        background: `hsl(${hue}, 100%, 50%)`,
       
    }
    return (
        
        <div className= {styles.colourswab} style={swabStyle} />
    );
    
};
