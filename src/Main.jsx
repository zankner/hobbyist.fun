import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './context/Context';
import toggleStylesheet from './helpers/toggleStylesheet';
import { getItemFromStore, setItemToStore, themeColors } from './helpers/utils';

const Main = (props) => {
  const [isDark, setIsDark] = useState(getItemFromStore('isDark', false));
  const [isNavbarVerticalCollapsed, setIsNavbarVerticalCollapsed] = useState(
    getItemFromStore('isNavbarVerticalCollapsed', false),
  );
  const [currency, setCurrency] = useState('$');
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const value = {
    isDark,
    setIsDark,
    showBurgerMenu,
    setShowBurgerMenu,
    isNavbarVerticalCollapsed,
    setIsNavbarVerticalCollapsed,
    currency,
    setCurrency,
  };

  const setStylesheetMode = (mode) => {
    setIsLoaded(false);
    setItemToStore(mode, value[mode]);
    toggleStylesheet({ isDark }, () => setIsLoaded(true));
  };

  useEffect(() => {
    setStylesheetMode('isDark');
    // eslint-disable-next-line
  }, [isDark]);

  useEffect(() => {
    setItemToStore('isNavbarVerticalCollapsed', isNavbarVerticalCollapsed);
    // eslint-disable-next-line
  }, [isNavbarVerticalCollapsed]);

  if (!isLoaded) {
    toggleStylesheet({ isDark }, () => setIsLoaded(true));

    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: isDark ? themeColors.dark : themeColors.light,
        }}
      />
    );
  }

  // eslint-disable-next-line react/destructuring-assignment
  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};

Main.propTypes = { children: PropTypes.node };

export default Main;
