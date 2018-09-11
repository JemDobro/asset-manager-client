import React from 'react';
import {reduxForm, Field} from 'redux-form';
import Input from './input';
import {required, nonEmpty} from '../validators';

export class LoginForm extends React.Component {
  render() {
    return (
      <form
        className="login-form"
        onSubmit={this.props.handleSubmit(values =>
          this.onSubmit(values)
        )}>
        <label htmlFor="username">Username</label>
        <Field 
          name="username" 
          type="text" 
          component={Input} 
          validate={[required, nonEmpty]}
        />
        <label htmlFor="password">Password</label>
        <Field 
          name="password" 
          type="text" 
          component={Input} 
          validate={[required, nonEmpty]} 
        />
        <button disabled={this.props.pristine || this.props.submitting}>
          Log in
        </button>
    </form>
    );
  }
}

export default reduxForm({
  form: 'login'
})(LoginForm);