import React from "react";

function SearchForm(props) {

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