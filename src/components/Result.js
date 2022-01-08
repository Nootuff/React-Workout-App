import useLocalStorageState from "../hooks/useLocalStorageState"

function Result(props) {

    const [favs] = useLocalStorageState();

    const capitalizer = (input) => input.charAt(0).toUpperCase() + input.slice(1);

    return (
        <li id={props.data.id}>
            <h3>{capitalizer(props.data.name)}</h3>
            current favs: {favs.length}
            <img src={props.data.gifUrl} alt="Form demonstration animation" ></img>
            <p><b>Target:</b> {capitalizer(props.data.target)}</p>
            <p><b>Equipment required:</b> {capitalizer(props.data.equipment)}</p>
            <button onClick={() => {props.remove(props.data)}}>Remove from Favs</button>
            <button onClick={() => {props.save(props.data)}}>Save to favs</button>
        </li>
    )
}

export default Result;