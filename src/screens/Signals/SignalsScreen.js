import React from 'react';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux'

import SignalListItem from '../../components/SignalListItem/SignalListItem';
import DefaultContainer from '../../components/DefaultContainer/DefaultContainer';

import logoImg from '../../assets/img/logo.png';

class SignalsScreen extends React.Component {
    render() {
        return (
            <DefaultContainer>
                <View style={styles.innerContainer}>
                    <Image source={logoImg} style={styles.logo}/>
                    <FlatList
                        data={this.props.signals}
                        renderItem={(info) => (
                            <SignalListItem
                                key={info.item.key}
                                name={info.item.name}
                                date={info.item.date}
                                level={info.item.level}
                                content={info.item.content}
                            />
                        )}
                    />
                </View>
            </DefaultContainer>
        );
    }
}

const styles = StyleSheet.create({
    innerContainer: {
        padding: 20,
        paddingBottom: 0,
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
        signals: state.signals.items,
        isSignalsFetching: state.signals.isFetching,
    }
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignalsScreen);