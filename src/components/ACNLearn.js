import React from 'react'
import  Axios  from './Axios';
import Student from './Student';
import StudentCs from './StudentCs';
import ConditionalRender from './ConditionalRender';
import Container from './HOC';


function ACNLearn() {
    let arr=[ { id : 101, name : "Jaya", skills : ["Angular", "Node"]},
    { id : 102, name : "Shyam", skills : ["React", "Node"]},
    { id : 103, name : "Jyothi", skills : ["MongoDB", "Node"]}
    ];
    let arrItems= arr.map((a,id)=><li key={id}>{a.id}-{a.name}-{a.skills[0]}-{a.skills[1]} </li>);
    return (
      <div className="App">
     
       
       <Student name="Sanjay" age={13}/>
       <hr/>
       <StudentCs name="Rani" age={17}/>
       <hr/>
       <ConditionalRender name={arrItems}/>
       <hr/>
       <Container/>
       <hr/>
       <Axios/>
      
      </div>
  
    );
}

export default ACNLearn
