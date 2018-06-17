import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

const startTabs = () => {
    Promise.all([
        Icon.getImageSource('credit-card', 30),
        Icon.getImageSource('bell', 30),
    ]).then((icons) => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    label: 'Баланс',
                    title: 'Баланс',
                    screen: 'tothemoonapp.balance',
                    icon: icons[0]
                },
                {
                    label: 'Сигналы',
                    title: 'Сигналы',
                    screen: 'tothemoonapp.signals',
                    icon: icons[1]
                }
            ]
        });
    });
};

export default startTabs;