import styled from 'styled-components';
import AboutMe from '@components/Home/AboutMe';
import ContactMe from '@components/Home/ContactMe';
import { Button } from '@/styles/Button';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleClickButton = (path: string) => {
    navigate(`/${path}`);
  };

  return (
    <HomeContainer>
      <div className="head">
        <div className="head-content">
          <h2 className="head-second">Front-end Developer</h2>
          <h1 className="head-first">프론트엔드 개발자 장장미</h1>
          <p className="head-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            iste quia reprehenderit excepturi optio ducimus adipisci nemo facere
            repudiandae iusto eveniet nam, error dolor blanditiis alias
            similique facilis vel labore?
          </p>
        </div>
        <div className="head-img">
          <img
            src="https://bioritmefestival.org/wp-content/uploads/2017/11/img-test.png"
            alt="test"
          />
        </div>
      </div>
      <h2 className="category-title">😄 About me</h2>
      <AboutMe />
      <h2 className="category-title">💌 Connnect with me!</h2>
      <ContactMe />
      <div className="buttons">
        <Button onClick={() => handleClickButton('projects')}>
          프로젝트 보러가기
        </Button>
        <Button onClick={() => handleClickButton('skills')}>
          스택 보러가기
        </Button>
      </div>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .head {
    width: 100%;
    margin-top: 2rem;
    padding: 2rem 3rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
    align-items: center;
  }
  .head-first {
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
  .head-text {
    font-size: 1.1rem;
  }
  .head-img {
    width: 100%;
    img {
      width: 100%;
      height: 20rem;
      object-fit: cover;
    }
  }
  .category-title {
    font-family: 'Fira Code', monospace, 'Noto Sans KR', sans-serif;
    font-weight: 500;
    color: ${(props) => props.theme.colors.titleColor};
    margin-top: 5rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
  .buttons {
    margin: 4rem 0;
    display: flex;
    gap: 2rem;
  }
  @media screen and (max-width: 768px) {
    .head {
      padding: 2rem 0;
      grid-template-columns: 1fr;
    }
  }
  @media screen and (max-width: 576px) {
    .buttons {
      flex-direction: column;
      width: 100%;
    }
  }
`;

export default Home;
