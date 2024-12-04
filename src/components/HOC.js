import React, { Component } from "react";

let HOC = (ModifiedComponent) =>
  class extends Component {
    constructor() {
      super();
      this.state = {
        password: "1234",
        needPassword: "yes",
      };
    }
    handlePass=()=>{}

    componentDidMount(){
    setInterval(()=>{
       
            if(this.state.needPassword==="yes"){
               this.setState({needPassword:"no"})
            }
            else{
                this.setState({needPassword:"yes"})
            }
        
    },1000);
    }
    render() {
      return (
        <div>
            <h3>This is baseComponent</h3>
          <ModifiedComponent password={this.state.needPassword==="yes"? this.state.password : ""}/>
        </div>
      );
    }
  };
  let Button =(props)=> {
        return(
            <button>{props.password ? `I have got password ${props.password}`:"I have not received password"}</button>
        )
    }
  
  let NewComponent = HOC(Button);
  class Container extends Component{
    render(){
        return(
            <NewComponent/>
        )
    }
  }

export default Container;
