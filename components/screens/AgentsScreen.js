import { View, Text,ScrollView,TouchableOpacity,Image } from 'react-native'
import React,{useState,useEffect} from 'react'
import LoadingScreen from './LoadingScreen';
import { getAgents } from '../../src/api/services/valorantServices';

export default function AgentsScreen() {
  
    const [isLoading, setIsLoading] = useState(true);
    const [agents, setAgents] = useState();

    useEffect(async() => {
        const data = await getAgents()
        setAgents(data)
        setIsLoading(false)
    }, []);
  
  return (
    <View style={{flex:1,width:'100%',paddingHorizontal:20,backgroundColor:'black'}} >
    {
        isLoading?<LoadingScreen/>:
        <View style={{flex:1}} >
            <Text style={{color:'white',fontSize:30,fontFamily:'Oswald_700Bold'}} >AGENTS</Text>
            <ScrollView style={{height:'100%',marginTop:20}} showsVerticalScrollIndicator={false}>
                {
                    agents.map(e => 
                        <TouchableOpacity key={e.displayName} style={{height:80,width:'100%',backgroundColor:e.backgroundGradientColors?'#'+e.backgroundGradientColors[0]:'#6CD4FF',borderRadius:10,marginBottom:10}} >
                            <Image source={{uri:e.killfeedPortrait}} style={{height:'100%',position:'absolute',width:'100%',opacity:0.2}}/>
                            <View style={{height:80,width:'100%',flexDirection:'row',alignItems:'center'}} >
                            <Image source={{uri:e.displayIcon}} style={{height:80,width:80,borderRadius:10}} />
                            <View style={{marginLeft:10}}>
                            <Text style={{color:'white',fontFamily:'Oswald_700Bold',fontSize:20,letterSpacing:2}} >{e.displayName.toUpperCase()}</Text>
                            <Text style={{color:'white'}}>{e.developerName}</Text>
                            </View>
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