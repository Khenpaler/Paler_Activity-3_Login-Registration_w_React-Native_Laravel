import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import KhenImage from '../styles/KhenImage';
import {Button} from 'react-native-paper';


export default function HomeScreen({navigation}) {

  return (
    <View style={styles.container}>

        <Text style={styles.headerTitle}>Home</Text>

        <View style={styles.imageContainer}>
        <Text style={{color: 'white',
                marginBottom: 10,}}>Activity 2: Styling and Navigation in React Native</Text>
            <Image source={KhenImage} style={styles.imageStyle}></Image>
            <Text style={{color: 'white',
                marginTop: 10,}}>Name: Khen Harold P. paler {'\n'}Section: IT3R8 </Text>
        </View>

        <View style={{flex: 1}}>
            <Button 
                onPress={() => navigation.navigate('Login')}
                style={styles.buttonStyle}
                icon='logout' 
                mode='contained'
                labelStyle={{fontSize: 20}}
                    >
                        <Text style={{fontSize: 20}}>LOGOUT</Text>
                    </Button>
        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    headerTitle: {
        flex:1,
        fontWeight: 'bold',
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
        marginTop: 25,
    },
    imageContainer: {
        flex: 3,
    },
    imageStyle: {
        width: 300,
        height: 300,
    },
    buttonStyle: {
        fontSize: 40,
        backgroundColor: '#233DFD',
        padding: 20,
    },
});
