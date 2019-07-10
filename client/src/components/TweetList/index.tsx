import React from 'react';
import * as R from 'ramda';
import { Container } from './styles';
import Tweet from '../Tweet';

interface Props {
  tweets: Tweet[],
}

interface Tweet {
  created_at: string
  id: number
  text: string
  user: {
    name: string
  }
}

export default function TweetList({ tweets } : Props) {
  return (
    <Container>
      { R.map((tweet: Tweet) => (
        <Tweet
          id={tweet.id}
          username={tweet.user.name}
          text={tweet.text}
          createdAt={tweet.created_at}
        />
      ), tweets) }
    </Container>
  );
}
