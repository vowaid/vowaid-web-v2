/**
 * The main application where the theme and router are instantiated.
 *
 * TODO: Add restored scroll.
 * TODO: Add animated transition between pages.
 */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import uuid from 'uuid/v4';
import styled from 'styled-components';

import './styles';

import { Header, Footer, Wrapper } from './components';

import NotFound from './pages/NotFound';

import ThemeProvider from './theme/ThemeProvider';

import { ScrollToTop } from './utils/routerUtils';

import routes from './routes/routes';

const FlexWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  margin: 0;
  min-height: 100vh;
  padding: 0;

  > * {
    flex: 1;
  }
`;

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
      <FlexWrapper>
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
      </FlexWrapper>
    </Router>
  </ThemeProvider>
);

export default App;
