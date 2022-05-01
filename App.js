import {useState} from 'react'
import { StyleSheet, Text, View,StatusBar } from 'react-native';
import LoadingScreen from './components/screens/LoadingScreen';
import * as NavigationBar from 'expo-navigation-bar';
import {useFonts,Oswald_700Bold} from '@expo-google-fonts/oswald'
import AgentsScreen from './components/screens/AgentsScreen';
import WeaponsScreen from './components/screens/WeaponsScreen';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AgentsStack from './components/screens/AgentsStack';
import WeaponsStack from './components/screens/WeaponsStack';

export default function App() {

  const [isLoading, setIsLoading] = useState(false);
  let [fontsLoaded] = useFonts({
    Oswald_700Bold,
  })
  NavigationBar.setBackgroundColorAsync('black')

  const Tab = createBottomTabNavigator()

  return (
    <View style={styles.container}>
      {
        isLoading || !fontsLoaded?<LoadingScreen/>:
        <View style={{flex:1,width:'100%'}}>
          <NavigationContainer>
            <Tab.Navigator screenOptions={{headerShown:false,tabBarStyle:{height:50,paddingBottom:10,backgroundColor:'black',borderTopWidth:0},
            tabBarIconStyle:{display:'none',height:0,width:0},
            tabBarLabelStyle:{position:'absolute',fontSize:15}}}
            >
            <Tab.Screen name="Agents" component={AgentsStack} />
            <Tab.Screen name="Weapons" component={WeaponsStack} />
          </Tab.Navigator>
          </NavigationContainer>
        </View>
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
