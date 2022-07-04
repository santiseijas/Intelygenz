import {View} from 'react-native';
import React from 'react';
import DetailedNew from '../components/DetailedNew';

const Detail = props => {
  return (
    <View>
      <DetailedNew item={props.route.params} />
    </View>
  );
};

export default Detail;
