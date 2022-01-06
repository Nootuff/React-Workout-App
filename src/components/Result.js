function Result({data}) {

    const capitalizer = (input) => input.charAt(0).toUpperCase() + input.slice(1);

    return (
        <li id={data.id}>
            <h3>{capitalizer(data.name)}</h3>
            <img src={data.gifUrl} alt="Form demonstration animation" ></img>
            <p><b>Target:</b> {capitalizer(data.target)}</p>
            <p><b>Equipment required:</b> {capitalizer(data.equipment)}</p>
            <button>Save to favs</button>
        </li>
    )
}

export default Result;