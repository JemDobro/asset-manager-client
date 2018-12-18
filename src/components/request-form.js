import React from 'react';
import {reduxForm, Field, focus} from 'redux-form';
import Input from './input';
import {required, nonEmpty} from '../validators';
import {fetchRequests, createRequest, toggleRequestingAssets} from '../actions/requests';
import '../styles/requestForm.css';

export class RequestForm extends React.Component {
  onSubmit(values) {
    const {type, model, version, quantity, start, end} = values;
    const request = {type, model, version, quantity, start, end};
    return this.props
      .dispatch(createRequest(request))
      .then(() => this.props.dispatch(fetchRequests()));
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
    return (
      <form 
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        {error}
        {success}
        <label htmlFor="type">Type</label>
        <Field 
          name="type" 
          type="text" 
          component={Input} 
          id="type" 
          validate={[required, nonEmpty]} 
        />
        <label htmlFor="model">Model</label>
        <Field 
          name="model" 
          type="text" 
          component={Input} 
          id="model" 
          validate={[required, nonEmpty]} 
        />
        <label htmlFor="version">Version</label>
        <Field 
          name="version" 
          type="text" 
          component={Input} 
          id="version" 
        />
        <label htmlFor="quantity">Quantity</label>
        <Field 
          name="quantity" 
          id="quantity" 
          type="number" 
          component={Input} 
          validate={[required, nonEmpty]}
        />
        <h3 className="dates">Checkout Period:</h3>
        <label htmlFor="start">Start Date</label>
        <Field 
          name="start" 
          id="start" 
          type="date" 
          component={Input} 
          validate={[required, nonEmpty]}
        />
        <label htmlFor="end">End Date</label>
        <Field 
          name="end" 
          id="end" 
          type="date" 
          component={Input} 
          validate={[required, nonEmpty]}
        />
        <button 
          type="submit" 
          disabled={this.props.pristine || this.props.submitting}>
          Submit
        </button>
        <button className="cancel-btn"
          onClick={() => this.props.dispatch(toggleRequestingAssets())}>
          Cancel
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'request',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('request', Object.keys(errors)[0]))
})(RequestForm);