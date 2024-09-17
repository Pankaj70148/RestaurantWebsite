import React, { useState } from 'react'

export default function Hooks() {
    const [state ,setState]=  useState(0)
    const increment= ()=>{
        
 
    }
    
  return (

    
    <div>
{
    
}
      <center>  
      <p style={{margin:"100px 0px 30px 30px",fontSize:"25px"}} >{ state }</p>
    <button  onClick={()=> setState(state+1)} style={{margin:"70px",fontSize:"25px"}} >incr</button> 
    <button  style={{margin:"70px",fontSize:"25px"}}  onClick={()=> state>0? setState(state-1):0}>decr</button> 
    </center>

    </div>
  )
}
