import React from 'react';
import '../styles/headerBar.css';

export default class HeaderBar extends React.Component {
  
  render() {
    return (
      <div className="header-bar">
        <img className='header-bar-img' src='https://res.cloudinary.com/cozyspaces/image/upload/v1544465885/multi_ipad_dock.jpg' alt='multiple organized ipads' />
      </div>
    );
  }
}