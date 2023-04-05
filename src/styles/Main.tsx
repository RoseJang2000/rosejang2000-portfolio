import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  min-height: calc(100vh - 5rem);
  color: ${(props) => props.theme.colors.descColor};
`;
