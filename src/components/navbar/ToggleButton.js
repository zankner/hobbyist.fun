import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'reactstrap';

const ToggleButton = ({ isNavbarVerticalCollapsed, setIsNavbarVerticalCollapsed }) => (
  <>
    <div className="toggle-icon-wrapper">
      <Button
        color="link"
        className="navbar-vertical-toggle border-0"
        onClick={() => {
          document.getElementsByTagName('html')[0].classList.toggle('navbar-vertical-collapsed');
          setIsNavbarVerticalCollapsed(!isNavbarVerticalCollapsed);
        }}
      >
        <span className="navbar-toggle-icon">
          <span className="toggle-line" />
        </span>
      </Button>
    </div>
  </>
);

ToggleButton.propTypes = {
  isNavbarVerticalCollapsed: PropTypes.bool,
  setIsNavbarVerticalCollapsed: PropTypes.func,
};

export default ToggleButton;
