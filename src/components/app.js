import React from 'react';
import '../assets/css/app.css';
import 'materialize-css/dist/js/materialize'
import 'materialize-css/dist/css/materialize.min.css'
import List from './list'
import {Route} from 'react-router-dom'

const App = () => (
    <div className="container">
        <Route path="/" exact component={List}/>
    </div>
);

export default App;
