import {createStore, combineReducers, compose} from 'redux'

import balanceReducer from './reducers/balance'
import signalsReducer from './reducers/signals';
import userReducer from './reducers/user';

const rootReducer = combineReducers({
    balance: balanceReducer,
    signals: signalsReducer,
    user: userReducer
});

let composeEnhancers = compose;

if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
    return createStore(rootReducer, composeEnhancers());
};

export default configureStore;