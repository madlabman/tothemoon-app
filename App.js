import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import firebase from 'react-native-firebase';
import {Alert} from 'react-native';

import {registerScreens} from './src/screens';
import configureStore from './src/store/store';
import navigatorStyle from './src/screens/navigatorStyle';

const store = configureStore();
registerScreens(store, Provider); // this is where you register all of your app's screens

firebase.messaging().hasPermission()
    .then(enabled => {
        if (enabled) {
            console.log('Has permission');
            // user has permissions
        } else {
            // user doesn't have permission
            firebase.messaging().requestPermission()
                .then(() => {
                    // User has authorised
                })
                .catch(error => {
                    // User has rejected permissions
                    Alert.alert(
                        'Обратите внимание!',
                        'Отказавшись от получения уведомлений, вы не будете получать оповещения о важных событиях.'
                    )
                });
        }
    });

export default () => {
    Navigation.startSingleScreenApp({
        screen: {
            screen: 'tothemoonapp.auth',
            title: 'ToTheMoon',
            navigatorStyle
        }
    });
}