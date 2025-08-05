// src/pages/HomePage.jsx

import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import { useState, useEffect } from "react";
import { fetchAllCountries } from "../api/Countries";
import CountryCard from "../components/CountryCard";

export default function HomePage() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");

  // ✅ Ladda alla länder en gång vid start
  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchAllCountries();
        setCountries(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  // ✅ Filtrera baserat på sökning + region
  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name.common
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesRegion =
      selectedRegion === "All" || country.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  // ✅ Sätt vald region (används för filtrering)
  function handleRegionChange(region) {
    setSelectedRegion(region);
  }

  if (loading) return <p>Loading länder…</p>;
  if (error) return <p>Fel vid hämtning: {error}</p>;

  return (
    <div className="home-page">
      {/* Filter & Sökfält */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent:"space-between",
          padding:"8px",
          gap: 2,
          mb: 3,
        }}
      >
        <TextField
          size="small"
          placeholder="Search for a country..."
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ minWidth: 200 }}
        />

        <FormControl size="small" sx={{ minWidth: 150 }}>
          <InputLabel>Filter by Region</InputLabel>
          <Select
            value={selectedRegion}
            onChange={(e) => handleRegionChange(e.target.value)}
            label="Filter by Region"
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Africa">Africa</MenuItem>
            <MenuItem value="Americas">Americas</MenuItem>
            <MenuItem value="Asia">Asia</MenuItem>
            <MenuItem value="Europe">Europe</MenuItem>
            <MenuItem value="Oceania">Oceania</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Titel */}
      <h1>Världens Länder</h1>

      {/* Länder */}
      <div className="country-grid">
        {filteredCountries.map((country) => (
          <CountryCard
            key={country.cca3}
            name={country.name.common}
            flag={country.flags.png}
            code={country.cca3}
            population={country.population}
          />
        ))}
      </div>
    </div>
  );
}
