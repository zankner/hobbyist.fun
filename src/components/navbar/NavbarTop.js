import React, { useContext } from 'react';
import { Collapse, Navbar, NavItem, Nav } from 'reactstrap';
import AppContext from '../../context/Context';
import Logo from './Logo';
import SearchBox from './SearchBox';
import ProfileDropdown from './ProfileDropdown';

const NavbarTop = () => {
  const { showBurgerMenu, setShowBurgerMenu } = useContext(AppContext);

  return (
    <Navbar light className="navbar-glass fs--1 font-weight-semi-bold row navbar-top sticky-kit" expand>
      <div className="toggle-icon-wrapper d-xl-none">
        <button
          type="button"
          className="navbar-vertical-toggle btn btn-link d-flex align-item-center justify-content-center "
          onClick={() => setShowBurgerMenu(!showBurgerMenu)}
          id="burgerMenu"
        >
          <span className="navbar-toggle-icon">
            <span className="toggle-line" />
          </span>
        </button>
      </div>
      <Logo at="navbar-top" id="topLogo" />
      <Collapse navbar className="py-2">
        <Nav navbar className="align-items-center d-none d-lg-block">
          <NavItem>
            <SearchBox />
          </NavItem>
        </Nav>

        <Nav navbar className="align-items-center ml-auto">
          <ProfileDropdown />
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavbarTop;
