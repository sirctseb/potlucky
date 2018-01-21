import React from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { reactReduxFirebase, firebaseStateReducer } from 'react-redux-firebase';
import firebase from 'firebase';

import App from './App';

const firebaseConfig = {
    apiKey: 'AIzaSyCtUN0dVdhGZuG6TyrzGJWas4jsQI5ujas',
    authDomain: 'potlucky-dev.firebaseapp.com',
    databaseURL: 'https://potlucky-dev.firebaseio.com',
    projectId: 'potlucky-dev',
    storageBucket: 'potlucky-dev.appspot.com',
    messagingSenderId: '83393501900',
};

firebase.initializeApp(firebaseConfig);

const store = createStore(
    combineReducers({
        firebase: firebaseStateReducer,
    }),
    reactReduxFirebase(firebase),
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
