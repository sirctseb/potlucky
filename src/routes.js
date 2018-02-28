import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from './App';
import Potluck from './potluck/Potluck';
import MakeNew from './MakeNew';

export default (
    <Route path='/' component={App} I>
        <IndexRoute component={MakeNew} />
        <Route path=':potluckId' component={Potluck} />
    </Route>
);
