import React from 'react'
import {Button, Text, View} from "react-native";

import startTabs from '../TabsLayout/tabsLayout';

class AuthScreen extends React.Component {
    loginHandler = () => {
        startTabs();
    };

    render() {
        return (
            <View>
                <Text>Здесь будет форма входа в приложение</Text>
                <Button onPress={this.loginHandler} title="Войти"/>
            </View>
        )
    }
}

export default AuthScreen;