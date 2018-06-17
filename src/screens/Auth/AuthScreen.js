import React from 'react'
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import startTabs from '../TabsLayout/tabsLayout';
import DefaultContainer from '../../components/DefaultContainer/DefaultContainer';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

class AuthScreen extends React.Component {
    loginHandler = () => {
        startTabs();
    };

    render() {
        return (
            <DefaultContainer>
                <View style={styles.container}>
                    <Text style={styles.enterFund}>Войти в фонд</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Логин"
                        placeholderTextColor="#adadad"
                        underlineColorAndroid="transparent"
                    />
                    <TextInput
                        style={[styles.textInput, styles.passwordInput]}
                        placeholder="Пароль"
                        placeholderTextColor="#adadad"
                        underlineColorAndroid="transparent"
                        secureTextEntry={true}
                    />
                    <Icon.Button name="sign-in" color="#fff" backgroundColor='#0fa395' onPress={this.loginHandler}>
                        <Text style={styles.loginButton}>Войти</Text>
                    </Icon.Button>
                </View>
                <ErrorMessage text="Неверный логин или пароль" />
            </DefaultContainer>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    enterFund: {
        color: '#fff',
        fontFamily: 'museo_regular',
        fontSize: 18,
        marginBottom: 20
    },
    textInput: {
        marginBottom: 20,
        padding: 4,
        width: 150,
        borderBottomWidth: 2,
        borderBottomColor: '#00cdc3',
        fontFamily: 'museo_regular',
        color: '#fff',
        textAlign: 'center',
    },
    passwordInput: {
        marginBottom: 30,
    },
    loginButton: {
        fontFamily: 'museo_regular',
        color: '#fff'
    },
});

export default AuthScreen;