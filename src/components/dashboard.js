import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchRequests, cancelRequest, resubmitRequest, toggleRequestingAssets} from '../actions/requests';
import RequestFormPage from './request-form-page';
import moment from 'moment';
import '../styles/dashboard.css';

export class Dashboard extends React.Component {
  componentDidMount() {
    return (
    this.props.dispatch(fetchRequests()));    
  }

  render() {
    function format_date(datestr) {
      return moment.utc(datestr).format('MMMM Do YYYY');
    }  

    let intro;
    if (this.props.requesting) {
      intro = (
        <section className="intro">
          <RequestFormPage />
          <h2>{`Your current dashboard:`}</h2>
        </section>
      )
    } else {
      intro = (
        <section className="intro">
          <h2>{`Welcome to your dashboard ${this.props.firstName}!`}</h2>
          <button className="request-assets-btn" onClick={() => this.props.dispatch(toggleRequestingAssets())}>Request Assets</button>
        </section>
      )
    }

    return (
      <main className="dashboard" role="main">
        {intro}
        <section className="status">
          <h3>{`Checked Out: ${(this.props.requests.filter(req => req.status === 'checked out')).length}`}</h3>
            <ul>
            {(this.props.requests.filter(req => req.status === 'checked out')).map( req => 
            <li key={req.id}>{req.type} - {req.model} - {req.version}<br></br>
            {`Quantity: ${req.quantity}`}<br></br>
            {`Date Due: ${format_date(req.end)}`} </li>)}
            </ul>
        </section>
        <section className="status">
          <h3>{`Pending: ${(this.props.requests.filter(req => req.status === 'pending')).length}`}</h3>
            <ul className='with-btns'>
            {(this.props.requests.filter(req => req.status === 'pending')).map( req => 
            <li className='with-btns' key={req.id}>{req.type} - {req.model} - {req.version}<br></br>
            {`Quantity: ${req.quantity}`}<br></br>
            {`Start Date: ${format_date(req.start)}`}<br></br>
            {`End Date: ${format_date(req.end)}`}<br></br>
            <button 
              className="request-assets-btn-li" 
              onClick={() => this.props.dispatch(cancelRequest(req.id))
                .then(() => this.props.dispatch(fetchRequests()))}>
              Cancel</button></li>)}
            </ul>
        </section>
        <section className="status">
          <h3>{`Cancelled: ${(this.props.requests.filter(req => req.status === 'cancelled')).length}`}</h3>
            <ul className='with-btns'>
            {(this.props.requests.filter(req => req.status === 'cancelled')).map( req => 
            <li className='with-btns' key={req.id}>{req.type} - {req.model} - {req.version}<br></br>
            {`Quantity: ${req.quantity}`}<br></br>
            {`Start Date: ${format_date(req.start)}`}<br></br>
            {`End Date: ${format_date(req.end)}`}<br></br>
            <button 
            className="request-assets-btn-li" 
            onClick={() => this.props.dispatch(resubmitRequest(req.id))
              .then(() => this.props.dispatch(fetchRequests()))}>
              Resubmit</button></li>)}
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
    requests: state.requests.data,
    requesting: state.requests.requesting
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));