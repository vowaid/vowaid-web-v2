import About from '../pages/About/About';
import Faqs from '../pages/About/Faqs';
import Partners from '../pages/About/Partners';
import Team from '../pages/About/Team/Team';
import TeamMember from '../pages/About/Team/Member';

// import Events from '../pages/Events';

// import Privacy from '../pages/Legal/Privacy';
// import Terms from '../pages/Legal/Terms';

import Services from '../pages/Services/Services';
import Swc from '../pages/Services/Swc';
import Twc from '../pages/Services/Twc';

import Contact from '../pages/Contact';
// import Donate from '../pages/Donate';
import Landing from '../pages/Landing';
import Auth from '../pages/Auth/Auth';

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

export default routes;