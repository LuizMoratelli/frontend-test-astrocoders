import React from 'react';
import { Container } from './styles';

interface Props {
  src: string
  alt: string
}

export const Icon = ({ src, alt } : Props) => (
  <Container src={src} alt={alt} />
);
