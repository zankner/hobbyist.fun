import React from 'react';
import PropTypes from 'prop-types';
import { Button, CardFooter } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import isAbsoluteUrl from 'is-absolute-url';

const CardFooterLink = ({ title, bg, borderTop, to, ...rest }) => (
  <CardFooter className={classNames(`bg-${bg} py-2`, { 'border-top': borderTop })}>
    {isAbsoluteUrl(to) ? (
      <Button color="link" block href={to} {...rest}>
        {title}
        <FontAwesomeIcon icon="angle-right" transform="down-1.5" className="ml-1" />
      </Button>
    ) : (
      <Button tag={Link} color="link" block to={to} {...rest}>
        {title}
        <FontAwesomeIcon icon="angle-right" transform="down-1.5" className="ml-1" />
      </Button>
    )}
  </CardFooter>
);

CardFooterLink.propTypes = {
  title: PropTypes.string.isRequired,
  bg: PropTypes.string,
  borderTop: PropTypes.bool,
  to: PropTypes.string
};

CardFooterLink.defaultProps = { to: '#!', bg: 'light', borderTop: true };

export default CardFooterLink;
