import React, { useState } from 'react';
import ResultList from "./ResultList";
import FavsList from "./FavsList";
import Loading from "./Loading";
//import Result from "./Result";
import SearchForm from "./SearchForm";
import useInputState from "../hooks/useInputState";
import useSearch from "../hooks/useSearch";
import useLocalStorageState from "../hooks/useLocalStorageState";
import useToggle from "../hooks/useToggle";
//import useLoading from "../hooks/useLoading";

function WorkoutApp() {

    const [values, searchByHolder, searchTermHolder, handleChangeFunc] = useInputState();

    const [result, searchTags, show, loading, handleSubmitFunc, setLoading] = useSearch();

    const [favs, saveFunc, removeFunc] = useLocalStorageState();

    const [favsMode, setFavsMode] = useToggle();

    //const [loading] = useLoading();

    /*
    const [placeholder, setPlaceholder] = useState(
        [
            {
                "bodyPart": "waist",
                "equipment": "body weight",
                "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3204.gif",
                "id": "3204",
                "name": "arms overhead full sit-up (male)",
                "target": "abs"
            },
            {
                "bodyPart": "upper arms",
                "equipment": "band",
                "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0986.gif",
                "id": "0986",
                "name": "band one arm overhead biceps curl",
                "target": "biceps"
            },
            {
                "bodyPart": "shoulders",
                "equipment": "band",
                "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1012.gif",
                "id": "1012",
                "name": "band twisting overhead press",
                "target": "delts"
            }
        ]
    );

    const placeholderPrint = placeholder.map((value) =>
        <Result
            data={value}
            save={saveFunc}
           remove={removeFunc}
        />
    );
    */

    const favsList = (favs.length) ? <FavsList data={favs} save={saveFunc} remove={removeFunc} /> : <p>You currently have no favourited exercises</p>;

    const resultList = (show) ? <ResultList data={result} searchTags={searchTags} save={saveFunc} remove={removeFunc} /> : <h1>Please enter a search term</h1>

    return (
        <div>
            <h3>App parent component</h3>

            <button onClick={() => { setFavsMode(!favsMode) }}>Change Favs Mode</button>

            {(favsMode) ? favsList :

                <div>
                    {/*placeholderPrint*/}

                    <SearchForm
                        handleChange={handleChangeFunc}
                        handleSubmit={handleSubmitFunc}
                        setLoading={setLoading}
                        searchByHolder={searchByHolder}
                        searchTermHolder={searchTermHolder}
                        values={values}
                    />
                     {(loading) ? <Loading /> : <div>{resultList}</div>}
                   
                </div>
            }
        </div>
    )
}

export default WorkoutApp;