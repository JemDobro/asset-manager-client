import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Dashboard from './dashboard';
import LoginForm from './login-form';

export function LandingPage(props) {
  if (props.loggedIn) {
    return <Dashboard protectedData={[]}/>;
}
  return (
    <div className="home">
      <h2>Please log in or</h2>
      <h3><Link to="/createAccount">Create an account</Link></h3>
      <LoginForm />
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);