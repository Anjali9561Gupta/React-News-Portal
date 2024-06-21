import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNews, setPage } from '../redux/newsSlice';
import { useEffect } from 'react';
import ArticleDetail from './ArticleDetail';
import Loading from './Loading';

const ArticleList = () => {
  const dispatch = useDispatch();
  const { articles, status, currentPage, category } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(fetchNews({ category, page: currentPage }));
  }, [dispatch, category, currentPage]);

  if (status === 'loading') {
    return <Loading />;
  }

  if (status === 'failed') {
    return <p>Error loading articles...</p>;
  }

  return (
    <div className="article-list">
      {articles.map((article) => (
        <ArticleDetail key={article.url} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;