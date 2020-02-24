/**
 * The main application where the theme and router are instantiated.
 *
 * TODO: Add restored scroll.
 * TODO: Add animated transition between pages.
 */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import uuid from 'uuid/v4';

import './styles';

import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';

import NotFound from './pages/NotFound';

import ThemeProvider from './theme/ThemeProvider';

import { ScrollToTop } from './utils/routerUtils';

import routes from './routes/routes';

/**
 * A special wrapper for <Route> that knows how to handle "sub"-routes by passing them in a `routes`
 * prop to the component it renders.
 */
const RouteWithSubRoutes = (route) => (
  <Route
    path={route.path}
    render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
    )}
  />
);

const App = (props) => (
  <ThemeProvider>
    <Router>
      <ScrollToTop />
      <Header />

      <Switch>
        {routes.map((route) => (
          <RouteWithSubRoutes key={uuid()} {...route} />
        ))}

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>

      <Footer />
    </Router>
  </ThemeProvider>
);

export default App;
