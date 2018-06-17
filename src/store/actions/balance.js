/*

state = {
    balance: {
        isFetching: false,
        items: []
    }
}

 */

import {RECEIVE_BALANCE, REQUEST_BALANCE} from "./actionTypes";

export const requestBalance = () => {
    return {
        type: REQUEST_BALANCE
    }
};

export const receiveBalance = (balance) => {
    return {
        type: RECEIVE_BALANCE,
        balance
    }
};

