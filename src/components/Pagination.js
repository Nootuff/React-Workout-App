import React from 'react';


function Pagination(/*{ postsPerPage, totalPosts, paginate }*/) {

    const pageNumbers = [];

    /*
    for(let i = 1; i<=Math.ceil(totalPosts / postsPerPage); i++){
      pageNumbers.push(i);
    }
    */

return (
    <div >
      <h1>Pagination menu</h1>
      <ul>
      {/*
     {pageNumbers.map(number =>(
       <li key={number}>
<a onClick={() => paginate(number)} href="!#">
  {number}
</a>
       </li>
     ))}
     */}
      </ul>
    </div>

);

}

export default Pagination;