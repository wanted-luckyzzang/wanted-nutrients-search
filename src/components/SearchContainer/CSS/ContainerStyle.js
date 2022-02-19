import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 30rem;
  height: 40rem;
  background: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.flex.column}
  align-items: center;
  padding: 2rem 0;
  border-radius: 0.125rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 0.625rem 2.25rem 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 0.0625rem;
`;

const SearchWrap = styled.div`
  position: fixed;
  top: 5rem;
  ${({ theme }) => theme.flex.hCenter}
`;

export { Container, SearchWrap };
