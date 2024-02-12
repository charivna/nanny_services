import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  margin: 0 auto;
  box-sizing: border-box;
  max-width: 1440px;
  padding: 20px 96px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background: rgb(240, 63, 59);
  color: white;
  align-items: center;
`;

export const Logo = styled(NavLink)``;

export const Nav = styled.nav`
  display: flex;
  max-width: 533px;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 40px;
  margin-right: 92px;
`;

export const NavBtn = styled.ul`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const LogInBtn = styled.button`
  background-color: transparent;
  color: white;
  border: 1px solid rgba(251, 251, 251, 0.4);
  border-radius: 30px;
  padding: 14px 40px;
`;

export const RegBtn = styled.button`
  background-color: transparent;
  color: white;
  border: 1px solid rgba(251, 251, 251, 0.4);
  border-radius: 30px;
  padding: 14px 40px;
`;
