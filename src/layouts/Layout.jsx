import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { CloseButton, Fade } from '../components/common/Toast';
import BaseLayout from './BaseLayout';

const Layout = () => (
  <Router>
    <Switch>
      <Route path="/" component={BaseLayout} />
    </Switch>
    <ToastContainer
      transition={Fade}
      closeButton={<CloseButton />}
      position={toast.POSITION.BOTTOM_LEFT}
    />
  </Router>
);

export default Layout;
