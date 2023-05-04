import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { Provider } from "react-redux";
import { createStore, Store } from "redux";
import store from "./Store/reducer";

const ele:HTMLElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(ele);
// const store= createStore(reducer)
root.render(
  <React.StrictMode>
     <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);