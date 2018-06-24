import axios from 'axios';
import {getTokenFromStore, refreshToken} from './auth';
import {AlertIOS, Platform, ToastAndroid} from 'react-native';

export const getClient = () => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            const instance = axios.create({
                // baseURL: 'http://fbe.chtoto.net/api/v1'
                baseURL: 'http://localhost:8000/api/v1'
            });

            instance.interceptors.response.use(
                response => {
                    return response
                },

                error => {
                    // Error
                    if (error.response) {
                        // The request was made and the server responded with a status code
                        if (
                            error.response.status === 401
                        ) {
                            dispatch(refreshToken());
                        } else if (error.response.status === 500) {
                            return error;
                        }
                    } else {
                        // No response
                        const errorMessage = 'Не удалось обновить данные.';
                        if (Platform.OS === 'android') {
                            ToastAndroid(errorMessage);
                        } else {
                            AlertIOS.alert(
                                null,
                                errorMessage
                            )
                        }
                    }
                });

            dispatch(getTokenFromStore())
                .then(token => {
                    instance.defaults.headers.common['Authorization'] = token;
                })
                .catch(error => {
                    console.log(error);
                    reject();
                });

            resolve(instance);
        });
    }
};