import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ShowsState from './Context/ShowsState';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ShowsState>
    <App/>
  </ShowsState>
);


