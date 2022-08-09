import React, { Component } from 'react';
import { Route } from 'react-router';
import  Layout  from './Components/Layout';
import  Home  from './Pages/Home';
import ViewBlog from './Pages/ViewBlog';
import MostRecent from './Pages/MostRecent';
import Admin from './Pages/Admin';


export default class App extends Component {

   render() {
    return (
      <Layout>
            <Route exact path='/' component={Home} />
            <Route exact path='/page/:page' component={Home} />
            <Route exact path='/viewblog/:id' component={ViewBlog} />
            <Route exact path='/mostrecent' component={MostRecent} /> 
            <Route exact path='/admin' component={Admin} />
       
      </Layout>
    );
  }
}
