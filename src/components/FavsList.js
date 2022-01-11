import Result from "./Result";

function FavsList({ data, remove }) {

    const favsList = data.map((value) =>
        <Result
            data={value}
            key={value.id}
            remove={remove}
        />
    );

    return (
        <div>
            <h1>FavsList Component</h1>
            <ul>
                {favsList}
            </ul>
        </div>
    )
}

export default FavsList;