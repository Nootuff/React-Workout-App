import React, { useState } from "react";

const initialSearchTerms = {
    searchTerm: "",
    searchBy: ""
};

export default input => {
    const [values, setValues] = useState(initialSearchTerms);

    const searchByHolder = values.searchBy; //These 2 consts hold the values of the entered search term and search-by value.
    const searchTermHolder = values.searchTerm.replace(/\s\s+/g, '%20').toLowerCase(); //The search term is modified to fit the API call requirements.

    const handleChangeFunc = (event) => {
        const { name, value } = event.target; //Destructured const
        setValues({
            ...values,
            [name]: value,
        });
    };

    return [values, searchByHolder, searchTermHolder, handleChangeFunc];
}