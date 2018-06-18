import React, {Fragment} from 'react'
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {connect} from 'react-redux';

import DefaultContainer from '../../components/DefaultContainer/DefaultContainer';
import {Navigation} from 'react-native-navigation';
import navigatorStyle from '../navigatorStyle';
import {fetchUser} from '../../store/actions/user';

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
        let content = <ActivityIndicator size="large" color="#00cdc3"/>;
        if (this.props.name) {
            content = (
                <Fragment>
                    <Icon name="user-circle-o" size={40} color="#00cdc3"/>
                    <Text style={styles.account}>{this.props.name}</Text>
                    <Icon.Button name="sign-out"
                                 backgroundColor="#8c3842"
                                 onPress={this.handleLogout}>Выйти</Icon.Button>
                </Fragment>
            )
        }

        return (
            <DefaultContainer>
                <View style={styles.innerContainer}>
                    {content}
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
        fontFamily: 'museo_regular',
    }
});

const mapStateToProps = state => {
    return {
        name: state.user.name
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchUser: () => dispatch(fetchUser)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountScreen);