import React from "react";

const PaginationRow = (
  { nextPage, previousPage, currentPage, customersPerPage, total }: {nextPage: () => void, previousPage: () => void, currentPage: number, customersPerPage: number, total: number}
  ): JSX.Element => {
  return (
    <div className='flex flex-col items-center py-2'>
      <div>
        <p className='text-sm text-gray-700 m-2'>
          Showing
          <span className='font-medium'>&nbsp;{currentPage * customersPerPage - customersPerPage + 1}&nbsp;</span>
          to
          <span className='font-medium'>&nbsp;{currentPage * customersPerPage > total ? total : currentPage * customersPerPage}&nbsp;</span>
          of
          <span className='font-medium'>&nbsp;{total}&nbsp;</span>
          results
        </p>
      </div>
      <nav className='block'></nav>
      <div>
        <nav
          className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px'
          aria-label='Pagination'>
          <button
            onClick={() => {
              previousPage();
            }}
            className='relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
          >
            <span>Previous</span>
          </button>
          <button
            onClick={() => {
              nextPage();
            }}
            className='relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
          >
            <span>Next</span>
          </button>
        </nav>
      </div>
    </div>
  );
}

export default PaginationRow;
