import React, { useState } from 'react';
import ResultList from "./ResultList";
import FavsList from "./FavsList";
import Loading from "./Loading";
import Pagination from './Pagination';
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

    
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    const currentPosts = result.slice(indexOfFirstPost, indexOfLastPost);
    const currentFavs = favs.slice(indexOfFirstPost, indexOfLastPost);

    const favsList = (favs.length) ? <FavsList data={currentFavs} save={saveFunc} remove={removeFunc} /> : <p>You currently have no favourited exercises</p>;

    const resultList = (show) ? <ResultList data={currentPosts} searchTags={searchTags} numResults= {result.length} save={saveFunc} remove={removeFunc} /> : <h1>Please enter a search term</h1> //If no results have been generated, show this text. 

    const paginate = (pageNumber) => { //See if this function can be moved to a hook. 
        setCurrentPage(pageNumber) 
   // console.log("page number is " + pageNumber)
    }

    let pagination;// = <Pagination /*postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} */ />;

    if (!favsMode) { //Display normal result paginator
       if(!show){
        pagination = "null";
       } else if(result.length === 0){
        pagination = "null";
       } else {
        pagination = <Pagination postsPerPage={postsPerPage} totalPosts={result.length} paginate={paginate} currentPage={currentPage} /> //Got to be some way to make this more elegant. 
       }
    } else if (favsMode) { //favsMode paginator
        if (favs.length === 0) {
            pagination = "null";
        } else {
            pagination = <Pagination postsPerPage={postsPerPage} totalPosts={favs.length} paginate={paginate} currentPage={currentPage} />
        }
    }

    return (
        <div>
            <h3>App parent component</h3>
            <button onClick={() => { setFavsMode(!favsMode); paginate(1) }}>Change Favs Mode</button>

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
            {pagination}
        </div>
    )
}

export default WorkoutApp;