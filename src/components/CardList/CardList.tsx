import { Grid, Typography } from '@mui/material';
import { useAppSelector } from '../../app/hooks';
import Card from '../Card';

export const CardList: React.FC = () => {
  const articles = useAppSelector(state => state.articles);

  return (
    <>
      <Typography
        variant="subtitle1"
        component="div"
        sx={{
          width: '100%',
          margin: '30px 0',
          paddingBottom: '4px',
          fontWeight: '600',
          borderBottom: '1px solid #EAEAEA',
        }}
      >
        {`Results: ${articles.length}`}
      </Typography>
      <Grid
        container
        spacing={{ xs: 4, md: 5 }}
      >
        {articles.map(article => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={article.id}
          >
            <Card card={article} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
