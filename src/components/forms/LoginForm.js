import { StyleSheet, Text, View, Image, TouchableOpacity, ToastAndroid, Keyboard, ScrollView, KeyboardAvoidingView } from 'react-native'
import React, {useState} from 'react'
import { TextInput, Button, IconButton } from 'react-native-paper';
import fetchServices from "../services/fetchServices";
import { KeyboardAwareView } from 'react-native-keyboard-aware-view';


export default function LoginForm({navigation}) {

    const LogoImage = require('../../../assets/PokusLogo.png');

    const [showPass, setShowPass] = React.useState(true);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const [loading, setLoading] = React.useState(false);


    const showToast = (message = "Something wen't wrong") => {
        ToastAndroid.show(message, 3000);
      };



    const handleLogin = async () => {

    try {
        setLoading(true);
        if (email === "") {
        setErrors({ email: true });
        return false;
        }

        if (password === "") {
        setErrors({ password: true });
        return false;
        }

        const url = "http://192.168.146.137:8000/api/v1/login";
        const data = {
                email,
                password,
        };

        const result = await fetchServices.postData(url, data);  
        console.debug(result);     

        if (result.message != null) {
            showToast(result?.message);
        } else {
            showToast("Successfully Logged In");

            // Dismiss the keyboard
            Keyboard.dismiss();

            // Introduce a delay of 2 seconds (adjust the time as needed)
            setTimeout(() => {
                navigation.navigate("Home");
            }, 2000);

            setEmail("");
            setPassword("");
        }
        } catch (e) {
            console.debug(e.toString());
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>

            <View style={{flex: 1, justifyContent:'flex-start', alignItems:'flex-start'}}>
                <IconButton
                    icon='keyboard-backspace'
                    iconColor='white'
                    size={30}
                    marginLeft={15}
                    marginTop={10}
                    onPress={() => navigation.navigate('Landing')}
                />  
            </View>
            
            
            <View style={styles.loginWrapper}>

                <View style={styles.imageContainer}>
                    <Image source={LogoImage} style={styles.imageStyle}></Image>
                </View>

                <TextInput
                style={styles.textInputStyle}
                mode='outlined'
                placeholder='Email'
                value={email}
                onChangeText={setEmail}
                />

                <TextInput
                style={styles.textInputStyle}
                mode='outlined'
                placeholder='Password'
                secureTextEntry={showPass}
                right={
                    <TextInput.Icon icon={!showPass ? 'eye' : 'eye-off'} onPress={() => setShowPass(!showPass)}/>
                }
                value={password}
                onChangeText={setPassword}
                />

                <View style={styles.rememberForgotContainer}>

                    <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
                

                <Button
                onPress={handleLogin}
                loading={loading}
                disabled={loading}
                style={styles.buttonStyle}
                icon='login' 
                mode='contained'
                    >Login
                    </Button>

                <View style={styles.loginContainer}>
                    <Text style={styles.textStyle}>Don't Have an Account?</Text>

                    <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                    <Text style={[styles.textStyle, styles.loginTextStyle]}>Signup Here</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageContainer: {
        alignItems: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageStyle: {
        height: 200,
        width: 500,
    },
    loginWrapper: {
        flex: 3,
    },
    textInputStyle: {
        width: '90%',
        alignSelf:'center',
        marginVertical: 10,
    },
    rememberForgotContainer: {
        flexDirection: 'row-reverse',
        marginTop: 10,
        width: '85%',
        alignSelf:'center',
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
    loginContainer: {
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: 300,
        marginTop: 30,
    },
    textStyle: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
    },
    loginTextStyle:{
        textDecorationLine: 'underline',
        color: '#233DFD',
    },
});
