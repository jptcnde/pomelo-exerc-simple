import React from 'react';
import styled from 'styled-components';
import loading from './loading.svg';

// sample for styling with Object
const Container = styled.div({
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  height: '100vh',
  width: '100vw',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(255, 255, 255, .8)',
});

export default () => (
  <Container data-testid="loading">
    <img src={loading} alt="loading" />
  </Container>
);
