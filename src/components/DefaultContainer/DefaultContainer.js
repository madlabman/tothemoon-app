import React from 'react'
import {View, StyleSheet, Image, StatusBar} from 'react-native'

import backgroundImage from '../../assets/img/bg.jpg';

const DefaultContainer = (props) => (
    <View style={styles.container}>
        <StatusBar
            backgroundColor="black"
            barStyle="light-content"
        />
        <View style={styles.backgroundContainer}>
            <Image source={backgroundImage} style={styles.backgroundImage}/>
        </View>
        {props.children}
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        bottom: 0,
        opacity: 0.7
    },
    backgroundImage: {
        resizeMode: 'contain',
    }
});

export default DefaultContainer;