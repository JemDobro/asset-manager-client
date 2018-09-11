import React from 'react';
import {connect} from 'react-redux';
// import {Link} from 'react-router-dom';

import LoginForm from './login-form';

export default function LandingPage(props) {
  return (
    <div classname="home">
      <h2>Please log in or</h2>
      <h2>Create an account</h2>
      <LoginForm />
    </div>
  );
}

// const mapStateToProps = state => ({
//   loggedIn: state.auth.currentUser !== null
// });

// export default connect(mapStateToProps)(LandingPage);