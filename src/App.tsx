import { useEffect } from 'react';
import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import { useAppDispatch } from './app/hooks';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import PageNotFound from './pages/PageNotFound';
import { actions as articlesActions } from './features/articlesSlice';
import { getArticles } from './api';
import './App.scss';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Montserrat',
    ].join(','),
  },
});

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchArticles = async () => {
      dispatch(articlesActions.add(await getArticles()));
    };

    fetchArticles();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/articles/:selectedId"
          element={<ArticlePage />}
        />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
