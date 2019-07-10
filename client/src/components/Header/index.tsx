import React from 'react';
import {
  Container,
  Brand,
  SearchBar,
  SideMenu,
  Icon,
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

export default function Header({ searchTerm, onChange } : Props) {
  return (
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
}
