import {useState} from 'react'
import { StyleSheet, Text, View,StatusBar } from 'react-native';
import LoadingScreen from './components/screens/LoadingScreen';
import { getAgents } from './src/api/services/valorantServices';
import * as NavigationBar from 'expo-navigation-bar';

export default function App() {

  const [isLoading, setIsLoading] = useState(true);
  NavigationBar.setBackgroundColorAsync('black')

  return (
    <View style={styles.container}>
      {
        isLoading?<LoadingScreen/>:<Text>App.js</Text>
      }
      <StatusBar backgroundColor={'black'} barStyle={'light-content'}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
