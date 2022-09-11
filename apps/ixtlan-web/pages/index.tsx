import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Gallery from './Gallery';

export function Index() {
  return (
    <Container>
      <Header />
      <Navbar />
      <Gallery />
    </Container>
  );
}

const Container = styled.div``;

export default Index;

