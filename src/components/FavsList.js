import Result from "./Result";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function FavsList({ data, remove }) {

    const favsList = data.map((value) =>
        <Result
            data={value}
            key={value.id}
            remove={remove}
        />
    );

    return (
        <Box>
            <Typography variant="h5" >
                Your Saved Exercises
            </Typography>
            <ul style={{ listStyleType: "none", padding: "0" }}>
                {favsList}
            </ul>
        </Box>
    )
}

export default FavsList;