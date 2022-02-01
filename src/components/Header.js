import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { blue, red } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../styles/Header.css';

function Header({ favsMode, setFavsMode, paginate }) {
    
    const defaultTheme = createTheme();

    return (
        <AppBar
            className="Header"
            sx={{ bgcolor: "#1c1c1c",  color: "#FFFEFE" }}
            position="static">
            <Toolbar>
               
                    <Typography variant="h3" component="div" className="Header-logo" 
                    sx={{ 
                        flexGrow: 1, 
                        fontFamily: "'Black Ops One', cursive",  
                        [defaultTheme.breakpoints.only("xs")]: {
                            fontSize: "1rem",
                        },
                        [defaultTheme.breakpoints.only("sm")]: {
                            fontSize: "2rem",
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
                            fontSize: "0.2rem",
                            padding: "4px 11px",
                        },
                        [defaultTheme.breakpoints.only("sm")]: {
                            fontSize: "0.5rem",
                        },
                        [defaultTheme.breakpoints.only("lg")]: {
                            fontSize: "1rem",
                            padding: "6px 13px"
                        },
                        textAlign: "left",
                        ':hover': {
                            bgcolor: (favsMode) ? red[900] : ""
                        },
                    }}
                    variant="contained"
                    onClick={() => { setFavsMode(!favsMode); paginate(1) }}
                >
                    {(favsMode) ? "Back to search" : "View your favs"}
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header;