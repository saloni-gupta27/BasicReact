import React from 'react'

function ConditionalRender(props) {
    let value=1;
    let mylayout=null;
    let arr=[1,2,3,4,5
    ];

    // let arrItems= 
    if(value===3){
        mylayout=<div style={{color:'red', backgroundColor:'green', width:'50%',margin:'auto'}}><h3>if block</h3></div>
    }else{
        mylayout=<div style={{color:'blue', backgroundColor:'yellow',width:'50%',margin:'auto'}}><h3>else block</h3></div>
    }
  return (
    <div>
        {mylayout}
        <ul>{arr}</ul>
        <ul className='list-unstyled'>{props.name}</ul>
    </div>
  )
}

export default ConditionalRender
