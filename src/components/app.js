import React from 'react'; 
import {Route, withRouter} from 'react-router-dom';
import NavBar from './nav-bar';
import HeaderBar from './header-bar';
import LandingPage from './landing-page';
import CreateAccountPage from './createAccount-page';
import LoginFormPage from './login-form-page';
import RequestFormPage from './request-form-page';
import LogoutPage from './logout-page';
import Footer from './footer';

export class App extends React.Component {
  render(){
    return (
      <div className="app">
        <NavBar />
        <HeaderBar />
        <Route path="/" exact component={LandingPage} />
        <Route path="/createAccount" exact component={CreateAccountPage} />
        <Route path="/login" exact component={LoginFormPage} />
        <Route path="/requestForm" exact component={RequestFormPage} />
        <Route path="/logout" exact component={LogoutPage} />
        <Footer />
      </div>
    );
  }}


// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(App);
