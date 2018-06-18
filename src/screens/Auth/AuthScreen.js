import React from 'react'
import {
    Button,
    Keyboard,
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import startTabs from '../TabsLayout/tabsLayout';
import DefaultContainer from '../../components/DefaultContainer/DefaultContainer';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

class AuthScreen extends React.Component {
    state = {
        username: '',
        password: '',
        error: null
    };

    loginHandler = () => {
        startTabs();
        this.setState(prevState => {
            return {
                ...prevState,
                error: 'Не могу войти',
            }
        })
    };

    inputHandler = (key, value) => {
        this.setState(prevState => {
            return {
                ...prevState,
                [key]: value
            }
        })
    };

    render() {
        let errorMessage = this.state.error ? <ErrorMessage text={this.state.error}/> : null;

        return (
            <DefaultContainer>
                <KeyboardAvoidingView behavior="padding">
                    <View style={styles.container}>
                        <Text style={styles.enterFund}>Войти в фонд</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Логин"
                            placeholderTextColor="#adadad"
                            underlineColorAndroid="transparent"
                            onChangeText={value => this.inputHandler('username', value.trim())}
                            value={this.state.username}
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                        <TextInput
                            style={[styles.textInput, styles.passwordInput]}
                            placeholder="Пароль"
                            placeholderTextColor="#adadad"
                            underlineColorAndroid="transparent"
                            secureTextEntry={true}
                            onChangeText={value => this.inputHandler('password', value.trim())}
                            value={this.state.password}
                        />
                        <Icon.Button
                            name="sign-in"
                            color="#fff"
                            backgroundColor='#0fa395'
                            onPress={this.loginHandler}
                            disabled={this.state.error !== null}
                        >
                            <Text style={styles.loginButton}>Войти</Text>
                        </Icon.Button>
                        {errorMessage}
                    </View>
                </KeyboardAvoidingView>
            </DefaultContainer>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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