import React, { PureComponent } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Keyboard, StyleSheet } from 'react-native'; 
import FontLoader from './Components/FontLoader';
import { NavbarWithBothSides } from './Components/Navbar';
import propic from '../../assets/propic.webp';
import addpostbtn from '../../assets/addpostbtn.webp';

import { SlidingButton } from './Components/Buttons';

class NewPostScreen extends PureComponent {

    state = {
        keyboard: false, 
        loading: false,
    }

    async componentDidMount(){

        this.keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow', () => {
                this.setState({ keyboard: true });
            }
          );

          this.keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide', () => {
                this.setState({ keyboard: false });
            }
          );
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    onSlideRight = () => {
        //perform Action on slide success.
        this.setState({ loading: true });
        
    };

    render(){
        return (
            <FontLoader>
                <NavbarWithBothSides 
                    onBackPress={()=>console.log("Back Press")}
                    onRightPress={()=>console.log("OnRightPresss")}
                    text="New Post" 
                />
                <View style={styles.container}>
                    <View style={{ flexDirection: 'column' }}>
                        <View style={styles.topContainer}>
                            <Image source={propic} style={styles.propic} />
                            <Text style={styles.headerText}>Tommy Jackson</Text>
                        </View>
                        <View style={
                            (this.state.keyboard)?
                            styles.middleContainerKeyboard
                                :
                            styles.middleContainer
                        }>
                            <Text style={styles.uploadtext}>Upload Photo or Video</Text>
                            <TouchableOpacity
                                onPress={()=>console.log( "Post Click" )}
                            >
                                <Image source={addpostbtn} style={
                                    (this.state.keyboard)?
                                    styles.addpostbtnKeyboard
                                        :
                                    styles.addpostbtn
                                    } />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.lowerContainer}>
                        <TextInput 
                            multiline
                            style={styles.postdatainput}
                            onChangeText={(text)=>{console.log(text)}} 
                            placeholder="Snap something here..."
                        />
                        {
                            (this.state.loading)?
                                <Text>loading...</Text>
                                :
                                <SlidingButton onslide={this.onSlideRight}/>
                        }
                        
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
        justifyContent: 'space-between', 
    }, 
    topContainer: {
        flexDirection: 'row', 
        width: '100%', 
        alignItems: 'center', 
        padding: 15, 
    }, 
    propic: {
        height: 45,
        width: 45,
    }, 
    headerText: {
        marginLeft: 10, 
        color: '#3b3b3b',
        fontFamily: 'Roboto',
        fontSize: 17,
        fontWeight: '500',
    }, 
    middleContainer: {
        backgroundColor: 'rgb(252, 239, 238)',
        width: '100%', 
        height: 200, 
        flexDirection: 'column', 
        justifyContent: 'space-evenly', 
        alignItems: 'center'
    }, 
    middleContainerKeyboard: {
        backgroundColor: 'rgb(252, 239, 238)',
        width: '100%', 
        height: 70, 
        flexDirection: 'row', 
        justifyContent: 'space-evenly', 
        alignItems: 'center'  
    },
    uploadtext: {
        color: '#e25e31',
        fontFamily: 'Roboto',
        fontSize: 17,
        fontWeight: '400',
    }, 
    addpostbtn: {
        width: 69,
        height: 61,
    }, 
    addpostbtnKeyboard: {
        width: 49, 
        height: 41, 
    },
    lowerContainer: {
        flex: 1, 
        flexDirection: 'column', 
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 15, 
        paddingBottom: 15,
    },
    postdatainput: {
        width: '95%', 
        fontFamily: 'Roboto',
        fontSize: 17,
        fontWeight: '400',
    }
});

export default NewPostScreen ; 