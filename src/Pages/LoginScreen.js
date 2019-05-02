import React, { PureComponent } from 'react';
import { View, Image, Text, Keyboard, KeyboardAvoidingView, StyleSheet, TouchableOpacity } from 'react-native';
import FontLoader from './Components/FontLoader';
import FormItem from './Components/FormItem';
import { SingleColorButton, GradientButton } from './Components/Buttons';
import { Bubbles } from 'react-native-loader';

import loginDog from '../../assets/loginDog.webp';
import paw from '../../assets/paw.webp';
import bone from '../../assets/bone.webp';
import fbicon from '../../assets/fbicon.webp';
import actions from '../Actions/loginActions';

const LoaderButton = (props) => (
    <View style={styles.loaderBtnContainer}>
        <Bubbles size={10} color="#f92b7f" />
    </View>
);

class LoginScreen extends PureComponent {

    static navigationOptions = {
        header: null,
    };

    state = { 
        keyboard: false, 
        loadingLoginNormal: false, 
        loadingLoginFacebook: false,
        errorMsg: "", 
        email: "", 
        password: ""
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

    async onLoginClick(email, password) {
        this.setState({ loadingLoginNormal: true });

        if( email === "" ) 
            this.setState({ loadingLoginNormal: false, errorMsg: "Email Cannot be Empty !" });
        else if( password === "" ) 
            this.setState({ loadingLoginNormal: false, errorMsg: "Password Cannot be Empty !" });
        else {
            const user = await actions.login(email, password);

            if( user ) { 
                this.setState({ loadingLoginNormal: false, errorMsg: "" });
                this.props.navigation.navigate('App');
            } else {
                this.setState({ loadingLoginNormal: false, errorMsg: "Email Or Password Wrong !" });
            }
            
        }  
    }

    onLoginWithFacebookClick() {
        this.setState({ loadingLoginFacebook: true });
        //this.props.navigation.navigate('App');
    }

    onLoginFormChange( type, value ) {
        switch( type ) {
            case 'email': this.setState({ email: value }); break;
            case 'password': this.setState({ password: value }); break;
            default: console.log( "Invalid Input" );
        }
    }
    
    render(){
        return (
            <FontLoader>
                <KeyboardAvoidingView
                    enabled={true}
                    behavior={'padding'}
                    style={(this.state.keyboard)? styles.containerKeyboard:styles.container}>
                
                <View 
                    style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
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
                </View>

                <View style={styles.formContainer}>
                    
                    <FormItem 
                        label="Email"
                        onChangeText={(text)=>this.onLoginFormChange('email', text)}
                    />

                    <FormItem 
                        password={true}
                        label="Password"
                        labelStyle={{marginTop: 20}}
                        onChangeText={(text)=>this.onLoginFormChange('password', text)}
                    />

                    <TouchableOpacity onPress={()=>{
                        this.props.navigation.navigate('ForgotPass');
                    }}>
                        <Text style={[styles.formLabel, {textAlign: 'right', marginTop: 5}]}>
                            Forgot Password?
                        </Text>
                    </TouchableOpacity>

                    <View style={styles.errorContainer}>
                        <Text style={styles.error}>{this.state.errorMsg}</Text>
                    </View>
                    
                    {
                        (this.state.loadingLoginNormal)? 
                        <LoaderButton /> 
                            :
                        <GradientButton 
                            text="Login"
                            image={bone}
                            onPress={()=>this.onLoginClick(this.state.email, this.state.password)}
                        />
                    }
                    
                    {
                        (this.state.loadingLoginFacebook)?
                        <LoaderButton />
                            :
                        <SingleColorButton 
                            bgcolor="#3c5a99"
                            text="Login With Facebook"
                            image={fbicon}
                            onPress={()=>this.onLoginWithFacebookClick()}
                        />
                    }

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
        flexDirection: 'column', 
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    containerKeyboard: {
        flex: 1, 
        flexDirection: 'column', 
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    loginDogImage: { 
        height: 150, 
        width: 150
    }, 
    loginDogImageKeyboard: { 
        marginTop: 45, 
        height: 70, 
        width: 70
    },
    logoTextContainer: { 
        marginTop: 15, 
        width: '100%', 
        flexDirection: 'row'
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
    }, 
    loaderBtnContainer: {
        width: '100%', 
        marginTop: 25,
        height: 45, 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 5, 
        paddingLeft: 20, 
        paddingRight: 20, 
        backgroundColor: '#d3d3d3'
    }
})

export default LoginScreen; 