import React from "react";
import HttpsRedirect from 'react-https-redirect'
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

var sslRedirect = require('heroku-ssl-redirect');
const app = express();
app.use(sslRedirect());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
