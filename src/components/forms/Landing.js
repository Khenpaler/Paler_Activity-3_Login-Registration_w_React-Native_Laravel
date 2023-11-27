import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';
import LogoImage from '../styles/LogoImage';


export default function Landing({navigation}) {
  return (
    <View style={styles.container}>
    

    <View style={styles.imageContainer}>
        <Image source={LogoImage} style={styles.imageStyle}></Image>
    </View>

      <Button
      style={styles.buttonStyle}
      icon='login'
      mode='contained'
      buttonColor='blue'
      onPress={() => navigation.navigate('Login')}
        >LOGIN
        </Button>

      <Button
      style={styles.buttonStyle}
      icon='account-plus'
      mode='contained'
      buttonColor='blue'
      onPress={() => navigation.navigate('Signup')}
        >SIGNUP
        </Button>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
    },
    imageStyle: {

        height: 400,
        width: 500,
        resizeMode: 'contain',
    },
    buttonStyle: {
        textAlign: 'center',
        width: 350,
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
    },
});