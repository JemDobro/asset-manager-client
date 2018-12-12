import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Dashboard from './dashboard';
import '../styles/landingPage.css';

export function LandingPage(props) {
  if (props.loggedIn) {
    return <Dashboard protectedData={[]}/>;
}
  return (
    <main className="landing-page-main" role="main">
      <section className="intro">
        <h2>Welcome!</h2>
        <h3>Asset Inventory Manager is your tool for requesting and managing any hardware needed to complete your work.</h3>
      </section>
      <section className="landing-page-section">
        <h3 className="blue">Registration</h3>
        <p>Your first step is to <Link className="bold" to="/createAccount">create an account</Link>.</p>
        <p>You may also demo the app by <Link className="bold" to="/login">logging in</Link> and using:</p>
        <p>Username: sallysomeone</p>
        <p>Password: 666666</p><br></br>
        <p>Upon successful login, you will arrive at your dashboard, where you will be able to:</p>
          <ul className="li-bullets">
            <li>Request assets</li>
            <li>See the assets for which you are currently responsible/own</li>
            <li>See the status of any assets you have requested</li>
            <li>Cancel any pending requests if you no longer need the asset</li>
            <li>Resubmit any cancelled requests</li>
          </ul>
      </section>
      <section className="landing-page-section">
        <h3 className="blue">Requesting Assets</h3>
        <p>When requesting assets, you will need to provide:</p>
          <ul className="li-bullets">
            <li>Type of Asset (e.g., iPad)</li>
            <li>Model of Asset (e.g., Pro)</li>
            <li>Version of Asset (e.g., 11-in)</li>
            <li>Quantity</li>
            <li>Checkout Start Date</li>
            <li>Checkout End Date</li>
          </ul>
      </section>
    </main>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);