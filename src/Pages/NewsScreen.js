import React, { PureComponent } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native'; 
import FontLoader from './Components/FontLoader';
import { NavbarTextOnly } from './Components/Navbar';
import NewsPost from './Components/NewsPost';
import newspostimage from '../../assets/newspostimage.webp';

class NewsScreen extends PureComponent {
    render(){
        return (
            <FontLoader>
                <NavbarTextOnly text="News" />
                <View style={styles.scrollContainer}>
                <ScrollView style={styles.container}>
                    <NewsPost 
                        image={newspostimage}
                        title="Dogs Are Even More Like Us..."
                        data="Lorem ipsum dolor sit amet, consectetur adipicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim…"
                    />
                    <NewsPost 
                        image={newspostimage}
                        title="Dogs Are Even More Like Us..."
                        data="Lorem ipsum dolor sit amet, consectetur adipicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim…"
                    />
                    <NewsPost 
                        image={newspostimage}
                        title="Dogs Are Even More Like Us..."
                        data="Lorem ipsum dolor sit amet, consectetur adipicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim…"
                    />
                    <NewsPost 
                        image={newspostimage}
                        title="Dogs Are Even More Like Us..."
                        data="Lorem ipsum dolor sit amet, consectetur adipicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim…"
                    />
                    <NewsPost 
                        image={newspostimage}
                        title="Dogs Are Even More Like Us..."
                        data="Lorem ipsum dolor sit amet, consectetur adipicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim…"
                    />
                    <NewsPost 
                        image={newspostimage}
                        title="Dogs Are Even More Like Us..."
                        data="Lorem ipsum dolor sit amet, consectetur adipicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim…"
                    />
                    <NewsPost 
                        image={newspostimage}
                        title="Dogs Are Even More Like Us..."
                        data="Lorem ipsum dolor sit amet, consectetur adipicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim…"
                    />
                    <NewsPost 
                        image={newspostimage}
                        title="Dogs Are Even More Like Us..."
                        data="Lorem ipsum dolor sit amet, consectetur adipicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim…"
                    />
                </ScrollView>
                </View>
            </FontLoader>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fcfdfe',
        marginTop: 7,  
        width: '100%', 
    }, 
    scrollContainer: {
        flex: 1,  
    }
});

export default NewsScreen ; 