import React, { useState } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

// Utilities / Store
import history from './utills/history';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './store/Mode/useDarkMode';
import { darkMode, lightMode } from './store/Mode/theme';
import { GlobalStyles } from './store/Mode/global';

// Components
import NavCondition from './components/Navigation/NavBarCondition';
import LandingPage from './components/LandingPage/LandingPage';
import FooterSkeleton from './constants/Skeleton/Footer/Footer-skeleton';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const handleLoginStateChanged = () => {
    setToken(localStorage.getItem('token'));
  };

  const [theme, toggleTheme, componentMounted] = useDarkMode();

  const themeMode = theme === 'dark' ? darkMode : lightMode;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <Router history={history}>
      <ThemeProvider theme={themeMode}>
        <div className='App'>
          <GlobalStyles />
          <NavCondition toggleTheme={toggleTheme} />
          <Route
            exact
            path='/'
            component={() => <LandingPage theme={theme} />}
          />
          {/* <FooterSkeleton /> */}
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;
