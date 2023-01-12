import {
  Card as CardElement,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { Article } from '../../types/article';
import calendar from '../../images/calendar.svg';

type Props = {
  card: Article,
  query: string,
};

export const Card: React.FC<Props> = ({ card, query }) => {
  const date = new Date(card.publishedAt)
    .toLocaleDateString('en-us',
      {
        year: 'numeric', month: 'short', day: 'numeric',
      });

  const title = card.title.length > 100
    ? `${card.title.slice(0, 100)}...`
    : card.title;

  const summary = card.summary.length > 100
    ? `${card.summary.slice(0, 100)}...`
    : card.summary;

  let highlightedTitle;
  let highlightedSummary;

  if (title.toLowerCase().includes(query.toLowerCase())) {
    highlightedTitle = title.replace(new RegExp(query, 'gi'),
      match => `<mark style="background: yellow;">${match}</mark>`) || title;
  } else if (summary.toLowerCase().includes(query.toLowerCase())) {
    highlightedSummary = summary.replace(new RegExp(query, 'gi'),
      match => `<mark style="background: yellow;">${match}</mark>`) || summary;
  }

  return (
    <CardElement
      sx={{
        maxWidth: 400,
        height: 500,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={card.imageUrl}
          alt="card photo"
        />
        <CardContent sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}
        >
          <Typography
            variant="subtitle2"
            component="div"
            color="#aaa"
          >
            <img
              src={calendar}
              alt="calendar icon"
              style={{ marginRight: '10px' }}
            />
            {date}
          </Typography>
          <Typography
            variant="h5"
            component="div"
            dangerouslySetInnerHTML={{ __html: highlightedTitle || title }}
          />
          <Typography
            variant="body2"
            color="text.secondary"
            dangerouslySetInnerHTML={{ __html: highlightedSummary || summary }}
          />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <Link
            style={{ textDecoration: 'none', color: '#363636' }}
            to={`../${card.id}`}
          >
            Read More
          </Link>
        </Button>
      </CardActions>
    </CardElement>
  );
};
