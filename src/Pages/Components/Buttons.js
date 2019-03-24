import React from 'react';
import { Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo';

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
                (props.image)? <Image source={props.image} style={styles.btnIcon}/> : <></>
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
                    (props.image)? <Image source={props.image} style={styles.btnIcon}/> : <></>
                }   
            </LinearGradient>
    </TouchableOpacity>
    );
}

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
    }
});

export { SingleColorButton, GradientButton }; 