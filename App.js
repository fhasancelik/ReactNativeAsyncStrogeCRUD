import { View, Text, SafeAreaView } from 'react-native'
import React,{useEffect,useState} from 'react'
import Intro from './screens/Intro'
import AsyncStorage from '@react-native-async-storage/async-storage'
import NoteScreen from './screens/NoteScreen.js'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import NoteDetail from './components/NoteDetail'
const Stack =createStackNavigator()

const App = () => {
const[user,setUser]=useState({})
const findUser=async()=>{
    const result=await AsyncStorage.getItem('user')
  if(result!==null){
    setUser(JSON.parse(result))
  }
}
useEffect(()=>{
findUser()

//AsyncStorage.clear()
},[])



function RenderNoteScreen(props){
  return(
    <NoteScreen {...props} user={user}/>
  )
}

if(!user.name) return <Intro onFinish={findUser}/>





  return (
<NavigationContainer>
<Stack.Navigator screenOptions={{headerTitle:'',headerTransparent:true}}>
  <Stack.Screen name='NoteScreen' component={ RenderNoteScreen}/>
  <Stack.Screen name='NoteDetail' component={NoteDetail}/>
</Stack.Navigator>


</NavigationContainer>
 

 
  )
}

export default App