//import React, { useState } from 'react';
import ResultList from "./ResultList";
import SearchForm from "./SearchForm";
import useInputState from "../hooks/useInputState"
import useSearch from "../hooks/useSearch"

/*
const initialSearchTerms = { //Sent to useInputState
    searchTerm: "",
    searchBy: "name"
};
*/

/*
const initialSearchTags = {
    searchedTerm: "",
    searchedBy: ""
};
*/

function WorkoutApp() {

    // const [values, setValues] = useState(initialSearchTerms); //Sent to useInputState

    /*
    const [result, setResult] = useState("");
    const [searchTags, setSearchTags] = useState(initialSearchTags);
    const [show, setShow] = useState(false);
    */

    const [values, searchByHolder, searchTermHolder, handleChangeFunc] = useInputState();
    
    const [result, searchTags, show, handleSubmitFunc] = useSearch();



    /*
    const handleChangeFunc = (event) => {  //Sent to useInputState
        const { name, value } = event.target; //Destructured const
        setValues({
            ...values,
            [name]: value,
        });
    };
    */


    // const searchTermHolder = values.searchTerm.replace(/\s\s+/g, '%20').toLowerCase();
    //const searchByHolder = values.searchBy;


    //const apiHolder = process.env.REACT_APP_RAPIDAPI_KEY;
    /*
    const options = {
        method: 'GET',
        url: `https://exercisedb.p.rapidapi.com/exercises/${searchByHolder}/${searchTermHolder}`,
        headers: {
            'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
            'x-rapidapi-key': apiHolder  //"123"
        }
    };
    */

    /*
    const handleSubmitFunc = () => { //Activates on form submission
        setShow(true)
        console.log(options.url)
        testFunc()
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
*/

    const body = (show) ? <ResultList data={result} searchTags={searchTags} /> : <h1>Please enter a search term</h1>

    return (
        <div>
            <h3>App parent component</h3>
            {/*<button onClick={alertereFunc}>Press</button>*/}
            <SearchForm
                handleChange={handleChangeFunc}
                handleSubmit={handleSubmitFunc}
                searchByHolder={searchByHolder}
                searchTermHolder={searchTermHolder}
                values={values}
            />
            {body}
        </div>
    )
}

export default WorkoutApp;