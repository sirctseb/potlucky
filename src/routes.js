import React from 'react';
import { Route } from 'react-router';

import App from './App';
import Potluck from './potluck/Potluck';

export default (
    <Route path='/' component={App}>
        <Route path=':potluckId' component={Potluck} />
    </Route>
);
