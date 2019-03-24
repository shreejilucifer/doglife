import React from 'react';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';

// Auth Pages
import LoginScreen from './src/Pages/LoginScreen';
import ForgotPassScreen from './src/Pages/ForgotPassScreen';
import RegisterScreen from './src/Pages/RegisterScreen';

const AuthStack = createStackNavigator({ 
  Login: LoginScreen, 
  ForgotPass: ForgotPassScreen, 
  Register: RegisterScreen,
}, {
  initialRouteName: 'Login'
});

export default createAppContainer(createSwitchNavigator(
  {
    Auth: AuthStack
  },
  {
    initialRouteName: 'Auth',
  }
));


