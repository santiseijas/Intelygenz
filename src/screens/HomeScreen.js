import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ShortedNew from '../components/ShortedNew';
import useNews from '../hooks/useNews';
import Filter from '../components/Filter';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen() {
  const [search, setSearch] = useState('');
  const [news, setNews] = useState([]);
  const {data, isLoading, isSuccess} = useNews();
  const [allNews, setAllNews] = useState([]);
  //the data is the news from the API, is there isn't internet connection, there will not be data and it will get the news from the cache
  useEffect(() => {
    if (data) {
      setNews(data);
      setAllNews(data);
    } else {
      const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('news');
          return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
          return Alert.alert('Error', 'Error');
        }
      };
      getData().then(storage => {
        setNews(storage);
        setAllNews(storage);
      });
    }
  }, [data]);

  //function that filter the news by the search text
  const searchFilterFunction = text => {
    const dataDest = allNews;
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
        {/* if is loading, show the Activity indicator */}
        {isLoading && !isSuccess && <ActivityIndicator size={'large'} />}
        {/* if is success and news, show the news */}
        {!isLoading && news && news.length > 0 ? (
          news.map((item, index) => {
            return (
              <View style={styles.item} key={index}>
                <ShortedNew item={item} />
              </View>
            );
          })
        ) : (
          <View style={styles.container}>
            {/* if is not loading and there aren´t any news, show the text */}
            {!isLoading && !news && <Text>No hay noticias para mostrar</Text>}
          </View>
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
