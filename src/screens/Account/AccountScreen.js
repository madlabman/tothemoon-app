import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import DefaultContainer from '../../components/DefaultContainer/DefaultContainer';
import {Navigation} from 'react-native-navigation';
import navigatorStyle from '../navigatorStyle';

class AccountScreen extends React.Component {
    handleLogout = () => {
        Navigation.startSingleScreenApp({
            screen: {
                screen: 'tothemoonapp.auth',
                title: 'ToTheMoon',
                navigatorStyle
            }
        });
    };

    render() {
        return (
            <DefaultContainer>
                <View style={styles.innerContainer}>
                    <Icon name="user-circle-o" size={40} color="#00cdc3"/>
                    <Text style={styles.account}>Карл Исаев</Text>
                    <Icon.Button name="sign-out" backgroundColor="#8c3842" onPress={this.handleLogout}>Выйти</Icon.Button>
                </View>
            </DefaultContainer>
        )
    }
}

const styles = StyleSheet.create({
    innerContainer: {
        alignItems: 'center',
    },
    account: {
        color: '#fff',
        marginTop: 15,
        marginBottom: 15,
        fontSize: 18,
    }
});

export default AccountScreen;