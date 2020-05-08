import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { LinearGradient } from 'expo-linear-gradient';

import homeicon from './assets/bottombarhome.webp';
import newsicon from './assets/bottombarnews.webp';
import plusicon from './assets/whiteplus.webp';
import notificationicon from './assets/bottombarnotification.webp';
import settingsicon from './assets/bottombarsettings.webp';
import activedot from './assets/activedot.webp';

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
import NewsScreen from './src/Pages/NewsScreen';
import NotificationScreen from './src/Pages/NotificationScreen';
import SettingsScreen from './src/Pages/SettingsScreen';
import NewPostScreen from './src/Pages/NewPostScreen';
import MyProfileScreen from './src/Pages/MyProfileScreen';
import EditPostScreen from './src/Pages/EditPostScreen';
import NewsDetailsScreen from './src/Pages/NewsDetailsScreen';

const Dot = (props) => {
	return (
		<Image
			source={activedot}
			style={{
				position: 'absolute',
				zIndex: 1,
				transform: [{ translateY: -20 }],
				height: 7,
				width: 7,
			}}
		/>
	);
};

const MyTabBar = ({ state, descriptors, navigation }) => {
	return (
		<View style={{ flexDirection: 'row', height: '7%' }}>
			{state.routes.map((route, index) => {
				const { options } = descriptors[route.key];
				const label =
					options.tabBarLabel !== undefined
						? options.tabBarLabel
						: options.title !== undefined
						? options.title
						: route.name;

				const isFocused = state.index === index;

				const onPress = () => {
					const event = navigation.emit({
						type: 'tabPress',
						target: route.key,
						canPreventDefault: true,
					});

					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate(route.name);
					}
				};

				const onLongPress = () => {
					navigation.emit({
						type: 'tabLongPress',
						target: route.key,
					});
				};

				let image;
				let style;

				console.log(label);
				console.log(isFocused);

				switch (label) {
					case 'Home':
						image = isFocused ? homeiconactive : homeicon;
						style = isFocused
							? { height: 25, width: 30 }
							: { height: 25, width: 30 };
						break;
					case 'News':
						image = isFocused ? newsiconactive : newsicon;
						style = isFocused
							? { height: 25, width: 25 }
							: { height: 25, width: 25, opacity: 0.5 };
						break;
					case 'Post':
						image = plusicon;
						style = { height: '50%', width: '40%' };
						break;
					case 'Notification':
						image = isFocused ? notificationactive : notificationicon;
						style = isFocused
							? { height: 28, width: 25 }
							: { height: 28, width: 25, opacity: 0.5 };
						break;
					case 'Settings':
						image = isFocused ? settingsiconactive : settingsicon;
						style = isFocused
							? { height: 28, width: 28 }
							: { height: 28, width: 28, opacity: 0.5 };
						break;
					default:
						image = null;
				}

				return (
					<TouchableOpacity
						key={index}
						accessibilityRole="button"
						accessibilityStates={isFocused ? ['selected'] : []}
						accessibilityLabel={options.tabBarAccessibilityLabel}
						testID={options.tabBarTestID}
						onPress={onPress}
						onLongPress={onLongPress}
						style={{
							flex: 1,
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							backgroundColor: '#fff',
							elevation: 2,
						}}
					>
						{isFocused ? <Dot /> : null}
						{label === 'Post' ? (
							<LinearGradient
								colors={['#f58524', '#f92b7f']}
								start={[0, 0]}
								end={[1, 1]}
								style={{
									justifyContent: 'center',
									alignItems: 'center',
									height: 30,
									width: 45,
									borderRadius: 25,
								}}
							>
								<Image source={image} style={style} />
							</LinearGradient>
						) : (
							<Image source={image} style={style} />
						)}
					</TouchableOpacity>
				);
			})}
		</View>
	);
};

const Tab = createBottomTabNavigator();

function AppStack() {
	return (
		<Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
			<Tab.Screen name="Home" component={HomeScreen} />
			<Tab.Screen name="News" component={NewsScreen} />
			<Tab.Screen name="Post" component={NewPostScreen} />
			<Tab.Screen name="Notification" component={NotificationScreen} />
			<Tab.Screen name="Settings" component={SettingsScreen} />
		</Tab.Navigator>
	);
}

const Stack = createStackNavigator();

const AuthStack = () => (
	<Stack.Navigator screenOptions={{ headerShown: false }}>
		<Stack.Screen name="Login" component={LoginScreen} />
		<Stack.Screen name="ForgotPass" component={ForgotPassScreen} />
		<Stack.Screen name="Register" component={RegisterScreen} />
	</Stack.Navigator>
);

const RootRouter = () => (
	<NavigationContainer>
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Auth" component={AuthStack} />
			<Stack.Screen name="App" component={AppStack} />
			<Stack.Screen name="MyProfile" component={MyProfileScreen} />
			<Stack.Screen name="EditPost" component={EditPostScreen} />
			<Stack.Screen name="NewsDetails" component={NewsDetailsScreen} />
		</Stack.Navigator>
	</NavigationContainer>
);

export default RootRouter;
