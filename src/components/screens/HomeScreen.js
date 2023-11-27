import { StyleSheet, View } from 'react-native'
import React from 'react'
import Home from '../forms/Home';

export default function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <Home {...props}/>
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