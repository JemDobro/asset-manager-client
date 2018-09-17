import React from 'react'; 
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';
import HeaderBar from './header-bar';
import LandingPage from './landing-page';
import CreateAccountPage from './createAccount-page';
import RequestForm from './request-form';

export class App extends React.Component {
  render(){
    return (
      <div className="app">
        <HeaderBar />
        <Route path="/" exact component={LandingPage} />
        <Route path="/createAccount" exact component={CreateAccountPage} />
        <Route path="/requestForm" exact component={RequestForm} />
      </div>
    );
  }
}


// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(App);
