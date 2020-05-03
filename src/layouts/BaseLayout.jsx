import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import background from '../assets/img/illustrations/background.png';
import Background from '../components/common/Background';
import WizardLayout from '../components/wizard/WizardLayout';

const BaseLayout = ({ location }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="container-fluid min-vh-100 bg-img">
      <Switch>
        <Route path="/" component={WizardLayout} />
      </Switch>
    </div>
  );
};

// eslint-disable-next-line react/forbid-prop-types
BaseLayout.propTypes = { location: PropTypes.object.isRequired };

export default BaseLayout;
