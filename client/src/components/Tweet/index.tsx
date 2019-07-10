import React from 'react';
import { Container, TweetUser, TweetInfo } from './styles';

interface Tweet {
  createdAt: string
  id: number
  text: string
  username: string
}

export default function Tweet({
  id, username, text, createdAt,
} : Tweet) {
  return (
    <Container key={id}>
      <TweetUser>{username}</TweetUser>
      <TweetInfo>
        <p>{text}</p>
        <strong>{createdAt.substr(10, 6)}</strong>
      </TweetInfo>
    </Container>
  );
}
