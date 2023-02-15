import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '../src/font/BNaznnBd.ttf'

import 'bootstrap/dist/css/bootstrap.css';


import store from './store/store';
import { Provider } from 'react-redux';


// import data from './assets/data.js';
// console.log(data)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);