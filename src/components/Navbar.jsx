import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";

// Importera loggor och ikon
import logoDark from "../assets/techover-logo-dark.png";
import logoLight from "../assets/techover-logo.png";
import moonIcon from "../assets/moon.svg";

export default function Navbar({ darkMode, onThemeToggle }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: darkMode ? "background.paper" : "#fff",
        color: "text.primary",
      }}
      elevation={1}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            py: 1,
          }}
        >
          {/* Vänster: Text-länk */}
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              fontWeight: 500,
              color: "inherit",
              textDecoration: "none",
              ml: -2.5,
            }}
          >
            The Flag App
          </Typography>

          {/* Mitten: Techover-logga (endast desktop) */}
          {!isMobile && (
            <Box sx={{ flexGrow: 1, textAlign: "center" }}>
              <img
                src={darkMode ? logoLight : logoDark}
                alt="Techover logo"
                style={{ height: "20px", objectFit: "contain" }}
              />
            </Box>
          )}

          {/* Höger: Dark/Light Toggle */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton onClick={onThemeToggle} color="inherit">
              <img
                src={moonIcon}
                alt="Dark mode toggle"
                style={{
                  width: "24px",
                  height: "24px",
                  filter: darkMode
                    ? "brightness(0) invert(1)"
                    : "brightness(0)",
                }}
              />
            </IconButton>
            <Typography
              variant="body2"
              sx={{ letterSpacing: 2, fontWeight: 500, mr: -2.5 }}
            >
              Dark Mode
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
