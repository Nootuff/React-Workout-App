import React, { useState } from 'react';

function ResultList(props) {

    //const [data, setData] = useState();
    // const [searchTerm, setSearchTerm] = useState("");


    //var apitest = process.env.REACT_APP_RAPIDAPI_KEY;
    /*
        var options = {
            method: 'GET',
            url: `https://exercisedb.p.rapidapi.com/exercises/name/${searchTerm}`, //use string template literals here or just put in urlHolder
            headers: {
                'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
                'x-rapidapi-key': apitest  //"123"
            }
        };
    
        function work() {
            
            return axios.request(options).then(function (response) { //Response appears to be the argument to hold the actual returned data
                //console.log(response.data);
                setData(response.data);
            }).catch(function (error) {
                console.error(error);
            });
           
           console.log("y")
        }
        
        */

    var data = props.data;

    var allData = (data === "") ? "nothing" : data.map(value => //Got to find some way to capitlize first word in name. Need an id too
        <li> 
            {value.name}
        </li>
        ) 


    return (
        <div>
            <h3>Results List component</h3>
            {/*<button onClick={work} >Click</button> */}

            <ul>
                {allData}
            </ul>
            {/*
                test.map((result) => (
                    <p>
                       
                    </p>
                ))
                */}
        </div>
    )
}

export default ResultList;