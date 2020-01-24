import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';

const NotFound = () => <div>Not Found</div>;

const App = (props) => {
  return (
    <Router>
      <header>VOWAID</header>

      <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>

      <footer>&copy;2020</footer>
    </Router>
  );
};



export default App;
