import React from 'react';
import ReactDOM from 'react-dom';
// Provider keeps track of store (global state) to enable access anywhere inside of app
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

import App from './App';

/* Compose creates a function composition, from rightmost function to left. Values are
 * fed in from the rightmost function to the leftmost, where the output of the leftmost
 * is returned. The rightmost function is the only one that can accept more than one param
 * and dictates the signature of the resulting composed function.
 */
const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);