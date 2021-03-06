import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './login-form';

export function LoginFormPage(props) {
  if (props.loggedIn) {
    return <Redirect to="/" />;
  }
  return (
    <main role="main">
      <section className="intro">
        <h2>Please log in</h2>
      </section>
      <section>
        <LoginForm />
      </section>
      <section className="text-center">
        <p>Don't have an account? Go to the <Link to="/createAccount">registration page</Link></p>
        <p>Or login with this demo user:</p>
        <p>Username: sallysomeone</p>
        <p>Password: 666666</p>
      </section>
      <section className="text-center">
        <p>Looking to get back to where you started?  Go to the <Link to="/">landing page</Link></p>
      </section>
    </main>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginFormPage);