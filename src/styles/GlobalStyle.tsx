import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
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
  h1 {
    color: ${(props) => props.theme.colors.titleColor};
  }
  main {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    padding-top: 6rem;
  }
`;
