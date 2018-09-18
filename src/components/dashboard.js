import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import moment from 'moment';
// import RequestFormPage from './request-form-page';

export class Dashboard extends React.Component {
  componentDidMount() {
    console.log(this.props);
    return (
    this.props.dispatch(fetchProtectedData()));
  }

  render() {
    function format_date(datestr) {
      return moment(datestr).format('MMMM Do YYYY');
    }  

    return (
      <div className="dashboard">
        <h2>{`Welcome ${this.props.firstName}!`}</h2>
        <button><Link to="/requestForm">Request Assets</Link></button>
        <div>
          <h3>Your Dashboard:</h3>
          <p>{`Checked Out: ${(this.props.protectedData.filter(req => req.status === 'checked out')).length}`}</p>
            <ul>
            {(this.props.protectedData.filter(req => req.status === 'checked out')).map( req => 
            <li key={req.id}>{req.type} - {req.model} - {req.version}<br></br>
            {`Quantity: ${req.quantity}`}<br></br>
            {`Date Due: ${format_date(req.end)}`} <button>Renew</button></li>)}
            </ul>
          <p>{`Pending: ${(this.props.protectedData.filter(req => req.status === 'pending')).length}`}</p>
            <ul>
            {(this.props.protectedData.filter(req => req.status === 'pending')).map( req => 
            <li key={req.id}>{req.type} - {req.model} - {req.version}<br></br>
            {`Quantity: ${req.quantity}`}<br></br>
            {`Start Date: ${format_date(req.start)}`}<br></br>
            {`End Date: ${format_date(req.end)}`}<br></br>
            <button>Edit</button><button>Cancel</button></li>)}
            </ul>
          <p>{`Cancelled: ${(this.props.protectedData.filter(req => req.status === 'cancelled')).length}`}</p>
            <ul>
            {(this.props.protectedData.filter(req => req.status === 'cancelled')).map( req => 
            <li key={req.id}>{req.type} - {req.model} - {req.version}<br></br>
            {`Quantity: ${req.quantity}`}<br></br>
            {`Start Date: ${format_date(req.start)}`}<br></br>
            {`End Date: ${format_date(req.end)}`}<br></br>
            <button>Renew</button></li>)}
            </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {currentUser} = state.auth;
  return {
    username: state.auth.currentUser.username,
    firstName: `${currentUser.firstName}`,
    protectedData: state.protectedData.data
  };
};



export default requiresLogin()(connect(mapStateToProps)(Dashboard));