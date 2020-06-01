
import React, { useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import { addTodo} from "./Redux/actions";

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

const Todo =()=>{

  const [value,setValue] = useState("")
  const dispatch = useDispatch()
  const store = useSelector(state=> state)
  const{todo} = store
  // console.log(todo)
  return(
    <>
      <h1>Todo List</h1>
        <input style={Styles.todoValue} value={value} onChange={(e)=>setValue(e.target.value)}/>
        <button style={Styles.todoButton} onClick={()=>{
          if(value ===""){
            alert("please add todo")
          }else{
            dispatch(addTodo(value))
          setValue("") }}
          }
          >
            add todo
      </button>
        
      <div>
        {todo && todo.map(ele=><div key={ele}>{ele}</div>)}
      </div>

     
    </>
  )
}

export default Todo