import Result from "./Result";
//import Fav from "./Fav";

function FavsList({ data, save, remove }) {

    const favsList = data.map((value) =>
        <Result
            data={value}
            key={value.id}
            save={save}
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