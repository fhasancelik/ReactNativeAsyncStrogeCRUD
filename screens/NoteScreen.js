import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import colors from '../utils/constans';
import SearchBar from '../components/SearchBar';
import RoundIconBtn from '../components/RoundIconBtn';
import NoteInputModal from '../components/NoteInputModal.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Note from '../components/Note';
const NoteScreen = ({user,navigation}) => {
  const [greet, setGreet] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [notes, setNotes] = useState([]);
  //console.log({user})

  const findGreet = () => {
    const hours = new Date().getHours();
    if (hours === 0 || hours < 12) return setGreet('Morning');
    if (hours === 1 || hours < 17) return setGreet('Afternoon');
    setGreet('Evening');
  };

  const handleOnSubmit = async (title, desc) => {
    const note = {
      id: Date.now(),
      title: title,
      desc: desc,
      createdTime: Date.now(),
    };
    const updateNotes = [...notes, note];

    await AsyncStorage.setItem('notes', JSON.stringify(updateNotes));

    // console.log(note)
    setNotes(updateNotes);
  };

  const findNotes = async () => {
    try {
      const notesresult = await AsyncStorage.getItem('notes');
      if (notesresult !== null) {
        setNotes(JSON.parse(notesresult));
      }
    } catch (error) {
      console.error(error);
    }
  };

  function openNote(item){
    navigation.navigate('NoteDetail',{note:item})
  }

  useEffect(() => {
    // AsyncStorage.clear()
    findNotes();
    //console.log(notes)
    findGreet();
  }, []);
  console.log(notes);
  return (
    <>
      <StatusBar
        UIStatusbarStyle="dark-content "
        backgroundColor={colors.LIGHT}
      />
      <SafeAreaView style={{flex: 1}}>
        <NoteInputModal
          onSubmit={handleOnSubmit}
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
        />
        <View style={styles.container}>
          <Text style={styles.header}>
            Good {greet} ,{user.name}
          </Text>
          {notes.length ? (
            <SearchBar placeholder="Search Here" style={styles.input} />
          ) : null}

          {notes.length !== 0 ? (
            <FlatList
              columnWrapperStyle={{
                justifyContent: 'space-between',
                marginBottom: 15,
              }}
              numColumns={2}
              
              data={notes}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => <Note onPress={()=>openNote(item)} item={item} />}
            />
          ) : (
            <View style={styles.emptyHeaderContainer}>
              <Text style={styles.emptyHeader}>Add Notes</Text>
            </View>
          )}

          <RoundIconBtn
            onPress={() => setModalVisible(true)}
            size={25}
            name="plus"
            style={styles.addBtn}
          />
        </View>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    // backgroundColor:'red',
    flex: 1,
    // backgroundColor: 'blue',
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  input: {
    marginTop: 15,
  },

  emptyHeader: {
    fontSize: 30,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    opacity: 0.2,
  },
  emptyHeaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',

    flex: 1,
    zIndex: -1,
    //backgroundColor:'red'
  },

  addBtn: {
    position: 'absolute',
    bottom: 50,
    right: 15,
  },
});
export default NoteScreen;
