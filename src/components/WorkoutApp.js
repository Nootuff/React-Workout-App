import React, { useState } from 'react';
import ResultList from "./ResultList";
import SearchForm from "./SearchForm";

const axios = require('axios').default;

const initialSearchTerms = {
    searchTerm: "",
    searchBy: "name"
};

const initialSearchTags = {
    searchedTerm: "",
    searchedBy: ""
};

function WorkoutApp() {

    const [values, setValues] = useState(initialSearchTerms);
    const [result, setResult] = useState("");
    const [searchTags, setSearchTags] = useState(initialSearchTags);
    const [show, setShow] = useState(false);

    const handleChangeFunc = (event) => {
        const { name, value } = event.target; //Destructured const
        setValues({
            ...values,
            [name]: value,
        });
    };

    const searchTerm = values.searchTerm.replace(/\s\s+/g, '%20').toLowerCase();
    const searchBy = values.searchBy;
    const apiHolder = process.env.REACT_APP_RAPIDAPI_KEY;

    const options = {
        method: 'GET',
        url: `https://exercisedb.p.rapidapi.com/exercises/${searchBy}/${searchTerm}`,
        headers: {
            'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
            'x-rapidapi-key': apiHolder  //"123"
        }
    };

    const handleSubmitFunc = () => { //Activates on form submission
        setShow(true)
        console.log(options.url)
        if (values.searchTerm !== "") {
            return axios.request(options).then(function (response) { //Response is the argument to hold the actual returned results from the axios.request
                setResult(response.data); //The results of the axios reqeust is set to state.
                setSearchTags({ searchedTerm: values.searchTerm, searchedBy: values.searchBy } );
                console.log(response.data)
                //console.log("Length: " + response.data.length)
            }).catch(function (error) {
                setResult([]);
                setSearchTags({ searchedTerm: values.searchTerm, searchedBy: values.searchBy });
                console.error(error);
            });
        } else {
            setResult("");
        }
    }

const body = (show) ? <ResultList data={result} searchTags={searchTags} /> : <h1>Please enter a search term</h1> 

    return (
        <div>
            <h3>App parent component</h3>
            <SearchForm
                handleChange={handleChangeFunc}
                handleSubmit={handleSubmitFunc}
                values={values}
            />
           {body}
        </div>
    )
}

export default WorkoutApp;