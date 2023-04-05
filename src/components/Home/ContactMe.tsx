import { AiFillBulb, AiFillGithub, AiFillMail } from 'react-icons/ai';
import { RxNotionLogo } from 'react-icons/rx';
import styled from 'styled-components';

const ContactMe = () => {
  return (
    <ContactMeContainer>
      <SocialItem>
        <a
          href="https://rosejang2000.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icon">
            <AiFillBulb />
          </div>
          Blog
        </a>
      </SocialItem>
      <SocialItem>
        <a
          href="https://github.com/RoseJang2000"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icon">
            <AiFillGithub />
          </div>
          Github
        </a>
      </SocialItem>
      <SocialItem>
        <a
          href="mailto:dev.rosejang@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icon">
            <AiFillMail />
          </div>
          Email
        </a>
      </SocialItem>
      <SocialItem>
        <a href="/" target="_blank" rel="noopener noreferrer">
          <div className="icon">
            <RxNotionLogo />
          </div>
          Notion
        </a>
      </SocialItem>
    </ContactMeContainer>
  );
};

const ContactMeContainer = styled.ul`
  width: 59rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(4, 1fr);

  @media screen and (max-width: 992px) {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SocialItem = styled.li`
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.lineColor};

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    gap: 1rem;
    font-size: 1.2rem;
  }
  .icon {
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
    font-size: 2rem;
    color: ${(props) => props.theme.colors.bgColor};
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.titleColor};
    transition: 0.3s;
  }
  :hover {
    .icon {
      font-size: 2.5rem;
    }
  }
`;

export default ContactMe;
