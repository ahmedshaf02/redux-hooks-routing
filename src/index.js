import React from "react";
import ReactDOM from "react-dom";
import {store } from "./Redux/store";
import {Provider} from "react-redux";
import ProductContext from "./ProductContext"

import App from "./App";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <ProductContext>

      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProductContext>
    </Provider>
  </React.StrictMode>,
  rootElement
);
