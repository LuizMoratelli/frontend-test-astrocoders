/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Container } from './styles';
import { Icon } from '../Icon';

export const Menu = () => (
  <Container>
    <ul>
      <li className="active">
        <Icon src="https://www.gstatic.com/images/icons/material/system/1x/inbox_black_20dp.png" alt="Caixa de entrada" />
        <a href="#">Caixa de entrada</a>
      </li>
      <li>
        <Icon src="https://www.gstatic.com/images/icons/material/system/1x/grade_black_20dp.png" alt="Com estrela" />
        <a href="#">Com estrela</a>
      </li>
      <li>
        <Icon src="https://www.gstatic.com/images/icons/material/system/1x/watch_later_black_20dp.png" alt="Adiados" />
        <a href="#">Adiados</a>
      </li>
      <li>
        <Icon src="https://www.gstatic.com/images/icons/material/system/1x/label_important_black_20dp.png" alt="Importante" />
        <a href="#">Importante</a>
      </li>
      <li>
        <Icon src="https://www.gstatic.com/images/icons/material/system/1x/send_black_20dp.png" alt="Enviados" />
        <a href="#">Enviados</a>
      </li>
      <li>
        <Icon src="https://www.gstatic.com/images/icons/material/system/1x/drafts_black_20dp.png" alt="Rascunhos" />
        <a href="#">Rascunhos</a>
      </li>
    </ul>
  </Container>
);
