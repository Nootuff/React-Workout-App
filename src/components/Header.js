import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { blue, red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import '../styles/Header.css';

function Header({ favsMode, setFavsMode, setPage }) {

  const defaultTheme = createTheme();

  return (
    <AppBar
      className="Header"
      sx={{ bgcolor: "#1c1c1c", color: "#FFFEFE" }}
      position="static">
      <Toolbar>
        <Typography variant="h3" component="div" className="Header-logo"
          sx={{
            flexGrow: 1,
            fontFamily: "'Black Ops One', cursive",
            [defaultTheme.breakpoints.only("xs")]: {
              fontSize: "1.5rem",
            },
            [defaultTheme.breakpoints.only("sm")]: {
              fontSize: "2.7rem",
            },
            [defaultTheme.breakpoints.only("lg")]: {
              fontSize: "3.5rem",
            }
          }}>
          weightForm
        </Typography>
        <Button
          className="Header-button"
          sx={{
            bgcolor: (favsMode) ? red[700] : blue[500],
            color: "#FFFEFE",

            [defaultTheme.breakpoints.only("xs")]: {
              fontSize: "0.7rem",
              padding: "4px 11px",
            },
            [defaultTheme.breakpoints.only("lg")]: {
              fontSize: "0.8rem",
              padding: "6px 13px"
            },
            textAlign: "left",
            ':hover': {
              bgcolor: (favsMode) ? red[900] : ""
            },
          }}
          variant="contained"
          onClick={() => { setFavsMode(!favsMode); setPage(1); }}
        >
          {(favsMode) ? "Back to search" : "View your favs"}
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header;