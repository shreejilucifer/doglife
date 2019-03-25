import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, Keyboard, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo';
import FontLoader from './Components/FontLoader';
import FormItem from './Components/FormItem';
import { GradientButton } from './Components/Buttons';
import registerdogbtn from '../../assets/registerdogbtn.webp';
import registerpropic from '../../assets/registerpropic.webp';
import whiteplus from '../../assets/whiteplus.webp';

class RegisterScreen extends PureComponent {
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
                <View style={
                    (this.state.keyboard)?
                        styles.containerKeyboard
                            :
                        styles.container
                    }
                    >
                    <View style={
                        (this.state.keyboard)?
                            styles.iconContainerKeyboard
                                :
                            styles.iconContainer
                        }>
                        <Image 
                            source={registerpropic} 
                            style={
                                (this.state.keyboard)?
                                    styles.iconKeyboard
                                        :
                                    styles.icon
                            }
                        />    
                        <TouchableOpacity
                            onPress={()=>console.log("Plus Clicked")}
                        >
                            <LinearGradient 
                                colors={['#f58524', '#f92b7f']}
                                style={
                                    (this.state.keyboard)?
                                        styles.plusContainerKeyboard: styles.plusContainer
                                }
                            >
                                <Image source={whiteplus} style={styles.plus}/>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.formContainer}>
                        <FormItem 
                            label="Name"
                            onChangeText={(text)=>console.log(text)}
                        />
                        <FormItem
                            label="Email"
                            labelStyle={{marginTop: 20}}
                            onChangeText={(text)=>console.log(text)}
                        />
                        <FormItem 
                            label="Password"
                            labelStyle={{marginTop: 20}}
                            onChangeText={(text)=>console.log(text)}
                        />
                        <FormItem
                            label="Confirm Password"
                            labelStyle={{marginTop: 20}}
                            onChangeText={(text)=>console.log(text)}
                        />
                        <GradientButton 
                            btnStyle={{marginTop: 20}}
                            text="Register"
                            image={registerdogbtn}
                            onPress={() => actions.onLoginClick()}
                        />

                        <View style={styles.belowContainer}>
                            <Text style={styles.greyText}>You already have an account?</Text>
                            <TouchableOpacity onPress={()=>{
                                this.props.navigation.navigate('Login');
                            }}>
                                <Text style={styles.redText}> Login</Text>
                            </TouchableOpacity>
                        </View>
                        
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
        marginTop: 25, 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'flex-start'
    },
    formContainer: {
        width: '100%', 
        flexDirection: 'column', 
        paddingLeft: 50, 
        paddingRight: 50,
    }, 
    belowContainer: {
        marginTop: 20, 
        width: '100%', 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    greyText: {
        opacity: 0.7,
        color: '#3b3b3b',
        fontFamily: 'Roboto',
        fontSize: 15,
        fontWeight: '400',
    }, 
    redText: {
        color: '#e25e31',
        fontFamily: 'Roboto',
        fontSize: 15,
        fontWeight: '500',
    }, 
    iconContainer: {
        width: '100%', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center'
    }, 
    iconContainerKeyboard: {
        width: '100%', 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    icon: {
        width: 150, 
        height: 150
    }, 
    iconKeyboard: {
        width: 70, 
        height: 70, 
    }, 
    plusContainer: {
        marginTop: -25, 
        width: 40, 
        height: 40, 
        borderRadius: 20, 
        justifyContent: 'center', 
        alignItems: 'center',
        borderWidth: 2, 
        borderColor: '#fff'
    }, 
    plusContainerKeyboard: {
        marginLeft: -10, 
        width: 20, 
        height: 20, 
        borderRadius: 10, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    plus: {
        width: '50%', 
        height: '50%', 
    }
});

export default RegisterScreen ; 