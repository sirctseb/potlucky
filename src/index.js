import React from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { reactReduxFirebase, firebaseStateReducer } from 'react-redux-firebase';

import App from './App';

const firebaseConfig = {
    apiKey: 'AIzaSyCtUN0dVdhGZuG6TyrzGJWas4jsQI5ujas',
    authDomain: 'potlucky-dev.firebaseapp.com',
    databaseURL: 'https://potlucky-dev.firebaseio.com',
    projectId: 'potlucky-dev',
    storageBucket: 'potlucky-dev.appspot.com',
    messagingSenderId: '83393501900',
};

const store = createStore(
    combineReducers({
        firebase: firebaseStateReducer,
    }),
    reactReduxFirebase(firebaseConfig),
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
