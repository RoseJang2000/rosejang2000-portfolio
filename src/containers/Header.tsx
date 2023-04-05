import styled from 'styled-components';
import blueHeart from '../../public/favicon.svg';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

interface HeaderProps {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const Header = ({ theme, setTheme }: HeaderProps) => {
  const handleToggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <HeaderContainer>
      <div>
        <img src={blueHeart} />
        <h1>장장미 포트폴리오</h1>
      </div>
      <ThemeToggleButton onClick={handleToggleTheme} className={theme}>
        <BsFillMoonStarsFill />
        <BsFillSunFill />
        <div className="circle"></div>
      </ThemeToggleButton>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  width: 100%;
  height: 5rem;
  background-color: ${(props) => props.theme.boxColor};
  color: ${(props) => props.theme.descColor};
  display: flex;
  align-items: center;
`;

const ThemeToggleButton = styled.div`
  width: 5rem;
  height: 2.5rem;
  border-radius: 2.5rem;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.modeColor};
  display: flex;
  align-items: center;
  padding: 0.7rem;
  justify-content: space-between;
  position: relative;
  font-size: 1.3rem;
  cursor: pointer;

  .circle {
    position: absolute;
    width: 1.8rem;
    padding-bottom: 1.8rem;
    border-radius: 50%;
    background-color: ${(props) => props.theme.pointColor};
    transition: 0.2s;
  }
  &.light .circle {
    transform: translateX(-0.2rem);
  }
  &.dark .circle {
    transform: translateX(2rem);
  }
`;

export default Header;
