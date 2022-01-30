

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { blue, red } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import CopyrightIcon from '@mui/icons-material/Copyright';
import Link from '@mui/material/Link';
import '../styles/Footer.css';

function Footer() {

    return (

        <Box className="Footer" >
            <nav id="footerNav">
                <table id="footerTable">
                    <tr>
                        <td className="footerItem">
                            <Typography color="white" > <CopyrightIcon fontSize="inherit" /> Adam Walker 2022</Typography>
                        </td>
                        <td className="footerItem">
                            <Typography><Link href="https://nootuff.github.io/" underline="none" color="white" target="_blank">My portfolio</Link></Typography>
                        </td>
                        <td className="footerItem">
                            <Typography><Link href="https://github.com/Nootuff/React-Workout-App" color="white" underline="none" target="_blank">View site code on GitHub <GitHubIcon fontSize="inherit" /></Link></Typography>
                        </td>
                    </tr>
                </table>
            </nav>
        </Box>
    )
}

export default Footer;