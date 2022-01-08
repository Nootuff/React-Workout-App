import React, { useState } from "react";

export default save => {
    const [favs, setFavs] = useState(JSON.parse(localStorage.getItem("favExercises")) || []);

    const saveFunc = (value) => {
        console.log(value)
        let favsHolder = [...favs, value]
        setFavs(favsHolder)
        window.localStorage.setItem('favExercises', JSON.stringify(favsHolder));
    }

    
    const removeFunc = (value) => { //Something like this
        
        let newFavs = favs.filter(test => test.id !== value.id) 
        
        setFavs(newFavs)
        window.localStorage.setItem('favExercises', JSON.stringify(newFavs));
        
       //alert("remove")
      //alert(value.id)
    }

    return [favs, saveFunc, removeFunc];

}