import { useState, useEffect } from "react";
import {
  Box,
  Grid,
  TextField,
  InputAdornment,
  MenuItem,
  Select,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CountryCard from "../components/CountryCard";

export default function HomePage() {
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [region, setRegion] = useState("All");

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags,cca3"
    )
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.error("Error fetching countries:", err));
  }, []);

  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name.common
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesRegion = region === "All" || country.region === region;
    return matchesSearch && matchesRegion;
  });

  return (
    <Box sx={{ px: { xs: 2, md: 6 }, py: 4 }}>
      {/* Sökfält + Region filter */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "stretch", md: "center" },
          flexWrap: "wrap",
          maxWidth: "1200px",
          margin: "0 auto",
          px: 3.5,
          mb: 8,
          gap: 2,
        }}
      >
        <TextField
          placeholder="Search for a country..."
          variant="outlined"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ flex: 1, maxWidth: 400, mr: { md: 2 }, mb: { xs: 2, md: 0 } }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        <Select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          displayEmpty
          sx={{ width: 200 }}
        >
          <MenuItem value="All">Filter by Region</MenuItem>
          <MenuItem value="Africa">Africa</MenuItem>
          <MenuItem value="Americas">Americas</MenuItem>
          <MenuItem value="Asia">Asia</MenuItem>
          <MenuItem value="Europe">Europe</MenuItem>
          <MenuItem value="Oceania">Oceania</MenuItem>
        </Select>
      </Box>

      {/* Länder-korten */}
      <Grid container spacing={6} justifyContent="center">
        {filteredCountries.map((country) => (
          <Grid
            item
            key={country.cca3}
            xs={12}
            sm={6}
            md={3}
            display="flex"
            justifyContent="center"
          >
            <CountryCard
              country={country}
              width={250}
              height={320}
              flagHeight={160}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
