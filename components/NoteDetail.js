import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import { useHeaderHeight } from '@react-navigation/elements'

import colors from '../utils/constans.js'
import RoundIconBtn from './RoundIconBtn.js'



const NoteDetail = (props) => {

  const {note}=props.route.params
const headerHeight=useHeaderHeight()


const formatDate = (ms) => {
  const date = new Date(ms);
  const day = date.getDate();
  const month = date.getMonth() + 1; // Ayın sıfır-tabanlı değerine 1 ekliyoruz.
  const year = date.getFullYear();
  const hrs = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();

  return `${day}/${month}/${year} - ${hrs}:${min}:${sec}`;
};

  return (
    <ScrollView contentContainerStyle={[styles.container,{paddingTop:headerHeight}]}>
        <Text style={styles.time}>Created At {formatDate(note.createdTime)}</Text>
      <Text style={styles.title}>{note.title}</Text>
      <Text style={styles.desc}>{note.desc}</Text>

      <View style={styles.btnContainer}>



<RoundIconBtn  onPress={()=>console.log('del')}  size={22} name='delete' style={{backgroundColor:colors.ERROR}} />
<RoundIconBtn onPress={()=>console.log('edit')} size={22} name='edit' style={{backgroundColor:colors.PRIMARY}} />


      </View>
    </ScrollView>
  )
}

export default NoteDetail

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:15
    },
    time:{

textAlign:'right',
fontSize:15,
opacity:0.5


    },
    title:{
fontSize:30,
color:colors.PRIMARY,
fontWeight:'bold'

    },
    desc:{
        fontSize:20,
        opacity:0.6
    }
,
    btnContainer:{
      position:'absolute',
      right:15,
      bottom:50,
      marginTop:25,
  flexDirection:'row',
  gap:15
    },
    
})