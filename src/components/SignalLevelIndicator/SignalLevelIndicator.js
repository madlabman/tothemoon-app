import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const LEVEL = {
    RED: 1,
    YELLOW: 2,
    GREEN: 4,
};

const signalLevelIndicator = (props) => {
    const iconSize = 14;
    const iconName = "bell";

    switch (props.level) {
        case LEVEL.RED:
            return (
                <Icon size={iconSize} name={iconName} color="red" />
            );
        case LEVEL.YELLOW:
            return (
                <Icon size={iconSize} name={iconName} color="#fffc00" />
            );
        case LEVEL.GREEN:
            return (
                <Icon size={iconSize} name={iconName} color="#00ff60" />
            );
        default:
            return (
                <Icon size={iconSize} name={iconName} color="#828282" />
            )
    }
};

export default signalLevelIndicator;