import React, { useState } from 'react';

function SearchForm(props) {
    const [value, setValue] = useState("");

    //Both of these functions use the const defined above. 
    const handleChange = event => {
    setValue(event.target.value);
    };

    const handleSubmit = event => {
        alert("done")
        };

    return(
<form onSubmit={handleSubmit}>
    <input value={value} onChange={handleChange}>
    </input>
    <button>
        submit
    </button>
    </form>
    )
}

export default SearchForm;