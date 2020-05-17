import {
  // Auth,
  // Events,
  // Privacy,
  // Terms,
  About,
  Contact,
  Donate,
  Faqs,
  Landing,
  Member,
  Partners,
  Services,
  Store,
  Swc,
  Team,
  Twc,
} from '../pages';

/**
 * TODO:
 *  - Add Auth
{
  path: '/signin',
  component: Auth,
}, {
  path: '/signup',
  component: Auth,
}
 *  - Add Legal Pages
{
  path: '/legal/privacy',
  component: Privacy,
}, {
  path: '/legal/terms',
  component: Terms,
}
 */
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
  component: Member,
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
  path: '/donate',
  component: Donate,
}, {
  path: '/store',
  component: Store,
}];

export default routes;
