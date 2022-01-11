import React from "react";
import useSearch from "../hooks/useSearch";

function SearchForm(props) {

    //const [setLoading] = useSearch();

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            props.handleSubmit(props.values, props.searchByHolder, props.searchTermHolder);
            props.setLoading(true);
        }}>
            <h3>Search Form component</h3>
            <label htmlFor="searchBy">Search by: </label>
            <select /*Can this be self closing?*/
                name="searchBy"
                value={props.values.searchBy}
                onChange={props.handleChange}
            >
                <option value="name">Exercise Name</option>
                <option value="target">Target Muscle</option>
                <option value="equipment">Equipment</option>
            </select>
            <label htmlFor="searchTerm">Search </label>
            <input //Can this be self closing? 
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