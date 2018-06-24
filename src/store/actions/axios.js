import axios from 'axios';
import {getTokenFromStore, refreshToken} from './auth';

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
                    console.log(error.response);
                    // Error
                    if (error.response) {
                        // The request was made and the server responded with a status code
                        if (
                            error.response.status === 401
                        ) {
                            // TODO: remove token and move to login screen
                            dispatch(refreshToken());
                        } else if (error.response.status === 500) {
                            return error;
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