import React, { PureComponent } from 'react'; 
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'; 
import FontLoader from './Components/FontLoader';
import { NavbarTextOnly } from './Components/Navbar';
import arrow from '../../assets/arrow.webp';

const Title = (props) => {
    const styles = props.styles ; 
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.title}>{props.text}</Text>
        </View>
    );
}

const Links = (props) => {
    const styles = props.styles ; 
    return (
        <View style={styles.linkContainer}>
            <Text style={
                (props.textDark)? 
                    [styles.linkText, {fontWeight: '500'}] 
                        :
                    styles.linkText
                }>{props.text}</Text>
            <Image source={arrow} style={styles.arrow} />
        </View>
    );
}

class SettingsScreen extends PureComponent {
    render(){
        return (
            <FontLoader>
                    <NavbarTextOnly text="Settings" />
                    <View style={styles.container}>
                        <ScrollView>
                            <Title text="Account" styles={styles} />
                            <Links text="Edit Profile" styles={styles} />
                            <Links text="Change Password" styles={styles} />
                            <Links text="Language" styles={styles} />
                            <Title text="Other" styles={styles} />
                            <Links text="Privacy Policy" styles={styles} />
                            <Links text="Contact Us" styles={styles} />
                            <Links text="About App" styles={styles} />
                            <Links text="Logout" styles={styles} textDark/>
                        </ScrollView>
                    </View>
            </FontLoader>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#f6f6f6'
    }, 
    titleContainer: {
        flexDirection: 'row', 
        padding: 20, 
        alignItems: 'center', 
        justifyContent: 'flex-start'
    }, 
    title: {
        color: '#3b3b3b',
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: '500',
    }, 
    linkContainer: {
        width: '100%', 
        padding: 20, 
        backgroundColor: '#ffffff',
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center'
    }, 
    linkText: {
        color: '#3b3b3b',
        fontFamily: 'Roboto',
        fontSize: 17,
        fontWeight: '400',
    }, 
    arrow: {
        height: 13,
        width: 7,
    }
});

export default SettingsScreen; 