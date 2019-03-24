import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

class RegisterScreen extends PureComponent {
    static navigationOptions = {
        header: null,
    };
    
    render(){
        return (
            <View>
                <Text>Register</Text>
            </View>
        );
    }
}

export default RegisterScreen ; 