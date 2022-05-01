import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

const LoadingScreen = () => {
  return (
    <View style={LoadingStyles.container} >
        <Image source={require('../../assets/logo.png')} style={{width:100,height:100,zIndex:1,transform:[{translateY:80}]}} />
        <LottieView source={require('../../assets/lottie/loading_bar.json')} style={{width:200,zIndex:-1}} autoPlay loop/>
    </View>
  )
}

export default LoadingScreen

const LoadingStyles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        backgroundColor:'black',
        alignItems:'center',
        justifyContent:'center'
    }
})