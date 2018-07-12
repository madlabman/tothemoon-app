import React from 'react'
import {
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import DefaultContainer from '../../components/DefaultContainer/DefaultContainer';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import {signIn, autoSignIn} from '../../store/actions';

class AuthScreen extends React.Component {
    state = {
        username: '',
        password: '',
    };

    loginHandler = () => {
        this.props.signIn({
            login: this.state.username,
            password: this.state.password,
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

    componentDidMount = () => {
        this.props.autoSignIn();
    };

    render() {
        let errorMessage = this.props.error ? <ErrorMessage text={this.props.error}/> : null;

        return (
            <DefaultContainer>
                <KeyboardAvoidingView behavior="padding" style={styles.keyboardView}>
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
                            disabled={
                                this.state.username.trim() === '' ||
                                this.state.password.trim() === ''
                            }
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
    keyboardView: {
        flex: 1,
        width: '100%'
    },
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

const mapStateToProps = state => {
    return {
        error: state.auth.error
    }
};

const mapDispatchToProps = dispatch => {
    return {
        signIn: loginData => dispatch(signIn(loginData)),
        autoSignIn: () => dispatch(autoSignIn())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen);