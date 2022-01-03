import React, { useState } from 'react';
import ResultList from "./ResultList";
import SearchForm from "./SearchForm";
const axios = require('axios').default;


function WorkoutApp() {

    const [value, setValue] = useState("");
    const [result, setResult] = useState("");
    const [noResult, setNoResult] = useState("");

    const handleChangeFunc = event => {
        setValue(event.target.value);
    };

    var urlHolder = `https://exercisedb.p.rapidapi.com/exercises/name/${value}` //Got to find some way to add  %20 into any white space in value
    var apiHolder = process.env.REACT_APP_RAPIDAPI_KEY;

    var options = {
        method: 'GET',
        url: urlHolder, //`https://exercisedb.p.rapidapi.com/exercises/name/${searchTerm}`
        headers: {
            'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
            'x-rapidapi-key': apiHolder  //"123"
        }
    };

    const handleSubmitFunc = () => { //Activates on form submission
        if (value !== "") {
            return axios.request(options).then(function (response) { //Response appears to be the argument to hold the actual returned results from the axios.request
                setResult(response.data); //The results of the axios reqeust is set to state.
                if (response.data.length == 0) {
                    setNoResult(value); //If there are no results, save the search term for the NoResult component to use.
                }
                console.log(response.data)
                //console.log("Length: " + response.data.length)
            }).catch(function (error) {
                console.error(error);
            });
        } else {
            setResult("");
        }
    }

    return (
        <div>
            <h3>App parent component</h3>
            <SearchForm
                handleChange={handleChangeFunc}
                handleSubmit={handleSubmitFunc}
                value={value}
            />
            <ResultList
                data={result}
                noResult={noResult}
            />
        </div>
    )
}

export default WorkoutApp;