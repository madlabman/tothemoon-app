import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import navigatorStyle from '../navigatorStyle';

const startTabs = () => {
    Promise.all([
        Icon.getImageSource('credit-card', 30),
        Icon.getImageSource('bell', 30),
        Icon.getImageSource('user-circle-o', 30),
        Icon.getImageSource('refresh', 20, '#fff'),
    ]).then((icons) => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    label: 'Баланс',
                    title: 'Баланс',
                    screen: 'tothemoonapp.balance',
                    icon: icons[0],
                    navigatorButtons: {
                        rightButtons: [
                            {
                                icon: icons[3],
                                id: 'balance-refresh',
                                buttonColor: '#fff'
                            }
                        ]
                    },
                    navigatorStyle,
                },
                {
                    label: 'Сигналы',
                    title: 'Сигналы',
                    screen: 'tothemoonapp.signals',
                    icon: icons[1],
                    navigatorStyle,
                },
                {
                    label: 'Аккаунт',
                    title: 'Аккаунт',
                    screen: 'tothemoonapp.account',
                    icon: icons[2],
                    navigatorStyle,
                }
            ],
            tabsStyle: {
                tabBarHidden: false, // make the tab bar hidden
                tabBarButtonColor: '#fff', // change the color of the tab icons and text (also unselected)
                tabBarSelectedButtonColor: '#00cdc3', // change the color of the selected tab icon and text (only selected)
                tabBarBackgroundColor: '#000', // change the background color of the tab bar
                tabBarTranslucent: false, // change the translucent of the tab bar to false
                tabBarTextFontFamily: 'museo_regular', //change the tab font family
                tabBarLabelColor: '#fff', // iOS only. change the color of tab text
                tabBarSelectedLabelColor: '#00cdc3', // iOS only. change the color of the selected tab text
                forceTitlesDisplay: true, // Android only. If true - Show all bottom tab labels. If false - only the selected tab's label is visible.
                tabBarHideShadow: true // Remove default tab bar top shadow (hairline)
            },
            appStyle: {
                tabBarBackgroundColor: '#000',
                tabBarButtonColor: '#fff',
                tabBarHideShadow: true,
                tabBarSelectedButtonColor: '#00cdc3',
                tabBarTranslucent: false,
                tabFontFamily: 'museo_regular',
                tabFontSize: 10,
                selectedTabFontSize: 10,
                keepStyleAcrossPush: false,
            },
            animationType: 'slide-down'
        });
    });
};

export default startTabs;