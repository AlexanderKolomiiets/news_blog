import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { getArticles, Article } from './api';
import './App.scss';

function App() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      setArticles(await getArticles());
    };

    fetchArticles();
  }, []);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <div className="App">
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {articles.map(article => (
          <Grid item xs={2} sm={4} md={4} key={article.id}>
            <Item>{article.title}</Item>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default App;
