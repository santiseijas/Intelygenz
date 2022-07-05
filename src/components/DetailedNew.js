import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
} from 'react-native';
import React from 'react';
import Item from './Item';

const DetailedNew = props => {
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <Item item={props.item} />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          //open url in browser
          Linking.openURL(props.item.link);
        }}>
        <Text style={styles.text}>Ver en el navegador</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default DetailedNew;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    alignContent: 'center',
    textAlign: 'center',
  },
  scroll: {
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#497FDF',
    padding: 10,
    margin: 10,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 30,
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
