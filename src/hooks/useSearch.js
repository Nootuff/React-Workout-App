import React, { useState } from "react";
//import useInputState from "./useInputState"
const axios = require('axios').default;

const initialSearchTags = {
    searchedTerm: "",
    searchedBy: ""
};

export default search => {
    const [result, setResult] = useState("");
    const [searchTags, setSearchTags] = useState(initialSearchTags);
    const [show, setShow] = useState(false);

   // const [values, alerterFunc] = useInputState();

   const apiHolder = process.env.REACT_APP_RAPIDAPI_KEY;

    const handleSubmitFunc = (valuesParam, searchByParam, searchTermParam) => { //Activates on form submission, the parameters are being passed in all the way from useInputState where they were set by handleChangeFunc and passed back to WorkoutApp.
        setShow(true)

        const options = {
            method: 'GET',
            url: `https://exercisedb.p.rapidapi.com/exercises/${searchByParam}/${searchTermParam}`,
            headers: {
                'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
                'x-rapidapi-key': apiHolder  //"123"
            }
        }; 

        if (valuesParam.searchTerm !== "") { //valuesParam holds "values" passed from useInputState.
            return axios.request(options).then(function (response) { //Response is the argument to hold the actual returned results from the axios.request
                setResult(response.data); //The results of the axios reqeust is set to state.
                setSearchTags( { searchedTerm: valuesParam.searchTerm, searchedBy: valuesParam.searchBy } );
                console.log(response.data)
                
                //console.log("Length: " + response.data.length)
            }).catch(function (error) {
                setResult([]); //Sets result to an empty array so this can be detected in the results list & used to determine whether const message should be rendered. 
                setSearchTags({ searchedTerm: valuesParam.searchTerm, searchedBy: valuesParam.searchBy });
                console.error(error);
            });
        } else {
            setResult("");
        }
    }

/*
    const alertereFunc = () => {
alert("facebook and email")
    }
    */
    
        return [result, searchTags, show, handleSubmitFunc];
}
