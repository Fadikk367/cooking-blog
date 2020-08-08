import React from 'react';
import { Switch, Route } from 'react-router-dom'

import { HomePgae, AboutPage, AdminPage, ErrorPage } from '../../pages';
import { PageWrapper } from './Page.css';


const Page = () => {
  return(
    <PageWrapper>
      <Switch>
        <Route path='/' exact component={HomePgae}/>
        <Route path='/categories' exact component={AboutPage}/>
        <Route path='/tips' exact component={AboutPage}/>
        <Route path='/about' exact component={AboutPage}/>
        <Route path='/admin' exact component={AdminPage}/>
        <Route component={ErrorPage}/>
      </Switch>
    </PageWrapper>
  );
}


export default Page;