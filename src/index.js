import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import rootReducer from './reducers';

import App from './components/app';

//create the store itself
const store = createStore(rootReducer);

ReactDOM.render(
    // provider is what gives the whole application everything connect is what it connects you to everything
    <Provider store = {store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
