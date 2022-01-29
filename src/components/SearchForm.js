import React from "react";
//import useSearch from "../hooks/useSearch";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../styles/FormStyles.css';

function SearchForm(props) {

    return (
        <Paper
            className="FormPaper"
            elevation={5}
        >
            <Typography variant="h5" >
                Search For Exercises
            </Typography>
            <form
                className="FormForm"
            >
                <FormControl margin="normal" required fullWidth>
                    <InputLabel >Search By</InputLabel>
                    <Select
                        name="searchBy"
                        label="Search By"
                        value={props.values.searchBy}
                        onChange={props.handleChange}
                    >
                        <MenuItem value="name">Exercise Name</MenuItem>
                        <MenuItem value="target">Target Muscle</MenuItem>
                        <MenuItem value="equipment">Equipment</MenuItem>
                    </Select>
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                    <TextField
                        variant="outlined"
                        value={props.values.searchTerm}
                        onChange={props.handleChange}
                        name="searchTerm"
                        label="Search"
                        required
                    />
                </FormControl>
                <Button
                    variant={(props.values.searchTerm === "" || props.values.searchBy === "") ? "disabled" : "contained"}

                    onClick={(event) => {
                        event.preventDefault();
                        props.handleSubmit(props.values, props.searchByHolder, props.searchTermHolder);
                        if (props.values.searchTerm !== "") { props.setLoading(true); }
                    }}

                >
                    submit
                </Button>
            </form>

        </Paper>

    )
}

export default SearchForm;