import {REQUEST_SIGNALS, RECEIVE_SIGNALS} from '../actions/actionTypes';

const initialState = {
    items: [],
    levelFilter: 'SIGNALS_ALL',
    isFetching: false,
};

const signalsReducer = (signalsState = initialState, action) => {
    switch (action.type) {
        case REQUEST_SIGNALS:
            return {
                ...signalsState,
                isFetching: true
            };
        case RECEIVE_SIGNALS:
            return {
                ...signalsState,
                items: action.signals.map(elem => {
                    return {
                        key: elem.id.toString(),
                        level: parseInt(elem.level),
                        content: elem.info,
                        date: elem.created_at
                    }
                })
            };
        default:
            return signalsState;
    }
};

export default signalsReducer;