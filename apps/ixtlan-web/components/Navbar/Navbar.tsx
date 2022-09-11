import React from 'react';
import mockNav from './mockNav';
import { Container, Item } from './Navbar.styles';
import { NavbarProps } from './Navbar.types';

const Navbar = ({ items = mockNav }: NavbarProps) => {
  return (
    <Container>
      {items.map(item => (
        <Item key={item.number}>{item.displayName}</Item>
      ))}
    </Container>
  );
};

export default Navbar;
