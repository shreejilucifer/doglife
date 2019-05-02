import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo';
import {RNSlidingButton, SlideDirection} from 'rn-sliding-button';
import slidingbtndog from '../../../assets/slidingbtndog.webp';

const SingleColorButton = (props) => {

    let btnstyles = { ...styles.loginbtn, ...props.btnStyle, ...{backgroundColor: props.bgcolor} } ; 
    let textstyles = { ...styles.btnText, ...props.textStyle };

    return (
        <TouchableOpacity 
            onPress={props.onPress}
            style={
                (props.image)?
                    btnstyles
                        :
                    [btnstyles, {justifyContent: 'center'}]
            }
        >
            <Text 
                style={textstyles}
            >
                {props.text}
            </Text> 

            {
                (props.image)? <Image source={props.image} style={styles.btnIcon}/> : <React.Fragment></React.Fragment>
            }   

        </TouchableOpacity>
    );
}

const GradientButton = (props) => {
    let btnstyles = { ...styles.loginbtn, ...props.btnStyle, ...{backgroundColor: props.bgcolor} } ; 
    let textstyles = { ...styles.btnText, ...props.textStyle };

    return (
        <TouchableOpacity
            onPress={props.onPress}
        >
            <LinearGradient 
                colors={['#f58524', '#f92b7f']}
                start={[0,0]}
                end={[1,1]}
                style={
                    (props.image)?
                        btnstyles
                            :
                        [btnstyles, {justifyContent: 'center'}]
                }
            >
                <Text style={textstyles}>{props.text}</Text> 
                {
                    (props.image)? <Image source={props.image} style={styles.btnIcon}/> : <React.Fragment></React.Fragment>
                }   
            </LinearGradient>
    </TouchableOpacity>
    );
}

const SlidingButton = (props) => (
    <RNSlidingButton
        style={styles.slidingButton}
        onSlidingSuccess={props.onslide}
        slideDirection={SlideDirection.RIGHT}
        height={50}
    >
        <View style={styles.slidingContainer}>
            <Image source={slidingbtndog} style={styles.dogbtn} />
            <Text style={styles.btntext}>Swipe Right to Publish</Text>
        </View>
    </RNSlidingButton>
);

const styles = StyleSheet.create({
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
    slidingButton: {
        width: '80%', 
        height: 50,  
        borderRadius: 10,   
        backgroundColor: '#f58524'
    }, 
    slidingContainer: {  
        width: '100%', 
        height: 50, 
        flexDirection: 'row', 
        backgroundColor: 'rgb(245, 245, 245)',
        alignItems: 'center', 
        justifyContent: 'space-around'
    }, 
    dogbtn: {
        width: 30,
        height: 30,
    },
    btntext: {
        color: '#3b3b3b',
        opacity: 0.5,
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: '500',
    }, 
});

export { SingleColorButton, GradientButton, SlidingButton }; 