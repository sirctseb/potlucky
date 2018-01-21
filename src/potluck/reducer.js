import update from 'immutability-helper';

import * as actionTypes from './actionTypes';

const initialState = {
    isHost: false,
    linkCopied: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
    case actionTypes.SET_IS_HOST:
        return update(state, {
            isHost: { $set: action.isHost },
        });
    case actionTypes.SET_IS_COPIED:
        return update(state, {
            linkCopied: { $set: action.isCopied },
        });
    default:
        return state;
    }
};
