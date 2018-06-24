import React from 'react';
import {FlatList, Image, StyleSheet, View, Text} from 'react-native';
import {connect} from 'react-redux'
import {requestSignals, receiveSignals} from '../../store/actions';

import SignalListItem from '../../components/SignalListItem/SignalListItem';
import DefaultContainer from '../../components/DefaultContainer/DefaultContainer';

import logoImg from '../../assets/img/logo.png';

class SignalsScreen extends React.Component {

    componentDidMount = () => {
        this.props.fetchSignals();
    };

    render() {
        let emptyPlaceholder = <Text style={styles.notFoundText}>Сигналов не найдено!</Text>;
        if (this.props.signals.length > 0) emptyPlaceholder = null;

        return (
            <DefaultContainer>
                <View style={styles.innerContainer}>
                    <Image source={logoImg} style={styles.logo}/>
                    {emptyPlaceholder}
                    <FlatList
                        data={this.props.signals}
                        renderItem={(info) => (
                            <SignalListItem
                                key={info.item.key}
                                date={info.item.date}
                                level={info.item.level}
                                content={info.item.content}
                            />
                        )}
                        style={styles.flatList}
                    />
                </View>
            </DefaultContainer>
        );
    }
}

const styles = StyleSheet.create({
    innerContainer: {
        width: '100%',
        flex: 1,
        padding: 20,
        paddingBottom: 0,
        alignItems: 'center',
    },
    flatList: {
        width: '100%',
    },
    logo: {
        width: 46,
        height: 48,
        marginBottom: 20,
    },
    notFoundText: {
        color: '#fff'
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
        fetchSignals: () => dispatch(requestSignals()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignalsScreen);