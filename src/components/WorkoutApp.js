import React, { useState } from 'react';
import ResultList from "./ResultList";
import Result from "./Result";
import SearchForm from "./SearchForm";
import useInputState from "../hooks/useInputState"
import useSearch from "../hooks/useSearch"
import useLocalStorageState from "../hooks/useLocalStorageState"
import useToggle from "../hooks/useToggle"


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

    const [favs, saveFunc] = useLocalStorageState();

    const [favsMode, setFavsMode] = useToggle()

const [placeholder, setPlaceholder] = useState(
    [
       {
        "bodyPart":"waist",
        "equipment":"body weight",
        "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/3204.gif",
        "id":"3204",
        "name":"arms overhead full sit-up (male)",
        "target":"abs"
        },
       {
        "bodyPart":"upper arms",
        "equipment":"band",
        "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/0986.gif",
        "id":"0986",
        "name":"band one arm overhead biceps curl",
        "target":"biceps"
        },
       {
        "bodyPart":"shoulders",
        "equipment":"band",
        "gifUrl":"http://d205bpvrqc9yn1.cloudfront.net/1012.gif",
        "id":"1012",
        "name":"band twisting overhead press",
        "target":"delts"
        }
    ]
);

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

console.log(favs)

const placeholderPrint = placeholder.map((value) => 
<Result
    data={value}
    save={saveFunc}
/>
);

const favsList = favs.map((value) =>
<li>{value.name}, {value.id}</li>
)

    const body = (show) ? <ResultList data={result} searchTags={searchTags} save={saveFunc}/> : <h1>Please enter a search term</h1>

    return (
        <div>
            <button onClick= {() => {setFavsMode(!favsMode)}}>Change Favs Mode</button>
           { (favsMode) ? <ul>Favs here: {favsList} </ul> : null }
            <ul>
                
{placeholderPrint}
</ul>

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