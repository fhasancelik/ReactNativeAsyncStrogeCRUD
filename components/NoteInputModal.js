import {
  StyleSheet,
  Text,
  View,
  Modal,
  Touchable,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import SearchBar from './SearchBar';
import RoundIconBtn from './RoundIconBtn';
const NoteInputModal = ({visible, onClose, onSubmit}) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const handleChangeText = (text, valuefor) => {
    if (valuefor == 'title') {
      setTitle(text);
    } else {
      setDesc(text);
    }

    //console.log(title,desc)
  };
  const handleClose=()=>{
onClose()
setTitle('')
setDesc('')
  }
  const handleSubmit = () => {
    if (!title.trim() && !desc.trim()) {
      onClose();
    } else {
      onSubmit(title, desc);
      setTitle('');
      setDesc('');
      onClose();
    }
  };

  return (
    <>
      <StatusBar hidden />

      <Modal visible={visible} animationType="fade">
        <SearchBar
          value={title}
          placeholder="Enter Title"
          onChangeText={text => {
            handleChangeText(text, 'title');
          }}
        />
        <SearchBar
          value={desc}
          placeholder="Enter Description"
          onChangeText={text => {
            handleChangeText(text, 'desc');
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: 50,
            marginLeft: 15,
          }}>
          <RoundIconBtn name="check" onPress={handleSubmit} size={25} />
          {title.trim()||desc.trim()? <RoundIconBtn name="close" onPress={handleClose} size={25} />:null}
        </View>
      </Modal>
    </>
  );
};
const styles = StyleSheet.create({});
export default NoteInputModal;
