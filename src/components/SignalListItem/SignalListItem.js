import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import SignalLevelIndicator from '../SignalLevelIndicator/SignalLevelIndicator'

const signalListItem = (props) => (
    <View style={styles.signalListItem}>
        <Text style={styles.signalName}>{props.name}</Text>
        <View style={styles.signalMetaContainer}>
            <SignalLevelIndicator level={props.level} />
            <Text style={styles.signalDate}>{props.date}</Text>
        </View>
        <Text style={styles.signalContent}>{props.content}</Text>
    </View>
);

const styles = StyleSheet.create({
    signalListItem: {
        marginBottom: 15,
    },
    signalName: {
        fontSize: 18,
        fontFamily: 'museo_regular',
        marginBottom: 8,
        color: '#fff',
    },
    signalDate: {
        fontSize: 14,
        fontFamily: 'museo_regular',
        paddingLeft: 4,
        color: '#fff'
    },
    signalContent: {
        fontFamily: 'museo_regular',
        color: '#fff'
    },
    signalMetaContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 8,
    },
});

export default signalListItem;