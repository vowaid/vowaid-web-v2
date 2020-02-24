import React from 'react';
import { Route } from 'react-router';

// Same as /src/routes/routes just without the components
const routePaths = [{
  exact: true,
  path: '/',
}, {
  exact: true,
  path: '/about',
}, {
  exact: true,
  path: '/about/faqs',
}, {
  exact: true,
  path: '/about/team',
}, {
  exact: true,
  path: '/about/team/member',
}, {
  exact: true,
  path: '/about/partners',
}, {
  exact: true,
  path: '/services',
}, {
  exact: true,
  path: '/services/twc',
}, {
  exact: true,
  path: '/services/swc',
}, {
  exact: true,
  path: '/contact',
}, {
  path: '/signin',
}, {
  path: '/signup',
}];

const SitemapRoutes = (props) => (
  <Route>
    {routePaths.map((route) => (
      <Route path={route.path} exact={exact} />
    ))}
  </Route>
)

export default SitemapRoutes;
