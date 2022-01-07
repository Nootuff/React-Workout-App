import React, { useState } from "react";

export default save => {
    const [favs, setFavs] = useState(JSON.parse(localStorage.getItem("favExercises")) || []);

    const saveFunc = (value) => {
        console.log(value)
        let favsHolder = [...favs, value]
        setFavs(favsHolder)
        window.localStorage.setItem('favExercises', JSON.stringify(favsHolder));
    }

    
    const deleteFunc = (value) => { //Something like this
        let newFavs = favs.filter(test => test.id !== value.id) 
        
        setFavs(newFavs)
        window.localStorage.setItem('favExercises', JSON.stringify(newFavs));
    }

    return [favs, saveFunc];

}