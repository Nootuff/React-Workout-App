function Result({data}) {
    return (
        <li id={data.id}>
            <h3>{data.name}</h3>
            <img src={data.gifUrl} alt="Form demonstration animation" ></img>
            <p><b>Target:</b> {data.target}</p>
            <p><b>Equipment required:</b> {data.equipment}</p>
        </li>
    )
}

export default Result;