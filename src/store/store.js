import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import balanceReducer from './reducers/balance'
import signalsReducer from './reducers/signals';
import userReducer from './reducers/user';
import authReducer from './reducers/auth';

const rootReducer = combineReducers({
    balance: balanceReducer,
    signals: signalsReducer,
    user: userReducer,
    auth: authReducer
});

let composeEnhancers = compose;

if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
    return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
};

export default configureStore;