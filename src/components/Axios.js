import axios from 'axios'
import React, { Component } from 'react'

export default class Axios extends Component {
    constructor(){
        super();
      this.state = {
        response:[]
      }
      
    }
     data={
       
        title: "This is new edition",
        body:"This is newly added in the list"
     }
    
    
    
    componentDidMount(){
        axios.patch("https://jsonplaceholder.typicode.com/posts/1",this.data).then((res)=>console.log(res.data)
        ).catch(err=>console.log(err));
        
       axios.get("https://jsonplaceholder.typicode.com/posts/",{params:{id:2}}).then((res)=>{
            this.setState({ response:res.data})
        }).catch((err)=>{
           console.log(err);
           
        })
        //https://mocki.io/v1/dfe2109a-ae78-4e7b-b069-fd2d06e6ec73
        // axios.get("https://mocki.io/v1/dfe2109a-ae78-4e7b-b069-fd2d06e6ec73").then((res)=>{
        //     this.setState({ response: JSON.stringify(res.data)})
        // }).catch((err)=>{
        //    console.log(err);
           
        // })
    }
  render() {
    return (
      <div>
        <h3>Response</h3>
        {this.state.response.map((a,id)=> {return <li key={id}>{a.userId}-{a.title}-{a.body}</li>})}
      </div>
    )
  }
}
