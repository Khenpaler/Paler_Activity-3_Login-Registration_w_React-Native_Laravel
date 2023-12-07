import { StyleSheet, View, BackHandler } from 'react-native'
import React, {useEffect} from 'react'
import Home from '../forms/Home';

export default function HomeScreen(props) {

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      // Do nothing when the back button is pressed
      return true;
    });

    // Cleanup the event listener when the component unmounts
    return () => backHandler.remove();
  }, []);

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