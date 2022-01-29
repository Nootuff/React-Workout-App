import Result from "./Result";
import NoValue from "./NoValue";
import Typography from '@mui/material/Typography';

function ResultList({ data, searchTags, numResults, save, remove }) {

    const resultList = (data === "") ? <NoValue /> : data.map((value) =>
        <Result
            data={value}
            key={value.id}
            save={save}
            remove={remove}
        />
    );

    const message = (data === "") ? null : <p>{(!data.length) ? "Sorry, " : null}<b>{numResults}</b> results for exercises {(searchTags.searchedBy === "name") ? "containing the word:" : (searchTags.searchedBy === "target") ? "targetting" : "using a"}  <b>"{searchTags.searchedTerm}"</b>.</p>;

    return (
        <div >
            <Typography variant="h5" >
                {message}
            </Typography>
            <ul style={{listStyleType: "none",  padding: "0" }}>
                {resultList}
            </ul>
        </div>
    )
}

export default ResultList;