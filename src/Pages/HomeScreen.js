import React, { PureComponent } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native'; 
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
                    <NavbarHome />
                    <ScrollView>
                        <Post 
                            propic={postpropic} 
                            name="Baxter Johnson" 
                            time="5:30 PM"
                            image={postimage} 
                            bones={42} 
                            snaps={20} 
                            data="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor amet..." 
                        />
                        <View style={{ height: 10 }}></View>
                        <Post 
                            propic={postpropic} 
                            name="Baxter Johnson" 
                            time="5:30 PM"
                            image={postimage} 
                            bones={42} 
                            snaps={20} 
                            data="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor amet..." 
                        />
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