
export const ADD_TODO_ACTION = "ADD_TODO_ACTION";
export const INC_COUNTER = "INC_COUNTER";
export const DEC_COUNTER = "DEC_COUNTER";


export const addTodo = payload =>({
  type:ADD_TODO_ACTION,
  payload:payload
})
export const incCount = payload =>({
  type:INC_COUNTER,
  payload:payload
})
export const decCount = payload =>({
  type:DEC_COUNTER,
  payload:payload
})