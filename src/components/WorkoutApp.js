import React, { useState } from 'react';
import ResultList from "./ResultList";
import SearchForm from "./SearchForm";
const axios = require('axios').default;


function WorkoutApp() {

    const [value, setValue] = useState("");
    const [result, setResult] = useState(""); //Data should be the returned api result

    

    const handleChangeFunc = event => {
        setValue(event.target.value);
    };

var urlHolder = `https://exercisedb.p.rapidapi.com/exercises/name/${value}` //Got to find some way to add  %20 into any white space in value
var apiHolder = process.env.REACT_APP_RAPIDAPI_KEY;
    
    var options = {
        method: 'GET',
        url: urlHolder, //`https://exercisedb.p.rapidapi.com/exercises/name/${searchTerm}`, use string template literals here or just put in urlHolder
        headers: {
            'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
            'x-rapidapi-key': apiHolder  //"123"
        }
    };

const handleSubmitFunc = (tester) => {
    return axios.request(options).then(function (response) { //Response appears to be the argument to hold the actual returned results
        //console.log(response.result);
        setResult( response.data);
        console.log(result)
    }).catch(function (error) {
        console.error(error);
    });
    //alert(urlTest) 
}

    return (
        <div>
            <h3>App parent component</h3>
            <SearchForm 
            handleChange={handleChangeFunc}
             handleSubmit={handleSubmitFunc}
             value={value}
            />
            <ResultList data ={result} />
            {/*<p>{value}</p>*/}
        </div>
    )
}

export default WorkoutApp;