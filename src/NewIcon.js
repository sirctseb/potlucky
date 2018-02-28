import React from 'react';
import { firebaseConnect } from 'react-redux-firebase';
import { browserHistory } from 'react-router';

import PotSVG from './PotSVG';
import PlusSVG from './PlusSVG';

const emptyPotluck = {
    name: 'It\'s potluck time!',
};

export default firebaseConnect()(({ firebase }) => (
    <div className='new-icon'
        onClick={() => {
            firebase.push('potlucks', emptyPotluck)
                .then(snapshot => browserHistory.push(`/${snapshot.key}`));
        }}>
        <PotSVG className='new-icon__pot-icon' />
        <PlusSVG className='new-icon__plus-icon' />
    </div>));
