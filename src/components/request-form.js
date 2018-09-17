import React from 'react';
import {reduxForm, Field} from 'redux-form';
import Input from './input';
// import {required, nonEmpty} from '../validators';
//NEED TO LINK TO REQUIRES LOG IN--I CAN STILL ACCESS EVEN IF NOT LOGGED IN

export class RequestForm extends React.Component {
  onSubmit(values) {
    console.log(values);
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        <label htmlFor="type">Type</label>
        <Field 
          name="type" 
          type="text" 
          component={Input} 
          id="type" 
          // validate={[required, nonEmpty]} 
        />
        <label htmlFor="model">Model</label>
        <Field 
          name="model" 
          type="text" 
          component={Input} 
          id="model" 
          // validate={[required, nonEmpty]} 
        />
        <label htmlFor="version">Version</label>
        <Field 
          name="version" 
          type="text" 
          component={Input} 
          id="version" 
          // validate={[nonEmpty]}
        />
        <label htmlFor="quantity">Quantity</label>
        <Field 
          name="quantity" 
          id="quantity" 
          type="number" 
          // value="0" 
          component={Input} 
          // validate={[required, nonEmpty]}
        />
        <h3>Checkout Period:</h3>
        <label htmlFor="start date">Start Date</label>
        <Field 
          name="start date" 
          id="start date" 
          type="date" 
          component={Input} 
          // validate={[required, nonEmpty]}
        />
        <label htmlFor="end date">End Date</label>
        <Field 
          name="end date" 
          id="end date" 
          type="date" 
          component={Input} 
          // validate={[required, nonEmpty]}
        />
        <button 
          type="submit" 
          disabled={this.props.pristine || this.props.submitting}>
          Submit
        </button>
      </form>
    );
  }
}


export default reduxForm({
  form: 'request'
})(RequestForm);