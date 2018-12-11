import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import requiresLogin from './requires-login';
import {fetchProtectedData, cancelRequest, resubmitRequest, toggleRequestingAssets} from '../actions/protected-data';
import RequestFormPage from './request-form-page';
import moment from 'moment';
import '../styles/dashboard.css';

export class Dashboard extends React.Component {
  componentDidMount() {
    return (
    this.props.dispatch(fetchProtectedData()));    
  }

  render() {
    function format_date(datestr) {
      return moment.utc(datestr).format('MMMM Do YYYY');
    }  

    let requestForm;
    if (this.props.requesting) {
      requestForm = (
        <RequestFormPage />
      );
    }

    return (
      <main className="dashboard">
        <section className="intro">
          <h2>{`Welcome to your dashboard ${this.props.firstName}!`}</h2>
          <button className="request-assets-btn" onClick={() => this.props.dispatch(toggleRequestingAssets())}>Request Assets</button>
          {requestForm}
        </section>
        <section className="status">
          <p>{`Checked Out: ${(this.props.protectedData.filter(req => req.status === 'checked out')).length}`}</p>
            <ul>
            {(this.props.protectedData.filter(req => req.status === 'checked out')).map( req => 
            <li key={req.id}>{req.type} - {req.model} - {req.version}<br></br>
            {`Quantity: ${req.quantity}`}<br></br>
            {`Date Due: ${format_date(req.end)}`} </li>)}
            </ul>
        </section>
        <section className="status">
          <p>{`Pending: ${(this.props.protectedData.filter(req => req.status === 'pending')).length}`}</p>
            <ul className='with-btns'>
            {(this.props.protectedData.filter(req => req.status === 'pending')).map( req => 
            <li className='with-btns' key={req.id}>{req.type} - {req.model} - {req.version}<br></br>
            {`Quantity: ${req.quantity}`}<br></br>
            {`Start Date: ${format_date(req.start)}`}<br></br>
            {`End Date: ${format_date(req.end)}`}<br></br>
            <button className="request-assets-btn" onClick={() => this.props.dispatch(cancelRequest(req.id))}>Cancel</button></li>)}
            </ul>
        </section>
        <section className="status">
          <p>{`Cancelled: ${(this.props.protectedData.filter(req => req.status === 'cancelled')).length}`}</p>
            <ul className='with-btns'>
            {(this.props.protectedData.filter(req => req.status === 'cancelled')).map( req => 
            <li className='with-btns' key={req.id}>{req.type} - {req.model} - {req.version}<br></br>
            {`Quantity: ${req.quantity}`}<br></br>
            {`Start Date: ${format_date(req.start)}`}<br></br>
            {`End Date: ${format_date(req.end)}`}<br></br>
            <button className="request-assets-btn" onClick={() => this.props.dispatch(resubmitRequest(req.id))}>Resubmit</button></li>)}
            </ul>
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
    protectedData: state.protectedData.data,
    requesting: state.protectedData.requesting
  };
};



export default requiresLogin()(connect(mapStateToProps)(Dashboard));