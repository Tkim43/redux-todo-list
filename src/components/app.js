import React from 'react';
import '../assets/css/app.css';
import 'materialize-css/dist/js/materialize'
import 'materialize-css/dist/css/materialize.min.css'
import logo from '../assets/images/cute.gif';

const App = () => (
    <div className="container">
        <img src={logo} className="center logo rotate"/>
        <h1 className="center">Pikachu To do List</h1>
        <p className="center grey-text">now with Redux</p>
    </div>
);

export default App;
