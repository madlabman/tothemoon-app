import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';

import {registerScreens} from './src/screens';
import configureStore from './src/store/store';
import navigatorStyle from './src/screens/navigatorStyle';
import startTabs from './src/screens/TabsLayout/tabsLayout';
import {getLoginData, getToken, setToken} from './src/storage';
import {signIn} from './src/store/actions/auth';

const store = configureStore();
registerScreens(store, Provider); // this is where you register all of your app's screens

Navigation.startSingleScreenApp({
    screen: {
        screen: 'tothemoonapp.auth',
        title: 'ToTheMoon',
        navigatorStyle
    }
});