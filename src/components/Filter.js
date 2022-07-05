import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';

const Filter = ({searchText, searchFilterFunction}) => {
  return (
    <View>
      <TextInput
        style={styles.textInputStyle}
        onChangeText={text => searchFilterFunction(text)}
        value={searchText}
        placeholder="Buscar"
      />
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({
  textInputStyle: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    margin: 10,
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
});
