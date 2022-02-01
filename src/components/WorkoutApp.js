import React, { useState } from 'react';
import ResultList from "./ResultList";
import FavsList from "./FavsList";
import Loading from "./Loading";
import Pagination from './Pagination';
import SearchForm from "./SearchForm";
import Header from "./Header";
import Footer from "./Footer";
import useInputState from "../hooks/useInputState";
import useSearch from "../hooks/useSearch";
import useLocalStorageState from "../hooks/useLocalStorageState";
import useToggle from "../hooks/useToggle";
import '../styles/WorkoutApp.css';

function WorkoutApp() {
    const [values, searchByHolder, searchTermHolder, handleChangeFunc] = useInputState();
    const [result, searchTags, show, loading, handleSubmitFunc, setLoading] = useSearch();
    const [favs, saveFunc, removeFunc] = useLocalStorageState();
    const [favsMode, setFavsMode] = useToggle();
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    const currentPosts = result.slice(indexOfFirstPost, indexOfLastPost);
    const currentFavs = favs.slice(indexOfFirstPost, indexOfLastPost);

    const favsList = (favs.length) ? <FavsList data={currentFavs} save={saveFunc} remove={removeFunc} /> : <p>You currently have no favourited exercises</p>; //Make this a component

    const resultList = (show) ? <ResultList data={currentPosts} searchTags={searchTags} numResults= {result.length} save={saveFunc} remove={removeFunc} /> : null; //Make this a copmonent If no results have been generated, show this text. 

    const paginate = (pageNumber) => { //See if this function can be moved to a hook. 
        setCurrentPage(pageNumber) 
   // console.log("page number is " + pageNumber)
    }

    let pagination;// = <Pagination /*postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} */ />;

    if (!favsMode) { //Display normal result paginator
       if(!show){
        pagination = null;
       } else if(result.length === 0){
        pagination = null;
       } else {
        pagination = <Pagination postsPerPage={postsPerPage} totalPosts={result.length} paginate={paginate} currentPage={currentPage} /> //Got to be some way to make this more elegant. 
       }
    } else if (favsMode) { //favsMode paginator
        if (favs.length === 0) {
            pagination = null;
        } else {
            pagination = <Pagination postsPerPage={postsPerPage} totalPosts={favs.length} paginate={paginate} currentPage={currentPage} />
        }
    }

    return (
        <div>
            <Header favsMode={favsMode} setFavsMode={setFavsMode} paginate={paginate} />
           <div className='wrapper'>
            {(favsMode) ? favsList :
                <div>
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
            {pagination}
            <Footer />
        </div>
    )
}

export default WorkoutApp;