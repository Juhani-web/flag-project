// src/components/Navbar.jsx
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Container,
} from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useState } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [region, setRegion] = useState("");

  const handleThemeToggle = () => setDarkMode(!darkMode);
  const handleRegionChange = (event) => setRegion(event.target.value);

  return (
    <AppBar position="static" sx={{ backgroundColor: "#fff", color: "#000" }} elevation={1}>
      <Container maxWidth="lg">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
          {/* Vänster sida: logga */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            🌍 FlagFinder
          </Typography>

          {/* Mitten: Techover (eller annan branding) */}
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            TECHOVER
          </Typography>

          {/* Höger sida: Search + Region + Theme */}
          <Box sx={{ display: "flex", gap: 2, alignItems: "center", mt: { xs: 2, md: 0 }, flexWrap: "wrap" }}>
            <TextField
              size="small"
              placeholder="Search for a country..."
              variant="outlined"
              sx={{ minWidth: 200 }}
            />

            <FormControl size="small" sx={{ minWidth: 150 }}>
              <InputLabel>Filter by Region</InputLabel>
              <Select
                value={region}
                onChange={handleRegionChange}
                label="Filter by Region"
              >
                <MenuItem value="Africa">Africa</MenuItem>
                <MenuItem value="America">America</MenuItem>
                <MenuItem value="Asia">Asia</MenuItem>
                <MenuItem value="Europe">Europe</MenuItem>
              </Select>
            </FormControl>

            <IconButton onClick={handleThemeToggle} color="inherit">
              {darkMode ? <Brightness7 /> : <Brightness4 />}
              <Typography variant="body2" sx={{ ml: 1 }}>
                Dark Mode
              </Typography>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
