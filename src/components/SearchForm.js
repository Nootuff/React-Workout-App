import React from "react";

function SearchForm(props) {

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            props.handleSubmit( props.values, props.searchByHolder, props.searchTermHolder )
        }}   >
            <h3>Search Form component</h3>
            <label htmlFor="searchBy">Search by: </label>
            <select
                name="searchBy"
                value={props.values.searchBy}
                onChange={props.handleChange}
            >
                <option value="name">Exercise Name</option>
                <option value="target">Target Muscle</option>
                <option value="equipment">Equipment</option>
            </select>
            <label htmlFor="searchTerm">Search </label>
            <input
                value={props.values.searchTerm}
                onChange={props.handleChange}
                name="searchTerm"
                label="SearchTerm"
            >
            </input>
            <button>
                submit
            </button>
        </form>
    )
}

export default SearchForm;