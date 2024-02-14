import { useState } from 'react';
import { LogInModal } from 'components/ModalLogIn/LogInModal';
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
import { RegisterModal } from 'components/ModalRegister/RegisterModal';

const { NavLink, Outlet } = require('react-router-dom');

const Layout = () => {
  const [isModalLoginOpen, setModalLoginOpen] = useState(false);
  const [isModalRegOpen, setModalRegOpen] = useState(false);

  const handlerClickLogin = () => {
    setModalLoginOpen(true);
  };

  const handlerClickReg = () => {
    setModalRegOpen(true);
  };

  const handlerCloseLoginModal = () => {
    setModalLoginOpen(false);
  };

  const handlerCloseRegModal = () => {
    setModalRegOpen(false);
  };
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
              <Btn onClick={handlerClickLogin}>Log In</Btn>
            </li>
            <li>
              <Btn onClick={handlerClickReg}>Registration</Btn>
            </li>
          </NavBtn>
        </Nav>
        {isModalLoginOpen && <LogInModal onClose={handlerCloseLoginModal} />}
        {isModalRegOpen && <RegisterModal onClose={handlerCloseRegModal} />}
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
