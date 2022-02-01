import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography';

function NoValue() {
    return (
        <Paper elevation={5} sx={{padding: "20px 0", width: "80%", margin: "auto"}}>
            <Typography variant="h5">Please enter the exercise, target muscle group or equipment you wish to search for.</Typography>
        </Paper>
    )
}

export default NoValue;