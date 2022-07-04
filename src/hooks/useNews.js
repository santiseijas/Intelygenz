import {useQuery} from 'react-query';
import {XMLParser} from 'fast-xml-parser';
import {useDispatch} from 'react-redux';

function useNews() {
  const parser = new XMLParser();
  const dispatch = useDispatch();

  const fetchNews = async () => {
    const response = await fetch(
      'https://www.xatakandroid.com/tag/feeds/rss2.xml',
    );
    const textResponse = await response.text();
    let obj = parser.parse(textResponse);
    dispatch({type: 'ADD_NEWS', payload: obj.rss.channel.item});
    return obj;
  };
  const news = useQuery('news', () => fetchNews());

  return news;
}
export default useNews;
