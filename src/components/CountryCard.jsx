
import "./CountryCard.css";
import { Link } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material';

function CountryCard({ country }) {
  return (
    <Card
      component={Link}
      to={`/country/${country.name.common}`}
      sx={{
        maxWidth: 300,
        margin: 2,
        textDecoration: 'none',
        color: 'inherit',
        '&:hover': {
          boxShadow: 6,
        },
      }}
    >
      <CardMedia
        component="img"
        height="160"
        image={country.flags.png}
        alt={country.flags.alt || `Flag of ${country.name.common}`}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {country.name.common}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Officiellt namn: {country.name.official}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CountryCard;
