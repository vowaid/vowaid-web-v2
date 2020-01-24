import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import uuid from 'uuid/v4';

import './styles';

import Header from './components/layout/Header/Header';

import Landing from './pages/Landing';
import NotFound from './pages/NotFound';

const routes = [{
  exact: true,
  path: '/',
  component: Landing,
}];

/**
 * A special wrapper for <Route> that knows how to handle "sub"-routes by passing them in a `routes`
 * prop to the component it renders.
 */
const RouteWithSubRoutes = (route) => {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

const App = (props) => {
  return (
    <Router>
      <Header />

      <Switch>
        {routes.map((route) => (
          <RouteWithSubRoutes key={uuid()} {...route} />
        ))}

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>

      <footer>&copy;2020</footer>
    </Router>
  );
};



export default App;
