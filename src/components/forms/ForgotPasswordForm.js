import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput, Button } from 'react-native-paper';

export default function ForgotPasswordForm({navigation}) {

const [showPass, setShowPass] = React.useState(true);

const [showRePass, setShowRePass] = React.useState(true);

  return (
    <View style={styles.container}>

        <View style={styles.signUpWrapper}>

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
            label='Your Email'
            />

            <Button 
            style={styles.buttonStyle} 
            mode='contained'
                >GET PASSWORD
                </Button>

            <Button 
            onPress={() => navigation.navigate('Login')}
            style={styles.buttonStyle}
            icon='arrow-left' 
            mode='contained'
                >Go Back
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
    signUpWrapper: {
        marginLeft: 10,
        marginRight: 10,
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
