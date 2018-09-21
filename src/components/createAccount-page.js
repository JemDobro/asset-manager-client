import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import CreateAccountForm from './createAccount-form';

export function CreateAccountPage(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/" />;
    }
    return (
        <div className="home">
            <h2>Please create an account</h2>
            <CreateAccountForm />
            <Link to="/">Cancel</Link>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(CreateAccountPage);