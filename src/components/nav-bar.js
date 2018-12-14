import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {clearAuth} from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import '../styles/navBar.css';

export class NavBar extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }
  render() {
    let logInOutLink;
    if (this.props.loggedIn) {
      logInOutLink = (
        <ul className="full-nav-ul">
          <li onClick={() => this.logOut()}>
          <Link to="/logout">LOG OUT</Link>
          </li>
        </ul>
      );
    } else {
      logInOutLink = (
        <ul className="full-nav-ul">
          <li>
          <Link to="/login">LOGIN</Link>
          </li>
          <li>
            <Link to="/createAccount">REGISTER</Link>
          </li>
        </ul>
      )};

    return (
      <nav role="navigation">
        <div className="logo">
          <img className="icon" src="https://res.cloudinary.com/cozyspaces/image/upload/c_scale,h_55/v1544484708/aim-icon.png" alt="Asset Inventory Manager Icon" />
          <Link to="/" className='logo'>Asset Inventory Manager</Link>
        </div>
        {logInOutLink}
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(NavBar);