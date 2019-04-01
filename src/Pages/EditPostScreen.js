import React, { PureComponent } from 'react';
import { View, Text, Image, TextInput, ScrollView, Keyboard, StyleSheet } from 'react-native'; 
import FontLoader from './Components/FontLoader';
import { NavbarWithBothSides } from './Components/Navbar';
import propic from '../../assets/propic.webp';
import postimage from '../../assets/postimage.webp';
import { GradientButton } from './Components/Buttons';

class EditPostScreen extends PureComponent {

    state = {
        keyboard: false
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

    render(){
        return (    
            <FontLoader>
                <NavbarWithBothSides 
                    onBackPress={()=>this.props.navigation.navigate('MyProfile')}
                    onRightPress={()=>this.props.navigation.navigate('MyProfile')}
                    back
                    text="Edit Post"
                    right
                />
                <View style={(this.state.keyboard)?styles.containerKeyboard : styles.container}>
                    
                    <View style={styles.headerContainer}>
                        <Image source={propic} style={styles.propic}/>
                        <Text style={styles.name}>Tommy Jackson</Text>
                    </View>
                    
                    <View style={styles.imageContainer}>
                        <Image source={postimage} style={styles.postimage} />
                    </View>

                    <View style={styles.dataContainer}>
                        <TextInput 
                            style={styles.data}
                            multiline
                            onChangeText={(text)=>console.log( text )}
                            value="Lorem ipsum dolor sit amet, consectetur rem adipiscing elit, sed eiusmod tempor amet en sed do eiusmod tempor quiae incididunt utell labore etoneme dolore magna."
                        />
                        <GradientButton 
                            onPress={()=>console.log("Update Press")}
                            text="Update"
                        />
                    </View>
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
    containerKeyboard: {
        position: 'absolute', 
        zIndex: -1, 
        marginTop: -150, 
    },
    headerContainer: {
        padding: 20, 
        flexDirection: 'row', 
        justifyContent: 'flex-start', 
        alignItems: 'center'
    }, 
    propic: {
        width: 45,
        height: 45,
    }, 
    name: {
        color: '#3b3b3b',
        fontFamily: 'Roboto',
        fontSize: 17,
        fontWeight: '500',
        marginLeft: 10
    }, 
    imageContainer: {
        width: '100%',
    }, 
    postimage: {
        width: '100%', 
        height: 225,
    }, 
    dataContainer: {
        padding: 15, 
        flex: 1, 
        flexDirection: 'column', 
        justifyContent: 'space-between'
    }, 
    data: {
        fontFamily: 'Roboto',
        fontSize: 17,
        fontWeight: '400',
    }
});

export default EditPostScreen ; 