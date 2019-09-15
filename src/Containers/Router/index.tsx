import React from 'react';
import { HashRouter as _Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import SingupPage from '../../Pages/Signup';
import OnboardingPageWrapped from "../../Pages/Onboard/OnboardingPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={SingupPage} />
        <Route path='/onboard' component={OnboardingPageWrapped} />
      </Switch>
    </BrowserRouter>
  );
}