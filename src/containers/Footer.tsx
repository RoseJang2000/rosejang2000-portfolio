import styled from 'styled-components';

const Footer = () => {
  return <FooterContainer>Footer</FooterContainer>;
};

const FooterContainer = styled.footer`
  width: 100%;
  height: 10rem;
  background-color: ${(props) => props.theme.colors.boxColor};
`;

export default Footer;
