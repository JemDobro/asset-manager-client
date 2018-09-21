import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import './request-form-page.css';

import RequestForm from './request-form';

export function RequestFormPage(props) {
    return (
        <div className="home">
            <h2>{`What would you like to request ${props.firstName}?`}</h2>
            <RequestForm />
            <p><Link to="/">Return to Dashboard</Link></p>
        </div>
    );
}

const mapStateToProps = state => {
  const {currentUser} = state.auth;
  return {
    username: state.auth.currentUser.username,
    firstName: `${currentUser.firstName}`,
    protectedData: state.protectedData.data
  };
};

export default requiresLogin()(connect(mapStateToProps)(RequestFormPage));

