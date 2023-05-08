import { StyleSheet, Text, View,Dimensions,TextInput } from 'react-native'
import React from 'react'
import colors from '../utils/constans'

const SearchBar = ({value,onChangeText=()=>{},placeholder,style}) => {
  return (
    <TextInput value={value} onChangeText={onChangeText} placeholder={placeholder}style={[styles.textinput,style]}/>
  )
}
const screenWidth=Dimensions.get('window').width -50
const styles = StyleSheet.create({
    textinput:{
        borderWidth:2,
        borderColor:colors.PRIMARY,
        color:colors.PRIMARY,
        width:screenWidth,
        height:40,
        borderRadius:10,
        paddingLeft:15
        ,fontSize:25,
        marginBottom:15
    },
})
export default SearchBar

