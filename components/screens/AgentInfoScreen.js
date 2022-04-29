import { StyleSheet, Text, View,Image,ScrollView} from 'react-native'
import React, {useEffect,useState} from 'react'
import { getAgentsByUuid } from '../../src/api/services/valorantServices'
import LoadingScreen from './LoadingScreen'

export default function AgentInfoScreen() {

  const [agent, setagent] = useState({})
  const [primaryColor, setPrimaryColor] = useState('red');
  const [secondaryColor, setSecondaryColor] = useState('green');
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(async() => {
  const data = await getAgentsByUuid('dade69b4-4f5a-8528-247b-219e5a1facd6')
  setagent(data)
  if(data.backgroundGradientColors){
    setPrimaryColor('#'+data.backgroundGradientColors[0])
    setSecondaryColor('#'+data.backgroundGradientColors[2])
  }else{
    setPrimaryColor('#6CD4FF')
    setSecondaryColor('#8B80F9')
  }
  setIsLoading(false)
  },[])

  return (
    <View style={{width:'100%',flex:1}}>
      {isLoading?<LoadingScreen/>:
        <ScrollView>
          <View style={{width:'100%',flex:1}}>
          {/* Agent Banner Start */}
          <View style={{backgroundColor:primaryColor,borderRadius:20,overflow:'hidden'}}>
          <Image source={{uri:agent.displayIcon}} style={{height:'100%',width:'100%',position:'absolute',opacity:0.2,overflow:'visible',resizeMode:'contain',transform:[{translateX:-100}]}}/>
          <Image source={{uri:agent.fullPortraitV2}} style={{height:'200%',width:'120%',position:'absolute',opacity:1,overflow:'visible',resizeMode:'cover',transform:[{translateY:0},{translateX:50}]}}/>
          <View style={{flexDirection:'row',justifyContent:'space-between',height:200,width:'100%',paddingHorizontal:20}} >
              <View style={{paddingTop:30}}>
                <Text style={{color:'white',letterSpacing:2,fontSize:30,fontFamily:'Oswald_700Bold'}}>{agent.displayName.toUpperCase()}</Text>
                <View style={{flexDirection:'row',alignItems:'center',backgroundColor:secondaryColor,paddingHorizontal:10,paddingVertical:5,borderRadius:5}} >
                  <Image source={{uri:agent.role.displayIcon}} style={{height:15,width:15}}/>
                  <Text style={{color:'white',fontSize:15,paddingLeft:10}}>{agent.role.displayName}</Text>
                </View>
              </View>
          </View>
          </View>
          {/* Agent Banner end */}
          <View style={{marginHorizontal:20,marginTop:20}}>
          <Text style={{color:secondaryColor,fontSize:15,fontWeight:'bold',letterSpacing:2}}>// BIOGRAPHY</Text>
          <Text style={{color:'white',marginTop:10,lineHeight:20}}>
            {agent.description}
          </Text>
          {/* Agent Abilities */}
          <Text style={{color:secondaryColor,fontSize:15,fontWeight:'bold',letterSpacing:2,marginTop:20}}>// ABILITIES</Text>
          {agent.abilities.map(e=>
            <View key={e.slot} style={{width:'100%',paddingVertical:10,marginVertical:5}}>
                <View style={{flexDirection:'row',alignItems:'center'}} >
                  <Image source={{uri:e.displayIcon}} style={{height:30,width:30}}/>
                  <View style={{marginLeft:10}} >
                    <Text style={{color:primaryColor,fontWeight:'bold',letterSpacing:2}} >{e.displayName.toUpperCase()}</Text>
                    <Text style={{color:'white',fontSize:10,fontWeight:'bold',letterSpacing:2}}>{e.slot.toUpperCase()}</Text>
                  </View>
                </View>
                <Text style={{paddingTop:10,color:'white',fontSize:12,lineHeight:20,marginTop:5}}>
                  {e.description}
                </Text>
            </View>
          )}
          </View>
        </View>
        </ScrollView>
      }
    </View>
  )
}

const styles = StyleSheet.create({})