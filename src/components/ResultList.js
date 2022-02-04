import Result from "./Result";
import NoValue from "./NoValue";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function ResultList({ data, searchTags, numResults, save, remove }) {

    const resultList = (data === "") ? <NoValue /> : data.map((value) => //If the user has somehow submitted a search with no inputted search terms, render the NoValue component, else render a list of Result components. 
        <Result
            data={value}
            key={value.id}
            save={save}
            remove={remove}
        />
    );

    const message = (data === "") ? null : <Typography variant="h5" sx={{ width: "90%", margin: "auto" }}>{(!data.length) ? "Sorry, " : null}<b>{numResults}</b> result{(data.length === 1) ? null : "s"} for exercises {(searchTags.searchedBy === "name") ? "containing the word:" : (searchTags.searchedBy === "target") ? "targetting" : "using a"}  <b>"{searchTags.searchedTerm}"</b>.</Typography>; //Custom message tailored to search result.

    return (
        <Box>
            {message}
            <ul style={{ listStyleType: "none", padding: "0" }}>
                {resultList}
            </ul>
        </Box>
    )
}

export default ResultList;