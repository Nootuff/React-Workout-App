import React, { useState } from "react";

export default initialValue => {
    const [value, setValue] = useState(initialValue);

    const handleChange = event => {
        setValue(event.target.value);
    };

    const reset = () => { //Sets the value to "", empty. 
        setValue("");
    };

    return [value, handleChange, reset]; //Note the order, it must be the same in every file you import this into 
};