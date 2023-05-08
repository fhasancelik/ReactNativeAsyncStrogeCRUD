import { View, Text, TextInput, StatusBar, StyleSheet,Dimensions } from 'react-native'
import React, { useState } from 'react'
import colors from '../utils/constans'
import RoundIconBtn from '../components/RoundIconBtn'
import AsyncStorage from '@react-native-async-storage/async-storage'
import SearchBar from '../components/SearchBar'

const Intro = ({onFinish}) => {
    const [name,setName]=useState('')

const handleOnChangeText=(text)=>{
setName(text)
}
const handleSubmit=async()=>{
const user={name:name}
await AsyncStorage.setItem('user',JSON.stringify(user))

if(onFinish) onFinish()
}

//console.log(user)

  return (
    <>
    <StatusBar hidden/>
    <View style={styles.container}>
      <Text style={styles.inputTitle}>Enter Your Name</Text>
      
<SearchBar value={name} onChangeText={handleOnChangeText} placeholder='Enter Your Name
'/>

{name.trim().length >3 ? <RoundIconBtn name='arrowright' size={25} color={colors.LIGHT} onPress={handleSubmit}/> : null}
    </View>
    </>

  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',justifyContent:'center'
    },

    inputTitle:{
alignSelf:'flex-start',
paddingLeft:25,
marginBottom:5,
opacity:0.5
    }
})

export default Intro