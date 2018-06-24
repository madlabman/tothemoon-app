import axios from 'axios';
import {getTokenFromStore} from './auth';

export const getClient = () => {
    return dispatch => {
        const client = new Promise((resolve, reject) => {
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
                            error.response.status === 401 &&
                            ['UnauthorizedAccess', 'InvalidToken'].indexOf(error.response.data.code) > -1
                        ) {
                            // TODO: remove token and move to login screen
                        } else if (error.response.status === 500) {
                            return error;   // will be proceed by requested function
                        }
                    } else if (error.request) {
                        // The request was made but no response was received
                        console.log(error);
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

        return client;
    }
};