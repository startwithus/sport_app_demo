// Pagination.js

import React, { useState, useEffect } from 'react';
import './pagination.css'
const Pagination = ({ currentPage, totalPages, onPageChange, itemsPerPage, handleItemsPerPageChange }) => {
  const displayPageNumbers = 2; // Adjust the number of page numbers to display
  const [activePage, setActivePage] = useState(currentPage);

  useEffect(() => {
    setActivePage(currentPage);
  }, [currentPage]);

  const getPageNumbers = () => {
    const pages = [];
    const totalPagesToShow = Math.min(totalPages, displayPageNumbers);

    if (totalPages <= displayPageNumbers) {
      // If total pages are less than or equal to the displayPageNumbers, show all pages
      for (let page = 1; page <= totalPages; page++) {
        pages.push(page);
      }
    } else {
      // Show the first page, ellipsis, current page, and last page
      const firstPage = 1;
      const lastPage = totalPages;

      let startPage = Math.max(activePage - Math.floor(displayPageNumbers / 2), 1);
      let endPage = startPage + totalPagesToShow - 1;

      if (endPage > totalPages) {
        startPage -= endPage - totalPages;
        endPage = totalPages;
      }

      if (startPage <= 0) {
        startPage = 1;
        endPage = totalPagesToShow;
      }

      for (let page = startPage; page <= endPage; page++) {
        pages.push(page);
      }

      if (startPage > 1) {
        pages.unshift('...');
        pages.unshift(firstPage);
      }

      if (endPage < totalPages) {
        pages.push('...');
        pages.push(lastPage);
      }
    }

    return pages;
    
  };

  const pages = getPageNumbers();

  return (
    <div className="pagination-main-container">
      <div className='page-per-item'>
        <label style={{color:"wheat"}}>
          Records Per Page:{' '}
          <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
            <option value={5}>5</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </label>
      </div>
      <div className='pagination-container'>
        <button
          className='pagination-button'
          onClick={() => {
            onPageChange(activePage - 1);
            setActivePage(activePage - 1);
          }}
          disabled={currentPage === 1}
        >
          Prev
        </button >
        {pages.map((page, index) => (
          <button
            key={index}
            onClick={() => {
              if (page !== '...' && page !== activePage) {
                onPageChange(page);
                setActivePage(page);
              }
            }}
            className={`page-btn ${page === activePage ? 'active-page' : ''} `}
            disabled={page === '...'}
          >
            {page}
          </button>
        ))}
        <button
          className='pagination-button'
          onClick={() => {
            onPageChange(activePage + 1);
            setActivePage(activePage + 1);
          }}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
