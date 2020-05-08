import React, { PureComponent } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import FontLoader from './Components/FontLoader';
import { NavbarHome } from './Components/Navbar';
import Post from './Components/Post';
import postpropic from '../../assets/postpropic.webp';
import postimage from '../../assets/postimage.webp';

const post = {
	id: 1,
	author: {
		name: 'Shreeji',
	},
	content: 'Hello',
};

class HomeScreen extends PureComponent {
	render() {
		return (
			<FontLoader>
				<View style={styles.container}>
					<NavbarHome
						onLeftPress={() => this.props.navigation.navigate('MyProfile')}
					/>
					<ScrollView>
						<View key={1}>
							<Post
								propic={postpropic}
								name={post.author.name}
								time="5:30 PM"
								image={postimage}
								bones={42}
								snaps={20}
								data={post.content}
							/>
							<View style={{ height: 10 }}></View>
						</View>
						<View key={2}>
							<Post
								propic={postpropic}
								name={post.author.name}
								time="5:30 PM"
								image={postimage}
								bones={42}
								snaps={20}
								data={post.content}
							/>
							<View style={{ height: 10 }}></View>
						</View>
						<View key={3}>
							<Post
								propic={postpropic}
								name={post.author.name}
								time="5:30 PM"
								image={postimage}
								bones={42}
								snaps={20}
								data={post.content}
							/>
							<View style={{ height: 10 }}></View>
						</View>
					</ScrollView>
				</View>
			</FontLoader>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#fcfdfe',
	},
});

export default HomeScreen;
