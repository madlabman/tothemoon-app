import {RECEIVE_BALANCE, REQUEST_BALANCE} from "../actions/actionTypes";

const initialState = {
    items: [
        {
            key: 'btc',
            symbol: 'btc',
            amount: 0,
        },
        {
            key: 'usd',
            symbol: 'dollar',
            amount: 0,
        },
        {
            key: 'rub',
            symbol: 'rub',
            amount: 0,
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
                        amount: action.balance.body[item.key]
                    };
                }),
                isFetching: false
            };
        default:
            return balanceState;
    }
};

export default balanceReducer;