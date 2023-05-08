import { StyleSheet, Text, View ,Dimensions, Touchable, TouchableOpacity} from 'react-native'
import React from 'react'
import colors from '../utils/constans';

const Note = ({item,onPress=()=>{}}) => {
  
  const {title,desc}=item;

  
  
    return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
      <Text style={styles.desc} numberOfLines={3}>{item.desc}</Text>
    </TouchableOpacity>
  )
}

const width=Dimensions.get('window').width - 40
const styles = StyleSheet.create({

container:{
    backgroundColor:colors.PRIMARY,
    width:width/2 -10,
    padding:8,
    borderRadius:10
},
title:{

fontSize:16,
color:colors.LIGHT,
fontWeight:'bold'

},
desc:{}

})
export default Note

