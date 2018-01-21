import update from 'immutability-helper';

import * as actionTypes from './actionTypes';

const initialState = {
    isHost: false,
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
    case actionTypes.SET_IS_HOST:
        return update(state, {
            isHost: { $set: action.isHost },
        });
    default:
        return state;
    }
};
