import {TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Item from './Item';

const ShortedNew = props => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Detail', props.item)}>
      <Item item={props.item} maxLines={2} showDate={true} />
    </TouchableOpacity>
  );
};

export default ShortedNew;
