import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ShortedNew from '../components/ShortedNew';
import useNews from '../hooks/useNews';
import Filter from '../components/Filter';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen() {
  const [search, setSearch] = useState('');
  const [news, setNews] = useState([]);
  const {data, isLoading} = useNews();

  useEffect(() => {
    if (data) {
      setNews(data.rss.channel.item);
    } else {
      const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('@storage_Key');
          return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
          return Alert.alert('Error', 'Error');
        }
      };
      getData().then(storage => {
        setNews(storage);
      });
    }
  }, [data]);

  const searchFilterFunction = text => {
    const dataDest = data.rss.channel.item;
    if (text) {
      const filter = dataDest.filter(item => {
        return item.title.toLowerCase().includes(text.toLowerCase());
      });
      setNews(filter);
      setSearch(text);
    } else {
      setNews(dataDest);
      setSearch('');
    }
  };

  return (
    <ScrollView style={styles.scroll}>
      <Filter
        searchText={search}
        searchFilterFunction={text => searchFilterFunction(text)}
      />
      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator size={'large'} />
        ) : (
          news.map((item, index) => {
            return (
              <View style={styles.item} key={index}>
                <ShortedNew item={item} />
              </View>
            );
          })
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputStyle: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    margin: 10,
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  item: {
    borderWidth: 1,
    borderColor: '#000',
    width: '100%',
    margin: 5,
    padding: 10,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
