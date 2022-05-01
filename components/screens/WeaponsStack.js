import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import WeaponsScreen from './WeaponsScreen'
import WeaponInfoScreen from './WeaponInfoScreen'

export default function WeaponsStack() {
    
    const Stack = createNativeStackNavigator()

    return (
      <Stack.Navigator initialRouteName='Weapon' screenOptions={{headerShown:false}}>
          <Stack.Screen name="Weapon" component={WeaponsScreen}/>
          <Stack.Screen name="WeaponsDetails" component={WeaponInfoScreen}/>
      </Stack.Navigator>
    )
}