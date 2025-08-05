import "./CountryCard.css";
import { Link } from "react-router-dom";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

function CountryCard({ name, flag, code, population }) {
  console.log({ name, flag, code, population });
  return (
    <Card
      component={Link}
      to={`/country/${name}`}
      sx={{
        maxWidth: 300,
        margin: 2,
        textDecoration: "none",
        color: "inherit",
        "&:hover": {
          boxShadow: 6,
        },
      }}
    >
      <CardMedia
        component="img"
        height="160"
        image={flag}
        alt={`Flag of ${name}`}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Officiellt namn: {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Befolkning: {population.toLocaleString()} invånare
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CountryCard;
