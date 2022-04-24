import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoadingScreen from './components/screens/LoadingScreen';
import { getAgents } from './src/api/services/valorantServices';
import * as NavigationBar from 'expo-navigation-bar';
export default function App() {

  NavigationBar.setBackgroundColorAsync('black')
  getAgents()

  return (
    <View style={styles.container}>
      <LoadingScreen/>
      <StatusBar style="inverted" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
