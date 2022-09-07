import React from 'react';
import styled from 'styled-components';

const Header = ({ title = 'Ixtlan' }) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
`;

const Title = styled.div`
  text-align: center;
`

export default Header;
