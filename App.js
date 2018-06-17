import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';

import {registerScreens} from './src/screens';
import configureStore from './src/store/store';
import navigatorStyle from './src/screens/navigatorStyle';

const store = configureStore();
registerScreens(store, Provider); // this is where you register all of your app's screens

// start the app
Navigation.startSingleScreenApp({
    screen: {
        screen: 'tothemoonapp.auth',
        title: 'ToTheMoon',
        navigatorStyle
    }
});