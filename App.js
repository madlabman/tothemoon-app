// import React from 'react';
// import {
//     StyleSheet,
//     View,
//     Image,
//     StatusBar,
//     Button,
//     ActivityIndicator, FlatList
// } from 'react-native';
// import {connect} from 'react-redux';
//
// import {requestBalance, receiveBalance} from "./src/store/actions";
//
// import BalanceListItem from './src/components/BalanceListItem/BalanceListItem'
// import backgroundImage from './src/assets/img/bg.jpg'
// import logoImg from './src/assets/img/logo.png'
// import SignalListItem from "./src/components/SignalListItem/SignalListItem";
//
// class App extends React.Component {
//     state = {
//         signals: [
//             {
//                 name: 'Test Signal',
//                 level: 1,
//                 date: 'Today at 22:01',
//                 content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
//             }
//         ]
//     };
//
//     fetchBalance = () => {
//         this.props.onBalanceRequest();
//         setTimeout(this.props.onBalanceReceive, 1000);
//     };
//
//     render() {
//         const balance = this.props.balance.map((elem, index) => (
//             <BalanceListItem key={index} symbol={elem.symbol} amount={elem.amount} />
//         ));
//
//         const signals = [];
//         for (i = 0; i < 100; i++) {
//             signals.push({
//                 ...this.state.signals[0],
//                 key: i,
//             });
//         }
//
//         const fetchButton = this.props.isBalanceFetching ? (
//             <ActivityIndicator size="large" color="#fff" />
//         ) : <Button title="Обновить" onPress={this.fetchBalance} />;
//
//         return (
//             <View style={styles.container}>
//                 <StatusBar
//                     backgroundColor="black"
//                     barStyle="light-content"
//                 />
//                 <View style={styles.backgroundContainer}>
//                     <Image source={backgroundImage} style={styles.backgroundImage} />
//                 </View>
//                 <View style={styles.innerContainer}>
//                     <Image source={logoImg} style={styles.logo} />
//                     {/*{balance}*/}
//                     {/*{fetchButton}*/}
//                     <FlatList
//                         data={this.props.signals}
//                         renderItem={(info) => (
//                             <SignalListItem
//                                 key={info.item.key}
//                                 name={info.item.name}
//                                 date={info.item.date}
//                                 level={info.item.level}
//                                 content={info.item.content}
//                             />
//                         )}
//                     />
//                 </View>
//             </View>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#000',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     innerContainer: {
//         padding: 20,
//         alignItems: 'center',
//     },
//     logo: {
//         marginBottom: 40,
//     },
//     backgroundContainer: {
//         position: 'absolute',
//         left: '-50%',
//         width: '150%',
//         height: '100%',
//         opacity: 0.7
//     },
//     backgroundImage: {
//         resizeMode: 'cover',
//     }
// });
//
// const mapStateToProps = state => {
//     return {
//         balance: state.balance.items,
//         signals: state.signals.items,
//         isBalanceFetching: state.balance.isFetching,
//         isSignalsFetching: state.signals.isFetching,
//     }
// };
//
// const mapDispatchToProps = dispatch => {
//     return {
//         onBalanceRequest: () => dispatch(requestBalance()),
//         onBalanceReceive: balance => dispatch(receiveBalance(balance))
//     };
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(App)

import {Navigation} from 'react-native-navigation';

import {registerScreens} from './src/screens';

registerScreens(); // this is where you register all of your app's screens

// start the app
Navigation.startSingleScreenApp({
    screen: {
        screen: 'tothemoonapp.auth',
        title: 'Вход'
    }
});