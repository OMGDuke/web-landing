import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ReactPlaceholder from 'react-placeholder';

import {
  Thewashingtonpost,
  Cnn,
  Newyorktimes,
  Yahoo,
} from '@icons-pack/react-simple-icons';

import newsData from '../news.json';

const icons = {
  'The Washington Post': {
    icon: Thewashingtonpost,
  },
  CNN: {
    icon: Cnn,
    color: 'red',
  },
  'New York Times': {
    icon: Newyorktimes,
    color: 'white',
  },
  'Yahoo Entertainment': {
    icon: Yahoo,
    color: 'red',
  },
};

const placeholderImage =
  'https://www.newstatesman.com/sites/default/files/blogs_2020/03/gettyimages-1207482071_1_.jpg';

const News = () => {
  const [news, setNews] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]);
  const [loading, setLoading] = useState(true);

  const shorternName = (str = '') => {
    const array1 = str.split(' ');
    const newarray1 = [];

    for (let x = 0; x < array1.length; x += 1) {
      newarray1.push(array1[x].charAt(0).toUpperCase());
    }
    return newarray1.join('.');
  };
  const getData = async () => {
    setTimeout(async () => {
      const articles = newsData;
      // const { data: articles } = await axios.get('/api/news');
      await setNews(articles);
      setLoading(false);
    }, 3000);
    // const { data: articles } = await axios.get('/api/news');
    // setNews(articles);
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(news[0]);
  return (
    <Container>
      {news.slice(0, 10).map((item, i) => {
        const Icon = icons[item.source?.name]?.icon;
        return (
          <NewsItem key={`newsitem-${i}`} href={item.url} title={item.title}>
            {!loading ? (
              <Source title={item.source?.name}>
                {Icon ? (
                  <Icon color={icons[item.source?.name]?.color} size={20} />
                ) : (
                  shorternName(item.source?.name)
                )}
              </Source>
            ) : (
              ''
            )}
            <img
              alt={item.title}
              src={item.urlToImage?.length ? item.urlToImage : placeholderImage}
              onError={e => {
                e.target.onerror = null;
                e.target.src = placeholderImage;
              }}
            ></img>
            <ReactPlaceholder
              showLoadingAnimation
              type="text"
              rows={2}
              ready={!loading}
            >
              <Title>{item.title}</Title>
            </ReactPlaceholder>
          </NewsItem>
        );
      })}
    </Container>
  );
};

export default News;

const Container = styled.div`
  grid-area: news;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 6px;
  margin-top: 20px;
  @media only screen and (max-width: 1400px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media only screen and (max-width: 1050px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media only screen and (max-width: 560px) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

const NewsItem = styled.a`
  color: #222;
  background: white;
  padding: 10px;
  border-radius: 8px;
  position: relative;
  text-decoration: none;
  img {
    width: 100%;
    height: 100px;
    object-fit: cover;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    @media only screen and (max-width: 720px) {
      height: 60px;
    }
  }
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 12px;
  display: -webkit-box;
  height: 34px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Source = styled.div`
  background: black;
  color: white;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  right: 12px;
  top: 12px;
  font-size: 10px;
`;

const Placeholder = styled.div`
  background: grey;
  height: 36px;
  width: 100%;
`;
