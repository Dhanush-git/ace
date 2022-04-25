import { StyleSheet, Text, View,Image,ImageBackground } from 'react-native'
import React, {useEffect,useState} from 'react'
import { getAgentsByUuid } from '../../src/api/services/valorantServices'
import LoadingScreen from './LoadingScreen'

export default function AgentScreen() {

  const [agent, setagent] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(async() => {
   await getAgentsByUuid('601dbbe7-43ce-be57-2a40-4abd24953621').then((data)=>setagent(data))
   setIsLoading(false)
  },[])
  

  return (
    <View style={{width:'100%',flex:1}}>
      {isLoading?<LoadingScreen/>:
      <View style={{width:'100%'}}>
          {/* Agent Banner Start */}
          <View style={{backgroundColor:'#'+agent.backgroundGradientColors[0],borderRadius:20,overflow:'hidden'}}>
          <Image source={{uri:agent.displayIcon}} style={{height:'100%',width:'100%',position:'absolute',opacity:0.2,overflow:'visible',resizeMode:'contain',transform:[{translateX:-100}]}}/>
          <Image source={{uri:agent.fullPortraitV2}} style={{height:'200%',width:'120%',position:'absolute',opacity:1,overflow:'visible',resizeMode:'cover',transform:[{translateY:10},{translateX:50}]}}/>
          <View style={{flexDirection:'row',justifyContent:'space-between',height:200,width:'100%',paddingHorizontal:20}} >
              <View style={{paddingTop:30}}>
                <Text style={{color:'white',letterSpacing:2,fontSize:30,fontFamily:'Oswald_700Bold'}}>{agent.displayName.toUpperCase()}</Text>
                <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'#'+agent.backgroundGradientColors[2],paddingHorizontal:10,paddingVertical:5,borderRadius:5}} >
                  <Image source={{uri:agent.role.displayIcon}} style={{height:15,width:15}}/>
                  <Text style={{color:'white',fontSize:15,paddingLeft:10}}>{agent.role.displayName}</Text>
                </View>
              </View>
          </View>
          </View>
          {/* Agent Banner end */}
          <View style={{marginHorizontal:20,marginTop:20}}>
          <Text style={{color:'white',fontSize:15,fontWeight:'bold',letterSpacing:2}}>//BIOGRAPHY</Text>
          <Text style={{color:'white',marginTop:10,lineHeight:20}}>
            {agent.description}
          </Text>
          
          <Text style={{color:'white',fontSize:15,fontWeight:'bold',letterSpacing:2,marginTop:20}}>//ABILITIES</Text>
          </View>
      </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({})