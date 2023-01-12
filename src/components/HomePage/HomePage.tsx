import { Grid as GridElement, TextField, Typography } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { Article } from '../../types/article';
import Card from '../Card';

type Props = {
  articles: Article[]
};

export const HomePage: React.FC<Props> = ({ articles }) => {
  const [query, setQuery] = useState('');

  const handleQueryInput = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
      <TextField
        id="filled-basic"
        label="Search"
        variant="filled"
        value={query}
        onChange={handleQueryInput}
        sx={{
          width: '70%',
        }}
      />
      <Typography
        variant="subtitle1"
        component="div"
        sx={{
          borderBottom: '1px solid #EAEAEA',
          width: '100%',
          paddingBottom: '4px',
          margin: '30px 0',
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
            <Card card={article} query={query} />
          </GridElement>
        ))}
      </GridElement>
    </div>
  );
};
