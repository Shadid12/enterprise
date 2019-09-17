import React from 'react';
import { HashRouter as _Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import SingupPage from '../../Pages/Signup';
import OnboardingPageWrapped from "../../Pages/Onboard/OnboardingPage";
import SignInPage from '../../Pages/SignIn';
import LandingPage from '../../Pages/LandingPage/LandingPage';
import { AuthUserContext } from '../Session';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/signup' component={SingupPage} />
        <Route path='/signin' component={SignInPage} />
        <AuthUserContext.Provider value={{}}>
          <Route path='/onboard' component={OnboardingPageWrapped} />
        </AuthUserContext.Provider>
      </Switch>
    </BrowserRouter>
  );
}