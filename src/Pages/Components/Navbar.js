import React, { PureComponent } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import propic from '../../../assets/propic.webp';
import paw from '../../../assets/paw.webp';
import searchicon from '../../../assets/searchicon.webp'; 
import backbtn from '../../../assets/backbtn.webp';
import flag from '../../../assets/flag.webp';

const Logo = (props) => {

    const styles = props.styles ; 

    return (
        <View style={styles.logoTextContainer}>
                    <Text style={styles.logoText}>
                    D
                    </Text>
                    <Image 
                        source={paw} 
                        style={styles.pawImage} />
                    <Text 
                        style={styles.logoText}
                    >
                        GLIFE
                    </Text>
                </View>
    );
}

class NavbarHome extends PureComponent {
    render(){
        return (
                <View style={styles.container}>
                    <Image source={propic} style={styles.propic}/>
                    <Logo styles={styles} />
                    <Image source={searchicon} style={styles.searchicon} />
                </View>
        );
    }
}

class NavbarTextOnly extends PureComponent {
    render(){
        return (
            <View style={styles.textOnlyContainer}>
                <Text style={styles.textOnlyText}>{this.props.text}</Text>
            </View>
    );        
    }
}

class NavbarWithBothSides extends PureComponent {
    render(){
        return (
            <View style={styles.bothContainer}>
            
                <TouchableOpacity
                    style={{ width: '33.33%', justifyContent: 'center', alignItems: 'flex-start'}}
                    onPress={this.props.onBackPress}
                >
                    <Image source={backbtn} style={styles.backbtn}/>
                </TouchableOpacity>

                <View style={{ width: '33.33%', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={styles.textOnlyText}>{this.props.text}</Text>
                </View>

                <TouchableOpacity 
                    onPress={this.props.onRightPress}
                    style={{ width: '33.33%', justifyContent: 'center', alignItems: 'flex-end'}}>
                {
                (this.props.flag)?
                    <Image source={flag} style={styles.flag} />
                        :
                    <Text style={styles.cancelText}>Cancel</Text>
                }
                </TouchableOpacity>    
            </View>
    );        
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 23, 
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        alignItems: 'center',
        height: 70, 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 20,
        elevation: 1,
        backgroundColor: '#ffffff',
    }, 
    propic: {
        height: 40, 
        width: 40,
    }, 
    logoTextContainer: {  
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
    pawImage: {
        marginLeft: 2, 
        marginRight: 2,
        height: 23,
        width: 23, 
    }, 
    searchicon: {
        height: 28, 
        width: 28, 
    }, 
    textOnlyContainer: {
        marginTop: 23, 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center',
        height: 70, 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 20,
        elevation: 1,
        backgroundColor: '#ffffff',
    }, 
    bothContainer: {
        marginTop: 23, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        paddingLeft: 15, 
        paddingRight: 15, 
        alignItems: 'center',
        height: 70, 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 20,
        elevation: 1,
        backgroundColor: '#ffffff',
    },
    textOnlyText: {
        color: '#3b3b3b',
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: 25, 
        textAlign: 'center'
    }, 
    backbtn: {
        width: 22,
        height: 20,
    }, 
    flag: {
        width: 17,
        height: 22,
    }, 
    cancelText: {
        opacity: 0.5,
        color: '#3b3b3b',
        fontFamily: 'Roboto',
        fontSize: 17,
        fontWeight: '400',
    }
});

export { 
    NavbarHome, 
    NavbarTextOnly, 
    NavbarWithBothSides
}; 
