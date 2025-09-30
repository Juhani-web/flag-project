import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function CountryCard({
  country,
  width = 250,
  height = 320,
  flagHeight = 160,
}) {
  return (
    <Card
      sx={{
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: 2,
        width: width,
        height: height,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardActionArea
        component={Link}
        to={`/country/${country.cca3}`}
        sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
      >
        {/* Flagga */}
        <CardMedia
          component="img"
          image={country.flags.svg}
          alt={`${country.name.common} flag`}
          sx={{
            height: flagHeight,
            width: "100%",
            objectFit: "cover",
          }}
        />

        {/* Text */}
        <CardContent sx={{ flexGrow: 1, width: "100%" }}>
          <Typography
            variant="h6"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 700 }}
          >
            {country.name.common}
          </Typography>

          <Box>
            <Typography variant="body2">
              <strong>Population:</strong> {country.population.toLocaleString()}
            </Typography>
            <Typography variant="body2">
              <strong>Region:</strong> {country.region}
            </Typography>
            <Typography variant="body2">
              <strong>Capital:</strong>{" "}
              {country.capital ? country.capital[0] : "N/A"}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
