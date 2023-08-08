import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import axios from 'axios';
// const { BACK_END_URL } = import.meta.env;

axios.defaults.baseURL = "http://localhost:3001";
// axios.defaults.baseURL = BACK_END_URL;
// axios.defaults.baseURL = 'https://countries-back-production-94f4.up.railway.app';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
