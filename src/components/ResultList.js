import Result from "./Result";
import NoValue from "./NoValue";
import Typography from '@mui/material/Typography';

function ResultList({ data, searchTags, numResults, save, remove }) {

    const resultList = (data === "") ? <NoValue /> : data.map((value) => //If the user has somehow submitted a search with no inputted search terms, render the NoValue component, else render a list of results. 
        <Result
            data={value}
            key={value.id}
            save={save}
            remove={remove}
        />
    );

    const message = (data === "") ? null : <p>{(!data.length) ? "Sorry, " : null}<b>{numResults}</b> result{(data.length === 1) ? null : "s"} for exercises {(searchTags.searchedBy === "name") ? "containing the word:" : (searchTags.searchedBy === "target") ? "targetting" : "using a"}  <b>"{searchTags.searchedTerm}"</b>.</p>; //If there are no results of the search, render this custom message. 

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