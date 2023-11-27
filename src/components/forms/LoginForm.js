import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { TextInput, Button, Checkbox } from 'react-native-paper';
import LogoImage from '../styles/LogoImage';


export default function LoginForm({navigation}) {

const [showPass, setShowPass] = React.useState(true);
const [rememberMe, setRememberMe] = useState(false);

  return (
    <View style={styles.container}>

        <View style={styles.imageContainer}>
            <Image source={LogoImage} style={styles.imageStyle}></Image>
        </View>

        <View style={styles.loginWrapper}>

            <TextInput
            style={styles.textInputStyle}
            mode='outlined'
            placeholder='Email'
            />

            <TextInput
            style={styles.textInputStyle}
            mode='outlined'
            placeholder='Password'
            secureTextEntry={showPass}
            right={
                <TextInput.Icon icon={!showPass ? 'eye' : 'eye-off'} onPress={() => setShowPass(!showPass)}/>
            }
            />

            <View style={styles.rememberForgotContainer}>

                <View style={styles.checkboxContainer}>
                    <Checkbox
                        status={rememberMe ? 'checked' : 'unchecked'}
                        onPress={() => setRememberMe(!rememberMe)}
                        color="#233DFD"
                    />
                    <Text style={styles.checkboxText}>Remember Me</Text>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                    <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
            

            <Button
            onPress={() => navigation.navigate("Home")}
            style={styles.buttonStyle}
            icon='login' 
            mode='contained'
                >Login
                </Button>

            <Button
            onPress={() => navigation.navigate("Signup")}
            style={[styles.buttonStyle, styles.signupBotton]}
            icon='account-plus' 
            mode='contained'
            textColor='#233DFD'
                >Signup
                </Button>

            <Button 
            onPress={() => navigation.navigate('Landing')}
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
    imageContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
    },
    imageStyle: {
        height: 500,
        width: 500,
        resizeMode: 'contain',
    },
    loginWrapper: {
        flex: 3,
        marginLeft: 10,
        marginRight: 10,
    },
    textInputStyle: {
        width: '90%',
        alignSelf:'center',
        marginTop: 10,
    },
    rememberForgotContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        width: '85%',
        alignSelf:'center',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
    checkboxText: {
        marginLeft: 8,
        fontSize: 15,
        color: 'white',
      },
    forgotPasswordText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
    },
    buttonStyle: {
        width: '80%',
        alignSelf:'center',
        marginTop: 20,
        backgroundColor: '#233DFD',
    },
    signupBotton: {
        backgroundColor: 'white',
        borderColor: '#233DFD',
        borderWidth: 2,
    },
});
