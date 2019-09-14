import React, { Fragment } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import SingupPage from '../../Pages/Signup';

export default function AppRouter() {
    return (
      <Router>
        <Fragment>
          <Route exact path='/' component={SingupPage} />
        </Fragment>
      </Router>
    );
}