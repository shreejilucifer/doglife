import React from 'react';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';

// Auth Pages
import LoginScreen from './src/Pages/LoginScreen';

const AuthStack = createStackNavigator({ 
  Login: LoginScreen
});

export default createAppContainer(createSwitchNavigator(
  {
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Auth',
  }
));


