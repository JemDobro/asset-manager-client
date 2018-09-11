import React from 'react';
import {reduxForm, Field} from 'redux-form';
import Input from './input';
import {required, nonEmpty, isTrimmed, length, matches} from '../validators';
const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password');

export class CreateAccountForm extends React.Component {
  render() {
    return(
      <form className="createAccount-form">
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
        <label htmlFor="userName">Username</label>
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
          validate={[required, nonEmpty, isTrimmed]}
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
  form: 'createAccount'
})(CreateAccountForm);