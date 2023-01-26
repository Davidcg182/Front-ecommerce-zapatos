import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {store} from './Store';
import { Auth0Provider } from "@auth0/auth0-react";
import 'bootstrap/dist/css/bootstrap.css'; 
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import { render } from "react-dom";
import axios from "axios"

//axios.defaults.baseURL = "http://localhost:3001/"
axios.defaults.baseURL = "https://henry-pf-backend-production.up.railway.app/"

render(
<Provider store={store}  >
<React.StrictMode>
  <Auth0Provider
  domain="dev-3ossxtz5x7gdz7wj.us.auth0.com"
  clientId="TgHHiXRYXfAsLGiykaAqt5reE43gZir6"
  redirectUri={window.location.origin }
  > 
<App />
  </Auth0Provider>
  </React.StrictMode>
  </Provider>

, document.getElementById('root'));



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
