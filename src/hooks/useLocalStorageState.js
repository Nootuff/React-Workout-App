import React, { useState } from "react";

export default save => {
    const [favs, setFavs] = useState(JSON.parse(localStorage.getItem("favExercises")) || []); //If there are already fav'd exercises in localStorage, they are the initial value of "favs", otherwise, favs is an empty array.

    const saveFunc = (value) => { 
        let favsHolder = [...favs, value] //This const holds all of the existing favs and the the newly fav'd exercise (value).
        setFavs(favsHolder) //It is set as the new value of "favs".
        window.localStorage.setItem('favExercises', JSON.stringify(favsHolder)); //favsHolder is then send to localStorage.
    }
    
    const removeFunc = (value) => { 
        let newFavs = favs.filter(fav => fav.id !== value.id) //A new favs array is created via filtering ids from all the existing favs that DON'T match the id of the fav whose "remove" button was pressed. 
        setFavs(newFavs)
        window.localStorage.setItem('favExercises', JSON.stringify(newFavs));
    }

    return [favs, saveFunc, removeFunc];

}