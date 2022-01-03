import React, { useState } from 'react';
import Result from "./Result";
import NoResult from "./NoResult";
import NoValue from "./NoValue";

function ResultList({data, noResult}) {

    const resultList = (data === "") ? <NoValue /> : (!data.length ) ? <NoResult noResult={noResult} /> : data.map((value, index) => //Got to find some way to capitlize first word in name.
        <Result
            data={value}
            key={value.id}
        />
    )

    return (
        <div>
            <h3>Results List component</h3>
            <ul>
                {resultList}
            </ul>
           
        </div>
    )
}

export default ResultList;