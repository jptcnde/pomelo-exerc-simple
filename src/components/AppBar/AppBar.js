import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
  padding: 24px 0;

`;

function AppBar() {
  return (
    <Container>
      <a href="https://www.pomelopay.com">
        <img src="https://www.pomelopay.com/wp-content/uploads/2019/11/pp-app-icon.svg" alt="PomeloPay" />
      </a>
    </Container>
  );
}

export default AppBar;