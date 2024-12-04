import React, { useState } from "react";

export default function Student(props){
    let [marks,setMarks] = useState(12);
    function modifyState(){
        if(marks<=95){
          setMarks(()=>marks+5);
        }
        else{
            alert("student marks cannot be more than 100")
        }
    }
    return(
        <div>
            <h3>FunctionBased</h3>
            <p>
            Name of the Student = {props.name}
            </p>
            <p>
            Age of the Student = {props.age}
            </p>
            <p>
            Marks of the Student = {marks}
            </p>
            <button onClick={modifyState}> Click to modify State</button>
        </div>
    )
}