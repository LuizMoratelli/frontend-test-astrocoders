import React from 'react';
import { Icon } from '../Icon';
import {
  Container,
  Brand,
  SearchBar,
  SideMenu,
  Photo,
} from './styles';

import logo from '../../assets/logo.png';
import avatar from '../../assets/avatar.jpg';
import menuIcon from '../../assets/menu.svg';
import itemsIcon from '../../assets/items.svg';

interface Props {
  searchTerm: string,
  onChange: Function
}

export const Header = ({ searchTerm, onChange } : Props) => (
  <Container>
    <Brand>
      <Icon src={menuIcon} alt="Menu" />
      <img src={logo} alt="Logo" />
      <SearchBar placeholder="Search tweet" onChange={e => onChange(e.target.value)} value={searchTerm} />
    </Brand>
    <SideMenu>
      <Icon src={itemsIcon} alt="Item" />
      <Photo src={avatar} alt="Avatar" />
    </SideMenu>
  </Container>
);
