import {
  Header,
  LogInBtn,
  Logo,
  Nav,
  NavBtn,
  NavList,
  RegBtn,
} from './Layout.styled';

const { NavLink, Outlet } = require('react-router-dom');

const Layout = () => {
  return (
    <>
      <Header>
        <Logo to="/">psychologists.services</Logo>
        <Nav>
          <NavList>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/psychologists">Psychologists</NavLink>
            </li>
            {/* <li>
              <NavLink to="/favorites">Favorites</NavLink>
            </li> */}
          </NavList>
          <NavBtn>
            <li>
              <LogInBtn>Log In</LogInBtn>
            </li>
            <li>
              <RegBtn>Registration</RegBtn>
            </li>
          </NavBtn>
        </Nav>
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
