import { Paper, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { Article } from '../../types/article';
import './ArticlePage.scss';

type Props = {
  articles: Article[];
};

export const ArticlePage: React.FC<Props> = ({ articles }) => {
  const { selectedId } = useParams();

  const selectedArticle = articles
    .find(article => {
      if (selectedId !== undefined) {
        return article.id === +selectedId;
      }

      return null;
    });

  return (
    <>
      <img
        src={selectedArticle?.imageUrl}
        alt="article img"
        style={{ width: '100%', height: '30vh', objectFit: 'cover' }}
      />
      <Paper className="article">
        <Typography variant="h4" component="div">
          {selectedArticle?.title}
        </Typography>
        <br />
        <Typography variant="subtitle1" component="div">
          {selectedArticle?.summary}
        </Typography>
      </Paper>
      <Link
        style={{
          textDecoration: 'none',
          color: '#363636',
          position: 'fixed',
          left: '150px',
          bottom: '50px',
        }}
        to="/"
      >
        Back to homepage
      </Link>
    </>
  );
};
