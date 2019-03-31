import React, { PureComponent } from 'react'; 
import { View, Text, Image, StyleSheet } from 'react-native';

class NotificationPost extends PureComponent {
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <Image source={this.props.image} style={styles.proimage} />
                    <View style={styles.leftDataContainer}>
                        <Text style={styles.name}>{this.props.name}</Text>
                        <Text style={styles.status}>{this.props.status}</Text>
                    </View>
                </View>
                <View style={styles.rightContainer}>
                        <Text style={styles.time}>{this.props.time}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%', 
        backgroundColor: '#ffffff',
        borderRadius: 3,
        flexDirection: 'row', 
        padding: 20, 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        marginTop: 5, 
    }, 
    leftContainer: {
        flexDirection: 'row', 
    }, 
    proimage: {
        height: 50, 
        width: 50, 
    }, 
    leftDataContainer: {
        flexDirection: 'column', 
        alignItems: 'flex-start', 
        justifyContent: 'space-around', 
        marginLeft: 10,
    }, 
    name: {
        color: '#3b3b3b',
        fontFamily: 'Roboto',
        fontSize: 17,
        fontWeight: '500',
    }, 
    status: {
        color: '#3b3b3b',
        fontFamily: 'Roboto',
        fontSize: 13,
        fontWeight: '400',
        lineHeight: 15,
    }, 
    rightContainer: {
        flexDirection: 'column',
        alignSelf: 'flex-start'
    }, 
    time: {
        opacity: 0.5,
        color: '#3b3b3b',
        fontFamily: 'Roboto',
        fontSize: 12,
        fontWeight: '400',
    }
});

export default NotificationPost ; 