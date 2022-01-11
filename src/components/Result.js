import React, { useState, useEffect } from 'react';
import useLocalStorageState from "../hooks/useLocalStorageState"

function Result(props) {

    const [favdStatus, setFavdStatus] = useState(false);

    const [favs] = useLocalStorageState(); //Imports the favd exercises in localStorage so it ca 

    const capitalizer = (input) => input.charAt(0).toUpperCase() + input.slice(1);

useEffect(() => { // Can the for loop & the favdStatus  be moved to a hook?
    for (let i = 0; i < favs.length; i++) {
        if(favs[i].id === props.data.id){
             setFavdStatus(true)
          }  
        }}, []);

    return (
        <li id={props.data.id}>
            <h3>{capitalizer(props.data.name)}</h3>            
            <img src={props.data.gifUrl} alt="Form demonstration animation" ></img>
            <p><b>Target:</b> {capitalizer(props.data.target)}</p>
            <p><b>Equipment required:</b> {capitalizer(props.data.equipment)}</p>
           
            {(favdStatus) ? /*"favd" : "not favd"*/ <button onClick={() => {props.remove(props.data); setFavdStatus(false); }}>Remove from Favs</button> : <button onClick={() => {props.save(props.data); setFavdStatus(true);}}>Save to favs</button>}

            {/*  */}
        </li>
    )
}

export default Result;