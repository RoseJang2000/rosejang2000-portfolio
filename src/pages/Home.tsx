import styled from 'styled-components';
import DescBox from '@components/Home/DescBox';

const Home = () => {
  return (
    <HomeContainer>
      <div className="title">
        <h1 className="title-first">프론트엔드 개발자 장장미</h1>
        <h2 className="title-second">Front-end Developer</h2>
      </div>
      <DescBox />
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  /* width: 100%; */
`;

export default Home;
