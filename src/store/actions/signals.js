/*

state = {
    signals: {
        isFetching: false,
        items: [],
        levelFilter: 'SIGNALS_ALL'
    }
}

 */

import {RECEIVE_SIGNALS, REQUEST_SIGNALS} from './actionTypes';
import {getClient} from './axios.js';

export const requestSignals = () => {
    return dispatch => {
        // Fetching status
        dispatch({
            type: REQUEST_SIGNALS
        });
        // Make request
        dispatch(getClient())
            .then(http => {
                http.get('/signal')
                    .then(response => {
                        dispatch(receiveSignals(response.data.signals))
                    })
                    .catch(error => {
                        console.log(error);
                    });
            })
            .catch(error => {
                console.log(error);
            })
    }
};

export const receiveSignals = (signals) => {
    return {
        type: RECEIVE_SIGNALS,
        signals
    }
};