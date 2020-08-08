import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { HomePgae, AboutPage } from './pages';

import GlobalStyles from'./index.css.js';
import theme from './utils/theme';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePgae}/>
          <Route path="/about" component={AboutPage}/>
        </Switch>
      </Router>
    </>
  );
}


const RootApp= () => {
  return (
    <ThemeProvider theme={theme}>
      <React.Suspense fallback={"Loading..."}>
        <App />
      </React.Suspense>
    </ThemeProvider>
  )
}

export default RootApp;
