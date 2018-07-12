import {getFCMTokenFromStorage, setFCMTokenToStorage, removeFCMTokenFromStorage} from '../../storage';
import {getClient} from './axios';
import firebase from 'react-native-firebase';

export const getFCMTokenFromStore = () => {
    return dispatch => {
        getFCMTokenFromStorage()
            .then(token => {
                if (!token) {
                    dispatch(getFCMToken())
                }
            })
            .catch(error => {
                // Some error
                console.log(error);
                dispatch(getFCMToken())
            });
    }
};

export const getFCMToken = () => {
    return dispatch => {
        firebase.messaging().getToken()
            .then(fcmToken => {
                if (fcmToken) {
                    // user has a device token
                    console.log(fcmToken);
                    return dispatch(receiveFCMToken(fcmToken))
                } else {
                    // user doesn't have a device token yet
                    console.log('No token provided');
                }
            });
    }
};

export const receiveFCMToken = fcmToken => {
    return dispatch => {
        setFCMTokenToStorage(fcmToken);
        // Save new token
        dispatch(getClient())
            .then(http => {
                http.post('/user/fcm-token', {
                    token: fcmToken
                })
                    .then(response => {
                        console.log('FCM token saved to database.')
                    })
                    .catch(error => {
                        console.log('Error while loading FCM to server.');
                        console.log(error);
                    })
            })
    }
};

export const removeFCMToken = () => {
    return dispatch => {
        removeFCMTokenFromStorage()
            .then(() => {
                console.log('FCM token was removed.');
            });
    }
};
