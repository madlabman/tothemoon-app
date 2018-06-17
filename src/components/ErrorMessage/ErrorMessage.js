import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

const ErrorMessage = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        padding: 20,
        bottom: 0,
        width: '100%',
        backgroundColor: '#8c3842',
    },
    text: {
        color: '#fff',
        fontFamily: 'museo_regular',
        textAlign: 'center',
    }
});

export default ErrorMessage;