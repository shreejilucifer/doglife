import React, { PureComponent } from 'react';
import { View, Text, Image, Keyboard, StyleSheet } from 'react-native';
import { LinearGradient, Font } from 'expo';
import forgotpass from '../../assets/forgotpass.webp';
import actions from '../Actions/loginActions';

import FontLoader from './Components/FontLoader';
import FormItem from './Components/FormItem';
import { GradientButton } from './Components/Buttons';

class ForgotPassScreen extends PureComponent {

    state = {
        keyboard: false
    }

    componentDidMount(){
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
            <View style={
                (this.state.keyboard)?
                    styles.containerKeyboard
                        :
                    styles.container
                }>
                <View style={styles.logoContainer}>
                    <Image 
                        source={forgotpass} 
                        style={
                            (this.state.keyboard)?
                                styles.logoIconKeyboard 
                                    :
                                styles.logoIcon
                        } 
                    /> 
                    {
                        (this.state.keyboard)?
                        <View></View>
                            :
                        <React.Fragment>
                        <Text style={styles.logoIconTitle}>Forgot Your Password ?</Text>
                        <Text style={styles.logoIconText}>Please enter the email address associated with your email. We will email you a link to reset your password.</Text>
                        </React.Fragment>
                    }
                </View>
                <View style={styles.formContainer}>
                    
                    <FormItem 
                        label="Email"
                        onChangeText={(text)=>console.log(text)}
                    />

                    <GradientButton 
                        text="Send"
                        onPress={()=>actions.onLoginClick()}
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
        alignItems: 'center', 
        justifyContent: 'space-around'
    }, 
    containerKeyboard: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'flex-start'
    }, 
    logoContainer: {
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        width: '70%'
    }, 
    logoIcon: {
        height: 150,
        width: 150, 
    }, 
    logoIconKeyboard: {
        marginTop: 20, 
        height: 70,
        width: 70, 
    },
    formContainer: {
        width: '100%',  
        flexDirection: 'column', 
        paddingLeft: 50, 
        paddingRight: 50,
    },
    logoIconTitle: {
        marginTop: 20, 
        color: '#3b3b3b',
        fontFamily: 'Roboto',
        fontSize: 25,
        fontWeight: '500',
    }, 
    logoIconText: {
        color: '#3b3b3b',
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 15, 
        lineHeight: 20,
        textAlign: 'center', 
    }
});


export default ForgotPassScreen ; 