import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import CommentList from './components/CommentList'
import BarComments from './components/BarComments'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Switch>
        <Route path='/' exact component={CommentList}/>
        <Route path='/bar' component={BarComments} />
      </Switch>
    </Provider>
  </Router>,
  rootElement
);
