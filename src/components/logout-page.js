import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

export function LogoutPage(props) {
    // If we are logged in redirect to the user's dashboard
    if (props.loggedIn) {
      return <Redirect to="/" />;
  }
    return (
      <main role="main">
        <section className="intro">
          <h2>You have successfully logged out.  Have a great day!</h2>
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

export default connect(mapStateToProps)(LogoutPage);