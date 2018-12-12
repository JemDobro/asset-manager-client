import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import '../styles/request-form-page.css';

import RequestForm from './request-form';

export function RequestFormPage(props) {
    return (
        <main className="req-form-pg" role="main">
            <section className="intro-req-form">
                <h2>{`What would you like to request ${props.firstName}?`}</h2>
            </section>
            <section>
                <RequestForm />
            </section>
        </main>
    );
}

const mapStateToProps = state => {
  const {currentUser} = state.auth;
  return {
    username: state.auth.currentUser.username,
    firstName: `${currentUser.firstName}`
  };
};

export default requiresLogin()(connect(mapStateToProps)(RequestFormPage));

