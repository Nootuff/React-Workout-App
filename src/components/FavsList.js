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
    <Box sx={{ mt: "50px" }}>
      <Typography variant="h5" sx={{ mb: "40px" }}>
        {(data.length) ? "Your saved exercises" : "You have no saved exercises"}
      </Typography>
      <ul style={{ listStyleType: "none", padding: "0" }}>
        {favsList}
      </ul>
    </Box>
  )
}

export default FavsList;