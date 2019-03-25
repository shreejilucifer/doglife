import React from 'react';
import { View, Image } from 'react-native';
import { 
  TabBarBottom, 
  createStackNavigator, 
  createAppContainer, 
  createSwitchNavigator, 
  createBottomTabNavigator 
} from 'react-navigation';
import { LinearGradient } from 'expo';

import homeicon from './assets/bottombarhome.webp';
import newsicon from './assets/bottombarnews.webp';
import plusicon from './assets/whiteplus.webp';
import notificationicon from './assets/bottombarnotification.webp';
import settingsicon from './assets/bottombarsettings.webp';

import homeiconactive from './assets/bottombaractivehome.webp';
import newsiconactive from './assets/bottombaractivenews.webp';
import notificationactive from './assets/bottombaractivenotification.webp';
import settingsiconactive from './assets/bottombaractivesettings.webp';

// Auth Pages
import LoginScreen from './src/Pages/LoginScreen';
import ForgotPassScreen from './src/Pages/ForgotPassScreen';
import RegisterScreen from './src/Pages/RegisterScreen';

// App Pages 
import HomeScreen from './src/Pages/HomeScreen';

const AuthStack = createStackNavigator({ 
  Login: LoginScreen, 
  ForgotPass: ForgotPassScreen, 
  Register: RegisterScreen,
}, {
  initialRouteName: 'Register'
});

const AppStack = createBottomTabNavigator({
  Home: HomeScreen, 
  News: HomeScreen, 
  Post: HomeScreen, 
  Notification: HomeScreen, 
  Settings: HomeScreen
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;

      if( routeName === 'Home' ) {
          if( focused ) {
            return (
                <Image source={homeiconactive} style={{height: 25, width: 30}} />
            );
          } else {
            return <Image source={homeicon} style={{height: 25, width: 30}} /> ; 
          }
      } else if( routeName === 'News' ) {
        if( focused ) {
          return <Image source={newsiconactive} style={{height: 25, width: 25}} />;
        } else {
          return <Image source={newsicon} style={{height: 25, width: 25, opacity: 0.5}} />;
        }
      } else if( routeName === 'Post' ) {
        return (
        <LinearGradient 
          colors={['#f58524', '#f92b7f']}
          start={[0,0]}
          end={[1,1]}
          style={{
            justifyContent: 'center', 
            alignItems: 'center', 
            height: 30, 
            width: 45,
            borderRadius: 25
          }}
        >
          <Image source={plusicon} style={{ height: '50%', width: '40%' }} />
        </LinearGradient>
        );
      } else if( routeName === 'Notification' ) {
        if( focused ) {
          return <Image source={notificationactive} style={{height: 28, width: 25}} />;
        } else {
          return <Image source={notificationicon} style={{height: 28, width: 25, opacity: 0.5}} />;
        }
      } else if( routeName === 'Settings' ) {
        if( focused ) {
          return <Image source={settingsiconactive} style={{height: 28, width: 28}} />;
        } else {
          return <Image source={settingsicon} style={{height: 28, width: 28, opacity: 0.5}} />;
        }
      }
    }
  }),
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    style: {
      height: '10%',
      shadowColor: 'rgba(206, 206, 206, 0.24)',
      shadowOffset: { width: 1, height: 0 },
      shadowRadius: 20,
      backgroundColor: '#ffffff',
    }, 
    showLabel: false,
  }
});

export default createAppContainer(createSwitchNavigator(
  {
    Auth: AuthStack, 
    App: AppStack
  },
  {
    initialRouteName: 'App',
  }
));