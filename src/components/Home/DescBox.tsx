import styled, { keyframes } from 'styled-components';

const DescBox = () => {
  return (
    <DescBoxContainer>
      <div className="bar">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
        <p className="text">$ rosejang2000-portfolio</p>
      </div>
      <div className="screen">
        <p className="command">&gt; cat README.md</p>
        <p className="response">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
          distinctio temporibus quibusdam tenetur illum. Dicta ut non ducimus
          error debitis saepe cumque nobis porro blanditiis autem. Porro,
          molestias cupiditate. Veniam.
        </p>
        <p className="command">&gt; cat MORE.md</p>
        <p className="response"></p>
        <p className="command">&gt; ls programming skills</p>
        <p className="response"></p>
        <p className="command">
          &gt; <span className="cursor"></span>
        </p>
      </div>
    </DescBoxContainer>
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

const DescBoxContainer = styled.div`
  width: 40rem;
  height: 20rem;
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
    padding: 1rem;
  }
  .command {
    color: ${(props) => props.theme.colors.commandColor};
    font-weight: 500;
    display: flex;
    align-items: center;
  }
  .response {
    color: ${(props) => props.theme.colors.titleColor};
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
`;

export default DescBox;
