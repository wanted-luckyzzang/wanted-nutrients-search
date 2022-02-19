import styled from 'styled-components';

const SearchViewContainer = styled.div`
  ${({ theme }) => theme.flex.column}
  width: 25rem;
  height: 30rem;
  margin-top: 5.5rem;
  overflow-y: auto;
`;

const SearchViewWrap = styled.div`
  ${({ theme }) => theme.flex.column};
  border-bottom: 0.0625rem solid ${({ theme }) => theme.color.borderGrey};
  padding: 1.5rem 0;
  cursor: pointer;
`;

const BrandName = styled.p`
  height: 1.5rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.color.textGrey};
`;

const ProductName = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.color.default};
`;

export { SearchViewContainer, SearchViewWrap, BrandName, ProductName };
