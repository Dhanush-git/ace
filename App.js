import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { getAgents } from './src/api/services/valorantServices';

export default function App() {

  getAgents()

  return (
    <View style={styles.container}>
      <Text style={{fontWeight:'bold'}}>ACE</Text>
      <StatusBar style="auto" />
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
