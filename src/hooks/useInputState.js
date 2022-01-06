import React, { useState } from "react";

const initialSearchTerms = {
    searchTerm: "",
    searchBy: "name"
};

export default input => {
    const [values, setValues] = useState(initialSearchTerms);

    const searchByHolder = values.searchBy;
    const searchTermHolder = values.searchTerm.replace(/\s\s+/g, '%20').toLowerCase();

    const handleChangeFunc = (event) => {
        const { name, value } = event.target; //Destructured const
        setValues({
            ...values,
            [name]: value,
        });
    };

    /*
    const alerterFunc = () => { 
        alert("useInputState")
    }
    */

    return [values, searchByHolder, searchTermHolder, handleChangeFunc];
}