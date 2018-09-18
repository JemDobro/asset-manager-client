import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
// import RequestFormPage from './request-form-page';

export class Dashboard extends React.Component {
  componentDidMount() {
    console.log(this.props);
    return (
    this.props.dispatch(fetchProtectedData()));
  }

  render() {
    return (
      <div className="dashboard">
        <h2>{`Welcome ${this.props.firstName}!`}</h2>
        <button><Link to="/requestForm">Request Assets</Link></button>
        <div>
          <h3>{`Your Dashboard includes these requests: ${this.props.protectedData}`}</h3>
          <p>Checked out: 2</p> 
            <ul>
              <li>Item 1</li><button>Renew</button>
              <li>Item 2</li><button>Renew</button>
            </ul>
          <p>Pending: 1</p>
            <ul>
            {(this.props.protectedData.filter(req => req.status === 'Pending')).map( req => <li>{req.type} - {req.model} - {req.version} </li>)}
              <li>Pending Item 1</li>
              <button>Edit</button><button>Cancel</button>
            </ul>
          <p>Cancelled: 1</p>
            <ul>
              <li>Cancelled Item</li><button>Resubmit</button>
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