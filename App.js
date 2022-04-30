import {useState} from 'react'
import { StyleSheet, Text, View,StatusBar } from 'react-native';
import LoadingScreen from './components/screens/LoadingScreen';
import * as NavigationBar from 'expo-navigation-bar';
import {useFonts,Oswald_700Bold} from '@expo-google-fonts/oswald'
import WeaponInfoScreen from './components/screens/WeaponInfoScreen';
import AgentsScreen from './components/screens/AgentsScreen';


export default function App() {

  const [isLoading, setIsLoading] = useState(false);
  let [fontsLoaded] = useFonts({
    Oswald_700Bold,
  })
  NavigationBar.setBackgroundColorAsync('black')

  return (
    <View style={styles.container}>
      {
        isLoading || !fontsLoaded?<LoadingScreen/>:<AgentsScreen/>
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
