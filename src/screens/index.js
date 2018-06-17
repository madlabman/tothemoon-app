import {Navigation} from 'react-native-navigation'

import AuthScreen from './Auth/AuthScreen';
import BalanceScreen from './Balance/BalanceScreen';
import SignalsScreen from './Signals/SignalsScreen';

export function registerScreens() {
    Navigation.registerComponent('tothemoonapp.auth', () => AuthScreen);
    Navigation.registerComponent('tothemoonapp.balance', () => BalanceScreen);
    Navigation.registerComponent('tothemoonapp.signals', () => SignalsScreen);
}