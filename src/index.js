import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import App from './App';

const roots= createRoot(document.getElementById('root'));
roots.render(<App/>);

//ReactDOM.render(<App />, document.getElementById('root'));
