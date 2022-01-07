import React from 'react';
import ReactDOM from 'react-dom';
import Roadmap from './Components/PackageCard/Roadmap/Roadmap';
import style from './index.module.css'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Roadmap />
  </React.StrictMode>,
  document.getElementById('root')
);

