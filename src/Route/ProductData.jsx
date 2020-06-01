
import React,{useContext} from "react";
import {useParams} from "react-router-dom"
import {AppContext} from "../ProductContext"

const ProductData =()=>{

  const product = useContext(AppContext)
  const params = useParams()
  console.log(params)

  const value = product.find(ele=>ele.id === Number(params.id))

  return(
    <>
      <h1>ProductData page</h1>
          <h1>
            {value.id} 
            {value.name}
          </h1>
    </>
  )
}

export default ProductData