import React from 'react'; 
import {Route, withRouter} from 'react-router-dom';
import HeaderBar from './header-bar';
import LandingPage from './landing-page';
import CreateAccountPage from './createAccount-page';
import RequestFormPage from './request-form-page';

export class App extends React.Component {
  render(){
    return (
      <div className="app">
        <HeaderBar />
        <Route path="/" exact component={LandingPage} />
        <Route path="/createAccount" exact component={CreateAccountPage} />
        <Route path="/requestForm" exact component={RequestFormPage} />
      </div>
    );
  }
}


// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(App);
