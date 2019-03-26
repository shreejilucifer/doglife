import React, { PureComponent } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'; 
import shareicon from '../../../assets/shareicon.webp';
import postpaw from '../../../assets/postpaw.webp';
import postbone from '../../../assets/postbone.webp';

class Post extends PureComponent {
    render(){
        let propic = this.props.propic ; 
        let name = this.props.name ; 
        let time = this.props.time ; 
        let image = this.props.image ; 
        let bones = this.props.bones; 
        let snaps = this.props.snaps ; 
        let data = this.props.data ; 

        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <View style={styles.headerLeftContainer}>
                        <Image source={propic} style={styles.propic}/>
                        <View style={styles.nameContainer}>
                            <Text style={styles.name}>{name}</Text>
                            <Text style={styles.time}>{time}</Text>
                        </View>
                    </View>
                    <Image source={shareicon} style={styles.shareicon} />
                </View>
                <View style={styles.postImageContainer}>
                    <Image source={image} style={styles.postimage} />
                </View>
                <View style={styles.likeContainer}>
                    <Image source={postbone} style={styles.postbone} />
                    <Text style={styles.likeText}>{bones} Bones</Text>
                    <Image source={postpaw} style={styles.postpaw} />
                    <Text style={styles.likeText}>{snaps} Snaps</Text>
                </View>
                <View style={styles.dataContainer}>
                    <Text style={styles.data}>{data}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column', 
        width: '100%',
        backgroundColor: '#ffffff', 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 20,
        elevation: 1,
    }, 
    headerContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: 20, 
    }, 
    shareicon: {
        height: 30, 
        width: 30, 
    }, 
    propic: {
        height: 45, 
        width: 45, 
    }, 
    headerLeftContainer: {
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center'
    }, 
    nameContainer: {
        flexDirection: 'column', 
        alignItems: 'flex-start', 
        justifyContent: 'space-between', 
        marginLeft: 10 
    }, 
    name: {
        color: '#3b3b3b',    
        fontFamily: 'Roboto',
        fontSize: 15,
        fontWeight: '500',
    }, 
    time: {
        color: '#3b3b3b',
        fontFamily: 'Roboto',
        fontSize: 10,
        fontWeight: '400',
    }, 
    postImageContainer: {
        width: '100%'
    }, 
    postimage: {
        height: 300, 
        width: '100%', 
    }, 
    likeContainer: {
        flexDirection: 'row', 
        width: '100%', 
        padding: 20, 
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        shadowOffset: { width: 3, height: 1 },
        shadowRadius: 30,
        backgroundColor: '#ffffff',
    }, 
    postbone: {
        height: 20, 
        width: 20, 
    }, 
    postpaw: {
        marginLeft: 30, 
        height: 18, 
        width: 20,
    }, 
    likeText: {
        marginLeft: 10, 
        color: '#3b3b3b',
        fontFamily: 'Roboto',
        fontSize: 15,
        fontWeight: '400',
    }, 
    dataContainer: {
        flexDirection: 'column', 
        width: '100%', 
        paddingLeft: 20, 
        paddingRight: 20, 
        paddingBottom: 20, 
        paddingTop: 10, 
    }, 
    data: {
        color: '#3b3b3b',
        fontFamily: 'Roboto',
        fontSize: 15,
        fontWeight: '400',
        lineHeight: 20,
    }
});

export default Post ; 
