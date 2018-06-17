import {RECEIVE_BALANCE, REQUEST_BALANCE} from "../actions/actionTypes";

const initialState = {
    items: [
        {
            key: 'btc',
            symbol: 'btc',
            amount: 1,
        },
        {
            key: 'usd',
            symbol: 'dollar',
            amount: 1,
        },
        {
            key: 'rub',
            symbol: 'rub',
            amount: 1,
        },
    ],
    isFetching: false
};

const balanceReducer = (balanceState = initialState, action) => {
    switch (action.type) {
        case REQUEST_BALANCE:
            return {
                ...balanceState,
                isFetching: true
            };
        case RECEIVE_BALANCE:
            return {
                items: balanceState.items.map(item => {
                    return {
                        ...item,
                        amount: item.amount * 2, // TODO: change logic
                    };
                }),
                isFetching: false
            };
        default:
            return balanceState;
    }
};

export default balanceReducer;