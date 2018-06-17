import {Navigation} from 'react-native-navigation'

import AuthScreen from './Auth/AuthScreen';
import BalanceScreen from './Balance/BalanceScreen';
import SignalsScreen from './Signals/SignalsScreen';
import AccountScreen from './Account/AccountScreen';

export function registerScreens(store, provider) {
    Navigation.registerComponent('tothemoonapp.auth', () => AuthScreen, store, provider);
    Navigation.registerComponent('tothemoonapp.balance', () => BalanceScreen, store, provider);
    Navigation.registerComponent('tothemoonapp.signals', () => SignalsScreen, store, provider);
    Navigation.registerComponent('tothemoonapp.account', () => AccountScreen);
}