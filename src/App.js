import React from 'react';
import { ThemeProvider } from 'styled-components';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header, Navigation, Page, Sidebar, Footer } from './layout';
import { RecipePage } from './pages';

import GlobalStyles, { Main } from'./index.css.js';
import theme from './utils/theme';

const navigationItems = [
  { id: 0, to: '/', text: 'Homepage'},
  { id: 1, to: '/categories', text: 'Categories'},
  { id: 2, to: '/tips', text: 'Tips'},
  { id: 3, to: '/about', text: 'About'},
]

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Header />
        <Navigation items={navigationItems} rightElement={null}/>
        <Switch>
          <Route path="/recipes/:recipeId" exact component={RecipePage} />
          <Route path="*"> 
            <Main>
              <Page />
              <Sidebar />
            </Main>
          </Route>
        </Switch>
        <Footer />
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
