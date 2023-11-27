import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { PaperProvider } from 'react-native-paper'
import { StyleSheet} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import LandingScreen from './src/components/screens/LandingScreen';
import LoginScreen from './src/components/screens/LoginScreen';
import SignUpScreen from './src/components/screens/SignUpScreen';
import ForgotPasswordScreen from './src/components/screens/ForgotPasswordScreen';
import HomeScreen from './src/components/screens/HomeScreen';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false}} name='Landing' component={LandingScreen}></Stack.Screen>
            <Stack.Screen options={{ headerShown: false}} name='Login' component={LoginScreen}></Stack.Screen>
            <Stack.Screen options={{ headerShown: false}} name='Signup' component={SignUpScreen}></Stack.Screen>
            <Stack.Screen options={{ headerShown: false}} name='ForgotPassword' component={ForgotPasswordScreen}></Stack.Screen>
            <Stack.Screen options={{ headerShown: false}} name='Home' component={HomeScreen}></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050A30',
  },
});