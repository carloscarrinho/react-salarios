import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Home from './pages/Home';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Home exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}