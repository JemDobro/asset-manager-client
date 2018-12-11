import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {toggleRequestingAssets} from '../actions/protected-data';
import '../styles/request-form-page.css';

import RequestForm from './request-form';

class RequestFormPage extends React.Component {
    render() {
        return (
            <main>
                <section className="intro">
                    <h2>{`What would you like to request ${this.props.firstName}?`}</h2>
                </section>
                <section>
                    <RequestForm />
                    <button onClick={() => this.props.dispatch(toggleRequestingAssets())}>Cancel</button>
                </section>
            </main>
        );
    }
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

