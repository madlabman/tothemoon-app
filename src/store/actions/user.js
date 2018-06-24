import {FETCH_USER} from './actionTypes';
import {getClient} from './axios.js';

export const fetchUser = () => {
    return dispatch => {
        dispatch(getClient())
            .then(http => {
                http.get('/user')
                    .then(response => {
                        dispatch({
                            type: FETCH_USER,
                            data: response.data.data
                        });
                    })
                    .catch(error => {
                        console.log(error);
                    });
            })
            .catch(error => {
                console.log(error);
            });
    }
};