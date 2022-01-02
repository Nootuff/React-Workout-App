import React from "react";
import useInputState from "../hooks/useInputState"; //make sure this is right. 

function SearchForm(props) {
    //const [value, handleChange, reset] = useInputState("")

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            props.handleSubmit()
        }}   >
            <h3>Search Form component</h3>
            <input value={props.value} onChange={props.handleChange}>
            </input>
            <button>
                submit
            </button>
        </form>
    )
}

export default SearchForm;