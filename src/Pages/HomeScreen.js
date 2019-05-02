import React, { PureComponent } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native'; 
import FontLoader from './Components/FontLoader';
import { NavbarHome } from './Components/Navbar';
import Post from './Components/Post';
import postpropic from '../../assets/postpropic.webp';
import postimage from '../../assets/postimage.webp';

class HomeScreen extends PureComponent {
    render(){
        return (
            <FontLoader>
                <View style={styles.container}>
                    <NavbarHome 
                        onLeftPress={()=>this.props.navigation.navigate('MyProfile')}
                    />
                    <ScrollView>
                        <View key={post.id}>
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
    }
});

export default HomeScreen; 