import React from 'react';
import {reduxForm, Field, focus} from 'redux-form';
import Input from './input';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';

export class LoginForm extends React.Component {
  onSubmit(values) {
    return this.props.dispatch(login(values.username, values.password));
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
    return (
      <form
        className="login-form"
        onSubmit={this.props.handleSubmit(values =>
          this.onSubmit(values)
        )}>
        {error}
        <label htmlFor="username">Username</label>
        <Field 
          name="username" 
          type="text" 
          id="username"
          component={Input} 
          validate={[required, nonEmpty]}
        />
        <label htmlFor="password">Password</label>
        <Field 
          name="password" 
          type="password" 
          id="password"
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
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);