/*

state = {
    balance: {
        isFetching: false,
        items: []
    }
}

 */

import {RECEIVE_BALANCE, REQUEST_BALANCE} from './actionTypes';
import {getClient} from './axios.js';

export const requestBalance = () => {
    return dispatch => {
        // Toggle fetching status
        dispatch({
            type: REQUEST_BALANCE,
        });
        // Make request
        dispatch(getClient())
            .then(http => {
                http.get('/user/balance')
                    .then(response => {
                        const balance = response.data.balance;
                        dispatch({
                            type: RECEIVE_BALANCE,
                            balance
                        });
                    })
                    .catch(error => {
                        console.log(error);
                    });
            })
            .catch(error => {
                console.log(error);
            });

    }
};

export const receiveBalance = (balance) => {
    return {
        type: RECEIVE_BALANCE,
        balance
    }
};

