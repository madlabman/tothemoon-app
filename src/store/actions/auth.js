import {SIGNED_IN, AUTH_ERROR, SIGN_OUT, AUTH_REFRESH} from './actionTypes';
import {
    setToken,
    setLoginData,
    getLoginData,
    getToken,
    removeToken,
    removeLoginData
} from '../../storage';
import {getClient} from './axios';
import startTabs from '../../screens/TabsLayout/tabsLayout';
import App from '../../../App';

export const signIn = (data) => {
    return dispatch => {
        // Make request
        dispatch(getClient())
            .then(http => {
                http.post('/auth/login', data)
                    .then(response => {
                        if (response.data.status === 'success') {
                            // Get header
                            const token = response.headers.authorization;
                            if (token) {
                                dispatch(tokenReceived(token));
                                setLoginData(data.login, data.password);
                                startTabs();
                            }
                        } else {
                            dispatch(authError({
                                message: 'Неверный логин или пароль!'
                            }))
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    });
            });
    }
};

export const getTokenFromStore = () => {
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            let token = getState().auth.token;
            if (!token) {
                getToken()
                    .then(tokenFromStorage => {
                        if (tokenFromStorage) {
                            resolve(tokenFromStorage);
                        } else {
                            reject();
                        }
                    })
                    .catch(error => {
                        reject();
                    })
            } else {
                resolve(token);
            }
        });
    }
};

export const refreshToken = () => {
    return (dispatch, getState) => {
        if (!getState().auth.isRefreshing) {
            dispatch({
                type: AUTH_REFRESH
            });
            getLoginData()
                .then(loginData => {
                    dispatch(signIn(loginData))
                })
                .catch(error => {
                    dispatch({
                        type: SIGN_OUT
                    })
                });
        }
    }
};

export const removeTokenFromStore = () => {
    return dispatch => {
        return dispatch(clearStorage())
            .then(() => {
                return removeToken();
            })
            .catch(error => {
                console.log(error);
            });

    }
};

export const clearStorage = () => {
    return dispatch => {
        return removeLoginData();
    };
};

export const tokenReceived = (token) => {
    setToken(token);
    return {
        type: SIGNED_IN,
        token
    }
};

export const authError = error => {
    return {
        type: AUTH_ERROR,
        error: error.message
    }
};

export const autoSignIn = () => {
    return dispatch => {
        dispatch(getTokenFromStore())
            .then(token => {
                dispatch(tokenReceived(token));
                startTabs();
            })
            .catch(error => {
                dispatch(refreshToken());
            })
    }
};

export const signOut = () => {
    return dispatch => {
        dispatch(removeTokenFromStore())
            .then(() => {
                dispatch({
                    type: SIGN_OUT
                });
                // Start app again
                App();
            })
            .catch(error => {
                console.log(error);
            })
    }
};