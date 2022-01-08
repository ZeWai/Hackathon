import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import PackageModal from './components/packagemodal/PackageModal'
import './index.css';




ReactDOM.render(
  <React.StrictMode>
    <PackageModal />
  </React.StrictMode>,
  document.getElementById('root')
);

