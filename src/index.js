import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers'
import promise from './middleware/promise'

import App from './components/app';

//create the store itself
const store = createStore(rootReducer, {}, applyMiddleware(promise));

ReactDOM.render(
    // provider is what gives the whole application everything connect is what it connects you to everything
    <Provider store = {store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
