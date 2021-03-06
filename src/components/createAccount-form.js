import React from 'react';
import {reduxForm, Field, focus} from 'redux-form';
import {createAccount} from '../actions/registration';
import {login} from '../actions/auth';
import Input from './input';
import {required, nonEmpty, isTrimmed, length, matches} from '../validators';
const passwordLength = length({min: 6, max: 72});
const matchesPassword = matches('password');

export class CreateAccountForm extends React.Component {
  onSubmit(values) {
    const {firstName, lastName, username, badgeId, email, password} = values;
    const user = {firstName, lastName, username, badgeId, email, password};
    return this.props
      .dispatch(createAccount(user))
      .then(() => this.props.dispatch(login(username, password)));
  }
  render() {
    let error;
    if (this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}
        </div>
      );
    }
    let success;
    if (this.props.submitSucceeded) {
      success = (
        <div className="form-success" aria-live="polite">
          <p>Information submitted successfully</p>
        </div>
      )
    }
    return(
      <form 
        className="createAccount-form"
        onSubmit={this.props.handleSubmit(values =>
          this.onSubmit(values)
        )}>
        {error}
        {success}
        <label htmlFor="firstName">First Name</label>
        <Field 
          name="firstName" 
          type="text" 
          component={Input} 
          validate={[required, nonEmpty]}
        />
        <label htmlFor="lastName">Last Name</label>
        <Field 
          name="lastName" 
          type="text" 
          component={Input} 
          validate={[required, nonEmpty]}
        />
        <label htmlFor="username">Username</label>
        <Field 
          name="username" 
          type="text" 
          component={Input} 
          validate={[required, nonEmpty, isTrimmed]}
        />
        <label htmlFor="badgeId">Badge Id</label>
        <Field
          name="badgeId" 
          type="text" 
          component={Input} 
          validate={[required, nonEmpty]}
        />
        <label htmlFor="email">Email</label>
        <Field 
          name="email" 
          type="email" 
          component={Input} 
          validate={[required, nonEmpty]}
        />
        <label htmlFor="password">Password</label>
        <Field 
          name="password" 
          type="password" 
          component={Input} 
          validate={[required, passwordLength, isTrimmed]}
        />
        <label htmlFor="passwordConfirm">Confirm Password</label>
        <Field 
          name="passwordConfirm" 
          type="password" 
          component={Input} 
          validate={[required, nonEmpty, matchesPassword]}
        />
        <button
          type="submit"
          disabled={this.props.pristine || this.props.submitting}>
          Create Account
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'createAccount',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('createAccount', Object.keys(errors)[0]))
})(CreateAccountForm);