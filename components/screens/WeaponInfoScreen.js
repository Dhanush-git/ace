import { View, Text,Image,ScrollView,TouchableOpacity } from 'react-native'
import React, {useState,useEffect} from 'react'
import LoadingScreen from './LoadingScreen';
import { getWeaponsByUuid } from '../../src/api/services/valorantServices';

export default function WeaponInfoScreen() {
  
  const [weapon, setWeapon] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [currentSkin, setCurrentSkin] = useState('Default');
  const [currentSkinUri, setCurrentSkinUri] = useState();

  useEffect(async() => {
  const data = await getWeaponsByUuid('44d4e95c-4157-0037-81b2-17841bf2e8e3')
  setWeapon(data)
  setCurrentSkinUri(data.displayIcon)
  setIsLoading(false)
  }, []);
  return (
    <View style={{flex:1,width:'100%'}} >
      {
          isLoading?<LoadingScreen/>:
          <View>
              <View style={{width:'100%',minHeight:200,backgroundColor:'white',borderRadius:20,padding:20}} >
                <Image source={{uri:currentSkinUri}} style={{alignSelf:'center',position:'absolute',width:'100%',height:'80%',resizeMode:'contain'}} />
                <Text style={{color:'black',fontFamily:'Oswald_700Bold',letterSpacing:2,fontSize:30,marginTop:120}} >{weapon.displayName.toUpperCase()}</Text>
                <Text style={{color:'black',fontFamily:'Oswald_700Bold',letterSpacing:2,fontSize:15}} >{weapon.category.split('::')[1].toUpperCase()}</Text>
                <Text style={{color:'black',fontFamily:'Oswald_700Bold',letterSpacing:2,fontSize:15}} >{currentSkin}</Text>
                <Text style={{color:'black',fontWeight:'bold',letterSpacing:2,fontSize:15,marginTop:10}} >// SKINS</Text>
                <ScrollView horizontal style={{marginTop:20}} >
                    {
                        weapon.skins.map((e)=>
                        <TouchableOpacity key={e.displayName} onPress={()=>{setCurrentSkinUri(e.chromas[0].fullRender),setCurrentSkin(e.displayName)}} style={{marginRight:10,padding:5,backgroundColor:'#e9ecef',borderRadius:10}} >
                            <Image source={{uri:e.chromas[0].fullRender}} style={{height:50,width:50,resizeMode:'contain'}}/>
                        </TouchableOpacity>
                        )
                    }
                </ScrollView>
              </View>
              <View style={{marginTop:20,marginHorizontal:20}} >
              <Text style={{color:'white',fontSize:15,fontWeight:'bold',letterSpacing:2}} >// WEAPON STATS</Text>
              </View>
          </View>
      }
    </View>
  )
}