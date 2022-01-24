import React from "react";
import useSearch from "../hooks/useSearch";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function SearchForm(props) {



    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            props.handleSubmit(props.values, props.searchByHolder, props.searchTermHolder);
            if (props.values.searchTerm !== "") { props.setLoading(true); }
        }}>
            <InputLabel htmlFor="searchBy">Search by: </InputLabel>
            <Select /*Can this be self closing?*/
                
                id="demo-simple-select"
                name="searchBy"
                value={props.values.searchBy}
                onChange={props.handleChange}
                
            >
                <MenuItem value="name">Exercise Name</MenuItem>
                <MenuItem value="target">Target Muscle</MenuItem>
                <MenuItem value="equipment">Equipment</MenuItem>
            </Select>
            {/* <label htmlFor="searchTerm">Search </label>
            <input //Can this be self closing? 
                value={props.values.searchTerm}
                onChange={props.handleChange}
                name="searchTerm"
                label="SearchTerm"
            >
            </input> */}
            <TextField
                id="standard-basic"
                label="Standard"
                variant="standard"
                value={props.values.searchTerm}
                onChange={props.handleChange}
                name="searchTerm"
                label="Search"
            />
            <button>
                submit
            </button>
        </form>
    )
}

export default SearchForm;