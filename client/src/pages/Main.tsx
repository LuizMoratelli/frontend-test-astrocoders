import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import GlobalStyle from '../styles/global';

import Header from '../components/Header';
import Menu from '../components/Menu';
import Font from '../components/Font';
import TweetList from '../components/TweetList';

const Content = styled.div`
  padding: 0 20px;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
`;

const MainSection = styled.section`
  display: flex;
`;

export default function Main() {
  const [tweets, setTweets] = useState([]);
  const [searchTerm, setSearchTerm] = useState('#mars');

  useEffect(() => {
    axios.get('http://192.168.2.26:5000/tweets', {
      params: {
        searchTerm,
      },
    }).then((res) => {
      const { statuses } = res.data;

      setTweets(statuses);
    }).catch((error) => {

    });
  }, [searchTerm]);

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
          <TweetList tweets={tweets} />
        </MainSection>
      </Content>
    </>
  );
}
