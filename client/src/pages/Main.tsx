import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { GlobalStyle } from '../styles/global';

import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { Font } from '../components/Font';
import { TweetList } from '../components/TweetList';

const Content = styled.div`
  padding: 0 20px;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
`;

const MainSection = styled.section`
  display: flex;
`;

export function Main() {
  const [tweets, setTweets] = useState([]);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/tweets', {
      params: {
        searchTerm,
      },
    }).then(res => setTweets(res.data.statuses))
      .catch(e => setError(e));
  }, [error, searchTerm]);

  function handleSearch(term:string) {
    setSearchTerm(term);
  }

  return (
    <>
      <GlobalStyle />
      <Font />
      <Content>
        <Header searchTerm={searchTerm} onChange={handleSearch} />
        <MainSection>
          <Menu />
          <TweetList tweets={tweets} error={error} />
        </MainSection>
      </Content>
    </>
  );
}
