import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import OfflineNotice from './OfflineNotice';

class FontLoader extends PureComponent {
	state = {
		fontLoaded: false,
	};

	async componentDidMount() {
		await Font.loadAsync({
			'Big John': require('../../../assets/Fonts/BIGJOHN.otf'),
			Roboto: require('../../../assets/Fonts/Roboto.ttf'),
		});

		this.setState({ fontLoaded: true });
		console.log('Font Loaded');
	}

	render() {
		if (this.state.fontLoaded)
			return (
				<React.Fragment>
					<OfflineNotice />
					{this.props.children}
				</React.Fragment>
			);
		else
			return (
				<View style={styles.container}>
					<Text>Loading...</Text>
				</View>
			);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default FontLoader;
