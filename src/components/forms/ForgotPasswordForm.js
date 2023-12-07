import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput, Button, IconButton } from 'react-native-paper';

export default function ForgotPasswordForm({navigation}) {

  return (
    <View style={styles.container}>

        <View style={{flex: 0}}>
            <IconButton
                icon='keyboard-backspace'
                iconColor='white'
                size={30}
                marginLeft={15}
                marginTop={10}
                onPress={() => navigation.navigate('Login')}
            />
        </View>

        <View style={{flex: 0.5}}></View>

        <View style={styles.accountRecoveryWrapper}>

            <Text style={{textAlign:'center', 
                fontWeight:'bold', 
                fontSize: 35, 
                color: 'white', 
                marginBottom: 40}} 
                variant='displayMedium'
                    >ACCOUNT RECOVERY</Text>

            <Text style={{color:'#00E31A', marginLeft: 10, fontWeight:'bold'}}>Please enter your email to recover your account.</Text>

            <TextInput
            style={styles.textInputStyle}
            mode='outlined'
            placeholder='Your Email'
            />

            <Button 
            style={styles.buttonStyle} 
            mode='contained'
                >GET PASSWORD
                </Button>

        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    accountRecoveryWrapper: {
        flex: 1,
        alignSelf: 'center',
        width: '90%',
    },
    textInputStyle: {
        marginTop: 10,
    },
    buttonStyle: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
        backgroundColor: '#233DFD',
    },
});
