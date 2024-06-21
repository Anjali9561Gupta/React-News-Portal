import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../redux/newsSlice';

const Pagination = () => {
  const dispatch = useDispatch();
  const { currentPage, totalResults } = useSelector((state) => state.news);
  const totalPages = Math.ceil(totalResults / 10);

  return (
    <div className="pagination">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          className={currentPage === index + 1 ? 'active' : ''}
          onClick={() => dispatch(setPage(index + 1))}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;