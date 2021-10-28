import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const loader = document.querySelector('#loader');
const showLoader = () => loader.classList.remove('hidden');
const hideLoader = () => loader.classList.add('hidden');

setTimeout(() =>
  ReactDOM.render(
    <React.StrictMode>
      <App
        hideLoader={hideLoader}
      />
    </React.StrictMode>,
    document.getElementById('root')
  ), 3000);