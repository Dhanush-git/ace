import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import AgentsScreen from './AgentsScreen'
import AgentInfoScreen from './AgentInfoScreen'

export default function AgentsStack() {

  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator initialRouteName='Agent' screenOptions={{headerShown:false}}>
        <Stack.Screen name="Agent" component={AgentsScreen}/>
        <Stack.Screen name="AgentsDetails" component={AgentInfoScreen}/>
    </Stack.Navigator>
  )
}