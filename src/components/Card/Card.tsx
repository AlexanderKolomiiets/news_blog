import { Link } from 'react-router-dom';
import {
  Card as CardElement,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
} from '@mui/material';
import CalendarTodayOutlinedIcon from
  '@mui/icons-material/CalendarTodayOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useAppSelector } from '../../app/hooks';
import { Article } from '../../types/article';
import './Card.scss';

type Props = {
  card: Article,
};

export const Card: React.FC<Props> = ({ card }) => {
  const query = useAppSelector(state => state.filter.query);

  const formattedDate = (date: string) => {
    const newDate = new Date(date).toLocaleString('en', {
      dateStyle: 'long',
    }).split(',');

    return `${newDate[0]}th, ${newDate[1]}`;
  };

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
      match => `<mark style="background: yellow;">${match}</mark>`);
  } else if (summary.toLowerCase().includes(query.toLowerCase())) {
    highlightedSummary = summary.replace(new RegExp(query, 'gi'),
      match => `<mark style="background: yellow;">${match}</mark>`);
  }

  return (
    <CardElement
      sx={{
        maxWidth: 400,
        height: 530,
        boxShadow: 2,
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
          gap: '15px',
        }}
        >
          <Typography
            variant="subtitle2"
            component="div"
            color="#777777"
            sx={{ display: 'flex', gap: '10px', fontWeight: '400' }}
          >
            <CalendarTodayOutlinedIcon fontSize="small" />
            {formattedDate(card.publishedAt)}
          </Typography>
          <Typography
            variant="h6"
            component="div"
            dangerouslySetInnerHTML={{ __html: highlightedTitle || title }}
          />
          <Typography
            variant="subtitle2"
            color="text.secondary"
            dangerouslySetInnerHTML={{ __html: highlightedSummary || summary }}
          />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          sx={{ margin: '0 0 10px 10px', textTransform: 'none' }}
        >
          <Link
            className="card__link"
            to={`../articles/${card.id}`}
          >
            Read more
            <ArrowForwardIcon fontSize="small" />
          </Link>
        </Button>
      </CardActions>
    </CardElement>
  );
};
