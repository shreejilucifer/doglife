import React, { PureComponent } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native'; 
import FontLoader from './Components/FontLoader';
import { NavbarWithBothSides } from './Components/Navbar';
import Post from './Components/Post';
import postpropic from '../../assets/postpropic.webp';
import propic from '../../assets/propic.webp';
import postimage from '../../assets/postimage.webp';

class MyProfileScreen extends PureComponent {
    render(){
        return (
            <FontLoader>
                <NavbarWithBothSides 
                    back
                    text="My Profile"
                    onBackPress={()=>this.props.navigation.navigate('App')}
                />
                <View style={styles.container}>
                    <View style={styles.headerContainer}>
                        <Image source={propic} style={styles.propic} />
                        <Text style={styles.name}>Tommy Jackson</Text>
                        <Text style={styles.mail}>tommyjackson@gmail.com</Text>
                    </View>
                    <ScrollView>
                    <Post 
                        edit
                        delete
                        onEditPress={()=>this.props.navigation.navigate('EditPost')}
                        onDeletePress={()=>console.log('Delete')}
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
                        edit
                        delete
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
        flexDirection: 'column'
    }, 
    headerContainer: {
        width: '100%', 
        paddingTop: 10, 
        paddingBottom: 10, 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: { width: 3, height: 0 },
        shadowRadius: 20,
        backgroundColor: '#ffffff',
        elevation: 1, 
    }, 
    propic: {
        width: 115,
        height: 115,
    }, 
    name: {
        marginTop: 5, 
        color: '#3b3b3b',
        fontSize: 18,
        fontFamily: 'Roboto',
        fontWeight: '500',
    }, 
    mail: {
        marginTop: 5, 
        color: '#3b3b3b',
        fontFamily: 'Roboto',
        fontSize: 15,
        fontWeight: '400',
    }
})
export default MyProfileScreen; 