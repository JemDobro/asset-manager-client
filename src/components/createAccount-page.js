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
        <main role="main">
            <section className="intro">
                <h2>Please create an account</h2>
            </section>
            <section>
                <CreateAccountForm />
            </section>
            <section className="text-center">
                <p>Already have an account? Go to the <Link to="/login">login page</Link></p>
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

export default connect(mapStateToProps)(CreateAccountPage);
