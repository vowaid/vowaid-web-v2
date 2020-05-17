/**
 * The main application where the theme and router are instantiated.
 *
 * TODO: Add restored scroll.
 * TODO: Add animated transition between pages.
 */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import './styles';

import { Page } from './components';
import { NotFound } from './pages';

import routes from './routes/routes';

/**
 * A special wrapper for <Route> that knows how to handle "sub"-routes by passing them in a `routes`
 * prop to the component it renders.
 */
const RouteWithSubRoutes = (route) => (
  <Page>
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  </Page>
);

const App = (props) => (
  <Router>
    <Switch>
      {routes.map((route) => (
        <RouteWithSubRoutes key={uuid()} {...route} />
      ))}

      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </Router>
);

export default App;
