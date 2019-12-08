import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./redux/store/index";

import CommentApp from "./CommentApp";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <CommentApp />
  </Provider>,
  rootElement
);
