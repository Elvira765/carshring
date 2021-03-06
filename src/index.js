import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './Redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; 
import { BrowserRouter as Router } from "react-router-dom";
import {Provider} from "react-redux";

let renderEntireTree = () => {
  ReactDOM.render(
    <Router basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>,document.getElementById('root'));
}

renderEntireTree(store.getState());

store.subscribe (() => {
  renderEntireTree( );
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
