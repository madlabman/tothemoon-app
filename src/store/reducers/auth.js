import {SIGNED_IN, AUTH_ERROR, SIGN_OUT, AUTH_REFRESH} from '../actions/actionTypes';

const initialState = {
    isSignedIn: false,
    isRefreshing: false,
    token: null,
    error: null
};

export default authReducer = (authState = initialState, action) => {
    switch (action.type) {
        case SIGNED_IN:
            return {
                ...authState,
                isSignedIn: true,
                token: action.token,
                isRefreshing: false,
                error: null
            };
        case AUTH_REFRESH:
            return {
                ...authState,
                isRefreshing: true,
                isSignedIn: false
            };
        case AUTH_ERROR:
            return {
                ...authState,
                isSignedIn: false,
                error: action.error
            };
        case SIGN_OUT:
            return initialState;
        default:
            return authState;
    }
}