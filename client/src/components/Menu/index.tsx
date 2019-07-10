/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Container } from './styles';

export default function Menu() {
  return (
    <Container>
      <ul>
        <li className="active"><a href="#">Caixa de entrada</a></li>
        <li><a href="#">Com estrela</a></li>
        <li><a href="#">Adiados</a></li>
      </ul>
    </Container>
  );
}
