import React from 'react';
import { Switch, Route } from 'react-router-dom'

import { HomePgae, AboutPage, AdminPage, ErrorPage, CreateRecipePage, EditRecipePage, ManageRecipesPage, LoginPage } from '../../pages';
import { PageWrapper } from './Page.css';


const Page = () => {
  return(
    <PageWrapper>
      <Switch>
        <Route path='/' exact component={HomePgae}/>
        <Route path='/categories' exact component={AboutPage}/>
        <Route path='/tips' exact component={AboutPage}/>
        <Route path='/about' exact component={AboutPage}/>
        <Route path='/login' exact component={LoginPage}/>
        <Route path='/admin' exact component={AdminPage}/>
        <Route path='/admin/recipes/new'  exact component={CreateRecipePage}/>
        <Route path='/admin/recipes/:redipeId/edit' exact component={EditRecipePage}/>
        <Route path='/admin/recipes' component={ManageRecipesPage}/>
        <Route component={ErrorPage}/>
      </Switch>
    </PageWrapper>
  );
}


export default Page;