import styled from 'styled-components';
import { AiFillGithub, AiFillMail } from 'react-icons/ai';

const Footer = () => (
  <FooterContainer>
    <ul className="social">
      <li>
        <a
          href="https://github.com/RoseJang2000"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub />
        </a>
      </li>
      <li>
        <a
          href="mailto:dev.rosejang@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillMail />
        </a>
      </li>
    </ul>
  </FooterContainer>
);

const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 7rem;
  background-color: ${(props) => props.theme.colors.boxColor};

  .social {
    display: flex;
    gap: 1rem;
    font-size: 1.3rem;
  }
`;

export default Footer;
