import { Grid as GridElement, Typography } from '@mui/material';
import { Article } from '../../types/article';
import Card from '../Card';

type Props = {
  articles: Article[]
};

export const HomePage: React.FC<Props> = ({ articles }) => {
  return (
    <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
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
