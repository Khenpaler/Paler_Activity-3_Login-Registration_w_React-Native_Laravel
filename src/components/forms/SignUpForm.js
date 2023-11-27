import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput, Button } from 'react-native-paper';

export default function SignUpForm({navigation}) {

const [showPass, setShowPass] = React.useState(true);

const [showRePass, setShowRePass] = React.useState(true);

  return (
    <View style={styles.container}>

        <View style={styles.signUpWrapper}>

            <Text style={{textAlign:'center', fontWeight:'bold', fontSize: 50, color: 'white', marginBottom: 40}} variant='displayMedium'>SIGNUP</Text>

            <TextInput
            style={styles.textInputStyle}
            mode='outlined'
            placeholder='Username'
            label='Username'
            />

            <TextInput
            style={styles.textInputStyle}
            mode='outlined'
            placeholder='Your Email'
            label='Your Email'
            />

            <TextInput
            style={styles.textInputStyle}
            mode='outlined'
            placeholder='Password'
            label='Password'
            secureTextEntry={showPass}
            right={
                <TextInput.Icon icon={!showPass ? 'eye' : 'eye-off'} onPress={() => setShowPass(!showPass)}/>
            }
            />

            <TextInput
            style={styles.textInputStyle}
            mode='outlined'
            placeholder='Repeat your Password'
            label='Repeat your Password'
            secureTextEntry={showRePass}
            right={
                <TextInput.Icon icon={!showRePass ? 'eye' : 'eye-off'} onPress={() => setShowRePass(!showRePass)}/>
            }
            />

            <Button 
            style={styles.buttonStyle}
            icon='account-plus' 
            mode='contained'
                >CREATE ACCOUNT
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
