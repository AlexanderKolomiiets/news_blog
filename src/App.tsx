import { useEffect, useState } from 'react';
import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import HomePage from './components/HomePage';
import './App.css';
import ArticlePage from './components/ArticlePage';
import { Article } from './types/article';
import { getArticles } from './api';

function App() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      setArticles(await getArticles());
    };

    fetchArticles();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<HomePage articles={articles} />} />
          <Route
            path=":selectedId"
            element={<ArticlePage articles={articles} />}
          />
        </Route>
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
