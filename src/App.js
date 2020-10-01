import React, { useRef, useEffect, useState } from 'react';
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
  const sidebarRef = useRef(null);
  const navRef = useRef(null);
  const [isSidebarStick, setIsSidebarStick] = useState(false);
  // const [isSideberSticked, setIsSideberSticked] = useState(false);

  // const handleWindowScroll = () => {
  //   const offsetY = window.pageYOffset;
  //   const navBottomPosition = navRef.current.offsetTop + 60;
  //   console.log({ offsetY, navBottomPosition, isSidebarStick });
  //   if (offsetY + 60 >= navBottomPosition) {
  //     setIsSidebarStick(true);
  //     sidebarRef.current.style.position = 'fixed';
  //   } else if (offsetY + 60 < navBottomPosition) {
  //     setIsSidebarStick(false);
  //     sidebarRef.current.style.position = 'static';
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener('scroll', handleWindowScroll);
  // }, [])

  return (
    <>
      <GlobalStyles />
      <Router>
        <Header />
        <Navigation items={navigationItems} rightElement={null} navRef={navRef}/>
        <Switch>
          <Route path="/recipes/:recipeId" exact component={RecipePage} />
          <Route path="*"> 
            <Main>
              <Page />
              <Sidebar sidebarRef={sidebarRef}/>
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
