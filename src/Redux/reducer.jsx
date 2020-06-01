
import {ADD_TODO_ACTION,INC_COUNTER,DEC_COUNTER} from "./actions"


const initState = {
  todo:[],
  count:0
}

export default (state=initState, {type,payload})=>{
  
  switch(type){

    case ADD_TODO_ACTION:
    return{
      todo:[...state.todo,payload]
    }
    case INC_COUNTER:
    return{
      ...state,
      count:state.count+payload
    }
    case DEC_COUNTER:
    return{
      ...state,
      count:state.count-payload
    }
    default:
    return state
  }
}
