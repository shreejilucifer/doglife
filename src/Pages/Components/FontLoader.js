import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Font } from 'expo';
import OfflineNotice from './OfflineNotice';

class FontLoader extends PureComponent {
    
    state = {
        fontLoaded: false
    }

    async componentDidMount(){
        await Font.loadAsync({
            'Big John': require('../../../assets/Fonts/BIGJOHN.otf'),
            'Roboto': require('../../../assets/Fonts/Roboto.ttf'),
            });
        
        this.setState({ fontLoaded: true });
        console.log( "Font Loaded" );
    }

    render(){
        if( this.state.fontLoaded ) 
        return (
            <>
                <OfflineNotice />
                {this.props.children}
            </>
        ); 
        else 
        return (
            <View style={styles.container}>
                <Text>
                    Loading...
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    }
});

export default FontLoader ; 


 