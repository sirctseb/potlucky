import React from 'react';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { reactReduxFirebase, firebaseStateReducer } from 'react-redux-firebase';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { createLogger } from 'redux-logger';
import firebase from 'firebase';

import routes from './routes';
import potluckReducer from './potluck/reducer';

import './styles/main.scss';

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
        routing: routerReducer,
        form: formReducer,
        potluck: potluckReducer,
    }),
    compose(
        applyMiddleware(createLogger()),
        reactReduxFirebase(firebase),
    ),
);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            {routes}
        </Router>
    </Provider>,
    document.getElementById('react-root'),
);
