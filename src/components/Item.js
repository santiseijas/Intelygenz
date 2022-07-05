import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {getDescription, getImageFromString} from '../common/util';

export default function Item(props) {
  return (
    <View>
      <Text style={styles.title}>{props.item.title}</Text>
      <Text numberOfLines={props.maxLines}>
        {props.maxLines
          ? //if props.maxLines is declared remove jump lines of description for only show 2 lines max and if not just replace the html tags
            getDescription(props.item.description, /\n/g)
          : props.item.description.replace(/<[^>]*>?/gm, '')}
      </Text>
      <Image
        style={styles.image}
        source={{uri: getImageFromString(props.item.description)}}
      />
      {props.showDate && <Text style={styles.date}>{props.item.pubDate}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  image: {
    height: 200,
    width: Dimensions.get('window').width - 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  date: {
    marginTop: 10,
  },
});
