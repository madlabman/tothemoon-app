import {AsyncStorage} from 'react-native';
import {LOGIN_KEY, PASSWORD_KEY, TOKEN_KEY} from './keys';

export const getToken = () => {
    return AsyncStorage.getItem(TOKEN_KEY);
};

export const setToken = token => {
    return AsyncStorage.setItem(TOKEN_KEY, token);
};

export const removeToken = () => {
    return AsyncStorage.removeItem(TOKEN_KEY);
};

export const getLoginData = () => {
    return new Promise((resolve, reject)=> {
        Promise.all([
            AsyncStorage.getItem(LOGIN_KEY),
            AsyncStorage.getItem(PASSWORD_KEY),
        ]).then(
            data => {
                if (data[0] && data[1]) {
                    resolve(
                        {
                            login: data[0],
                            password: data[1]
                        }
                    );
                } else {
                    reject();
                }
            }
        ).catch(
            error => {
                console.log(error);
                reject();
            }
        );
    });
};

export const setLoginData = (login, password) => {
    return Promise.all([
        AsyncStorage.setItem(LOGIN_KEY, login),
        AsyncStorage.setItem(PASSWORD_KEY, password),
    ]);
};

export const removeLoginData = () => {
    return Promise.all([
        AsyncStorage.removeItem(LOGIN_KEY),
        AsyncStorage.removeItem(PASSWORD_KEY),
    ]);
};