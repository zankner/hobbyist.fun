import React, { useContext, useEffect, useRef } from 'react';
import { Collapse, CustomInput, Nav, Navbar } from 'reactstrap';
import Scrollbar from 'react-scrollbars-custom';
import Logo from './Logo';
import NavbarVerticalMenu from './NavbarVerticalMenu';
import ToggleButton from './ToggleButton';
import AppContext from '../../context/Context';
import Flex from '../common/Flex';
import routes from '../../routes';

const NavbarVertical = () => {
  const navBarRef = useRef(null);

  const {
    isDark,
    setIsDark,
    showBurgerMenu, isNavbarVerticalCollapsed, setIsNavbarVerticalCollapsed,
  } = useContext(
    AppContext,
  );

  const HTMLClassList = document.getElementsByTagName('html')[0].classList;
  // Control Component did mount and unmount of hover effect
  if (isNavbarVerticalCollapsed) {
    HTMLClassList.add('navbar-vertical-collapsed');
  }

  useEffect(() => () => {
    HTMLClassList.remove('navbar-vertical-collapsed-hover');
  }, [isNavbarVerticalCollapsed, HTMLClassList]);

  // Control mouseEnter event
  let time = null;
  const handleMouseEnter = () => {
    if (isNavbarVerticalCollapsed) {
      time = setTimeout(() => {
        HTMLClassList.add('navbar-vertical-collapsed-hover');
      }, 100);
    }
  };

  return (
    <Navbar expand="xl" className="navbar-vertical navbar-glass" light>
      <Flex align="center">
        <ToggleButton
          isNavbarVerticalCollapsed={isNavbarVerticalCollapsed}
          setIsNavbarVerticalCollapsed={setIsNavbarVerticalCollapsed}
        />
        <Logo at="navbar-vertical" />
      </Flex>

      <Collapse
        navbar
        isOpen={showBurgerMenu}
        className="bg-200"
        innerRef={navBarRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => {
          clearTimeout(time);
          HTMLClassList.remove('navbar-vertical-collapsed-hover');
        }}
      >
        <Scrollbar
          style={{ height: 'calc(100vh - 77px)', display: 'block' }}
          trackYProps={{
            renderer(props) {
              // eslint-disable-next-line react/prop-types
              const { elementRef, ...restProps } = props;
              // eslint-disable-next-line react/jsx-props-no-spreading
              return <span {...restProps} ref={elementRef} className="TrackY" />;
            },
          }}
        >
          <Nav navbar vertical>
            <NavbarVerticalMenu routes={routes} />
          </Nav>
          <div className="settings px-3 px-xl-0">
            <hr className="border-300 my-3" />
            <CustomInput
              type="checkbox"
              id="dark"
              name="dark"
              label="Dark Mode"
              checked={isDark}
              onChange={({ target }) => setIsDark(target.checked)}
            />
          </div>
        </Scrollbar>
      </Collapse>
    </Navbar>
  );
};

export default NavbarVertical;
