import React, { useState } from 'react';
import Result from "./Result";

function ResultList({data}) {

    const resultList = (data === "") ? "nothing" : data.map((value, index) => //Got to find some way to capitlize first word in name.
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