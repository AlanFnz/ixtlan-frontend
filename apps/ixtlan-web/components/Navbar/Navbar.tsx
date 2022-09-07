import React from 'react';
import styled from 'styled-components';
import mockNav from './mockNav';

const Navbar = ({ items = mockNav }: NavbarProps) => {
  return (
    <Container>
      {items.map(item => (
        <p key={item.number}>{item.displayName}</p>
      ))}
    </Container>
  );
};

type NavItems = {
  number: number;
  slug: string;
  displayName: string;
  asset: {
    enabled: boolean;
    src: string;
  };
}[];

type NavbarProps = {
  items: NavItems;
};

const Container = styled.div`
  width: 100vw;
`;

export default Navbar;
