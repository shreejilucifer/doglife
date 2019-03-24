import React, { PureComponent } from 'react';
import { View, Image, Text, TextInput, Keyboard, KeyboardAvoidingView, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo';
import FontLoader from './Components/FontLoader';
import FormItem from './Components/FormItem';
import { SingleColorButton, GradientButton } from './Components/Buttons';

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
                    
                    <FormItem 
                        label="Email"
                        onChangeText={(text)=>console.log(text)}
                    />

                    <FormItem 
                        label="Password"
                        labelStyle={{marginTop: 20}}
                        onChangeText={(text)=>console.log(text)}
                    />

                    <TouchableOpacity onPress={()=>{
                        this.props.navigation.navigate('ForgotPass');
                    }}>
                        <Text style={[styles.formLabel, {textAlign: 'right', marginTop: 5}]}>
                            Forgot Password?
                        </Text>
                    </TouchableOpacity>
                    
                    <GradientButton 
                        text="Login"
                        image={bone}
                        onPress={() => actions.onLoginClick()}
                    />

                    <SingleColorButton 
                        bgcolor="#3c5a99"
                        text="Login With Facebook"
                        image={fbicon}
                        onPress={() => actions.onLoginClick()}
                    />

                    <View style={{ marginTop: 10, width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.noAccount}>
                            You don't have any account?                
                        </Text>
                        <TouchableOpacity
                            onPress={()=>{
                                this.props.navigation.navigate('Register');
                            }}
                        >
                            <Text style={styles.noAccountRegister}> Register</Text>
                        </TouchableOpacity>
                        
                    </View>
                </View> 
            </KeyboardAvoidingView>
            </FontLoader>
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