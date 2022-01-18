import Result from "./Result";
import NoValue from "./NoValue";

function ResultList({ data, searchTags, numResults, save, remove }) {

    const resultList = (data === "") ? <NoValue /> : data.map((value) => 
        <Result
            data={value}
            key={value.id}
            save= {save}
            remove= {remove}
        />
    );

    const message = (data === "") ? null : <p>{(!data.length) ? "Sorry, " : null}<b>{numResults}</b> results for exercises {(searchTags.searchedBy === "name") ? "containing the word:" : (searchTags.searchedBy === "target") ? "targetting" : "using a"}  <b>"{searchTags.searchedTerm}"</b>.</p>;

    return (
        <div>
            <h3>Results List component</h3>
            {message}
            <ul>
                {resultList}
            </ul>
        </div>
    )
}

export default ResultList;