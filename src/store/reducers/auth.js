import {SIGNED_IN, AUTH_ERROR, SIGN_OUT} from '../actions/actionTypes';

const initialState = {
    isSignedIn: false,
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
                error: null
            };
        case AUTH_ERROR:
            return {
                ...authState,
                isSignedIn: false,
                error: action.error
            };
        case SIGN_OUT:
            return {
                ...authState,
                isSignedIn: false,
                token: null,
                error: null
            };
        default:
            return authState;
    }
}