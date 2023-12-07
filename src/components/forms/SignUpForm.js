import { StyleSheet, Text, View, ToastAndroid, Keyboard } from 'react-native'
import React from 'react'
import { TextInput, Button, IconButton } from 'react-native-paper';
import fetchServices from "../services/fetchServices";

export default function SignUpForm({navigation}) {

    const [showPass, setShowPass] = React.useState(true);
    const [showRePass, setShowRePass] = React.useState(true);

    const [firstname, setFirstname] = React.useState('');
    const [lastname, setLastname] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [repassword, setRepassword] = React.useState('');

    const [loading, setLoading] = React.useState(false);
    const [isError, setIsError] = React.useState(false);

    const showToast = (message = "Something wen't wrong") => {
        ToastAndroid.show(message, 3000);
    };

    const handleRegistration = async () => {
        
    try {
            setLoading(true);

        if (firstname === "" || lastname === "" || email === "" || password === "" || repassword === "") {
            showToast("Please input required data");
            setIsError(true);
            return false;
        }

        if (password !== repassword) {
            showToast("Please match the password");
            setIsError(true);
            return false;
        }

        const url = "http://192.168.146.137:8000/api/v1/register";
        const data = {
            firstname,
            lastname,
            email,
            password,
            password_confirmation: repassword,
        };

        console.debug(data);
    

        const result = await fetchServices.postData(url, data);
        
            if (result.message != null) {
                showToast(result?.message);

                // Introduce a delay of 2 seconds (adjust the time as needed)
                setTimeout(() => {
                navigation.navigate("Login");
                }, 2000);

                 // Clear input fields after successful registration
                 setFirstname("");
                 setLastname("");
                 setEmail("");
                 setPassword("");
                 setRepassword("");

                 Keyboard.dismiss();
            } 

            } catch (e) {  
                showToast(e.toString());
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
                onPress={() => navigation.navigate('Login')}
            />
        </View>

        <View style={styles.signUpWrapper}>

            <Text style={{textAlign:'center', fontWeight:'bold', fontSize: 50, color: 'white', marginBottom: 40}} variant='displayMedium'>SIGNUP</Text>

            <View style={styles.usernameWrapper}>
                <TextInput
                style={[styles.textInputStyle, styles.textInputUsername]}
                mode='outlined'
                placeholder='Firstname'
                value={firstname}
                onChangeText={setFirstname}
                error={isError}
                />
                <TextInput
                style={[styles.textInputStyle, styles.textInputUsername]}
                mode='outlined'
                placeholder='Lastname'
                value={lastname}
                onChangeText={setLastname}
                error={isError}
                />
            </View>

            <TextInput
            style={styles.textInputStyle}
            mode='outlined'
            placeholder='Your Email'
            value={email}
            onChangeText={setEmail}
            error={isError}
            />

            <TextInput
            style={styles.textInputStyle}
            mode='outlined'
            placeholder='Password'
            error={isError}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={showPass}
            right={
                <TextInput.Icon icon={!showPass ? 'eye' : 'eye-off'} onPress={() => setShowPass(!showPass)}/>
            }
            />

            <TextInput
            style={styles.textInputStyle}
            mode='outlined'
            placeholder='Repeat your Password'
            error={isError}
            value={repassword}
            onChangeText={setRepassword}
            secureTextEntry={showRePass}
            right={
                <TextInput.Icon icon={!showRePass ? 'eye' : 'eye-off'} onPress={() => setShowRePass(!showRePass)}/>
            }
            />

            <Button 
                loading={loading}
                disabled={loading}
                style={styles.buttonStyle}
                icon='account-plus' 
                mode='contained'
                onPress={handleRegistration}
                    >CREATE ACCOUNT
                    </Button>

        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    signUpWrapper: {
        flex: 3,
        alignSelf:'center',
        width: '90%',
    },
    usernameWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textInputUsername: {
        width: '48%',
    },
    textInputStyle: {
        marginVertical: 10,
    },
    buttonStyle: {
        width: '80%',
        alignSelf:'center',
        marginTop: 30,
        backgroundColor: '#233DFD',
    },
});
