import React, {useRef, useState, useEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Platform,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ENTRIES1 = [
  {
    title: 'TIC-TAC-TOE',
    subtitle: 'CLICK TO OPEN GITHUB',
    illustration: 'data:image/png;base64,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',
  },
  {
    title: 'Earlier this morning, NYC',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
  },
  {
    title: 'White Pocket Sunset',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://i.imgur.com/MABUbpDl.jpg',
  },
  {
    title: 'Acrocorinth, Greece',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
  },
  {
    title: 'The lone tree, majestic landscape of New Zealand',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
  },
];


const {width: screenWidth} = Dimensions.get('window');

const Slider = props => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

//   const goForward = () => {
//     carouselRef.current.snapToNext();
//   };

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{uri: item.illustration}}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.7}
          {...parallaxProps}
        />
        <TouchableOpacity onPress={()=> alert('hello')}>
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={entries}
        renderItem={renderItem}
        hasParallaxImages={true}
      />
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: screenWidth - 60,
    height: screenWidth - 60,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
});