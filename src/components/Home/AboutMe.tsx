import styled, { keyframes } from 'styled-components';

const AboutMe = () => {
  return (
    <AboutMeContainer>
      <div className="bar">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
        <p className="text">$ rosejang2000</p>
      </div>
      <div className="screen">
        <p className="command">&gt; cat README.md</p>
        <p className="response">
          &nbsp;평소 웹 사이트들을 이용하며 흥미롭게 경험한 디자인/기능들을
          프로젝트 내에서 활용해보는 것을 즐깁니다.
          <br />
          &nbsp;웹 사이트/서비스들을 이용할 때 다양한 기능을 어떻게 구현하는지에
          대한 궁금함을 가지고 공부해보려 노력합니다.
        </p>
        <p className="command">&gt; cat MORE.md</p>
        <p className="response">
          &nbsp;풀리지 않는 코드나 문제가 있다면 서치와 다른 팀원과의 소통을
          통해 공유하며 알아보고, 해결될 때 까지 코드를 디버깅하는 과정을
          즐깁니다.
          <br />
          &nbsp;한 줄을 작성하더라도 내가 작성하는 코드에 항상 흥미를 가지고
          작업합니다.
          <br />
          &nbsp;코드/서비스 등을 팀원들과 공유하고 꾸준히 함께 피드백 해나가는
          과정을 가지고자 노력합니다.
        </p>
        <p className="command">&gt; ls programming skills</p>
        <p className="response">
          Javascript React HTML CSS TypeScript Git Github
        </p>
        <p className="command">
          &gt; <span className="cursor"></span>
        </p>
      </div>
    </AboutMeContainer>
  );
};

const blink = keyframes`
  from {
    opacity: 0.1;
  }
  to {
    opacity: 0.5;
  }
`;

const AboutMeContainer = styled.div`
  width: 46rem;
  border-radius: 0.5rem;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.boxColor2};
  * {
    font-family: 'Fira Code', monospace, 'Noto Sans KR', sans-serif;
  }

  .bar {
    width: 100%;
    height: 2rem;
    background-color: ${(props) => props.theme.colors.lineColor};
    color: ${(props) => props.theme.colors.titleColor};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: default;
  }
  .circle {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
  }
  .circle-1 {
    background-color: #ff5f57;
    left: 0.5rem;
  }
  .circle-2 {
    background-color: #febc2e;
    left: 2rem;
  }
  .circle-3 {
    background-color: #29c840;
    left: 3.5rem;
  }

  .screen {
    padding: 1.5rem;
  }
  .command {
    color: ${(props) => props.theme.colors.commandColor};
    font-weight: 500;
    display: flex;
    align-items: center;
  }
  .response {
    color: ${(props) => props.theme.colors.titleColor};
    margin-bottom: 1.5rem;
  }

  .cursor {
    display: inline-block;
    width: 0.5rem;
    height: 1rem;
    background-color: ${(props) => props.theme.colors.titleColor};
    opacity: 0.5;
    margin-left: 0.5rem;
    animation: ${blink} 1.2s infinite;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export default AboutMe;
