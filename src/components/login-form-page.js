import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './login-form';

export function LoginFormPage(props) {
    // If we are logged in redirect to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/" />;
    }
    return (
      <main>
        <section className="intro">
          <h2>Please log in</h2>
        </section>
        <section>
          <LoginForm />
        </section>
        <section class="text-center">
          <p>Don't have an account? Go to the <Link to="/createAccount">registration page</Link></p>
          <p>Or login with this demo user:</p>
          <p>Username: sallysomeone</p>
          <p>Password: 666666</p>
        </section>
      </main>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginFormPage);