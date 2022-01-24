import '../styles/Header.css';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Header({ favsMode, setFavsMode, paginate }) {

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
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        weightForm
                    </Typography>
                    <Button
                        sx={{
                            backgroundColor: (favsMode) ? "red" : "blue",
                            color: "#FFFEFE",
                            textAlign: "left"
                        }}
                        variant="outlined"
                        color="inherit"
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