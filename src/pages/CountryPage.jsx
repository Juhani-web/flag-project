import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchCountryByCode } from "../api/Countries";
import { Button, Typography, Box, Chip, useTheme } from "@mui/material";
import ArrowLeft from "../assets/arrow-left.svg";

export default function CountryPage() {
  const { code } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const theme = useTheme();

  useEffect(() => {
    async function loadCountry() {
      try {
        const data = await fetchCountryByCode(code);
        setCountry(data[0]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadCountry();
  }, [code]);

  if (loading) return <p>Laddar land...</p>;
  if (error) return <p>Fel: {error}</p>;
  if (!country) return <p>Inget land hittades.</p>;

  return (
    <Box sx={{ p: 4 }}>
      <Button
        component={Link}
        to="/"
        variant="text"
        startIcon={
          <img
            src={ArrowLeft}
            alt="Tillbaka"
            style={{
              width: "20px",
              height: "20px",
              filter: theme.palette.mode === "dark" ? "invert(0)" : "invert(1)",
            }}
          />
        }
        sx={{
          color: theme.palette.mode === "dark" ? "#fff" : "#000",
          textTransform: "none",
          fontWeight: "bold",
          "&:hover": {
            backgroundColor:
              theme.palette.mode === "dark"
                ? "rgba(255,255,255,0.1)"
                : "rgba(0,0,0,0.05)",
          },
        }}
      >
        Tillbaka
      </Button>

      <Box sx={{ display: "flex", gap: 4, mt: 4, flexWrap: "wrap" }}>
        {/* Flagga */}
        <Box sx={{ flex: "1 1 300px" }}>
          <img
            src={country.flags.png}
            alt={`Flag of ${country.name.common}`}
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </Box>

        {/* Info om landet */}
        <Box sx={{ flex: "2 1 400px" }}>
          <Typography variant="h4" gutterBottom>
            {country.name.common}
          </Typography>

          <Typography>
            <strong>Population:</strong> {country.population.toLocaleString()}
          </Typography>
          <Typography>
            <strong>Region:</strong> {country.region}
          </Typography>
          <Typography>
            <strong>Capital:</strong> {country.capital?.join(", ")}
          </Typography>
          <Typography>
            <strong>Native Name:</strong>{" "}
            {Object.values(country.name.nativeName || {})[0]?.common}
          </Typography>

          <Typography>
            <strong>Top Level Domain:</strong> {country.tld?.join(", ")}
          </Typography>
          <Typography>
            <strong>Currencies:</strong>{" "}
            {Object.values(country.currencies || {})
              .map((c) => c.name)
              .join(", ")}
          </Typography>
          <Typography>
            <strong>Languages:</strong>{" "}
            {Object.values(country.languages || {}).join(", ")}
          </Typography>

          {/* Grannländer */}
          {country.borders && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle1" gutterBottom>
                Border Countries:
              </Typography>
              {country.borders.map((border) => (
                <Chip
                  key={border}
                  label={border}
                  component={Link}
                  to={`/country/${border}`}
                  clickable
                  sx={{ mr: 1, mb: 1 }}
                />
              ))}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}
