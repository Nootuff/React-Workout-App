//import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';

function DataPagination({ postsPerPage, totalPosts, page, setPage }) {

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) { //linked to your basic paginator
    pageNumbers.push(i);
  }

  return (
    <Pagination
      className='Pagination'
      count={pageNumbers.length}
      page={page}
      onChange={(event, value) => { setPage(value); /*paginate(value);*/ console.log("MUI Event is: " + event) }}
      color="primary"
      sx={{ justifyContent: "center", display: 'flex', m: "40px 0 30px 0" }}
    //onClick={paginate(page)} //This seems to work just need to find a way to make the header button change the page state, maybe turn it into a hook? What is going on exactly with this? With this paginator working the origional seesm to have stopped, could that be tied into this issue? Use the console.logs 

    /* <ul>
          {pageNumbers.map(number => (
            <li key={number} className={number === currentPage ? "active" : ""} >
              <p onClick={() => { paginate(number); }}>
                {number}
              </p>
            </li>
  
          ))}
          </ul> */
    />
  );
}

export default DataPagination;