import React from 'react';
import { HashRouter as _Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import SingupPage from '../../Pages/Signup';
import OnboardingPageWrapped from "../../Pages/Onboard/OnboardingPage";
import SignInPage from '../../Pages/SignIn';
import LandingPage from '../../Pages/LandingPage/LandingPage';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/signup' component={SingupPage} />
        <Route path='/onboard' component={OnboardingPageWrapped} />
        <Route path='/signin' component={SignInPage} />
      </Switch>
    </BrowserRouter>
  );
}