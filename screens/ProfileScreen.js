import React from 'react';
import {View,SafeAreaView, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';

import {
  Avatar,
  Title,
  Caption,
  Text
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Slider from '../components/carouselSlider';

const ProfileScreen = () => {
    
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image 
                source={{
                  uri: 'data:image/jpeg;base64,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',
                }}
                size={80}
              />
              <View style={{marginLeft: 20}}>
                <Title style={[styles.title, {
                  marginTop:15,
                  marginBottom: 5,
                }]}>John Doe</Title>
                <Caption style={styles.caption}>@j_doe</Caption>
              </View>
            </View>
          </View>

          <View>
            <View style={styles.row}>
              <Icon name="map-marker-radius" color="#777777" style={{marginLeft: 20}} size={20} />
              <Text style={{color:"#777777", marginLeft: 20}}>Panipat, Haryana</Text>
            </View>
            <View style={styles.row}>
              <Icon name="phone" color="#777777" style={{marginLeft: 20}} size={20} />
              <Text style={{color:"#777777", marginLeft: 20}}>+91-0000000000</Text>
            </View>
            <View style={styles.row}>
              <Icon name="email" color="#777777" style={{marginLeft: 20}} size={20} />
              <Text style={{color:"#777777", marginLeft: 20}}>johnDoe@email.com</Text>
            </View>
            <View style={styles.row}>
                <Slider/>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView> 
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});