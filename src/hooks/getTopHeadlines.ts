/* eslint-disable react-hooks/rules-of-hooks */
import {useState, useEffect} from 'react';

export interface News {
  author: string;
  title: string;
  description: string;
  source: any;
  url: string;
  image: string;
}

const getTopHeadlines = (): [Function, any, Boolean] => {
  const [results, setResults] = useState([]);
  const [isErr, setIsError] = useState(false);

  const fetchTopHeadlines = async () => {
    fetch('https://some-news-api.herokuapp.com/articles')
      .then((resp) => resp.json())
      .then((respData) => {
        if (respData === undefined) {
          throw new Error('No data received');
        }
        const arrayOfNews = respData.map((news: News) => {
          const result = {
            author: news.author,
            title: news.title,
            description: news.description,
            name: news.source.name,
            url: news.url,
            image: news.urlToImage,
          };
          return result;
        });
        setResults(arrayOfNews);
        setIsError(false);
      })
      .catch((err) => {
        console.log('From news api: ' + err.message);
        setIsError(true);
      });
  };

  useEffect(() => {
    fetchTopHeadlines();
  }, []);

  return [fetchTopHeadlines, results, isErr];
};

export default getTopHeadlines;
