import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../redux/newsSlice';

const categories = ['general', 'business', 'technology', 'entertainment'];

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.news.category);

  return (
    <div className="category-filter">
      {categories.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? 'active' : ''}
          onClick={() => dispatch(setCategory(category))}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;