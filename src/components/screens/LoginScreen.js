import { StyleSheet, View } from 'react-native'
import React from 'react'
import LoginForm from '../forms/LoginForm';

export default function LoginScreen(props) {
  return (
    <View style={styles.container}>
      <LoginForm {...props}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#050A30',
  },
});