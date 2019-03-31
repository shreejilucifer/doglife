import React, { PureComponent } from 'react'; 
import { View, Text, Image, StyleSheet } from 'react-native'; 

class NewsPost extends PureComponent {
    render(){
        return (
            <View style={styles.container}>
                <Image source={this.props.image} style={styles.newsPostImage}/>
                <View style={styles.newsDataContainer}>
                    <Text style={styles.newsHeading}>{this.props.title}</Text>
                    <Text style={styles.newsData}>{this.props.data}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        width: '95%',
        flexDirection: 'row', 
        borderRadius: 7,
        backgroundColor: '#ffffff',
        padding: 10, 
        marginTop: 10, 
        marginBottom: 5, 
        shadowColor: 'rgba(0, 4, 55, 0.02)',
        shadowOffset: { width: 7, height: 0 },
        shadowRadius: 17,
        borderRadius: 7,
        elevation: 3,
    }, 
    newsPostImage: {
        height: 75, 
        width: 95
    }, 
    newsDataContainer: {
        width: '100%', 
        marginLeft: 10, 
        flexDirection: 'column', 
        justifyContent: 'space-around', 
        alignItems: 'flex-start'
    }, 
    newsHeading: {
        color: '#3b3b3b',
        fontFamily: 'Roboto',    
        fontSize: 14,
        fontWeight: '500',
    }, 
    newsData: {
        width: '70%', 
        opacity: 0.6,
        color: '#3b3b3b',
        fontFamily: 'Roboto',
        fontSize: 10,
        fontWeight: '400',
        lineHeight: 13.33,
    }
});

export default NewsPost ; 