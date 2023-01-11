import {
  Card as CardElement,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Article } from '../../types/article';
import calendar from '../../images/calendar.svg';

type Props = {
  card: Article,
};

export const Card: React.FC<Props> = ({ card }) => {
  const date = new Date(card.publishedAt)
    .toLocaleDateString('en-us',
      {
        year: 'numeric', month: 'short', day: 'numeric',
      });

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
          <Typography variant="h5" component="div">
            {card.title.length > 100
              ? `${card.title.slice(0, 100)}...`
              : card.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {card.summary.length > 100
              ? `${card.summary.slice(0, 100)}...`
              : card.summary}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <NavLink
            to={`../${card.id}`}
          >
            Read More
          </NavLink>
        </Button>
      </CardActions>
    </CardElement>
  );
};
