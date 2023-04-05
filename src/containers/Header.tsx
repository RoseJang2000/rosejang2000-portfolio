import styled from 'styled-components';
import blueHeart from '../../public/favicon.svg';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

interface HeaderProps {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const Header = ({ theme, setTheme }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setIsMenuOpen((cur) => !cur);
  };

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
      <div className="title">
        <img className="title-icon" src={blueHeart} />
        <div className="title-text">
          <h1>장장미</h1>
          <h1>포트폴리오</h1>
        </div>
      </div>
      <NavList className={isMenuOpen ? 'open' : 'close'}>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/aboutme'}>About me</NavLink>
        <NavLink to={'/projects'}>Projects</NavLink>
        <NavLink to={'/skills'}>Skills</NavLink>
      </NavList>
      <ThemeToggleButton onClick={handleToggleTheme} className={theme}>
        <BsFillMoonStarsFill />
        <BsFillSunFill />
        <div className="circle"></div>
      </ThemeToggleButton>
      <MenuButton onClick={handleToggleMenu}>
        <div className={`menu-trigger ${isMenuOpen ? 'active' : undefined}`}>
          <span className="line line-1"></span>
          <span className="line line-2"></span>
          <span className="line line-3"></span>
        </div>
      </MenuButton>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  width: 100%;
  height: 5rem;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.boxColor};
  color: ${(props) => props.theme.colors.descColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  .title {
    display: flex;
    height: 100%;
    align-items: center;
    gap: 0.5rem;
  }
  .title-icon {
    height: 100%;
  }
  .title-text {
    font-size: 0.7rem;
    display: flex;
  }

  @media screen and (max-width: 768px) {
    padding-right: 5rem;
  }
  @media screen and (max-width: 576px) {
    .title-text {
      font-size: 0.7rem;
      flex-direction: column;
    }
  }
`;

const NavList = styled.div`
  display: flex;
  gap: 3rem;

  a {
    color: ${(props) => props.theme.colors.descColor};
    font-size: 1.3rem;
    font-weight: 700;
    :hover,
    &.active {
      color: ${(props) => props.theme.colors.accentColor};
    }
  }

  @media screen and (max-width: 768px) {
    &.close {
      display: none;
    }
    width: 8rem;
    flex-direction: column;
    gap: 0;
    position: absolute;
    right: 0;
    top: 5rem;
    border-radius: 0 0 1rem 1rem;
    overflow: hidden;
    a {
      padding: 1rem;
      font-size: 1.2rem;
      border-bottom: 1px solid ${(props) => props.theme.colors.lineColor};
      background-color: ${(props) => props.theme.colors.boxColor2};
      :last-of-type {
        border-bottom: none;
      }
      &.active {
        background-color: ${(props) => props.theme.colors.boxColor};
      }
    }
  }
`;

const ThemeToggleButton = styled.div`
  width: 5rem;
  height: 2.5rem;
  border-radius: 2.5rem;
  background-color: ${(props) => props.theme.colors.bgColor};
  color: ${(props) => props.theme.colors.modeColor};
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
    background-color: ${(props) => props.theme.colors.pointColor};
    transition: 0.2s;
  }
  &.light .circle {
    transform: translateX(-0.2rem);
  }
  &.dark .circle {
    transform: translateX(2rem);
  }
`;

const MenuButton = styled.div`
  display: none;
  position: absolute;
  width: 2.3rem;
  height: 2rem;
  top: 50%;
  right: 1rem;
  cursor: pointer;
  z-index: 999;
  transform: translateY(-50%);

  .menu-trigger {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .line {
    transition: all 0.4s;
    position: absolute;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: #fff;
    border-radius: 4px;
  }
  .line-1 {
    top: 0;
  }
  .line-2 {
    top: 0.9rem;
  }
  .line-3 {
    bottom: 0;
  }

  .menu-trigger.active .line-1 {
    -webkit-transform: translateY(0.9rem) rotate (-45deg);
    transform: translateY(0.9rem) rotate(-45deg);
  }
  .menu-trigger.active .line-2 {
    opacity: 0;
  }
  .menu-trigger.active .line-3 {
    -webkit-transform: translateY(-0.9rem) rotate(45deg);
    transform: translateY(-0.9rem) rotate(45deg);
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export default Header;
