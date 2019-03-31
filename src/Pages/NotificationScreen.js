import React, { PureComponent } from 'react'; 
import { View, Text, ScrollView, StyleSheet } from 'react-native'; 
import { NavbarTextOnly } from './Components/Navbar';
import FontLoader from './Components/FontLoader';
import NotificationPost from './Components/NotificationPost';
import notificationpostimg from '../../assets/notificationpostimg.webp';

class NotificationScreen extends PureComponent {
    render(){
        return (
            <FontLoader>
                    <NavbarTextOnly text="Notifications" />
                <View style={styles.container}>
                    <ScrollView>
                        <NotificationPost 
                            image={notificationpostimg}
                            name="Apollo Phelps"
                            status="Snapped on your post."
                            time="5:30 PM"
                        />
                        <NotificationPost 
                            image={notificationpostimg}
                            name="Apollo Phelps"
                            status="Snapped on your post."
                            time="5:30 PM"
                        />
                        <NotificationPost 
                            image={notificationpostimg}
                            name="Apollo Phelps"
                            status="Snapped on your post."
                            time="5:30 PM"
                        />
                        <NotificationPost 
                            image={notificationpostimg}
                            name="Apollo Phelps"
                            status="Snapped on your post."
                            time="5:30 PM"
                        />
                        <NotificationPost 
                            image={notificationpostimg}
                            name="Apollo Phelps"
                            status="Snapped on your post."
                            time="5:30 PM"
                        />
                        <NotificationPost 
                            image={notificationpostimg}
                            name="Apollo Phelps"
                            status="Snapped on your post."
                            time="5:30 PM"
                        />
                        <NotificationPost 
                            image={notificationpostimg}
                            name="Apollo Phelps"
                            status="Snapped on your post."
                            time="5:30 PM"
                        />
                    </ScrollView>
                </View>
            </FontLoader>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'column', 
        backgroundColor: '#f6f6f6',
    }
});

export default NotificationScreen; 