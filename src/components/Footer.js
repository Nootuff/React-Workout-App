import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import CopyrightIcon from '@mui/icons-material/Copyright';
import Link from '@mui/material/Link';
import '../styles/Footer.css';

function Footer() {
    return (
        <Box className="Footer" >
            <nav id="footerNav">
                <table id="footerTable">
                    <tbody>
                        <tr>
                            <td className="footerItem">
                                <Typography color="white" > <CopyrightIcon fontSize="inherit" /> Adam Walker 2022</Typography>
                            </td>
                            <td className="footerItem footerLink">
                                <Typography><Link href="https://nootuff.github.io/" underline="hover" color="white" target="_blank">My portfolio</Link></Typography>
                            </td>
                            <td className="footerItem footerLink">
                                <Typography><Link href="https://github.com/Nootuff/React-Workout-App" underline="hover" color="white" target="_blank">View site code on GitHub <GitHubIcon fontSize="inherit" /></Link></Typography>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </nav>
        </Box>
    )
}

export default Footer;