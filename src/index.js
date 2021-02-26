import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './Firebase'
import 'bootswatch/dist/darkly/bootstrap.min.css'
import 'react-accessible-accordion/dist/fancy-example.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
