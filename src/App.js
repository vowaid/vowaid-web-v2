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

import About from './pages/About/About';
import Faqs from './pages/About/Faqs';
import Partners from './pages/About/Partners';
import Team from './pages/About/Team/Team';
import TeamMember from './pages/About/Team/Member';

// import Events from './pages/Events';

// import Privacy from './pages/Legal/Privacy';
// import Terms from './pages/Legal/Terms';

import Services from './pages/Services/Services';
import Swc from './pages/Services/Swc';
import Twc from './pages/Services/Twc';

import Contact from './pages/Contact';
// import Donate from './pages/Donate';
import Landing from './pages/Landing';
import NotFound from './pages/NotFound';
import Auth from './pages/Auth/Auth';

import ThemeProvider from './theme/ThemeProvider';

import { ScrollToTop } from './utils/routerUtils';

const routes = [{
  exact: true,
  path: '/',
  component: Landing,
}, {
  exact: true,
  path: '/about',
  component: About,
}, {
  exact: true,
  path: '/about/faqs',
  component: Faqs,
}, {
  exact: true,
  path: '/about/team',
  component: Team,
}, {
  exact: true,
  path: '/about/team/member',
  component: TeamMember,
}, {
  exact: true,
  path: '/about/partners',
  component: Partners,
}, {
  exact: true,
  path: '/services',
  component: Services,
}, {
  exact: true,
  path: '/services/twc',
  component: Twc,
}, {
  exact: true,
  path: '/services/swc',
  component: Swc,
}, {
  exact: true,
  path: '/contact',
  component: Contact,
}, {
  path: '/signin',
  component: Auth,
}, {
  path: '/signup',
  component: Auth,
}];

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
