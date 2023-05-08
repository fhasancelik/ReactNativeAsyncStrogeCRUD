import {StyleSheet, Text, View,TouchableOpacity, ToastAndroid} from 'react-native';
import React from 'react';
import colors from '../utils/constans';
import Icon from 'react-native-vector-icons/AntDesign';
const RoundIconBtn = ({name,size,color,style,onPress}) => {
    return (
      <TouchableOpacity style={[styles.container,style]} 
      onPress={onPress}>
        <Icon
          name={name}
          size={size}
          color={color}
          
          
        />
      </TouchableOpacity>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      
      borderRadius: 50,
      backgroundColor: 'pink',
   
      padding:15,
    width:50,
    height:50,
      alignItems:'center',
      justifyContent:'center'
    },
  
  });
  
  export default RoundIconBtn;
