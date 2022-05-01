import { View, Text, ScrollView, TouchableOpacity,Image} from 'react-native'
import React,{useState,useEffect} from 'react'
import { getWeapons } from '../../src/api/services/valorantServices'
import LoadingScreen from './LoadingScreen'

export default function WeaponsScreen() {

  const [isLoading, setIsLoading] = useState(true)
  const [weapons, setWeapons] = useState()

  useEffect(async() => {
    const data = await getWeapons()
    setWeapons(data)
    setIsLoading(false)
  }, [])
  
  return (
    <View style={{flex:1,width:'100%',paddingHorizontal:20,backgroundColor:'black'}}>
      {isLoading?<LoadingScreen/>:
      <View style={{flex:1,width:'100%'}}>
        <Text style={{color:'white',fontFamily:'Oswald_700Bold',fontSize:30}}>WEAPONS</Text>
        <ScrollView style={{marginTop:20}} showsVerticalScrollIndicator={false}>
          {
            weapons.map((e)=>
              <TouchableOpacity key={e.displayName} style={{alignItems:'center',flexDirection:'row',height:80,width:'100%',borderRadius:10,backgroundColor:'white',marginBottom:10}}>
                <Image source={{uri:e.displayIcon }} style={{height:80,width:80}} resizeMode='contain'/>
                <View style={{marginLeft:20}}>
                <Text style={{color:'black',fontSize:20,fontFamily:'Oswald_700Bold',letterSpacing:2}}>{e.displayName.toUpperCase()}</Text>
                <Text >{e.category.split('::')[1]}</Text>
                </View>
              </TouchableOpacity>
            )
          }
        </ScrollView>
      </View>
      }
    </View>
  )
}