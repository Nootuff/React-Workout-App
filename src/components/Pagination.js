import React, { useState } from 'react';
import '../styles/Pagination.css';
import Box from '@mui/material/Box';

function Pagination({ postsPerPage, totalPosts, paginate, currentPage }) {

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Box className="Pagination">
      <h1>Paginator</h1>
      <ul>
        {pageNumbers.map(number => (
          <li key={number} className={number === currentPage ? "active" : ""} >
            <p onClick={() => { paginate(number); }}>
              {number}
            </p>
          </li>

        ))}
      </ul>
    </Box>

  );

}

export default Pagination;