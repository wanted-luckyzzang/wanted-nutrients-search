import React from 'react';
import styled from 'styled-components';
import SearchContainer from './components/SearchContainer';

function App() {
  return (
    <Container>
      <SearchContainer />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
