
import React,{useContext} from "react";
import {useRouteMatch,useParams,Link} from "react-router-dom"
import {AppContext} from "../ProductContext"
import App from "../App";

const Product =(props)=>{

  const product = useContext(AppContext)
  const match = useRouteMatch()
  const params = useParams()

  console.log(match)


  return(
    <>
      <h1>Product page</h1>
      <div>
        {product.map(ele=>
        <h1 key={ele.id}>
          {ele.id} 
          <Link to={`${match.url}/${ele.id}`}>{ele.name}</Link>
          
        </h1>)}
      </div>
    </>
  )
}

export default Product