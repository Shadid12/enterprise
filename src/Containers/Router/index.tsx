import React from 'react';
import { HashRouter as _Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import SingupPage from '../../Pages/Signup';
import OnboardingPageWrapped from "../../Pages/Onboard/OnboardingPage";
import SignInPage from '../../Pages/SignIn';
import LandingPage from '../../Pages/LandingPage/LandingPage';
import { AuthUserContext } from '../Session';
import Navigation from '../../Containers/Navigation';
import ClientPage from '../../Pages/Clients';
import SchedulePage from '../../Pages/Scheduler/index';
import ProfilePage from '../../Pages/Profile/index';
import { SnackbarProvider } from 'notistack';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/signup' component={SingupPage} />
        <Route path='/signin' component={SignInPage} />
        <AuthUserContext.Provider value={{}}>
          <SnackbarProvider maxSnack={3}>
            <Navigation />
          </SnackbarProvider>
          <Route path='/onboard' component={OnboardingPageWrapped} />
          <Route path='/clients' component={ClientPage} />
          <Route path='/schedule/:id' component={SchedulePage} />
          <Route path='/profile/:id' component={ProfilePage} />
        </AuthUserContext.Provider>
      </Switch>
    </BrowserRouter>
  );
}