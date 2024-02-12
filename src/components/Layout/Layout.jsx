import {
  Btn,
  Catalog,
  Header,
  Home,
  Logo,
  Nav,
  NavBtn,
  NavList,
  Psycho,
} from './Layout.styled';

const { NavLink, Outlet } = require('react-router-dom');

const Layout = () => {
  return (
    <>
      <Header>
        <Nav>
          <Logo to="/">
            <Psycho>psychologists.</Psycho>services
          </Logo>
          <NavList>
            <Home>
              <NavLink to="/">Home</NavLink>
            </Home>
            <Catalog>
              <NavLink to="/catalog">Psychologists</NavLink>
            </Catalog>
            {/* <li>
              <NavLink to="/favorites">Favorites</NavLink>
            </li> */}
          </NavList>
          <NavBtn>
            <li>
              <Btn>Log In</Btn>
            </li>
            <li>
              <Btn>Registration</Btn>
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
