import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ArticleList from './components/ArticleList';
import CategoryFilter from './components/CategoryFilter';
import Pagination from './components/Pagination';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>React News Portal</h1>
        <CategoryFilter />
        <ArticleList />
        <Pagination />
      </div>
    </Provider>
  );
};

export default App;