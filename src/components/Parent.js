import React, { useState } from "react";
import Child from "./Child";



const Parent=()=>{
    let[selectedOption , setSelectedOption]=useState("")




    return(
        <div className="parent">
            <h1>Parent Component</h1>

            <Child selectedOption={selectedOption} setSelectedOption={setSelectedOption}></Child>

            <p>Selected Option: {selectedOption}</p>
        </div>
    )
}

export default Parent;