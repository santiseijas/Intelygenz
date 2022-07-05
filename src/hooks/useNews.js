import {useQuery} from 'react-query';
import {XMLParser} from 'fast-xml-parser';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

function useNews() {
  const parser = new XMLParser();
  const dispatch = useDispatch();
  //function for fetch data from the url, once has the data, it will parse the XML and it will dispatch the action to the store
  const fetchNews = async () => {
    const response = await fetch(
      'https://www.xatakandroid.com/tag/feeds/rss2.xml',
    );
    const textResponse = await response.text();
    let obj = parser.parse(textResponse);
    dispatch({type: 'ADD_NEWS', payload: obj.rss.channel.item});
    await storeData(obj);
    return obj;
  };
  //function to store data in the cache of the mobile to let app works is there are not internet connection
  const storeData = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('news', jsonValue);
    } catch (e) {
      Alert.alert('Error', 'Error');
    }
  };

  const news = useQuery('news', () => fetchNews());

  return news;
}
export default useNews;
