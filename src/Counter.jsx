
import React, { useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import { incCount,decCount } from "./Redux/actions";

const Styles={
todoValue:{
  border:"2px solid black",
  height:50,
  borderRadius:4,
  padding:"0 20px",
  fontSize:18

},
todoButton:{
  background:"black",
  borderRadius:4,
  padding:"10px 20px",
  border:"none",
  outline:"none",
  color:"white",
  fontSize:18,
  margin:10
}
}

const Counter =()=>{

  const dispatch = useDispatch()
  const store = useSelector(state=> state)
  const{count} = store
  
  return(
    <>

      <h1>Counter: {count}</h1>
      <div>
        <button style={Styles.todoButton} onClick={()=>dispatch(incCount(1))}>
            increment 
      </button>

        <button style={Styles.todoButton} onClick={()=>dispatch(decCount(1))}>
            decrement
      </button>
      </div>
    </>
  )
}

export default Counter