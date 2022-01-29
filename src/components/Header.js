import '../styles/Header.css';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { blue, red } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Header({ favsMode, setFavsMode, paginate }) {

    const header = createTheme({
        typography: {
            fontFamily: "'Black Ops One', cursive",
        },
    })

    return (

        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                sx={{
                    backgroundColor: "#1c1c1c",
                    color: "#FFFEFE",
                    textAlign: "left"
                }}
                position="static">
                <Toolbar>
                    <ThemeProvider theme={header}>
                        <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
                            weightForm
                        </Typography>
                    </ThemeProvider>
                    <Button
                        sx={{
                            backgroundColor: (favsMode) ? red[800] : blue[500],
                            color: "#FFFEFE",
                            textAlign: "left"
                        }}
                        variant="outlined"
                        onClick={() => { setFavsMode(!favsMode); paginate(1) }}
                    >
                        {(favsMode) ? "Back to search" : "View your favs"}
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header;