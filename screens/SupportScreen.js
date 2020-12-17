import React from 'react';
import { View,StyleSheet } from 'react-native';

import Slider from '../components/carouselSlider';

const SupportScreen = () => {
    return (
      <View style={styles.container}>
        <Slider/>
      </View>
    );
};

export default SupportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});