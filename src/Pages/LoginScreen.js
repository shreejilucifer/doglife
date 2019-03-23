import React, { PureComponent } from 'react';
import { View, Image, Text, TextInput, Keyboard, KeyboardAvoidingView, StyleSheet, TouchableOpacity } from 'react-native';
import { Font, LinearGradient } from 'expo';
import loginDog from '../../assets/loginDog.webp';
import paw from '../../assets/paw.webp';
import bone from '../../assets/bone.webp';
import fbicon from '../../assets/fbicon.webp';
import OfflineNotice from './Components/OfflineNotice';
import actions from '../Actions/loginActions';

class LoginScreen extends PureComponent {

    static navigationOptions = {
        header: null,
    };

    state = {
        fontLoaded: false, 
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

        await Font.loadAsync({
          'Big John': require('../../assets/Fonts/BIGJOHN.otf'),
          'Roboto': require('../../assets/Fonts/Roboto.ttf'),
        });
    
        this.setState({ fontLoaded: true });   
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }
    
    render(){
        if( !this.state.fontLoaded ) return <View><Text>Loading</Text></View>;

        return (
            <KeyboardAvoidingView
                enabled={true}
                behavior={'padding'}
                style={styles.container}>
                <OfflineNotice />
                
                <Image 
                    source={loginDog} 
                    style={
                        (this.state.keyboard)? 
                            styles.loginDogImageKeyboard 
                                : 
                            styles.loginDogImage
                    } 
                />

                <View style={styles.logoTextContainer}>
                    <Text style={
                        (this.state.keyboard)?
                            styles.logoTextKeyboard
                                :
                            styles.logoText
                    }>
                    D
                    </Text>
                    <Image 
                        source={paw} 
                        style={
                            (this.state.keyboard)?
                                styles.pawImageKeyboard 
                                    :
                                styles.pawImage
                            } />
                    <Text 
                        style={
                            (this.state.keyboard)?
                                styles.logoTextKeyboard
                                    :
                                styles.logoText
                        }
                    >
                        GLIFE
                    </Text>
                </View> 
                <View style={styles.formContainer}>
                    <Text style={styles.formLabel}>Email</Text>
                    <TextInput 
                        onChangeText={(text)=>console.log(text)}
                        style={styles.formInput} 
                    />
                    <Text style={[styles.formLabel, {marginTop: 20}]}>Password</Text>
                    <TextInput 
                        onChangeText={(text)=>console.log(text)}
                        style={styles.formInput} 
                    />
                    <Text style={[styles.formLabel, {textAlign: 'right', marginTop: 5}]}>Forgot Password?</Text>

                    <TouchableOpacity
                        onPress={()=>actions.onLoginClick("shreeji", "shreeji98")}
                    >
                        <LinearGradient 
                            colors={['#f58524', '#f92b7f']}
                            start={[0,0]}
                            end={[1,1]}
                            style={styles.loginbtn}
                        >
                            <Text style={styles.btnText}>Login</Text> 
                            <Image source={bone} style={styles.btnIcon}/>   
                        </LinearGradient>
                    </TouchableOpacity>

                    <View style={[styles.loginbtn, styles.fbloginbtn]}>
                        <Text style={styles.btnText}>Login With Facebook</Text> 
                        <Image source={fbicon} style={styles.btnIcon}/>     
                    </View>

                    <View style={{ marginTop: 10, width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.noAccount}>
                            You don't have any account?                
                        </Text>
                        <Text style={styles.noAccountRegister}> Register</Text>
                    </View>
                </View> 
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center'
    },
    loginDogImage: { 
        marginTop: 100,
        height: 150, 
        width: 150
    }, 
    loginDogImageKeyboard: { 
        marginTop: 30,
        height: 70, 
        width: 70
    },
    logoTextContainer: {
        marginTop: 15, 
        width: '100%', 
        flexDirection: 'row',
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    logoText: {
        color: '#f75356',
        fontWeight: '400',
        fontFamily: 'Big John', 
        letterSpacing: 2,
        fontSize: 30, 
    },
    logoTextKeyboard: {
        color: '#f75356',
        fontWeight: '400',
        fontFamily: 'Big John', 
        letterSpacing: 2,
        fontSize: 20, 
    },
    pawImage: {
        marginLeft: 2, 
        marginRight: 2,
        height: 30,
        width: 30, 
    }, 
    pawImageKeyboard: {
        marginLeft: 2, 
        marginRight: 2,
        height: 20, 
        width: 20
    },
    formContainer: {
        width: '100%', 
        marginTop: 30, 
        flexDirection: 'column', 
        paddingLeft: 50, 
        paddingRight: 50,
    },
    formLabel: {
        opacity: 0.5,
        color: '#3b3b3b',
        fontFamily: 'Roboto',
        fontSize: 15,
        fontWeight: '400',
    }, 
    formInput: {
        marginTop: 5, 
        fontSize: 20,
        borderBottomColor: '#3b3b3b', 
        borderBottomWidth: 0.2,
        fontFamily: 'Roboto',
        fontWeight: '400',
    }, 
    loginbtn: {
        width: '100%', 
        marginTop: 25,
        height: 45, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        borderRadius: 5, 
        paddingLeft: 20, 
        paddingRight: 20
    }, 
    btnIcon: {
        height: 20, 
        width: 20,
    }, 
    btnText: {
        color: '#ffffff',
        fontFamily: 'Roboto',
        fontWeight: '200',
        fontSize: 15
    }, 
    fbloginbtn: {
        backgroundColor: '#3c5a99',
    }, 
    noAccount: {
        textAlign: 'center',
        opacity: 0.5,
        color: '#757575',    
        fontFamily: 'Roboto',
        fontWeight: '400',
    }, 
    noAccountRegister: {
        color: '#e25e31',
        fontFamily: 'Roboto',
        fontWeight: '500',
        opacity: 1, 
    }
})

export default LoginScreen; 