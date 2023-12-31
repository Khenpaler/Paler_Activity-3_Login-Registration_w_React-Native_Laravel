import { StyleSheet, Text, View, Image, TouchableOpacity, ToastAndroid, Keyboard} from 'react-native'
import React from 'react'
import { TextInput, Button, IconButton, HelperText } from 'react-native-paper';
import fetchServices from "../services/fetchServices";
import { Formik } from "formik";
import * as Yup from "yup";


export default function LoginForm({navigation}) {

    const LogoImage = require('../../../assets/PokusLogo.png');

    const [showPass, setShowPass] = React.useState(true);

    const showToast = (message = "Something wen't wrong") => {
        ToastAndroid.show(message, 3000);
      };



    const handleLogin = async (values, { resetForm }) => {

    try {
        // console.debug(values);
        const url = "http://192.168.146.137:8000/api/v1/login";

        const result = await fetchServices.postData(url, values);   

        if (result.message != null) {
            showToast(result?.message);
        } else {
            showToast("Successfully Logged In");

            // Dismiss the keyboard
            Keyboard.dismiss();

            // Introduce a delay of 2 seconds (adjust the time as needed)
            setTimeout(() => {
                navigation.navigate("Home");
            }, 1000);

            // Reset the form
            resetForm({ values: { email: "", password: "" } });
            navigation.navigate("Home");
        }
        } catch (e) {
            console.debug(e.toString());
        }
    };


    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("Invalid Email")
            .required("Please enter your email"),

        password: Yup.string()
            .required("Please enter your password"),
      });


    // const initialValues = {
    //     firstname: "",
    //     lastname:"",
    //     email:"",
    //     password:"",
    //     repassword:"",
    // }

    return (
        <Formik 
            initialValues={{email: "", password: ""}}
            onSubmit={async (values, { resetForm }) => {
                await handleLogin(values, { resetForm });
            }}
            validationSchema={validationSchema}
        >
            {({ 
                values, 
                handleChange, 
                handleBlur,
                setFieldError,
                setFieldTouched,
                handleSubmit, 
                isSubmitting, 
                errors,
                touched,
                setTouched,
             }) => {
                // console.debug(errors);
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
                            left={<TextInput.Icon icon="email"/>}
                            mode='outlined'
                            placeholder='Email'
                            defaultValue={values.email}
                            value={values.email}
                            keyboardType='email-address'
                            onChangeText={handleChange('email')}
                            onBlur={() => {
                                handleBlur('email');
                                setFieldError('email', '');  // Reset error for the field
                                setFieldTouched('email', false);  // Reset touched state for the field
                              }}
                            error={errors.email && touched.email}
                            onFocus={() => setTouched({ email: true }, false)}
                            />
                            {errors.email && touched.email && (
                                <HelperText style={{marginLeft:25}} type="error" visible={errors.email}>
                                    {errors.email}
                                </HelperText>
                            )}
                            

                            <TextInput
                            style={[styles.textInputStyle, {marginTop: 20}]}
                            left={<TextInput.Icon icon="lock"/>}
                            mode='outlined'
                            placeholder='Password'
                            secureTextEntry={showPass}
                            right={
                                <TextInput.Icon icon={!showPass ? 'eye' : 'eye-off'} onPress={() => setShowPass(!showPass)}/>
                            }
                            value={values.password}
                            onChangeText={handleChange('password')}
                            onBlur={() => {
                                handleBlur('password');
                                setFieldError('password', '');  // Reset error for the field
                                setFieldTouched('password', false);  // Reset touched state for the field
                              }}
                            error={errors.password && touched.password}
                            onFocus={() => setTouched({ password: true }, false)}
                            />
                            {errors.password && touched.password && (
                                <HelperText style={{marginLeft:25}} type="error" visible={errors.password}>
                                    {errors.password}
                                </HelperText>
                            )}
            
                            <View style={styles.rememberForgotContainer}>
            
                                <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                                    <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                                </TouchableOpacity>
                            </View>
                            
            
                            <Button
                            loading={isSubmitting}
                            disabled={isSubmitting}
                            onPress={handleSubmit}
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
                );
            }}
        </Formik>
        
    );
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
