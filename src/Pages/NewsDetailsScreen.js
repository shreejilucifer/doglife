import React, { PureComponent } from 'react';
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	ScrollView,
	Alert,
	StyleSheet,
} from 'react-native';
import FontLoader from './Components/FontLoader';
import { NavbarWithBothSides } from './Components/Navbar';
import { LinearGradient } from 'expo-linear-gradient';
import newsdetailsleft from '../../assets/newsdetailsleft.webp';
import newsdetailsright from '../../assets/newsdetailsright.webp';
import newsdetailsimg from '../../assets/newsdetailsimg.webp';

class NewsDetailsScreen extends PureComponent {
	render() {
		return (
			<FontLoader>
				<NavbarWithBothSides
					onBackPress={() => {
						this.props.navigation.navigate('News');
					}}
					onRightPress={() =>
						Alert.alert(
							'Are you sure you want to report this article?',
							'',
							[
								{
									text: 'No',
									onPress: () => console.log('Cancel Pressed'),
									style: 'cancel',
								},
								{ text: 'Yes', onPress: () => console.log('OK Pressed') },
							],
							{ cancelable: false }
						)
					}
					text="Details"
					back
					right
					flag
				/>
				<View style={styles.container}>
					<ScrollView>
						<Image source={newsdetailsimg} style={styles.newsdetailsimg} />
						<Text style={styles.detailsTitle}>
							Dogs Are Even More Like Us Than We Thought
						</Text>
						<Text style={styles.detailsData}>
							Lorem ipsum dolor sit amet, consectetur rem adipiscing elit, sed
							do eiusmod tempor quiae incididunt utell labore etoneme dolore
							magna aliquaman. Ut enim adam minim veniam, quis nostrud
							exercitation ullamco laboris nisite ute aliquip ex eai commodo
							consequat. Duis aute irure dolor am reprehenderit in voluptate
							velit esse cillum dolore eu fugiat nulla pariatur. Ute excepteur
							sint occaecat cupidatat non profite proident, suntino in culpa qui
							officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
							amet, consectetur rem adipiscing elit, sed do eiusmod tempor quiae
							incididunt utell labore etoneme dolore magna aliquaman. Ut enim
							adam minim veniam, quis nostrud exercitation ullamco laboris
							nisite ute aliquip ex eai commodo consequat. Duis aute irure dolor
							am reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Ute excepteur sint occaecat cupidatat non profite
							proident, suntino in culpa qui officia deserunt mollit anim id est
							laborum.
						</Text>
					</ScrollView>

					<View style={styles.btnContainer}>
						<TouchableOpacity>
							<LinearGradient
								style={styles.leftContainer}
								colors={['#f58524', '#f92b7f']}
								start={[0, 0]}
								end={[1, 1]}
							>
								<Image source={newsdetailsleft} style={styles.iconLeft} />
							</LinearGradient>
						</TouchableOpacity>
						<TouchableOpacity>
							<LinearGradient
								style={styles.rightContainer}
								colors={['#f58524', '#f92b7f']}
								start={[0, 0]}
								end={[1, 1]}
							>
								<Image source={newsdetailsright} style={styles.iconRight} />
							</LinearGradient>
						</TouchableOpacity>
					</View>
				</View>
			</FontLoader>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
	},
	btnContainer: {
		position: 'absolute',
		bottom: 0,
		zIndex: 1,
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	leftContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		width: 62,
		height: 62,
		borderTopLeftRadius: 0,
		borderTopRightRadius: 40,
		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 0,
	},
	iconLeft: {
		height: 20,
		width: 20,
		marginRight: 5,
	},
	iconRight: {
		height: 20,
		width: 20,
		marginLeft: 5,
	},
	rightContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		width: 62,
		height: 62,
		borderTopLeftRadius: 40,
		borderTopRightRadius: 0,
		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 0,
	},
	newsdetailsimg: {
		width: '100%',
		height: 225,
	},
	detailsTitle: {
		color: '#3b3b3b',
		fontFamily: 'Roboto',
		fontSize: 22,
		fontWeight: '500',
		lineHeight: 26.67,
		padding: 20,
	},
	detailsData: {
		paddingLeft: 20,
		paddingRight: 20,
		paddingBottom: 65,
		textAlign: 'justify',
		opacity: 0.6,
		color: '#3b3b3b',
		fontFamily: 'Roboto',
		fontSize: 17,
		fontWeight: '400',
		lineHeight: 25,
	},
});

export default NewsDetailsScreen;
