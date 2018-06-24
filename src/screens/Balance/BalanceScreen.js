import React from 'react';
import {ActivityIndicator, Button, Image, StyleSheet, ScrollView, View} from 'react-native';
import {connect} from 'react-redux'

import BalanceListItem from '../../components/BalanceListItem/BalanceListItem';
import DefaultContainer from '../../components/DefaultContainer/DefaultContainer';

import logoImg from '../../assets/img/logo.png';
import {receiveBalance, requestBalance} from '../../store/actions';

class BalanceScreen extends React.Component {

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    fetchBalance = () => {
        this.props.onBalanceRequest();
    };

    onNavigatorEvent = (event) => {
        if (event.type === 'NavBarButtonPress') {
            if (event.id === 'balance-refresh') {
                this.fetchBalance();
            }
        }
    };

    componentDidMount = () => {
        this.fetchBalance();
    };

    render() {
        const balanceList = this.props.balance.map((elem) => (
            <BalanceListItem key={elem.key} symbol={elem.symbol} amount={elem.amount}/>
        ));

        const balance = this.props.isBalanceFetching ? (
            <ActivityIndicator size="large" color="#00cdc3"/>
        ) : balanceList;

        return (
            <DefaultContainer>
                <View style={styles.innerContainer}>
                    <Image source={logoImg} style={styles.logo}/>
                    {balance}
                </View>
            </DefaultContainer>
        );
    }
}

const styles = StyleSheet.create({
    innerContainer: {
        padding: 20,
        alignItems: 'center',
    },
    logo: {
        width: 46,
        height: 48,
        marginBottom: 20,
    }
});

const mapStateToProps = state => {
    return {
        balance: state.balance.items,
        isBalanceFetching: state.balance.isFetching,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onBalanceRequest: () => dispatch(requestBalance()),
        onBalanceReceive: balance => dispatch(receiveBalance(balance))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BalanceScreen);