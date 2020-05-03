import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import config from '../../config';
import logo from '../../assets/img/logos/polar-chefs-logo.png';

const Logo = ({ at, height, width, className, ...rest }) => (
  <Link
    to="/"
    className={classNames(
      'text-decoration-none',
      { 'navbar-brand text-left': at === 'navbar-vertical' },
      { 'navbar-brand text-left': at === 'navbar-top' },
    )}
    {...rest}
  >
    <div
      className={classNames(
        'd-flex',
        {
          'align-items-center py-3': at === 'navbar-vertical',
          'align-items-center': at === 'navbar-top',
          'flex-center font-weight-extra-bold fs-5 mb-4': at === 'auth',
        },
        className,
      )}
    >
      <img className="mr-2" src={logo} alt="" height={36} width={width} />
      <span className="text-sans-serif fs-2 text-secondary">{config.guild.name}</span>
    </div>
  </Link>
);

Logo.propTypes = {
  at: PropTypes.oneOf(['navbar-vertical', 'navbar-top', 'auth']),
  height: PropTypes.number,
  width: PropTypes.number,
  className: PropTypes.string,
};

Logo.defaultProps = { at: 'auth', height: 36 };

export default Logo;
