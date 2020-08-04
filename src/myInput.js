// import React from 'react';

// const MyInput = () => {
//     // Create some state to hold the current value of the input.
//     const [theValue, setTheValue] = useState(initialValue);
    
//     // Create a function that will work out the new value.
//     // and then setting our state to have this new value.
//     const updateTheValue = event => {
//         // The 'event' is the HTML event raised when the input value changes
//         // The 'target' of the event is the HTML element that caused the event.
//         // The 'value' of that target is the new value of that input.
//         const newValue = event.target.value;
//         setTheValue(newValue);
//     }
    
//     // In our JSX, we tell our input that it's initial value should be equal to our state.
//     // And that any time the HTML input value changes, it should call our function to
//     // update the react state to match the new value.
//     return (
//         <input value={theValue} onChange={updateTheValue}/>
//     );
// };