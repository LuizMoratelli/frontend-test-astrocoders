import React from 'react';
import * as R from 'ramda';
import { Container } from './styles';
import { Tweet } from '../Tweet';
import { ErrorDisplay } from '../ErrorDisplay';

interface Props {
  tweets: Tweet[]
  error: string
}

interface Tweet {
  created_at: string
  id: number
  text: string
  user: {
    name: string
  }
}

export function TweetList({ tweets, error } : Props) {
  if (!R.isEmpty(error)) {
    return (
      <ErrorDisplay message="No tweets found with #mars" />
    );
  }

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
