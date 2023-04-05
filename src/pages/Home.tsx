import styled from 'styled-components';
import AboutMe from '@components/Home/AboutMe';
import ContactMe from '@components/Home/ContactMe';

const Home = () => {
  return (
    <HomeContainer>
      <div className="title">
        <h1 className="title-first">프론트엔드 개발자 장장미</h1>
        <h2 className="title-second">Front-end Developer</h2>
      </div>
      <h2 className="category-title">😄 About me</h2>
      <AboutMe />
      <h2 className="category-title">💌 Contact me</h2>
      <ContactMe />
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .category-title {
    font-family: 'Fira Code', monospace, 'Noto Sans KR', sans-serif;
    font-weight: 500;
    color: ${(props) => props.theme.colors.titleColor};
    margin-top: 5rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
`;

export default Home;
