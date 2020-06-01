

import React from "react";
import {Link,Route,Switch} from "react-router-dom"
import Home from "./Route/Home"
import About from "./Route/About"
import Product from "./Route/Product"
import ProductData from "./Route/ProductData"

const Navigation = ()=>{
  return(
    <>
      <Link style={{margin:10,fontSize:20}} to="/">Home</Link>
      <Link style={{margin:10,fontSize:20}} to="/about">About</Link>
      <Link style={{margin:10,fontSize:20}} to="/product">Product</Link>
    </>
  )
}



const Routing =()=>{
  return(
    <>
      <h1>react redux routing</h1>

      <Navigation/>
      <Route path="/" exact component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/product" component={Product}/>
      <Route path="/product/:id" component={ProductData}/>
    </>
  )
}

export default Routing