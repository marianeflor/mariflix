import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';

import Home from './pages/Home';
import VideoRegistration from './pages/register/Video';
import CategoryRegistration from './pages/register/Caregory';
import Page404 from './pages/Page404';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cadastro/video" component={VideoRegistration} />
      <Route path="/cadastro/categoria" component={CategoryRegistration} />
      <Route component={Page404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
