import * as actionTypes from './actionTypes';

export const setIsHost = isHost => ({
    type: actionTypes.SET_IS_HOST,
    isHost,
});

export const setLinkCopied = isCopied => ({
    type: actionTypes.SET_IS_COPIED,
    isCopied,
});
