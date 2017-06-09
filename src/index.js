import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

if (process.env.NODE_ENV !== 'production') {
    const axe = require('react-axe');
    axe(React, ReactDOM, 1000);
}
// setTimeout(()=>{
//     ReactDOM.render(<App />, document.getElementById('root'));
// }, 7000);
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
