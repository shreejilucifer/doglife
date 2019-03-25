import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native'; 
import FontLoader from './Components/FontLoader';

class HomeScreen extends PureComponent {
    render(){
        return (
            <FontLoader>
                <View>
                    <Text>Home Screen</Text>
                </View>
            </FontLoader>
        );
    }
}

export default HomeScreen; 