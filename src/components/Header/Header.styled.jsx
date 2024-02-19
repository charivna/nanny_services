import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  margin: 0 auto;
  box-sizing: border-box;
  max-width: 1440px;
  padding: 24px 128px;
  align-items: center;
  border-bottom: 1px solid rgba(25, 26, 21, 0.1);
`;

export const Logo = styled(NavLink)`
  font-weight: 500;
  font-size: 20px;
  letter-spacing: -0.02em;
  line-height: 1.2;
`;

export const Psycho = styled.span`
  color: rgb(84, 190, 150);
`;

export const Nav = styled.nav`
  letter-spacing: -0.01em;
  line-height: 1.25;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1184px;
`;

export const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const Home = styled.li`
  margin-right: 40px;
  position: relative;

  a {
    text-decoration: none;
    color: black;

    &.active {
      color: black;

      &::after {
        content: ' ';
        display: block;
        width: 8px;
        height: 8px;
        background-color: rgb(84, 190, 150);
        border-radius: 50%;
        position: absolute;
        left: 50%;
        bottom: -10px;
        transform: translateX(-50%);
      }
    }
  }
`;

export const Catalog = styled.li`
  position: relative;
  margin-right: 40px;

  a {
    text-decoration: none;
    color: black;

    &.active {
      color: black;

      &::after {
        content: ' ';
        display: block;
        width: 8px;
        height: 8px;
        background-color: rgb(84, 190, 150);
        border-radius: 50%;
        position: absolute;
        left: 50%;
        bottom: -8px;
        transform: translateX(-50%);
      }
    }
  }
`;

export const Favorite = styled.li`
  position: relative;

  a {
    text-decoration: none;
    color: black;

    &.active {
      color: black;

      &::after {
        content: ' ';
        display: block;
        width: 8px;
        height: 8px;
        background-color: rgb(84, 190, 150);
        border-radius: 50%;
        position: absolute;
        left: 50%;
        bottom: -10px;
        transform: translateX(-50%);
      }
    }
  }
`;

export const NavBtn = styled.ul`
  gap: 8px;
  display: flex;
  flex-wrap: wrap;
  margin-right: 8px;
`;

export const Btn = styled.button`
  box-sizing: border-box;
  align-self: flex-end;
  padding: 14px 39px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: -0.01em;
  text-decoration: none;
  border-radius: 30px;
  display: flex;
  height: 48px;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(25, 26, 21, 0.2);
  background-color: transparent;
  transition: box-shadow 0.3s ease;
  cursor: pointer;
  &:hover {
    color: rgb(251, 251, 251);
    background-color: rgb(84, 190, 150);
  }
`;

export const Name = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin-right: 28px;
`;

export const AuthWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
