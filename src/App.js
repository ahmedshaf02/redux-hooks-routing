import React from "react";
import "./styles.css";
import Todo from "./Todo"
import Counter from "./Counter";
import Routing from "./Routing"

export default function App() {
  return (
    <div className="App">
      <h1>react Hooks redux, route</h1>
          
      <Todo/>
      <Counter/>
      <Routing/>
    </div>
  );
}
