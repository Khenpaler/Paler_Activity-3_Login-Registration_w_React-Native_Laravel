import { StyleSheet, View } from 'react-native';
import React from 'react';
import SignUpForm from '../forms/SignUpForm';

export default function SignUpScreen(props) {
  return (
    <View style={styles.container}>
      <SignUpForm {...props}/>
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