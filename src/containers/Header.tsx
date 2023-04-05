import styled from 'styled-components';
import blueHeart from '../../public/favicon.svg';

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
      <div onClick={handleToggleTheme}>Toggle</div>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  width: 100%;
  height: 5rem;
  background-color: ${(props) => props.theme.boxColor};
  color: ${(props) => props.theme.descColor};
`;

export default Header;
