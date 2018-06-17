import React from 'react'
import {View, Text, StyleSheet, PixelRatio} from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome";

const balanceListItem = (props) => (
    <View style={styles.balanceListItem}>
        <View style={styles.balanceSymbol}>
            <Icon name={props.symbol} size={24} color="#00cdc3"/>
            <View style={styles.symbolBorder} />
        </View>
        <Text style={styles.balanceAmount}>{props.amount}</Text>
    </View>
);

const styles = StyleSheet.create({
    balanceListItem: {
        marginBottom: 5,
        padding: 10,
    },
    balanceSymbol: {
        alignItems: "center",
    },
    balanceAmount: {
        fontSize: 16,
        fontFamily: 'museo_regular',
        textAlign: 'center',
        color: '#fff',
    },
    symbolBorder: {
        marginTop: 6,
        marginBottom: 6,
        width: 50,
        height: 4 / PixelRatio.get(),
        backgroundColor: '#eee',
    }
});

export default balanceListItem;