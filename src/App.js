import React from 'react';
import styled from 'styled-components';
import { SearchContainer } from 'components';

function App() {
  return (
    <Container>
      <SearchContainer />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  ${({ theme }) => theme.flex.center}
`;

export default App;
