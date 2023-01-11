import { useEffect, useState } from 'react';
import { Grid as GridElement, Typography } from '@mui/material';
import { getArticles } from '../api';
import { Article } from '../types/article';
import Card from '../Card';

export const Grid: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      setArticles(await getArticles());
    };

    fetchArticles();
  }, []);

  return (
    <div className="App">
      <Typography
        variant="subtitle1"
        component="div"
        sx={{
          borderBottom: '1px solid #EAEAEA',
          width: '100%',
          paddingBottom: '4px',
          marginBottom: '30px',
        }}
      >
        {`Results: ${articles.length}`}
      </Typography>
      <GridElement
        container
        spacing={{ xs: 4, md: 5 }}
      >
        {articles.map(article => (
          <GridElement
            item
            xs={4}
            key={article.id}
          >
            <Card card={article} />
          </GridElement>
        ))}
      </GridElement>
    </div>
  );
};
