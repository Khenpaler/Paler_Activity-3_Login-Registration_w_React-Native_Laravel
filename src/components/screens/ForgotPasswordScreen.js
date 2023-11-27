import { StyleSheet, View } from 'react-native';
import React from 'react';
import ForgotPasswordForm from '../forms/ForgotPasswordForm';

export default function ForgotPasswordScreen(props) {
  return (
    <View style={styles.container}>
      <ForgotPasswordForm {...props}/>
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