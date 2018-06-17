/*

state = {
    signals: {
        isFetching: false,
        items: [],
        levelFilter: 'SIGNALS_ALL'
    }
}

 */

import {RECEIVE_SIGNALS, REQUEST_SIGNALS} from "./actionTypes";

export const requestBalance = () => {
    return {
        type: REQUEST_SIGNALS
    }
};

export const receiveSignals = (signals) => {
    return {
        type: RECEIVE_SIGNALS,
        signals
    }
};