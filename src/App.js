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
  // const [sidebarPos, setSidebarPos] = useState(281);
  // const [isSideberSticked, setIsSideberSticked] = useState(false);

  // const handleWindowScroll = () => {
  //   const offsetY = window.pageYOffset;
  //   console.log({ offsetY, sidebarPos, isSideberSticked });
  //   if (offsetY >= sidebarPos && !isSideberSticked) {
      
  //     setIsSideberSticked(prev => !prev);
  //     sidebarRef.current.style.position = 'fixed';
  //     sidebarRef.current.style.top = '0';
  //     sidebarRef.current.style.right = '0';
  //     sidebarRef.current.style.height = '100vh';
  //   } else if (offsetY < sidebarPos && !isSideberSticked) {
  //     setIsSideberSticked(prev => !prev);
  //     sidebarRef.current.style.position = 'static';
  //     sidebarRef.current.style.height = '70vh';
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener('scroll', handleWindowScroll);

  //   setSidebarPos(sidebarRef.current.offsetTop);
  // }, [sidebarRef])

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
