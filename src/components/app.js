import React from 'react';
import '../assets/css/app.css';
import logo from '../assets/images/gif.gif';

const App = () => (
    <div>
        <div className="app">
            <img src={logo} className="logo rotate"/>
            <h1>Pizza Dog Time</h1>
        </div>
    </div>
);

export default App;
