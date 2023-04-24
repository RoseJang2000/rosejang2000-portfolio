import styled from 'styled-components';
import blueHeart from '../../public/favicon.svg';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface HeaderProps {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const Header = ({ theme, setTheme }: HeaderProps) => {
  const location = useLocation();
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

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <HeaderContainer>
      <div className="title">
        <img className="title-icon" src={blueHeart} />
        <Link to="/" className="title-text">
          <h1>Rose's&nbsp;</h1>
          <h1>Portfolio</h1>
        </Link>
      </div>
      <NavList className={isMenuOpen ? 'open' : 'close'}>
        <NavLink to={'/'}>Home</NavLink>
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
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.colors.bgColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;

  .title {
    display: flex;
    height: 100%;
    align-items: center;
    gap: 0.5rem;
  }
  .title-icon {
    height: 90%;
  }
  .title-text {
    font-size: 0.7rem;
    display: flex;
    position: relative;
    bottom: 0.1rem;
    h1 {
      color: ${(props) => props.theme.colors.pointColor};
    }
  }

  @media screen and (max-width: 768px) {
    padding-right: 5rem;
  }
  @media screen and (max-width: 576px) {
    .title-icon {
      height: 60%;
    }
    .title-text {
      font-size: 0.6rem;
    }
  }
  @media screen and (max-width: 360px) {
    .title-text {
      font-size: 0.6rem;
      flex-direction: column;
    }
  }
`;

const NavList = styled.div`
  display: flex;
  gap: 3rem;
  z-index: 10;

  a {
    font-size: 1.3rem;
    font-weight: 700;
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
    box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.3);
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
        color: ${(props) => props.theme.colors.pointColor};
      }
    }
  }
`;

const ThemeToggleButton = styled.div`
  width: 5rem;
  height: 2.5rem;
  border-radius: 2.5rem;
  background-color: ${(props) => props.theme.colors.boxColor};
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
    background-color: ${(props) => props.theme.colors.pointColor};
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
