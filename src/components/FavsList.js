import Result from "./Result";
import Box from '@mui/material/Box';

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
            <h1>FavsList Component</h1>
            <ul>
                {favsList}
            </ul>
        </Box>
    )
}

export default FavsList;