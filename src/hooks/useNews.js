import {useQuery} from 'react-query';
import {XMLParser} from 'fast-xml-parser';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

function useNews() {
  const parser = new XMLParser();
  const dispatch = useDispatch();

  const storeData = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('news', jsonValue);
    } catch (e) {
      Alert.alert('Error', 'Error');
    }
  };

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
  const news = useQuery('news', () => fetchNews());

  return news;
}
export default useNews;
