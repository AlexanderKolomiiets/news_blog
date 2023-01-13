import { Link, useParams } from 'react-router-dom';
import { Paper, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useAppSelector } from '../../app/hooks';
import PageNotFound from '../PageNotFound';
import './ArticlePage.scss';

export const ArticlePage: React.FC = () => {
  const articles = useAppSelector(state => state.articles);

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
      {selectedArticle ? (
        <>
          <img
            src={selectedArticle.imageUrl}
            alt="article img"
            className="article__image"
          />
          <Paper className="article">
            <Typography variant="h4" component="div">
              {selectedArticle.title}
            </Typography>
            <br />
            <Typography variant="subtitle1" component="div">
              {selectedArticle.summary}
            </Typography>
          </Paper>
          <Link
            className="article__link"
            to="/"
          >
            <ArrowBackIcon />
            Back to homepage
          </Link>
        </>
      ) : <PageNotFound />}
    </>
  );
};
