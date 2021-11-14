import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

const TheHeaderButton = (props) => {
    return (
        <HeaderButton {...props}
            IconComponent={Ionicons}
            iconSize={23}
            color="red"
            onPress={() => {
                console.log("This is now in the Favourites menu")
            }}
        />
    );
};

export default TheHeaderButton;