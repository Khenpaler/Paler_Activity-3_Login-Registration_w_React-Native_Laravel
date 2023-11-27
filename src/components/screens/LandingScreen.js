import { StyleSheet, View } from 'react-native'
import React from 'react'
import Landing from '../forms/Landing';

export default function LandingScreen(props) {
  return (
    <View style={styles.container}>
      <Landing {...props}/>
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