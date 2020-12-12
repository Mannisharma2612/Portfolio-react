import React from 'react';
import {
     View, Text, StyleSheet, Dimensions, Image, TouchableOpacity
} from 'react-native';

import * as Animatable from 'react-native-animatable';

import { useTheme } from '@react-navigation/native';

const SplashScreen = ({navigation}) => {

    const { colors } = useTheme();

    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Animatable.Image
                animation = "bounceIn"
                duration= {1500}
                source={require('../assets/snorlax_pokemon_art_vector_102108_1920x1080.jpg')}
                style={styles.logo}
                resizeMode="stretch"
            />
        </View>
        <Animatable.View style={[styles.footer, {
                backgroundColor: colors.background
            }]} animation="fadeInUpBig">
            <Text style={[styles.title, {
                color: colors.text
            }]}>Stay connected with everyone !</Text>
            <Text style={styles.text}>Sign in with account</Text>
            <View style={styles.button}>
                <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')} style={styles.appButtonContainer}>
                    <Text style={styles.appButtonText}>Get Started</Text>
                </TouchableOpacity>
            </View>    
        </Animatable.View>
      </View>
    );
};

export default SplashScreen;

const {height} = Dimensions.get('screen');
const height_logo = height *  0.28;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop:5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    },
    appButtonText:{
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    appButtonContainer:{
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 12
    }
  });

