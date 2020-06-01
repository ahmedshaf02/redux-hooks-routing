
import React,{createContext} from "react";

const product=[
  {id:1,name:"mobile"},
  {id:2,name:"charger"},
  {id:3,name:"battery"},
  {id:4,name:"laptop"}
  ]
  
export const AppContext = createContext()

const ProductContext =(props)=>{
  return(
    <>
    <AppContext.Provider value={product}>
      {props.children}
    </AppContext.Provider>
    </>
  )
}

export default ProductContext