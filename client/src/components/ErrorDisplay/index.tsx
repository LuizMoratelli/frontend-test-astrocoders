import React from 'react';
import { Container } from './styles';

interface Props {
  message: string
}

export const ErrorDisplay = ({ message } : Props) => (
  <Container>
    {message}
  </Container>
);
