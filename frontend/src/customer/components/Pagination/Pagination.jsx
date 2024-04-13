import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./Pagination.css"
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  const location = useLocation();
  for (let i = 1; i <= Math.ceil(totalPosts / 4); i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers, postsPerPage, totalPosts, paginate)

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <Link onClick={() => paginate(number)} to={`${location.pathname}`} className='page-link'>
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;