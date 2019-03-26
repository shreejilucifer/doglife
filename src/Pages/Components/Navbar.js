import React, { PureComponent } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import propic from '../../../assets/propic.webp';
import paw from '../../../assets/paw.webp';
import searchicon from '../../../assets/searchicon.webp'; 

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
    textOnlyText: {
        color: '#3b3b3b',
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: 25, 
    }
});

export { 
    NavbarHome, 
    NavbarTextOnly
}; 
