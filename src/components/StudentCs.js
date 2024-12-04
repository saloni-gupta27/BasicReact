import React, { Component } from "react";

class StudentCs extends Component{
    constructor(){
        super();
        this.state= {marks: 12}
        
    }
    modifyState=()=>{
        if(this.state.marks<=95){
           this.setState({marks: this.state.marks+5
            })
        }
        else{
            alert("student marks cannot be more than 100")
        }
    }
   render(){
    return(
        <div>
            <h3>ClassBased</h3>
            <p>
            Name of the Student = {this.props.name}
            </p>
            <p>
            Age of the Student = {this.props.age}
            </p>
            <p>
            Marks of the Student = {this.state.marks}
            </p>
            <button onClick={this.modifyState}> Click to modify State</button>
        </div>
    )
   }

}
export default StudentCs