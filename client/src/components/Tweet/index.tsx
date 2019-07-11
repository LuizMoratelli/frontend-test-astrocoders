import React from 'react';
import { Container, TweetUser, TweetInfo } from './styles';

interface Props {
  createdAt: string
  id: number
  text: string
  username: string
}

export const Tweet = ({
  id, username, text, createdAt,
} : Props) => (
  <Container key={id}>
    <TweetUser>{username}</TweetUser>
    <TweetInfo>
      <p>{text}</p>
      <strong>{createdAt.substr(10, 6)}</strong>
    </TweetInfo>
  </Container>
);
