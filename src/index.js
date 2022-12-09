import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Search from "./Search";
import Data from "./Data";
import Time from "./Time";
import City from "./City";
import Temperature from "./Temperature";
import Image from "./Image";
import Forecast from "./Forecast";
import Code from "./Code";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <div className="App">
      <Search />
      <Data />
      <Time />
      <City />
      <Temperature />
      <Image />
      <Forecast />
      <Code />
    </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
