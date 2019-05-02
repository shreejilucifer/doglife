import React, { Fragment } from 'react';
import { Text, TextInput, StyleSheet } from 'react-native';

const FormItem = (props) => {
    let labelStyle = { ...styles.formLabel, ...props.labelStyle };

    return (
        <Fragment>
            <Text 
                style={labelStyle}
            >
                {props.label}
            </Text>
            <TextInput 
                secureTextEntry={props.password}
                onChangeText={(text)=>props.onChangeText(text)}
                style={styles.formInput} 
            />
        </Fragment>
    );
}

const styles = StyleSheet.create({
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
});
 
export default FormItem ; 