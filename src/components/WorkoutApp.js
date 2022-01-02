import React, { useState } from 'react';
import ResultList from "./ResultList";
import SearchForm from "./SearchForm";


function WorkoutApp(props) {

    const [value, setValue] = useState("");

    const handleChangeFunc = event => {
        setValue(event.target.value);
        
    };


    const handleSubmitFunc = (tester) => {
        alert(value) 
    };

    return (
        <div>
            <h3>App parent component</h3>
            <SearchForm 
            handleChange={handleChangeFunc}
             handleSubmit={handleSubmitFunc}
             value={value}
            />
            <ResultList />
            {/*<p>{value}</p>*/}
        </div>
    )
}

export default WorkoutApp;