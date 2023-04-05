import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.descColor};
    transition: 0.2s;
    :hover {
      transition: 0.2s;
      color: ${(props) => props.theme.colors.accentColor};
    }
  }
  ul {
    list-style: none;
  }
  body {
    background-color: ${(props) => props.theme.colors.bgColor};
    color: ${(props) => props.theme.colors.descColor};
  }
`;
