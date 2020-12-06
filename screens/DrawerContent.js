import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
    useTheme
} from 'react-native-paper';

import { 
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 


export function DrawerContent(props) {

    const paperTheme = useTheme();


    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {... props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}} >
                            <Avatar.Image 
                                source= {{
                                    uri: 'https://img.icons8.com/plasticine/2x/user-male-circle.png',
                                    size:50
                                }}
                            />
                            <View style={{flexDirection:'column',marginLeft: 15}}>
                                <Title style={styles.title}>John Doe</Title>
                                <Caption style={styles.caption}>@johnDoe123</Caption>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>0</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>0</Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                        icon = {({color, size}) => (
                            <Icon
                                name="home-outline"
                                color={color}
                                size={size}
                            />
                            )}
                            label = "Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem
                        icon = {({color, size}) => (
                            <Icon
                                name="account-outline"
                                color={color}
                                size={size}
                                
                            />
                            )}
                            label = "Profile"
                            onPress={() => {props.navigation.navigate('Profile')}}
                        />
                        <DrawerItem
                        icon = {({color, size}) => (
                            <Icon
                                name="bookmark-outline"
                                color={color}
                                size={size}
                            />
                            )}
                            label = "Bookmarks"
                            onPress={() => {props.navigation.navigate('BookMarkScreen')}}
                        />
                        <DrawerItem
                        icon = {({color, size}) => (
                            <Icon
                                name="settings-outline"
                                color={color}
                                size={size}
                            />
                            )}
                            label = "Settings"
                            onPress={() => {props.navigation.navigate('SettingScreen')}}
                        />
                        <DrawerItem
                        icon = {({color, size}) => (
                            <Icon
                                name="account-check-outline"
                                color={color}
                                size={size}
                            />
                            )}
                            label = "Support"
                            onPress={() => {props.navigation.navigate('SupportScreen')}}
                        />
                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={paperTheme.dark}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>            
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon = {({color, size}) => (
                        <Icon
                            name="exit-to-app"
                            color={color}
                            size={size}
                            onPress={() => {}}
                        />
                    )}
                    label = "Sign Out"
                />
            </Drawer.Section>
        </View>
    );
}


const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });